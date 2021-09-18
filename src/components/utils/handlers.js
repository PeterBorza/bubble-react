import { msg } from '../../context';

export const handleDeleteBubble = async id => {
	await fetch(msg.url + '/' + id, {
		method: 'DELETE',
	});
};

export const handlePostBubble = async data => {
	await fetch(msg.url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: { 'Content-Type': 'application/json' },
	});
};
