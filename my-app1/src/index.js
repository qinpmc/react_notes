import React from 'react';
import ReactDOM from 'react-dom';
 
function LeftBar(props){
	return (
		<div>Left side</div>
	)
	
}

function RightBar(props){
	return (
		<div>Right side</div>
	)
	
}
 
function Border(props){
	return (
		<div className={props.color}>
			<div className='left'>
				{props.left}
			</div>
			<div className='right'>
				{props.right}
			</div>
		</div>
	)
}

 
function WelcomeDialog(){
	return (
		<Border color = 'blue' 
		left={<LeftBar />} 
		right={<RightBar />}
		/>
 
	)
	
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
)