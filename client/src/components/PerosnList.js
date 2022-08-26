import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function PerosnList(props) {
    const [personList, setPersonList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/persons')
         .then(response => {
             setPersonList(response.data)
         })
    },[])

    return (
        <div>
            <h3>Person List</h3>
            <table style={{marginLeft:"600px",marginTop:"5px", padding:"20px"}}>
                <thead>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Location</th>
                    <th>Role</th>
                </thead>
                <tbody>
                    {personList.map(person => (
                        <tr key={person.id}>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.location}</td>
                            <td>{person.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <Link to="addPerson">
                <button >Add New Person</button>
            </Link>
            <Link to="">
                <button style={{marginLeft:"6px",marginTop:"5px"}}>Show Product</button>
            </Link>
        </div>
    )
}
