import { leftPanel } from './LeftPanel.module.scss';

import classNames from 'classnames';

const LeftPanel = ({ children, outerClass }) => {
	const classes = classNames(leftPanel, outerClass);
	return <div className={classes}>{children}</div>;
};

export default LeftPanel;
