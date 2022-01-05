import React from 'react';
import imgPicture from "../img/SunFlower.jpg";
import s from "./Profile.module.css"



const Profile:React.FC = () => {
    return (
        <div className={s.content}>

            <div>
                <img className={s.sunflowerImg} src={imgPicture}/>
            </div>

            <div>
                ava+description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>Post1</div>
                    <div className={s.item}>Post2</div>
                    <div className={s.item}>Post3</div>
                    <div className={s.item}>Post4</div>
                </div>
            </div>
        </div>
    );
};

export default Profile;