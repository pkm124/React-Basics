import React, {Component} from 'react'
export default class classComp extends Component
{
    render()
    {
        return (
            <h1>Hello from class Comp</h1>
        )
    }
}

function User1()
{
    return React.createElement('h1', null, "Hello Without JSX")
}