import React from "react";

const ImgList = ({images}) => {
    return (
        <div className="col-12">
            <h1>Results</h1>
            <div className="row">
                {
                    images.map(image => (
                        <div className="col-4" key={image.id}>
                            <img src={image.urls.regular} width='100%' height='auto' alt={image.alt_description} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ImgList;