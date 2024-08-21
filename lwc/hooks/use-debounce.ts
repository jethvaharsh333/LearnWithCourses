import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay?:number): T {
    const [debounceValue, useDebounceValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {useDebounceValue(value)}, delay || 500);
        return () => clearTimeout(timer);
    }, [value, delay]);
    
    return debounceValue;
}