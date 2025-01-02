"use client";
import {useState} from "react";

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | ((val: T) => T)) => void] {
    const [state, setState] = useState<T>(() => {
        try {
            const value = typeof window !== "undefined" ? window.localStorage.getItem(key) : null;
            return value ? JSON.parse(value) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore = value instanceof Function ? value(state) : value;
            if (typeof window !== "undefined") {
            }
            setState(valueToStore);
        } catch (error) {
            console.log(error);
        }
    };

    return [state, setValue];
}

export default useLocalStorage;
