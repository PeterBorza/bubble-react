import React, { useCallback, useContext } from "react";
import { Form, Input, Column } from "../MainSection";
import SideBar from "../SideBar";
import { msg, BubbleContext, flags } from "../../context";
import { useFetch, handlePostBubble, Loader } from "../utils";

import { data_table_section, output } from "./MainSection.module.scss";

const MainSection = () => {
	const { bubbleData: inputData } = useFetch(msg.urlData);
	const [bubble, setBubble] = useContext(BubbleContext);
	const { isLoading, bubbleData } = useFetch(msg.url);

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
				{flags.FORM_FLAG && (
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
