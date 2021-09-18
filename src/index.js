import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BubbleContextProvider } from './context';

ReactDOM.render(
	<React.StrictMode>
		<BubbleContextProvider>
			<App />
		</BubbleContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
