import React from 'react'
import { Route, Navigate, Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
    const isAuthenticated = localStorage.getItem("access-token")
    console.log(isAuthenticated)
    return (
        isAuthenticated ? <Outlet/> : <Navigate to={"/"} />
    )
}
