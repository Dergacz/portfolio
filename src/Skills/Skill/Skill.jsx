import React from "react";
import style from "./Skill.module.css";

export const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.img}></div>
            <h3 className={style.title}>{props.title}</h3>
            <div className={style.description}>
                {props.description}
            </div>
        </div>
    )
}