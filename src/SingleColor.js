import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({rgb, weight, index, hexColor}) => {
    const [copyAlert, setCopyAlert] = useState(false);

    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`;

    useEffect(()=>{
        const copyAction = setTimeout(()=>{
            setCopyAlert(false);
        },3000);

        return ()=>{clearTimeout(copyAction);}
    },[copyAlert]);

    return <article onClick={()=>{
        setCopyAlert(true);
        navigator.clipboard.writeText(hexValue);
    }} 
    className={`color ${index>10 && 'color-light'}`} 
    style={{backgroundColor: `rgb(${bcg})`}}>
        <p className="color-weight">{weight}%</p>
        <p className="color-value">{hexValue}</p>
        {copyAlert && <p className="alert">Copied To Clipboard</p>}
    </article>
}

export default SingleColor;