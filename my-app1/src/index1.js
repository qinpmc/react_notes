import React from 'react';
import ReactDOM from 'react-dom';

const name = "qq";

function formatName(user){
    return user.firstName + " "+user.lastName;
}
const user = {
    firstName:'kk',
    lastName: 'pp'
}

const elment = (    <div>
    <h1>Hello, {name}</h1>
    <div>I am {formatName(user)}</div>
</div>);

ReactDOM.render(
    elment,
    document.getElementById('root')
)