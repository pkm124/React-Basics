import React from 'react';

export default class StudentClass extends React.Component {
    render()
    {
        console.log(this.props);
        return(
            <div>Student {this.props.name}</div>
        )
    }
}