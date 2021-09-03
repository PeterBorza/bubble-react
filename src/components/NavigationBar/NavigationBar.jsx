import React, { useState } from "react";
import { messageBoard as msg } from "../context";
import { Button, Loader } from "../utils";
import styles from "./NavigationBar.module.scss";

const NavigationBar = () => {
    const [isLoading, setIsLoading] = useState(false);
    const btnHandler = () => {
        setIsLoading(!isLoading);
        document.title = msg.documentTitle;
    };
    return (
        <nav className={styles.nav_bar}>
            <h1>{msg.headerTitle}</h1>
            <Button
                disabled={false}
                type="button"
                handler={btnHandler}
                loading={isLoading}
            >
                {isLoading ? <Loader /> : msg.loadButton}
            </Button>
        </nav>
    );
};

export default NavigationBar;
