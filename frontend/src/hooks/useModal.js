// Universal modal functionality logic

function closeModal() {
    // Basic closing of the modal.
}

function handleOffModalClick() {
    // Prevent bubbling by checking where click happenned.
}

//! isOpen goes in here too or no ???

//! I think so because closeModal and handleOffModalClick are really only
//! in charge of closing the modal if certain events fire, and they do that
//! by setting isOpen back to null or an empty string or whatever.

//! But how does it recieve or know about the close button, and the dark
//! Overlay so it can check to see if either are clicked so it can close??
// Answer - It doesnt, it just provides functions to the modal component
// that it can call. 
//! Then why not only create a close modal, and have that be called on the
//! various clicks?

