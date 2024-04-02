chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    const inputField = document.querySelector('input[type="text"]'); // Adjust the selector as necessary
    if (inputField) {
        inputField.value = message.text;
        // If there's a specific way to submit the form (e.g., clicking a button), add that logic here
        // For example: document.querySelector('button[type="submit"]').click();
    }
});
