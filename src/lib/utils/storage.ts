import { writable } from 'svelte-local-storage-store'
export const STORAGE_PREFIX = "svelte_todo_app_"

export default function <T>(name: string, initialValue: T) {
    return writable<T>(STORAGE_PREFIX+name,initialValue)
}

