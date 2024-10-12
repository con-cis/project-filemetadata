# File Metadata Microservice

This is the boilerplate for the File Metadata Microservice project. Instructions for building your project can be found at https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice

Welcome to the File Metadata Microservice! This is a full-stack application written in Node.js that allows you to submit a form with a file upload. When you submit a file, you will receive information about the file, including its name, type, and size in bytes in the JSON response.

## Table of Contents

- [File Metadata Microservice](#file-metadata-microservice)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
    - [`config.yaml`](#configyaml)
    - [Environment Variables](#environment-variables)
    - [Example `.env` File](#example-env-file)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Disclaimer](#disclaimer)

## Introduction

The File Metadata Microservice is a simple yet powerful application that allows you to analyze uploaded files and retrieve metadata about them and store the files encrypted to a folder. It's built using Node.js and Express.js and is designed to be easy to use and integrate into other applications.

## Features

- Submit a form with a file upload.
- Receive JSON response containing the file's name, type, and size in bytes.
- Stores file encrypted to a folder

## Getting Started

To get started with the File Metadata Microservice, follow the steps below:

### Prerequisites

Before running the application, ensure you have the following prerequisites installed:

- Node.js: [Download Node.js](https://nodejs.org/)

## Installation

To install and set up the project, follow these steps:

1. Clone this repository: 
   git clone `https://github.com/con-cis/project-filemetadata-node.git`
2. Navigate to the project directory: `cd url-shortener`
3. Install dependencies: `npm install`
   
## Configuration

### `config.yaml`

The application uses a configuration file in the folder `src/config` named `config.yaml` to define various settings. Below are the available configuration options:

- **`allowedFileExtensions`**: An array of allowed file extensions for uploaded files.
  - Example: `[".jpg", ".png", ".pdf"]`

- **`allowedMimeTypes`**: An array of allowed MIME types for uploaded files.
  - Example: `["image/jpeg", "image/png", "application/pdf"]`

- **`uploadDirectory`**: The directory where uploaded files will be stored.
  - Example: `"./uploads"`

- **`port`**: The port on which the application will listen for incoming requests.
  - Example: `3000`

### Environment Variables

In addition to the `config.yaml` file, the application also relies on two 128-bit environment variables in the `.env` file:

- **`SALT_HFN`**: This variable is used for writing a hashed file name
  - Example: `your_salt_here`

- **`ENCRYPTION_KEY`**: This variable is used for encrypting and decrypting the uploaded file
  - Example: `your_encryption_key_here`

Make sure to set these environment variables with appropriate values.

You can also generate a new pair of 128-bit encryption keys if needed with `node run generate-keys` 

**Note:** Running this script will overwrite the current values of `SALT_HFN` and `ENCRYPTION_KEY`.

Remember to keep your encryption keys and salt secure and never share them publicly.

### Example `.env` File

You can create a `.env` file in the root of your project to set these environment variables. Here's an example `.env` file:

```env
SALT_HFN=your_salt_here
ENCRYPTION_KEY=your_encryption_key_here
```

## Usage

1. Access the Application: Open your web browser and navigate to the following URL:
`[http://localhost:3000]`
2. Upload a File: On the application's web page, you will find a form with a file input field. The input field should have the name attribute set to "upfile." Use this form to select a file for upload.
3. Submit the Form: After selecting a file, click the submit button to initiate the upload process.
4. Retrieve Metadata: Once the upload is complete, you will receive a JSON response containing metadata about the uploaded file. The response will include the following information:
- name: The name of the uploaded file.
- hfn: The hashed filename.
- type: The MIME type of the file.
- size: The size of the file in bytes.
5. Repeat as Needed: You can repeat this process as many times as you like, uploading different files to obtain their metadata.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes and commit them: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Create a pull request.

## License

This project is licensed under the [GNU GPLv3](LICENSE).

## Disclaimer

This project/app/tool is based on the freeCodeCamp community and platform, which is open source and available under the BSD-3 license. While this project utilizes freeCodeCamp's resources, it's important to note the following:

- This project is not officially endorsed by freeCodeCamp.
- The creators of this project do not represent freeCodeCamp itself.
- While most non-sensitive freeCodeCamp data is publicly available and can be used in accordance with the terms of the BSD-3 license, it's crucial to respect the privacy and terms of use of the freeCodeCamp community and platform.
- Any modifications, use of data, or interactions with the freeCodeCamp platform should be in compliance with the freeCodeCamp's terms of use and any relevant policies.

By using this project/app/tool, you acknowledge that it is not an official product of freeCodeCamp, and any support or issues related to this project should be directed to the project's maintainers, rather than the freeCodeCamp organization.

For more information about freeCodeCamp's terms of use and licensing, please refer to the [freeCodeCamp License](https://github.com/freeCodeCamp/freeCodeCamp/blob/main/LICENSE.md).
