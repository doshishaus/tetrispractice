"use client";

import React from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/tailwind.css";
import App from "./page";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)