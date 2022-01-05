import React from 'react';
import imgPicture from "../../img/SunFlower.jpg";
import s from "./Post.module.css"


const Post: React.FC = () => {
    return (
        <div className={s.item}>
            <img src='https://i001.fotocdn.net/s130/d16602d7ba16f827/user_xl/2932469603.jpg'/>
            Post1

            <div>Like</div>
        </div>
    )
}

export default Post;