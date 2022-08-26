import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class PersonByName extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             person:{}
        }
    }

    componentDidMount() {
        const name = this.props.match.params.name
        axios.get(`http://localhost:8080/getPersonByName/${name}`)
         .then(response => {
             console.log(response.data)
             this.setState({person: response.data})
         })
    }

    render() {
        const person = this.state.person
        return (
            <div style={{marginTop:"50px", padding:"20px"}}>
                    <div>
                        Name: {person.name} <br/>
                        Age: {person.age} <br/>
                        Location: {person.location}
                    </div>
                    <Link to="/">
                      <button style={{marginTop:"10px"}}>Home</button>
                    </Link>
            </div>
        )
    }

    }