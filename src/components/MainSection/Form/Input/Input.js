import styles from "./Input.module.scss";

const Input = ({ name, min, max, step, handler, value }) => {
    return (
        <>
            <label htmlFor={name}>{name}</label>
            <span className={styles.leftRange}>{value}</span>
            <input
                className={styles.range}
                type="range"
                name={name}
                min={min}
                max={max}
                value={value}
                onChange={handler}
                step={step}
            />
        </>
    );
};

export default Input;
