// Universal modal functionality logic
import { useState } from 'react';

function useModal() {
    const [activeModal, setActiveModal] = useState("");

    function openModal(modalName) {
        // Gets passed the specific modal to open from higher up.
        setActiveModal(modalName)
    }

    function closeModal() {
        // Set it back to nuetral state.
    setActiveModal("");
    }

    function handleOffModalClick(event) {
        // This prevents event bubbling. It does this by checking if the element that started the event (event.target) is the same as the element the event listener carrying this method is attached to. If so it closes the modal, if not is does nothing.
        if (event.target === event.currentTarget) {
            closeModal();
        }
    }

    return { activeModal, openModal, closeModal, handleOffModalClick };
}

export default useModal;