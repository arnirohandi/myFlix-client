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
MyFlix-Client is a React-based single-page application (SPA) that provides users with an interactive interface to browse movies, view detailed information, and manage their profiles. It is part of the MyFlix Project, a full-stack application showcasing a movie database with client-side functionality for authentication and user interactions.

## Features
- Movie Browsing: Display a list of movies as clickable cards.
- Detailed Views: View detailed information about each movie, including title, description, genre, and director.
- User Authentication: Login and signup features for user access.
- User Profile: Manage user data, view and update profile information.
- Navigate: Back to the main list from a detailed movie view.

## Project Structure

Here’s the structure of the MyFlix-Client project:

```
src/
├── components/
│   ├── login-view/
│   │   ├── LoginView.jsx           
│   │   └── login-view.scss         
│   ├── main-view/
│   │   ├── MainView.jsx            
│   │   └── main-view.scss          
│   ├── movie-card/
│   │   ├── MovieCard.jsx           
│   │   └── movie-card.scss         
│   ├── movie-view/
│   │   ├── MovieView.jsx           
│   │   └── movie-view.scss         
│   ├── navigation-bar/
│   │   └── navigationBar.jsx       
│   ├── profile-view/
│   │   ├── ProfileView.jsx         
│   │   └── profile-view.scss       
│   ├── signup-view/
│   │   ├── SignupView.jsx          
│   │   └── signup-view.scss        
│   └── styles/
│       └── auth-styles.scss        
├── index.html                      
├── index.jsx                       
├── index.scss                     
          
```
Additional files:

- .parcel-cache/: Parcel's cache directory for faster builds.
- dist/: Output directory for the production build.
- netlify.toml: Configuration for deploying to Netlify.
- .gitignore: Specifies files to ignore in version control.

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

- React - JavaScript library for building user interfaces.
- Parcel - Zero configuration bundler for web application.
- SASS - CSS preprocessor for modular and reusable styles.

## Development Dependencies

- ESLint: Javascript linting tool to maintain code quality.
- Prettier: Code formatter for consistent code style.
