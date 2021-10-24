import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from 'react';

export default function AddProduct() {
    
    let initialValue = [];
    const [products, setProduct] = useState(initialValue);
    const formData = createRef();
    const add = (event)=>{
        event.preventDefault();
        
        const newProduct = {
            product_name: formData.current.product_name.value,
            price: formData.current.price.value,
            qty: Number(formData.current.qty.value)
        }
       
        setProduct([...products,newProduct]);
        
    }
    
    
    return (
        <div>
            <Form onSubmit={add} ref={formData}>
            <Form.Group controlId="formBasicProductName">
                <Form.Label>Product Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" name="product_name"/>
            </Form.Group>

            <Form.Group controlId="formBasicPrice">
                <Form.Label>Price:</Form.Label>
                <Form.Control type="text" placeholder="Price" name="price"/>
            </Form.Group>

            <Form.Group controlId="formBasicQty">
                <Form.Label>Quantity:</Form.Label>
                <Form.Control type="number" placeholder="How many: qty" name="qty"/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Add to Inventory
            </Button>
            </Form>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th style={{color:"Orange"}}>Index</th>
                    <th style={{color:"Orange"}}>Product Name:</th>
                    <th style={{color:"Orange"}}>Price</th>
                    <th style={{color:"Orange"}}>Qty</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.product_name}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
        </div>
    )
}