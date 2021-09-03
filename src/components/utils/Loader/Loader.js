import React from "react";
import styles from "./Loader.module.scss";

const Loader = () => {
    const loadingDotCount = [0, 1, 2];

    return (
        <div className={styles.loader_bg}>
            <div className={styles.loader_dots}>
                {loadingDotCount.map((_, idx) => (
                    <div
                        key={idx}
                        className={styles.dot}
                        style={{ animationDelay: `${idx * 130}ms` }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Loader;
