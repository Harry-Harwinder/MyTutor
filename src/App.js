import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import HowItWorks from './components/howItWorks';


function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        Main / >
        <
        HowItWorks / >
        <
        Footer / >
        <
        /div>
    );
}

export default App;