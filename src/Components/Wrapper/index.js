// Import React
// =========================================================
    import React from "react";
// Import Styles
// =========================================================
    import "./style.css";
    
// Wrapper function 
// =========================================================
    export default function Wrapper(props) {
        
        return <div className="wrapper" {...props} > 
                    {props.children}
                </div>
    }
