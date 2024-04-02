function insertTextAndSubmit(text) {
    const editorDiv = document.querySelector('div.ql-editor.textarea');
    if (editorDiv) {
        // Clear existing content
        editorDiv.innerHTML = '';
        // Insert new text as paragraph
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        editorDiv.appendChild(paragraph);

        // Focus the editor and place the cursor at the end of the text
        editorDiv.focus();
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(editorDiv);
        range.collapse(false);
        sel.removeAllRanges();
        sel.addRange(range);

        // Simulate the 'input' event to ensure any handlers attached to input changes are triggered
        const event = new Event('input', {
            bubbles: true,
            cancelable: true,
        });
        editorDiv.dispatchEvent(event);
    }

    // Delay clicking the submit button to ensure the input event has been processed
    setTimeout(() => {
        const submitButton = document.querySelector('button.send-button');
        if (submitButton) {
            submitButton.click();
        }
    }, 500); // Adjust delay as needed
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // Document is already ready to go
        insertTextAndSubmit(message.text);
    } else {
        // Wait for the page to be fully loaded
        window.addEventListener('DOMContentLoaded', (event) => {
            insertTextAndSubmit(message.text);
        });
    }
});