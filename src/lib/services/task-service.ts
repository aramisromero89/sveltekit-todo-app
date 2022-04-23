import { derived, get, writable } from "svelte/store";
import { user } from "./auth-service";
import { apiCall } from "../api/apollo-client";
import { taskCreate, taskList, type TaskListQuery, type TaskCreateMutation, taskUpdate, type TaskUpdateMutation, type TaskDeleteMutation, taskDelete } from "../api/generated-client";

export type Task = {
    id: string
    text: string
}

const _editingTaskId = writable<string>()
const _creatingTask = writable(false)
const _tasks = writable<Task[]>([])

export const tasks = derived(_tasks, (value) => {
    return [...value]
})
export const editingTaskId = derived(_editingTaskId, (value) => {
    return value
})

export const creatingTask = derived(_creatingTask, (value) => {
    return value
})

export function createTask() {
    _creatingTask.set(true)
    _editingTaskId.set(null)
}

export function editTask(id: string) {
    _creatingTask.set(false)
    _editingTaskId.set(id)
}

export function cancelEdition() {
    _creatingTask.set(false)
    _editingTaskId.set(null)
}


export async function reqTaskList() {
    _tasks.set([])
    let res = await apiCall<TaskListQuery>(taskList({}))
    if (!res.error) {
        let tasks: Task[] = res.result.viewer.user.tasks.edges.map(v => {
            return {
                id: v.node.id,
                text: v.node.text
            }

        })
        _tasks.set([...tasks])
    }
    cancelEdition()
}

export async function reqTaskCreate(text: string) {
    let logguedUser = get(user)
    let res = await apiCall<TaskCreateMutation>(taskCreate({
        variables: {
            userId: logguedUser.id,
            text: text
        }
    }))

    if (!res.error) {
        let tasks: Task[] = res.result.updateUser.user.tasks.edges.map(v => {
            return {
                id: v.node.id,
                text: v.node.text
            }

        })
        _tasks.set([...tasks])

        cancelEdition()
    }
}

export async function reqTaskUpdate(taskId: string, text: string) {
    let res = await apiCall<TaskUpdateMutation>(taskUpdate({
        variables: {
            taskId: taskId,
            text: text
        }
    }))

    if (!res.error) {
        let savedTasks = get(tasks)
        let taskData = res.result.updateTask.task
        _tasks.set(savedTasks.map(v => {
            if (v.id == taskId) {
                return {
                    id: taskData.id,
                    text: taskData.text
                }
            } else {
                return { ...v }
            }
        }))

        cancelEdition()
    }
}

export async function reqTaskDelete(taskId: string) {
    let res = await apiCall<TaskDeleteMutation>(taskDelete({
        variables: {
            taskId: taskId
        }
    }))

    if (!res.error) {
        let savedTasks = get(tasks)
        let taskData = res.result.deleteTask.task
        _tasks.set(savedTasks.filter(v => v.id != taskData.id))

        cancelEdition()
    }
}


