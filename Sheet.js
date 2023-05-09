import React from 'react'
import "./Style/style.css"
import image from "./image/Cover.webp"
import image1 from "./image/2-4_1.webp"
import image2 from "./image/4-6_1.webp"

export default function Sheet() {
    return (
        <>

            <div className='container'>
                <div className='container-sheet'>
                    <h1>Activity Sheets for Kids of All Ages</h1>
                    <img src={image} className="card-img-top" alt="..." />
                    <h2>What's the best way to learn something? Do something hands-on and have fun doing it! Here are a set of 10 themed activity sheets that teach something new for each age group, from toddlers to kindergartners and early schoolgoers.</h2><br />
                    <h2>We’ve given considerable thought to designing each of these activities. They are easy for you to use (just download & print!), need the most basic stationery supplies (scissors, gum, paper cutter, pencil, crayons, etc), and offer hours of thinking and entertainment for your little one.</h2><br />
                    <h2>Download, try, and tell us how you liked them using #playwithshumee on Facebook or Instagram.</h2>
                </div>
                <div className='container-sheet'>
                    <h1>Ages 2 - 4</h1>
                    <a href="/" target="_blank" rel="">
                        <img src={image1} alt="Nature"></img>
                    </a>
                </div>
                <button href="\">EXPLORE ALL</button>
                <div className='container-sheet'>
                    <h1>Ages 2 - 4</h1>
                    <a href="/" target="_blank" rel="">
                        <img src={image2} alt="Nature"></img>
                    </a>
                </div>
                <button href="\">EXPLORE ALL</button>
            </div>
        </>
    )
}
