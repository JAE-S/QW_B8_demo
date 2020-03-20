// Import React
// =========================================================
    import React from "react";
// Import Material UI components 
// =========================================================
    import Button from '@material-ui/core/Button';
// Import Styles
// =========================================================
    import "./style.css";

// Logout Button
// =========================================================
    export function LogoutBtn() {
        return (
            <div style={{width: "100%", textAlign: "right"}}> 
                <Button className="buttons">Logout</Button>
            </div>
        )
    }
// Optimize Button
// =========================================================
    export function OptimizeBtn() {
        return (
            <> 
                <Button className="optimizeBtn">Optimize</Button>
            </>
        )
    }
// Approve Button
// =========================================================
    export function ApproveBtn() {
        return (
            <> 
                <Button className="approveBtn">Approve</Button>
            </>
        )
    }