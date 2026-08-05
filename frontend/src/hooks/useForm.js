// After i implement the form functionality itself
import { useState, useEffect } from "react";

// input state management: https://www.youtube.com/watch?v=IkMND33x0qQ
// How to submit those states: https://www.youtube.com/watch?v=pJiRj02PkJQ

function useForm(initialValues, prefillData = null) {
    const [values, setValues] = useState(() => prefillData || initialValues); //! Cant use useEffect cause i get an error about setting state syncronously so have to use this new method, but it doesnt update when prefillData changes

    //! Old method no longer working
    // useEffect(() => {
    //     if (prefillData) {
    //         setValues(prefillData);
    //     }
    // }, [prefillData])

    // Assign input to value of state variable.
    function handleChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        // console.log(`${name}: ${value}`);
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