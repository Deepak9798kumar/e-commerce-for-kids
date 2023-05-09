import React from 'react'
import "./Style/style.css";
import image from "./image/Untitled_Design_4_460x.webp";

export default function Blog() {
    return (
        <>
            <h1>Simplifying Parenting</h1>
            <div className='blog-container'>
                <div className="blog-card">
                    <a href="/" target="_blank" rel="">
                        <img src={image} className="card-img-top" alt="..." />
                        <h1>Playing with colours — How does it help babies and toddlers?</h1>
                    </a>
                    <div className='blog-text'>
                        <h6>All you need to know about colours & play!</h6>
                        <h7>March 29, 2023 — Soumya John <br />Tags :</h7>
                        <a href="/" target="_blank" rel="">
                            6-9 Months 9-12 Months babies cognitive skills colours preschoolers toddlers
                        </a>
                    </div>
                </div>
                <div className="blog-card">
                    <a href="/" target="_blank" rel="">
                        <img src={image} className="card-img-top" alt="..." />
                        <h1>Playing with colours — How does it help babies and toddlers?</h1>
                    </a>
                    <div className='blog-text'>
                        <h6>All you need to know about colours & play!</h6>
                        <h7>March 29, 2023 — Soumya John <br />Tags :</h7>
                        <a href="/" target="_blank" rel="">
                            6-9 Months 9-12 Months babies cognitive skills colours preschoolers toddlers
                        </a>
                    </div>
                </div>
                <div className="blog-card">
                    <a href="/" target="_blank" rel="">
                        <img src={image} className="card-img-top" alt="..." />
                        <h1>Playing with colours — How does it help babies and toddlers?</h1>
                    </a>
                    <div className='blog-text'>
                        <h6>All you need to know about colours & play!</h6>
                        <h7>March 29, 2023 — Soumya John <br />Tags :</h7>
                        <a href="/" target="_blank" rel="">
                            6-9 Months 9-12 Months babies cognitive skills colours preschoolers toddlers
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
