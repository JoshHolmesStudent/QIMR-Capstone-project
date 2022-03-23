import React from 'react'
import "../Styles/profile.css"


export default function ProfilePage() {
    return (
        <div>
        <main class="box">
            <p>Account management &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                Report History</p>
            
                <a href="#">
                <button class="change-button change-button1">Change Username/Email</button>
                </a>
                <div>
                <a href="#">
                <button class="update-button update-button1">Update Password</button>
                </a>
            </div>
        </main>
      </div>
    )
}
