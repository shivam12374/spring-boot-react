import React,{useState, useEffect} from 'react'
import axios from 'axios'

export default function EditProduct(props) {
    const [productId, setProductId] = useState('')
    const [productName, setProductName] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        const id = props.match.params.id
        axios.get(`http://localhost:8080/getProduct/${id}`)
         .then(response => {
             console.log(response.data)
             setProductId(response.data.productId)
             setProductName(response.data.productName)
             setProductCategory(response.data.productCategory)
             setPrice(response.data.price)
         })
    },[])

    const handleSubmit = e => {
        e.preventDefault()
        axios.put(`http://localhost:8080/updateProduct/${productId}`,{
            productName: productName,
            productCategory: productCategory,
            price: price
        })
        .then(res => {
            console.log("Data updated")
            props.history.push('/')
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <form>
                <div>
                    <label>Name: </label>
                    <input type="text" name="productName" value={productName} onChange={e => setProductName(e.target.value)}/>
                </div>
                <div>
                    <label>Age</label>
                    <input type="text" name="productCategory" value={productCategory} onChange={e => setProductCategory(e.target.value)}/>
                </div>
                <div>
                    <label>Location</label>
                    <input type="text" name="price" value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
                <button style={{marginTop:"10px"}} onClick={handleSubmit}>Update Product</button>
            </form>
        </div>
    )
}
