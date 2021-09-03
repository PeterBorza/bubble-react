import styles from "./Column.module.scss";

const Column = ({ name, columnList }) => {
    return (
        <div className={styles[name]}>
            <p className={styles.title_name}>{name}</p>
            <ul className={styles.listCss}>{columnList}</ul>
        </div>
    );
};

export default Column;
