import "./ModalWithForm.css";

function ModalWithForm({
    children,
    title,
    name,
    buttonText,
    closeModal,
    handleOffModalClick,
    isOpen,
    handleSubmit,
}) {
    return (
        <div className={`modal ${isOpen && "modal__opened"}`} onClick={handleOffModalClick}>
            <div className='modal__container'>
                <button className='modal__close-button' type='button' onClick={closeModal}>                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <h3 className='modal__title'>
                    {title}
                </h3>
                <form className='modal__form' name={name} onSubmit={handleSubmit}>
                    {children}
                </form>
                <button className='modal__submit-button' type='submit'>
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

export default ModalWithForm;