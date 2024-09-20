# My React TypeScript Tailwind Project For SolidiThai Code Test

## Overview

This project is built using **React**, **TypeScript**, and **Tailwind CSS** to create a responsive and maintainable web application.

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Type-safe development experience for JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** >= 18.x
- **npm** or **yarn** for package management

## Installation

To get started, clone the repository and install the dependencies.

```bash
git clone https://github.com/Chalermkiatjs/code-test-solidi-thai.git
cd code-test-solidi-thai or your_folder_name
npm install 
# or 
yarn install 
```

## Running the project

To run the project in develop mode you have to run:

```bash
npm start 
# or 
yarn start 
```

Open http://localhost:3000 or http://localhost:your_custom_port to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

## Building for Production

To start builds app for production to the build file you have to run:

```bash
npm run build 
# or 
yarn build 
```

After build if you want to test build locally you have to install package like serve:

```bash
#install globally
npm install -g serve
# or 
yarn yarn global add serve
```

Then run this command to serve the build folder

```bash
serve -s build
```

This will host your React application at http://localhost:3000 or http://localhost:your_custom_port by default.
