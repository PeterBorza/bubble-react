import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({
    type,
    disabled,
    handler,
    children,
    loading,
    btnClassName,
}) => {
    const btnClass = classNames(styles.primary_btn, btnClassName, {
        [styles.bg_transparent]: loading,
    });
    return (
        <button
            type={type}
            className={btnClass}
            disabled={disabled}
            onClick={handler}
            data-loading={loading}
        >
            {children}
        </button>
    );
};

export default Button;
