import React from 'react'
import "./Style/style.css"
import image from "./image/Cover.webp"

export default function Sheet() {
    return (
        <>
        
            <div className='container'>         
                <div className='container-sheet'>
                <h1>Activity Sheets for Kids of All Ages</h1>
                    <img src={image} className="card-img-top" alt="..." />
                    <h2>What's the best way to learn something? Do something hands-on and have fun doing it! Here are a set of 10 themed activity sheets that teach something new for each age group, from toddlers to kindergartners and early schoolgoers.</h2>
                </div>
            </div>
        </>
    )
}
