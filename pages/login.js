// React
import React from 'react'

// Firebase (and firebase ui)
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firebase } from '../app/firebaseApp'
import { uiConfig } from '../config/firebaseUiAuth.config'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

// NextJS
import { useRouter } from 'next/router'

// Styles
import LoginStyle from '../styles/Login.module.css'


function Login() {
    const [user, loading, error] = useAuthState(auth)
    const router = useRouter()

    if (loading) return <h1>Loading...</h1>
    else if (error) return <h1>Error: {error.message}</h1>
    else if (user) {
        // user already logged in. Redirect to main page
        router.push('/')
        return <h1>Redirecting...</h1>
    }


    const authConfig = uiConfig(firebase)

    return (
        <div className={LoginStyle.layout}>
            <div className={LoginStyle.card}>
                <h1>LogIn to <span className={LoginStyle.underline}>Daily Planner</span></h1>
                <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={auth} />
            </div>
        </div>
    )
}

export default Login
