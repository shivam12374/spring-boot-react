import React,{useState} from 'react'
import axios from 'axios'

export default function AddProduct(props) {
    const [productName, setProductName] = useState('')
    const [productCategory, setProductCategory] = useState('')
    const[price, setPrice] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:8080/saveProduct',{
            productName: productName,
            productCategory: productCategory,
            price: price
        })
        .then(res => {
            console.log("Data added")
            props.history.push("/")
        })
        .catch(err => console.log(err))
    }


    return (
        <div>
            <form>
                <div>
                    <label>Product Name: </label>
                    <input type="text" name="productName" value={productName} onChange={e => setProductName(e.target.value)}/>
                </div>
                <div>
                    <label>Product Category</label>
                    <input type="text" name="productCategory" value={productCategory} onChange={e => setProductCategory(e.target.value)}/>
                </div>
                <div>
                    <label>Product Price</label>
                    <input type="text" name="price" value={price} onChange={e => setPrice(e.target.value)}/>
                </div>
                <button onClick={handleSubmit}>Add Product</button>
            </form>
        </div>
    )
}
