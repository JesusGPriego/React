import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { NavBar } from './NavBar';

import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';




export const AppRouter = () => {
    return (
        <Router>
            <NavBar />
                <Routes>
                        <Route path="/" element={<LoginScreen/>}/>
                        <Route path="/home" element={<HomeScreen/>}/>
                        <Route path="/about" element={<AboutScreen/>}/>
                        <Route  path="*" element={<Navigate replace to="/" />} />    
                </Routes>
        </Router>
        
    )
}
