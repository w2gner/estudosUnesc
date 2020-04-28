import React from "react";
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';

function router() {
    const route = window.location.pathname;
    if (route === "") return <h1>Home Page</h1>
    if (route === "/login") return <LoginPage />
    if (route === "/register") return <RegisterPage />
    return <h1>Not Found</h1>
}

export default router;