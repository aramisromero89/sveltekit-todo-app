import { writable } from "svelte/store";

export const SNACK_MSG = writable<string>(null)
export function showSnackbar(msg: string){
    SNACK_MSG.update((val)=> null)
    SNACK_MSG.update((val)=> msg)
    SNACK_MSG.update((val)=> null)
}