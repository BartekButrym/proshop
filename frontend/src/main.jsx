import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: (
			<div>
				<h3>Something went wrong.</h3>
			</div>
		),
		children: [
			{
				index: true,
				element: <HomeScreen />,
			},
			{
				path: '*',
				element: (
					<div>
						<h2>Not Found!</h2>
					</div>
				),
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
