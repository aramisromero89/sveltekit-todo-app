import { derived, get } from "svelte/store";
import storage from "../utils/storage";
import messages from "./messages";


export const locale = storage("language","en");
export const locales = Object.keys(messages);

function _translate(locale, key, vars) { 
  // Let's throw some errors if we're trying to use keys/locales that don't exist.
  // We could improve this by using Typescript and/or fallback values.  
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  // Grab the translation from the translations object.
  let text = messages[locale][key];

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  // Replace any passed in variables in the translation string.
  Object.keys(vars).map((k) => {
    const regex = new RegExp(`{{${k}}}`, "g");
    text = text.replace(regex, vars[k]);
  });

  return text;
}

export function translate(key, vars = {}){
  return _translate(get(locale),key,vars)
}

export const t = derived(locale, ($locale) => (key, vars = {}) =>
  _translate($locale, key, vars)
);