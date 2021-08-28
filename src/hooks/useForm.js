import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [formValues, setValues] = useState(initialState);

    const formReset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({ target }) => {
        if (target.type !== "checkbox") {
            setValues({
                ...formValues,
                [target.name]: target.value
            })
        } else {
            setValues({
                ...formValues,
                [target.name]: target.checked
            })
        }
    }
    return [formValues, handleInputChange, formReset];
}