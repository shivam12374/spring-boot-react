import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default function ProductList(props) {
    const [productName, setProductName] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [price, setPrice] = useState('')

    const [personList, setPersonList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8080/products')
         .then(response => {
             setPersonList(response.data)
         })
    },[])

    const deletePerson = (id) => {
        axios.delete(`http://localhost:8080/deleteProduct/${id}`)
        .then(res => {
            console.log("Data Deleted")
            window.location.reload(false)
        })
        .catch(err => console.log(err))
    }

    const searchProductBYName = () => {
        console.log("productName :"+productName);
        axios.get(`http://localhost:8080/searchProductByName/${productName}`)
        .then(response => {
            setPersonList(response.data)
        })
   }

   const searchProductByCategory = () => {
    console.log(productCategory);
    axios.get(`http://localhost:8080/searchProductByCategory/${productCategory}`)
    .then(response => {
        setPersonList(response.data)
    })
}

const searchProductByPrice = () => {
    console.log(price);
    axios.get(`http://localhost:8080/searchProductByPrice/${price}`)
    .then(response => {
        setPersonList(response.data)
    })
}


    return (
        <div>
            <h3>Product List</h3>
            <div>
            <input type="text" name="productName" value={productName} onChange={e => setProductName(e.target.value)} placeholder='search for name'/>
            <button onClick={() => searchProductBYName()}>Search Name</button></div>
            <div>
            <input type="text" name="productCategory" value={productCategory} onChange={e => setProductCategory(e.target.value)} placeholder='search for category'/>
            <button onClick={() => searchProductByCategory()}>Search category</button></div>
            <div>
            <input type="text" name="price" value={price} onChange={e => setPrice(e.target.value)} placeholder='search for price'/>
            <button onClick={() => searchProductByPrice()}>Search price</button></div>

            <table style={{marginLeft:"600px",marginTop:"5px", padding:"20px"}}>
                <thead>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>View</th>
                    <th>Delete</th>
                    <th>Update</th>
                </thead>
                <tbody>
                    {personList.map(person => (
                        <tr key={person.productId}>
                            <td>{person.productName}</td>
                            <td>{person.productCategory}</td>
                            <td>{person.price}</td>
                            <td>
                                <Link to={"/person/"+person.productId}>
                                    <button>View</button>
                                </Link>
                            </td>
                            <td>
                                <button onClick={() => deletePerson(person.productId)}>Delete</button>
                            </td>
                            <td>
                                <Link to={"/updateProduct/"+person.productId}>
                                    <button>Edit</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            <Link to="addProduct">
                <button >Add New Product</button>
            </Link>
            <Link to="personList">
                <button style={{marginLeft:"6px",marginTop:"5px"}}>Show Customer</button>
            </Link>
        </div>
    )
}
