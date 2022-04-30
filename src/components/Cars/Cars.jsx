import React, { useState } from "react";
import { unsplashAxios } from "../../utils";
import SearchBar from "./SearchBar/SearchBar";
import ImgList from "./ImgList/ImgList";

const Cars = () => {
    const [images, setImages] = useState([]);

    const searchedHandler = (search) => {
        unsplashAxios.get(`/search/photos?query=${search}`)
        .then(res => setImages(res.data.results))
        .catch(e => console.log(e));
    };
    return (
        <div className="container mt-3 card">
            <div className="card-body">
                <SearchBar searchedHandler={searchedHandler}/>
                {images.length > 0 ? <ImgList images={images}/> : null}
            </div>
        </div>
    );
};

export default Cars;