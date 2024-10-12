import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import client from "./graphql/ApolloClient.js";
import { ApolloProvider } from "@apollo/client";
import { AuthProvider } from "./auth/AuthWrapper.js";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ApolloProvider client={client}>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </ApolloProvider>
);
