import React, { useContext } from 'react';

import { Form, Input, Column } from '../MainSection';

import { data_table_section, output } from './MainSection.module.scss';

import { msg, BubbleContext, fetchTimes, flags } from '../../context';

import { useFetch, handlePostBubble, Loader } from '../utils';
import SideBar from '../SideBar';

const MainSection = () => {
	const { inputDataTime, bubbleDataTime } = fetchTimes;
	const [inputData, , loading] = useFetch(msg.urlData, inputDataTime);
	const [bubble, setBubble] = useContext(BubbleContext);
	const [bubbleData, , isLoading] = useFetch(msg.url, bubbleDataTime);

	const columnItems = {
		leftItems: bubbleData.map(item => (
			<li key={`left-${item.id}`}>{item.left}</li>
		)),
		topItems: bubbleData.map(item => (
			<li key={`top-${item.id}`}>{item.top}</li>
		)),
		sizeItems: bubbleData.map(item => (
			<li key={`size-${item.id}`}>{item.size}</li>
		)),
		opacityItems: bubbleData.map(item => (
			<li key={`opacity-${item.id}`}>{item.opacity}</li>
		)),
	};

	const bubbleValueHandler = (e, item) => {
		setBubble(bubble => ({
			...bubble,
			[item]: e.target.value,
		}));
	};

	return (
		<SideBar outerClass={data_table_section}>
			<SideBar.LeftPanel>
				{loading ? (
					<Loader />
				) : (
					!loading &&
					flags.formFlag && (
						<Form
							onSubmit={() => handlePostBubble(bubble)}
							isLoading={isLoading}
						>
							{inputData.map(item => (
								<Input
									key={item.id}
									name={item.name}
									min={item.minimum}
									max={item.maximum}
									step={item.step}
									span={item.span}
									value={bubble[item.name] ?? item.value}
									onChange={e =>
										bubbleValueHandler(e, item.name)
									}
								/>
							))}
						</Form>
					)
				)}
			</SideBar.LeftPanel>
			<SideBar.MainPanel>
				{inputData.map((item, i) => (
					<Column
						key={`${item.id}-data`}
						name={item.name}
						columnList={Object.values(columnItems)[i]}
					/>
				))}
			</SideBar.MainPanel>
		</SideBar>
	);
};

export default MainSection;
