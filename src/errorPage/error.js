import React from "react";
import './error.css';

function ErrorPageUi() {
    return (
        <div>
            <h1 style={{ color: "red", fontSize: 100, textAlign:"center"   } }>404</h1>
            <h3 style={{textAlign:"center" }}>Page Not Found</h3>

        </div>
    );
}

export default ErrorPageUi;