import React from 'react';
import s from "../img/SunFlower.jpg";



const Profile:React.FC = () => {
    return (
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
    );
};

export default Profile;