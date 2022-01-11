import React from "react";

function Links(props) {
    return (
        <div>
           <h3>Links</h3> 
           <a href="github.com">{props.github}</a>
           <a href="linkedin.com">{props.linkedin}</a>
        </div>
    );
}

export default Links;