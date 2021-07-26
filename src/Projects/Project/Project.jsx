import React from "react";
import style from "./Project.module.css";

export const Project = (props) => {
    return (
        <div className={style.project}>
            <a href={""}>
                <div className={style.img}></div>
            </a>
            <h3 className={style.title}>{props.title}</h3>
            <div className={style.description}>
                {props.description}
            </div>
        </div>
    )
}