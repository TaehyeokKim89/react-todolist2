import { useState } from 'react';

export function useInput(initialValue) {
    const [inputValue, setInputValue] = useState(initialValue);

    const onChange = (event) => {
        setInputValue(event.target.value);
    };

    return [inputValue, onChange, setInputValue];
}
