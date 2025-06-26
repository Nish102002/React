import React from 'react'

function Book() {
  const book = [
    { "book_name": "To Kill a Mockingbird", "author": "Harper Lee" },
    { "book_name": "1984", "author": "George Orwell" },
    { "book_name": "The Alchemist", "author": "Paulo Coelho" },
    { "book_name": "Pride and Prejudice", "author": "Jane Austen" },
    { "book_name": "The Great Gatsby", "author": "F. Scott Fitzgerald" }
  ]
  return (
    <>
      <div className='container'>
        <h3 style={{color:'Red',fontSize:'35px'}}>Book</h3>
<table class="table">
                <thead>
                    <tr>

                        <th style={{color:'orange',fontSize:'25px'}} scope="col" >Book Name:- </th>
                        <th style={{color:'orange',fontSize:'25px'}} scope="col">Author:- </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        book.map((e) => {
                            return (
                                <tr>
                                    
                                    <td style={{color:'blue',fontSize:'20px'}}>{e.book_name}</td>
                                    <td style={{color:'blue',fontSize:'20px'}}>{e.author}</td>
                                    
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

export default Book
