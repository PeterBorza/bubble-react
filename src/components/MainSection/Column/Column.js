import styles from './Column.module.scss';

const Column = ({ name, columnList }) => {
	return (
		<div className={styles[name]}>
			<h3 className={styles.title_name}>{name}</h3>
			<ul className={styles.listCss}>{columnList}</ul>
		</div>
	);
};

export default Column;
