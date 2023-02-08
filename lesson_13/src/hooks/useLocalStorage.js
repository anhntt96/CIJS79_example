import { useState, useEffect } from "react";

const useLocalStorage = (name) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(Number(localStorage.getItem(name)));
    }, [name]);

    useEffect(() => {
        localStorage.setItem(name, value);
    }, [value, name]);

    return [value, setValue];
};

export default useLocalStorage;