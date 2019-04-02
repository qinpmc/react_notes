import React from 'react';
import ReactDOM from 'react-dom';
 
function Border(props){
	return (
		<div className={props.color}>
			{props.children}
		</div>
	)
}

function WelcomeDialog(){
	return (
		<Border color = 'blue'>
			<div>This is props children.</div>
		</Border>
	)
	
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
)