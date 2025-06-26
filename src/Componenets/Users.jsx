import React from 'react'

function Users() {
    const info = [
        { username: "jdoe92", email: "jdoe92@example.com", password: "Passw0rd!23" },
        { username: "sarahK_88", email: "sarah.k88@example.com", password: "Sk88!@secure" },
        { username: "mikeT_21", email: "miket21@example.com", password: "Mike@2021" },
        { username: "emmaLx", email: "emma.lx@example.com", password: "Emma#1234" },
        { username: "rajVerma", email: "raj.verma@example.com", password: "R@jV3rma#567" }
    ]
    return (
        <div className='container'>Uers:-
            <table class="table">
                <thead>
                    <tr>

                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        info.map((e) => {
                            return (
                                <tr>
                                    
                                    <td>{e.username}</td>
                                    <td>{e.email}</td>
                                    <td>{e.password}</td>
                                </tr>
                            )
                        })

                    }

                </tbody>
            </table>
        </div>
    )
}

export default Users

