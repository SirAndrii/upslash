import React from "react";

import './thumb.css';
import Button from './../button/button';
import Description from './description';

const Thumb = ({urls,author,description,download}) => {
    
    return (
        <div className="imgWrapper">
            <img 
                srcSet={`${urls.thumb} 1x, ${urls.small} 2x`}
                src={urls.thumb} 
                alt={description} 
            />
            <div className="imgOverlay">
                <Button color="buttonWhite" onclick={ () => window.open(download) }>Download</Button>
                <Description author={author} description={description} />
            </div>
        </div>
    );
}
export default Thumb;