import React from 'react'

function res() {
    const resList = document.getElementById('res')
    new URLSearchParams(window.location.search).forEach((value, name) => {
        resList.append(`${name}: ${value}`)
        resList.append(document.createElement('br'))
    })
}

export default function Res() {
    return (
        <div>
            <div id = "res"></div>
            <a href="/">Back to form</a>
        </div>
    )
}
