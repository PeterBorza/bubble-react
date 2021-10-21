import React, { useCallback, useContext } from "react";

import { Form, Input, Column } from "../MainSection";

import { data_table_section, output } from "./MainSection.module.scss";

import { msg, BubbleContext, fetchTimes, flags } from "../../context";

import { useFetch, handlePostBubble, Loader } from "../utils";
import SideBar from "../SideBar";

const MainSection = () => {
	const { inputDataTime, bubbleDataTime } = fetchTimes;
	const { loading, bubbleData: inputData } = useFetch(
		msg.urlData,
		inputDataTime
	);
	const [bubble, setBubble] = useContext(BubbleContext);
	const { isLoading, bubbleData } = useFetch(msg.url, bubbleDataTime);

	const mappedItems = key =>
		bubbleData.map(item => (
			<li key={`${key}-${item.id}`}>{item[`${key}`]}</li>
		));

	const columnItems = Object.keys(bubble).map(item => mappedItems(item));

	const bubbleValueHandler = e => {
		setBubble(bubble => ({
			...bubble,
			[e.target.name]: e.target.value,
		}));
	};

	const submitHandler = useCallback(() => handlePostBubble(bubble), [bubble]);

	return (
		<SideBar outerClass={data_table_section}>
			<SideBar.LeftPanel>
				{isLoading && <Loader />}
				{flags.formFlag && (
					<Form onSubmit={submitHandler} isLoading={isLoading}>
						{inputData.map(item => (
							<Input
								key={item.id}
								name={item.name}
								min={item.minimum}
								max={item.maximum}
								step={item.step}
								span={item.span}
								value={bubble[item.name] ?? item.value}
								onChange={bubbleValueHandler}
							/>
						))}
					</Form>
				)}
			</SideBar.LeftPanel>
			<SideBar.MainPanel outerClass={output}>
				{inputData.map((item, i) => (
					<Column
						key={`${item.id}-data`}
						name={item.name}
						columnList={columnItems[i]}
					/>
				))}
			</SideBar.MainPanel>
		</SideBar>
	);
};

export default MainSection;
