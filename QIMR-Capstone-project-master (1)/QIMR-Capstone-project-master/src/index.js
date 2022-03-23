import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './Pages/Homepage';
import ProfilePage from './Pages/ProfilePage';
import RegisterPage from './Pages/RegisterPage';
import Res from './Pages/Res';
import Results from './Pages/ResultsPage';
import './Styles/stylesheet.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
        <div>
            <Routes>
                <Route path="/Home" element={<HomePage/>} />
                <Route path='/Profile' element={<ProfilePage/>} />
                <Route path='/Register' element={<RegisterPage/>} />
                <Route path='/res' element={<Res/>} />
                <Route path='/Results' element={<Results/>} />
            </Routes>
        </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );