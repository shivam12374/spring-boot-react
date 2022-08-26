import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Product extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             product:{}
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:8080/getProduct/${id}`)
         .then(response => {
             console.log(response.data)
             this.setState({product: response.data})
         })
    }
    
    render() {
        const product = this.state.product
        return (
            <div style={{marginTop:"50px", padding:"20px"}}>
                    <div>
                        Name: {product.productName} <br/>
                        Category: {product.productCategory} <br/>
                        Price: {product.price}
                    </div>
                    <Link to="/">
                      <button style={{marginTop:"10px"}}>Home</button>
                    </Link>
            </div>
        )
    }
}

