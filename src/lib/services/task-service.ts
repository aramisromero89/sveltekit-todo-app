import { derived, writable } from "svelte/store";
import storage from "../utils/storage";
import { apiCall } from "../api/apollo-client";

export type Task = {
    id: string
    text: string
}

const _tasks = storage<Task[]>("tasks", [])

export const user = derived(_tasks, (value) => {
    return [...value]
})


