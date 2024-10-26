# myFlix Client

A React-based front-end application for the myFlix project. This project uses Parcel as the bundler to handle JavaScript, SCSS, and other assets, making it easy to develop and build the application.

## Table of Contents
- [Project Overview](#project-overview)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing Dependencies](#installing-dependencies)
- [Configuration](#configuration)
  - [Setting up Parcel](#setting-up-parcel)
- [Running the Application](#running-the-application)
- [Building the Application](#building-the-application)
- [Folder Structure](#folder-structure)
- [License](#license)

## Project Overview
The **myFlix Client** is a user interface for the myFlix application, allowing users to browse movies, view details, and perform various interactions. It is developed using React and bundled with Parcel for optimized performance and ease of development.

## Getting Started

### Prerequisites
To run this project, you need to have the following software installed:
- **Node.js** (v22.10.0 or higher recommended)
- **npm** (Node Package Manager, comes with Node.js)
- **Git** (for cloning the repository and version control)

### Installing Dependencies
After cloning the repository, navigate to the project directory and install the dependencies:
```
git clone https://github.com/your-username/myFlix-client.git
cd myFlix-client
npm install
```

## Configuration

### Setting up Parcel
Parcel is used as the bundler for this project. It handles compiling JavaScript, SCSS, and other assets automatically.

1. **Install Parcel:**
   If you haven't already, install Parcel as a development dependency:
   ```
   npm install --save-dev parcel
   ```

2. **.gitignore Setup:** 
   Make sure you have the following entries in your .gitignore file to avoid committing unnecessary files:
   ```
   node_modules
   .parcel.cache
   dist
   .cache
   ```

## Running the Application

To start the development server and view the application in your browser:
```
parcel src/index.html
```

## Building the Application

To build the application for production, run:
```
parcel build src/index.html
```

# MyFlix Client

A React-based front-end application for the MyFlix project.

## Folder Structure

Here’s the structure of the **MyFlix-Client** project:

```
MyFlix-Client/
│
├── .parcel-cache/
├── dist/
├── node_modules/
├── src/
│   ├── components/
│   │   ├── MainView.jsx
│   │   ├── movie-card/
│   │   │   ├── MovieCard.jsx
│   │   │   └── MovieCard.scss
│   │   ├── movie-view/
│   │   │   ├── MovieView.jsx
│   │   │   └── MovieView.scss
│   ├── index.html
│   ├── index.jsx
│   ├── index.scss
│
├── .gitattributes
├── .gitignore
├── package-lock.json
├── package.json
├── README.md              
```

### Summary

By following these steps, your `README.md` file will display the folder structure clearly on GitHub, making it easier for others to understand your project's organization. Let me know if you need any more help!

