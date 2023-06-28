import React from 'react';

function PassFunction(props)
{
    return(
        <div>
            <h1>User Pass Function Component</h1>
            <button onClick={()=>props.data()}>Call Data Function</button>
        </div>
    )
}

export default PassFunction;