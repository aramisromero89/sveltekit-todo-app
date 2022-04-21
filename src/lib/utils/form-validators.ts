import type { Validator } from "svelte-forms"
export function customValidator(validator: Validator, errorMessage?: string) {
    return async (value: string) => {
        let out = await validator(value)
        return { valid: out.valid, name: errorMessage ? errorMessage : out.name };
    };
}