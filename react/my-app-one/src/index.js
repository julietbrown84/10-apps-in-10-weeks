import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import SliderTest from './SliderTest';

var Main = React.createClass({ 
	render: function () {

		return (
			<div className="main">	
				<App />
				<SliderTest />
	
			</div>
		);
	}
});

ReactDOM.render(<Main />, document.getElementById('main'));
registerServiceWorker();
