import React from 'react';
import './App.css';
import s from './img/SunFlower.jpg'
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Footer from "./components/Footer";


const App:React.FC = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <Profile/>
            <Footer/>
        </div>
    );
}


export default App;