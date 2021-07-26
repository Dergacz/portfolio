import React from "react";
import style from "./Project.module.css";

export const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                    <a href={""}>
                        <button className={style.button}>Watch</button>
                    </a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <div className={style.description}>
                {props.description}
            </div>
        </div>
    )
}