import type { Writable } from 'svelte/store';
import { localStorageStore } from '@brainandbones/skeleton';

export const storeTheme: Writable<Theme> = localStorageStore('storeTheme', 'Normal');
export const themes = [
    'Normal',
    'Effect',
    'Ritual',
    'Fusion',
    'Synchro',
    'Xyz',
    'Link',
    'Pendulum'
] as const;
export type Theme = typeof themes[number];
