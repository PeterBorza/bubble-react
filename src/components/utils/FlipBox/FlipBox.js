import { useState } from 'react';

import classNames from 'classnames';

import { flip_box, inner, front, back, turn } from './FlipBox.module.scss';

const FlipBox = ({ children, child }) => {
	const [flip, setFlip] = useState(false);
	const title = 'click to see the back';

	const classes = classNames(inner, { [turn]: flip });

	return (
		<div className={flip_box} onClick={() => setFlip(!flip)}>
			<div className={classes}>
				<div className={front} title={title}>
					{children}
				</div>
				<div className={back} title={title}>
					{child}
				</div>
			</div>
		</div>
	);
};

export default FlipBox;
