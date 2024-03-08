import ButtonSvg from "../assets/svg/ButtonSvg";


import React from "react";

const Button = ({className , href , onCLick , children , px , white }) => {
    // reusable --> as a link or button
    const classes=`button relative infline-flex items-center justify-center h-11 transition-colors hover:text-color-1  ${px || "px-7"}  ${white ? "text-n-8": "text-n-1"} ${className || ""}}`;

    const spanClasses = "relative z-10 ";

    //render as a button
    const renderButton = () => (
        <button className={classes} onClick={onCLick}>
            <span className={ spanClasses } >{ children }</span>
            {/* colorful border */}
            {ButtonSvg(white)}
        </button>
    )

    const renderLink = () => (
        <a  href={ href } className={ classes } onClick={onCLick}> 
          <span className={ spanClasses } >{ children }</span>
            {ButtonSvg(white)}
        </a>
    ) 

    // if href is passed --> link else button
    return href ? renderLink() : renderButton();
};

export default Button;
