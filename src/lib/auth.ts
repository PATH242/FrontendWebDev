import { writable } from 'svelte/store';

export const isAuthenticated = writable(false);

export function initAuth() {
    isAuthenticated.set(true); // Set to true or false based on user authentication
}