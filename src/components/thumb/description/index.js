import React from 'react';

const cutString = (text) => {
        if (text.length>30) {
            text = text.slice(0,30) + "...";
        }
        return text;
    }

const Description = ({author, description}) => {
    return (
        <div>
            <p>{cutString(author)}</p>
            {description && <p>{cutString(description)}</p>}
        </div>
    );
}

export default Description;