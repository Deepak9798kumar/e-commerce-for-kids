import React from "react";
import image from "./image/February_WhatsAppBanners_Images_2_-100.webp";
import image1 from "./image/Age_tags_BYOB-12.webp";
import image2 from "./image/Age_tags_BYOB-13.webp";
import image3 from "./image/Age_tags_BYOB-14.webp";
import image4 from "./image/Age_tags_BYOB-15.webp";
import border from "./image/Border.webp";
import image5 from "./image/1stimage_4.jpg";
import image6 from "./image/1stimage_5.jpg";
import image7 from "./image/1stimage_7.jpg";
import image8 from "./image/1stimage_4.jpg";
import "./Style/style.css";

export default function Gift() {
  return (
    <>
      <div className="container">
        <a href="/" target="_blank" rel="">
          <img src={image} alt="Nature"></img>
        </a>
      </div>
      <h1>Build your own box of play,</h1>
      <h2>1. Select your child’s age.</h2>
      <h2>
        2. Browse our specially curated range of sustainable,
        development-friendly toys.
      </h2>
      <h2>3. Pick any 4 toys that your child will love!</h2>
      <h2>4. Place the order & receive it in a beautiful gift box!</h2>
      <div className="container-gift">
        <a href="/" target="_blank" rel="">
          <img src={image1} alt="Nature"></img>
        </a>
        <a href="/" target="_blank" rel="">
          <img src={image2} alt="Nature"></img>
        </a>
        <a href="/" target="_blank" rel="">
          <img src={image3} alt="Nature"></img>
        </a>
        <a href="/" target="_blank" rel="">
          <img src={image4} alt="Nature"></img>
        </a>
      </div>
      <div className="border">
        <img src={border} alt="Nature"></img>
      </div>
      <div className="box-gift">
        <h1>Curated Boxes for Gifting.</h1>
        <div className="gift-card">
          <div className="card">
            <a href="/" target="_blank" rel="">
              <img src={image5} className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <p className="card-text">
                <a href="/" target="_blank" rel="">
                  Baby Activity Walker (1-3 years old)
                </a>
                <br />
                <a href="/" target="_blank" rel="">
                  <span class="money">₹3,799</span>
                </a>
              </p>
              <a href="#" className="btn btn-success">
                Add To Card
              </a>
            </div>
          </div>
          <div className="card">
            <a href="/" target="_blank" rel="">
              <img src={image6} className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <p className="card-text">
                <a href="/" target="_blank" rel="">
                  Baby Activity Walker (1-3 years old)
                </a>
                <br />
                <a href="/" target="_blank" rel="">
                  <span class="money">₹3,799</span>
                </a>
              </p>
              <a href="#" className="btn btn-success">
                Add To Card
              </a>
            </div>
          </div>
          <div className="card">
            <a href="/" target="_blank" rel="">
              <img src={image7} className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <p className="card-text">
                <a href="/" target="_blank" rel="">
                  Baby Activity Walker (1-3 years old)
                </a>
                <br />
                <a href="/" target="_blank" rel="">
                  <span class="money">₹3,799</span>
                </a>
              </p>
              <a href="#" className="btn btn-success">
                Add To Card
              </a>
            </div>
          </div>
          <div className="card">
            <a href="/" target="_blank" rel="">
              <img src={image8} className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <p className="card-text">
                <a href="/" target="_blank" rel="">
                  Baby Activity Walker (1-3 years old)
                </a>
                <br />
                <a href="/" target="_blank" rel="">
                  <span class="money">₹3,799</span>
                </a>
              </p>
              <a href="#" className="btn btn-success">
                Add To Card
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 