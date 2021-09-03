import React from "react";
import styles from "./Bubble.module.scss";

const Bubble = ({ left, top, size, opacity, id, font, onClick }) => {
    const randomize = n => `#${Math.floor(Math.random() * n)}`;
    const dataStyle = {
        left,
        top,
        width: size,
        height: size,
        opacity,
        backgroundColor: randomize(1000000),
        fontSize: font,
    };
    return (
        <div
            className={styles.bubble_style}
            style={dataStyle}
            onClick={onClick}
        >
            {id}
        </div>
    );
};

export default Bubble;
