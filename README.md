# myFlix Client

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Building for Production](#building-for-production)
- [Project Dependencies](#project-dependencies)
- [License](#license)
- [Contribution](#contribution)
- [Contact](#contact)

## Overview
MyFlix-Client is a React-based single-page application (SPA) that displays a list of movies. Users can click on any movie to see more details and navigate back to the list. It is part of the myFlix project, which aims to showcase a movie database app.

## Features
- Display a list of movies as clickable cards.
- View detailed information about each movie, including title, description, genre, and director.
- Navigate back to the main list from a detailed movie view.

## Project Structure

Here’s the structure of the MyFlix-Client project:

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


## Setup Instructions

### Prerequisites
- Node.js (v14 or above)
- npm or yarn package manager

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/your-username/myflix-client.git
   cd MyFlix-Client
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the application:
   ```
   npm start
   ```
4. Open your browser and navigate to https://localhost:1234 to see the app in action.

### Building for Production

To create a production build, run:
```
npm run build
```

## Project Dependencies

- React - JavaScript library for building user interfaces
- Parcel - Blazing fast, zero configuration web application bundler
- SASS - CSS preprocessor for easier styling





