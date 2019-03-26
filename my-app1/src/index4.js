import React from 'react';
import ReactDOM from 'react-dom';
 
function Avatar(props){
    return (
        <img src={props.user.avatarUrl}
            alt ={props.user.name}
        />
    )
}

function UserInfo(props){
    return (
        <div>
            <Avatar user ={props.user} />
            <div>{props.user.name}</div>
        </div>
    )
}

function Component(props){
    return (
        <div>
            <UserInfo user={props.author} />
            <div>{props.text}</div>
        </div>
    )
}

const comment = {
    text:"hhhhh",
    author:{
        name:"react",
        avatarUrl:"https://placekitten.com/g/64/64"
    }
}

ReactDOM.render(
    <Component text = {comment.text} 
        author = {comment.author}
    />,
    document.getElementById('root')
)