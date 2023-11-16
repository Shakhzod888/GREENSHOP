import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

import "bootstrap/dist/css/bootstrap.min.css";
import "./main.scss";
import "@mantine/core/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
