import React from 'react';

import './button.css';

const Button =  ({children, onclick, color='buttonDark'}) => {
    return (
        <button className={`button ${color}`} onClick={onclick}>
            {children}
        </button>);
}
export default Button;