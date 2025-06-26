import React from 'react'

function Product() {
    const pro=[
       { "product_id": 201, "product_name": "Wireless Mouse" },
  { "product_id": 202, "product_name": "Bluetooth Speaker" },
  { "product_id": 203, "product_name": "USB-C Charger" },
  { "product_id": 204, "product_name": "Noise Cancelling Headphones" },
  { "product_id": 205, "product_name": "Smart LED Bulb" }
    ]
  return (
    <>
    <div className='container'>
     <h3 style={{color:'Red',fontSize:'35px'}}>Product</h3> 
        <table class="table">
                <thead>
                    <tr>

                        <th style={{color:'orange',fontSize:'25px'}} scope="col">Product Id:- </th>
                        <th style={{color:'orange',fontSize:'25px'}} scope="col">Product Name:- </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        pro.map((e) => {
                            return (
                                <tr>
                                    
                                    <td style={{color:'blue',fontSize:'20px'}}>{e.product_id}</td>
                                    <td style={{color:'blue',fontSize:'20px'}}>{e.product_name}</td>
                                    
                                </tr>
                            )
                        })

                    }

                </tbody>
            </table>
    </div>
    </>
  )
}

export default Product
