import React, { useState } from 'react';
import './Home.css';

import Straw from './images/ft.jpg'; // Ensure this image exists in the correct path
import searchIcon from './images/searchicon.png'; 
import face from './images/face.png'; 
import insta from './images/instagram.jpg'; 
import twitter from './images/twitter.png'; 
import uploadIcon from './images/loadicon.jpg'; // Add this icon for the upload button
import daymakerImage1 from './images/DayMaker1.jpg'; // Add this new image
import daymakerImage2 from './images/DayMaker2.jpg'; // Add this new image
import daymakerImage3 from './images/DayMaker3.jpg'; // Add this new image
import daymakerImage4 from './images/DayMaker4.jpg'; // Add this new image
import Berries from './images/Berries.jpg'; // Add this new image
import Mead from './images/Mead.jpeg';
import Beanery from './images/Beanery.jpeg';
import Market from './images/Market.jpg';
import Hives from './images/Hives.jpg';
import Recipes from './images/Recipes.jpg';

function Home() {
    const [image, setImage] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleAccordionClick = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    return (
        <div className="home-page">
            <div className="about-container">
                <div className="about-image">
                    <img src={Straw} alt="Strawberries" />
                </div>
                <div className="about-content">
                    <h1>Welcome to BerryScan</h1>
                    <p>Discover the best berries around.</p>
                    <button className="learn-more-button">Learn More!</button>
                </div>
            </div>
            <div className="search-section">
                <div className="search-container">
                    <p>Find what you are looking for at BerryScan:</p>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                        <button>
                            <img src={searchIcon} alt="Search Icon" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="model-section">
                <h2>Discover the Perfect Strawberry: Instant Variety Identification and Culinary Inspiration at Your Fingertips.</h2>
                <div className="upload-container">
                    <label className="upload-button">
                        <img src={uploadIcon} alt="Upload Icon" /> Upload Image
                        <input type="file" onChange={handleImageUpload} style={{ display: 'none' }} />
                    </label>
                </div>
                <div className="loading-container">
                    {image ? <img src={image} alt="Uploaded" className="uploaded-image" /> : <div className="loading-spinner"></div>}
                </div>
                <div className="accordion">
                    {['Description', 'Physical Characteristics', 'Taste Profile', 'Optimal Growing Conditions'].map((title, index) => (
                        <div className="accordion-item" key={index}>
                            <button className="accordion-button" onClick={() => handleAccordionClick(index)}>
                                {title}
                            </button>
                            {activeAccordion === index && (
                                <div className="accordion-content">
                                    <p>This is the content for {title.toLowerCase()}.</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="daymaker-section">
                <div className="daymaker-content">
                    <h1>Daymakers Make the Difference!</h1>
                    <p>From the beginning, BerryScan's has been all about family. Our passion for people has deep roots, and from planting the seed to loading your car, each Daymaker at Heeman's brings a little something special. With up to 170 Daymakers ready to make your day, we can't wait to welcome you to Heeman's!</p>
                    <button className="daymaker-button">Working at BerryScan's</button>
                    <button className="daymaker-button">BerryScan's Roots</button>
                </div>
                <div className="daymaker-images">
                    <img src={daymakerImage1} alt="Daymaker 1" className="image1" />
                    <img src={daymakerImage2} alt="Daymaker 2" className="image2" />
                    <img src={daymakerImage3} alt="Daymaker 3" className="image3" />
                    <img src={daymakerImage4} alt="Daymaker 4" className="image4" />
                </div>
            </div>
            <div class="module-section">
    <div class="module-card">
        <img src={Berries} alt="Heeman's Berries"/>
        <div class="module-content">
            <h3>Heeman's Berries</h3>
            <p>We farm over 70 acres of the sweetest and juiciest berries around. Explore what makes Heeman's strawberries the berry best.</p>
        </div>
    </div>
    <div class="module-card">
        <img src={Mead} alt="Hard Cider & Mead"/>
        <div class="module-content">
            <h3>Hard Cider & Mead</h3>
            <p>We crafted Heeman's Hard Cider and Meads, so you can sip, share, and enjoy the taste of fresh, local apples with the ones you love!</p>
        </div>
    </div>
    <div class="module-card">
        <img src={Beanery} alt="Berry Beanery"/>
        <div class="module-content">
            <h3>Berry Beanery</h3>
            <p>See what we’re serving at the Berry Beanery this season! Whether it's a latte or a milkshake, we’re serving up the good stuff just for you.</p>
        </div>
    </div>
    <div class="module-card">
        <img src={Market} alt="The Market"/>
        <div class="module-content">
            <h3>The Market</h3>
            <p>Made with honest, local ingredients, just the way grandma made them! Discover our flavourful jams, pickles, honey and bee products.</p>
        </div>
    </div>
    <div class="module-card">
        <img src={Hives} alt="The Hives"/>
        <div class="module-content">
            <h3>The Hives</h3>
            <p>We raise over 100 hives on site and throughout our community for varietal honey straight from our bee yard to your table.</p>
        </div>
    </div>
    <div class="module-card">
        <img src={Recipes} alt="Recipes"/>
        <div class="module-content">
            <h3>Recipes</h3>
            <p>Our recipe collection is filled with Heeman favourites and great ideas for making the most of your yummy produce from Heeman's.</p>
        </div>
    </div>
</div>

            <div className="contact-section">
                <h1>Contact Us</h1>
                <div className="contact-container">
                    <form className="contact-form">
                        <label>Full Name</label>
                        <input type="text" name="fullName" />
                        <label>E-mail</label>
                        <input type="email" name="email" />
                        <label>Message</label>
                        <textarea name="message"></textarea>
                        <button type="submit">Contact Us</button>
                    </form>
                    <div className="contact-info">
                        <p><strong>Contact</strong></p>
                        <p>hi@green.com</p>
                        <p><strong>Based in</strong></p>
                        <p>Los Angeles, California</p>
                        <div className="social-icons">
                            <img src={face} alt="Facebook" />  {/* Ensure these images exist in the correct path */}
                            <img src={insta} alt="Instagram" />
                            <img src={twitter} alt="Twitter" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
