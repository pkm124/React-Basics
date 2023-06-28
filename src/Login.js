import React, {useState} from 'react';

function Login()
{
    const [userId, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setErr] = useState(false);
    function LoginHandle(e)
    {
        e.preventDefault()
    }
    function userHandler(e)
    {
        let item = e.target.value;
        if(item.length < 3)
        {
            setErr(true);
            // console.log("invalid");
        }
        else{
            setErr(false);
        }
        // console.log(e.target.value)
    }
    return(
        <div>
            <form onSubmit={LoginHandle}>
                <h1>Login</h1>
                <input type="text" placeholder='Enter your UserID' onChange={userHandler}/>
                    {userError? <span>invalid</span>:""}
                <br /><br />
                <input type="text" placeholder='Enter your password'/>
                <br /><br />
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Login;