import React from 'react'
import "../Styles/Login.css"
import "../Styles/profile.css"


export default function RegisterPage() {
    return (
        <main class="box">
            <p>Portal Login</p>
            <p2>
                Enter your name, email and password into the fields below and click 'Register'.
            </p2>
            <form action = "index.html">
                <input class="TextBox1" type="email" name="email" placeholder="Email" required/>
                <input class="TextBox1" type="text" name="name" placeholder="Name" required/>

                <input class="TextBox1" name ="password" id="userPassword" type="password" placeholder="Password" required/>        

                <a href="index.html">
                    <button  type="submit" class="button button1">Register</button>
                </a>    
            </form>
        </main>
    )
}
