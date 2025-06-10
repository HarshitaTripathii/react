import React, {useContext} from 'react'
import userContext from './Context/UserContext'


function Login() {

    const [user, setUsername]=React.useState('')
    const [password, setPassWord]=React.useState('')
    const {setUser}= useContext(userContext);

    const handleSubmit= (e)=>{
        e.preventDefault();
        setUser({
          username:user,
          password: password
        });
    }
  return (
    <div>
        <h1>Username</h1>
        <input type='text'
        value={user}
        placeholder='Enter name'
        onChange={(e)=>{setUsername(e.target.value)}}
        />
        <input type='password'
        value={password}
        placeholder='Enter Password'
        onChange={(e)=>{setPassWord(e.target.value)}}
        />
        <button onClick={handleSubmit}>Submit</button>
      
    </div>
  )
}

export default Login
