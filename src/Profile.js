import React, {useState} from 'react';

function Profile()
{
    const [loggedIn, setLoggedIn] = useState(false);

    return(
        <div>
            {loggedIn?<h1>Profile Pratik</h1>:<h1>Profile Guest</h1>}
            {loggedIn==1?<h1>Welcome 1</h1>:loggedIn==2 ?<h1>Welcome 2</h1> : <h1>Welcome 3</h1>}
        </div>
    )
}

export default Profile;