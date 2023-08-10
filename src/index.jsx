import React from "react";
import ReactDOMClient from "react-dom/client";
import { ProfilePage } from "./screens/ProfilePage";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<ProfilePage />);
