import React from "react";
import styles from "./BubbleSection.module.scss";
import { Link } from "react-router-dom";
import { messageBoard as msg } from "../context";
import { useFetch, Loader, Button, Bubble, handleDeleteBubble } from "../utils";

const BubbleSection = () => {
    const [bubbleData, setBubbleData, isLoading] = useFetch(msg.url, 1000);
    const selected = item => bubbleData.find(bubble => bubble.id === item).id;

    const handleDeleteButton = () => {
        const idListMax = bubbleData.find(
            (_, index) => index === bubbleData.length - 1
        ).id;
        handleDeleteBubble(idListMax);
        setBubbleData(bubbleData.filter(bubble => bubble.id !== idListMax));
    };

    const handleDeleteItem = item => {
        const sel = selected(item);
        handleDeleteBubble(sel);
        setBubbleData(bubbleData.filter(bubble => bubble.id !== sel));
    };

    return (
        <div className={styles.bubbleSection}>
            <div className={styles.command_wrapper}>
                <Link className={styles.link_styles} to="/">
                    {msg.linkToMainSection}
                </Link>
                <Button
                    type={"button"}
                    disabled={false}
                    handler={() => handleDeleteButton()}
                >
                    {msg.deleteButton}
                </Button>
            </div>
            {isLoading ? (
                <Loader />
            ) : (
                bubbleData.map(item => (
                    <Bubble
                        key={item.id}
                        left={`${item.left}%`}
                        top={`${item.top}%`}
                        size={`${item.size}px`}
                        opacity={item.opacity}
                        id={item.id}
                        font={item.size * 0.3}
                        onClick={() => handleDeleteItem(item.id)}
                    />
                ))
            )}
        </div>
    );
};

export default BubbleSection;
