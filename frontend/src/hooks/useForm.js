import { useState } from "react";

function useForm(initialValues, prefillData = null) {
    const [values, setValues] = useState(() => prefillData || initialValues); 

    // Assign input to value of state variable.
    function handleChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    // Reset form function to original states.
    function resetForm() {
        setValues(initialValues);
    }

    return {
        values,
        handleChange,
        resetForm,
    };
}

export default useForm;