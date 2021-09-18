import { container, sideBar, content } from './SideBar.module.scss';

const Component = () => {
	return (
		<div className={container}>
			<div className={sideBar}></div>
			<div className={content}></div>
		</div>
	);
};

export default Component;
