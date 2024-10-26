// src/index.jsx
import { createRoot } from 'react-dom/client';
import { MainView } from "./components/main-view/MainView";
import "./index.scss";

// Get the container element
const container = document.getElementById('root')

// Create a root using React 18's new method
const root = createRoot (container);

// Render the MainView component
root.render(<mainView />);