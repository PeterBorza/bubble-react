import React, { useContext } from "react";
import { Form, Input, Column } from "../MainSection";
import { data_table_section, output } from "./MainSection.module.scss";
import { messageBoard as msg, BubbleContext } from "../context";
import { useFetch, handlePostBubble, Loader } from "../utils";

const MainSection = () => {
    const [data, , loading] = useFetch(msg.urlData, 500);
    const [bubble, setBubble] = useContext(BubbleContext);
    const [bubbleData, , isLoading] = useFetch(msg.url, 1000);

    const columnItems = () => {
        const leftItems = bubbleData.map(item => (
            <li key={`left-${item.id}`}>
                {item.left}
                <span>%</span>
            </li>
        ));
        const topItems = bubbleData.map(item => (
            <li key={`top-${item.id}`}>
                {item.top}
                <span>%</span>
            </li>
        ));
        const sizeItems = bubbleData.map(item => (
            <li key={`size-${item.id}`}>
                {item.size}
                <span>px</span>
            </li>
        ));
        const opacityItems = bubbleData.map(item => (
            <li key={`opacity-${item.id}`}>{item.opacity}</li>
        ));
        return [leftItems, topItems, sizeItems, opacityItems];
    };

    return (
        <div className={data_table_section}>
            {loading ? (
                <Loader />
            ) : (
                <Form
                    onSubmit={() => handlePostBubble(bubble)}
                    isLoading={isLoading}
                >
                    {data.map(item => (
                        <Input
                            key={item.id}
                            name={item.name}
                            type={item.type}
                            min={item.minimum}
                            max={item.maximum}
                            classStyle={item.className}
                            step={item.step}
                            value={
                                bubble[item.name]
                                    ? item.value
                                    : bubble[item.name]
                            }
                            handler={e =>
                                setBubble({
                                    ...bubble,
                                    [item.name]: e.target.value,
                                })
                            }
                        />
                    ))}
                </Form>
            )}
            <div className={output}>
                {data.map((item, i) => (
                    <Column
                        key={`${item.id}-data`}
                        name={item.name}
                        columnList={columnItems()[i]}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainSection;
