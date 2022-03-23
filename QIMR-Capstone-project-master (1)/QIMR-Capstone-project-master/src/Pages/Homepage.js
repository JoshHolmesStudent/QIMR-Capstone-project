import React from 'react'
import "../Styles/Login.css"

export default function HomePage() {
    return (
        <div class="Login">
            <h1>Portal Login</h1>
            <form class="px-4 py-3">
                <div class="mb-3">
                    <label for="exampleDropdownFormEmail1" class="form-label">Username</label>
                    <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="Username"/>
                </div>
                <div class="mb-3">
                    <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleDropdownFormPassword1"
                        placeholder="Password"/>
                </div>
                <div class="mb-3">
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
                        <label class="form-check-label" for="dropdownCheck">
                            Remember me
                        </label>
                    </div>
                </div>
                <button type="submit" class="sign-in btn btn-lg d-grid gap-2 col-6 mx-auto">Login</button>
            </form>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">New around here? Sign up</a>
            <a class="dropdown-item" href="#">Forgot password?</a>
        </div>
    )
}
