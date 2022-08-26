import React,{useState} from 'react'
import axios from 'axios'

export default function Login(props) {
    const [name, setName] = useState('')
    const [role, setRole] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8080/login',{
            name: name,
            role: role
        })
        .then(res => {
            console.log("Data added")
            props.history.push("/productList")
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <form>
                <div>
                    <label>User Name: </label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Role </label>
                    <input type="text" name="role" value={role} onChange={e => setRole(e.target.value)}/>
                </div>
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}
