import { mainPanel } from './MainPanel.module.scss';

import classNames from 'classnames';

const MainPanel = ({ children, outerClass }) => {
	const classes = classNames(mainPanel, outerClass);
	return <div className={classes}>{children}</div>;
};

export default MainPanel;
