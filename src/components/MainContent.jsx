/// File name  Themaincontent.jsx

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Themaincontent() {
    let [api, setApi] = useState([]);
    let [search, setSearch] = useState("");

    let change = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        let api = fetch(`https://pixabay.com/api/?key=46193687-1ee9f7465fd5eeca96a352d5f&q=${search}&image_type=photo`);
        api.then(res => res.json()).then(val => setApi(val.hits));
    }); // if you give here empty array it will iterate one time

    const navigate = useNavigate(); 

    return(
        <>
            <nav>
                <h1>pixabay</h1>
                <ul>
                    <div id="navbar-section">
                        <li className="nav-item"><button>Explore</button></li>
                        <Link to="/loginpage"><li className="nav-item"><button>Login</button></li></Link>
                        <Link to="/signinpage"><li className="nav-item"><button>Join</button></li></Link>
                        <li className="nav-item"><button>Upload</button></li>
                    </div>
                </ul>
            </nav>
            <div className="header-background-image"></div>
            <div className="main-content-wrapper">
                <h1 className="main-title">Stunning royalty-free images & royalty-free stock</h1>
                <h3 className="main-subtitle">Over 5 million+ high-quality stock images, videos, and music shared by our talented community.</h3>

                <input type="text" placeholder="Search for all images on Pixabay" onChange={change} className="search-input" />
                
                <select name="" id="image-type-selector">
                    <option value="">All Images</option>
                    <option value="">Photos</option>
                    <option value="">Vectors</option>
                </select>
            </div>

            <div className="navigation-buttons">
                <button className="btn-style"> <i className="fa-solid fa-house"></i>   Home</button>
                <button className="btn-style"> <i className="fa-solid fa-image"></i>  Photos</button>
                <button className="btn-style"> <i className="fa-solid fa-paintbrush"></i>  Illustrations</button>
                <button className="btn-style"> <i className="fa-solid fa-pen-nib"></i>   Vector</button>
                <button className="btn-style"> <i className="fa-solid fa-video"></i> Videos</button>
                <button className="btn-style"> <i className="fa-solid fa-music"></i>  Music</button>
                <button className="btn-style"> <i className="fa-solid fa-podcast"></i> Sound Effects</button>
                <button className="btn-style"> <i className="fa-solid fa-fire"></i>  GIFS</button>
            </div> <br /> <br />

            
                <div className="suggestion-buttons">
                    <button className="btn-style1"> Background</button>
                    <button className="btn-style1">Wallpaper</button>
                    <button className="btn-style1">Flowers</button>
                    <button className="btn-style1">Woman</button>
                    <button className="btn-style1">Landscape</button>
                    <button className="btn-style1">People</button>
                    <button className="btn-style1">Money</button>
                    <button className="btn-style1">Sea</button>
                    <button className="btn-style1">Travel</button>
                    <button className="btn-style1">School</button>
                    <button className="btn-style1">House</button>
                    <button className="btn-style1">Iphone Wallpaper</button>
                </div>

                <div id="setting">
                    <i className="fa-solid fa-gear"></i> 
                    <button className="right">Editor's Choice</button>
                </div> <br /> <br /> 
            <div>
                <div id="image-display-container">
                    {api.filter(x => {
                        return (
                            x.tags.toLowerCase().includes(search)
                        );
                    })
                    .map((x) => {
                        return (
                            <img key={x.id}  src={x.webformatURL} alt="pixabay search result" className="result-image" onClick={()=> navigate('/nextpage',{state:{x}})} />
                        )
                    })}
                </div>
            </div>
        </>
    );
}
