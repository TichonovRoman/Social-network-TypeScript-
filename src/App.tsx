import React from 'react';
import './App.css';
import s from './img/SunFlower.jpg'


const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img
                    src='https://st2.depositphotos.com/3665639/7491/v/950/depositphotos_74914651-stock-illustration-pictograph-of-message-or-chat.jpg'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>

                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>

            <div className='content'>

                <div>
                <img className="sunflowerImg" src={s}/>
                </div>

                <div>
                    ava+description
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>Post1</div>
                        <div>Post2</div>
                        <div>Post3</div>
                        <div>Post4</div>

                    </div>


                </div>

            </div>

        </div>
    );
}


export default App;