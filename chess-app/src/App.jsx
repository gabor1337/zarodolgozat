

import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './components/firebase'
import Home from './components/Home'
import UserForm from './components/UserForm'
import GameApp from './components/GameApp'

export default function App() {
    const [user, loading, error] = useAuthState(auth)

    if (loading) {
        return 'loading ...'
    }
    if (error) {
        return 'There was an error'
    }
    if (!user) {
        return <UserForm/>
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route path="/game/:id">
                    <GameApp/>
                </Route>
            </Switch>
        </Router>
    )
}