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
                <button className='modal__close-button' type='button' onClick={closeModal}></button>
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