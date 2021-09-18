import styles from './NeonButton.module.scss';

import { messageBoard as msg } from '../../../context/messages';

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
			<a href={msg.buildingApp} target='_blank'>
				{title}
			</a>
			<span></span>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};

export default NeonButton;
