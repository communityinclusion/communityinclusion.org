import React, { useEffect } from "react";

const GoogleCustomSearchBox = () => {
    useEffect(() => {
        // Dynamically load the Google CSE script
        const script = document.createElement("script");
        script.src = "https://cse.google.com/cse.js?cx=d13d3152043c74a87";
        script.async = true;
        document.body.appendChild(script);
        console.log(script);
        return () => {
            // Clean up script when the component is unmounted
            document.body.removeChild(script);
        };
    }, []);

    return <div className="gcse-searchbox-only"></div>;
};

export default GoogleCustomSearchBox;