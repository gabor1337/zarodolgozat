import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import {serviceWorker} from 'react-service-worker'
import {DndProvider}  from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { createRoot } from 'react-dom/client';
import firebase from "./components/firebase";
import { auth } from "./components/firebase";
import {firestore} from "./components/firebase";

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DndProvider backend={HTML5Backend}>
            <App />
        </DndProvider>
    </React.StrictMode>,
    
);


//root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);
