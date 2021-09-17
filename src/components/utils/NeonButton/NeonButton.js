import styles from './NeonButton.module.scss';

const NeonButton = ({
	title = 'NeonButton',
	handler,
	rightHandClickHandle,
	tabIndex,
}) => {
	return (
		<button
			className={styles.neon_button}
			onClick={handler}
			onContextMenu={rightHandClickHandle}
			tabIndex={tabIndex}
			title={title}
		>
			{title}
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

export default NeonButton;
