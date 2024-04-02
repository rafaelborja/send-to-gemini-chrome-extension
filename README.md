# Send to Gemini Chrome Extension

This Chrome extension allows users to send selected text to Google Gemini with just a right-click and a click on "Send to Gemini".

## Installation

1. Download and unzip the `SendToGemini.zip` file.
1. Open Chrome and navigate to `chrome://extensions/`.
1. Enable Developer Mode by toggling the switch at the top-right. 
1. Click on "Load unpacked" and select the unzipped extension folder.

## Build process

1. Clone this repository to your local machine.
1. Navigate to the project directory in a terminal.
1. Install webpack `npm install --save-dev webpack webpack-cli copy-webpack-plugin`
1. Run `npm install` to install the required dependencies.

## Building the Extension

To build the extension, run the following command in the project directory:

```bash
npm run build
```

## Usage

1. Select any text on a web page.
2. Right-click to open the context menu.
3. Click on "Send to Gemini".
4. The extension will find an open Gemini tab and send the text there, or open a new one if none exists.

## License

This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## Author

Rafael de Medeiros Borja Gomes - [rafaelborja](https://github.com/rafaelborja)
