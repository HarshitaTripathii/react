import React, { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [user, setUsername] = React.useState('')
    const [password, setPassWord] = React.useState('')
    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({
            username: user,
            password: password
        });
    }
    return (
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">Login</h2>
            <input 
                type='text'
                value={user}
                placeholder='Enter username'
                onChange={(e) => { setUsername(e.target.value) }}
                className="p-2 border rounded"
            />
            <input 
                type='password'
                value={password}
                placeholder='Enter Password'
                onChange={(e) => { setPassWord(e.target.value) }}
                className="p-2 border rounded"
            />
            <button 
                onClick={handleSubmit}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </div>
    )
}

export default Login
