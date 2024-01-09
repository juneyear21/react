import React from "react";
import ReactDOM  from "react-dom/client";

const Container = () => {
    return (
        <div id="navbar" key="navbar">
            <a className="logo" href="#logo" key="a1">Logo</a>
            <a key="a2" href="#home">Home</a>
            <a key="a3" href="#news">News</a>
            <a className="search" key="a4" href="#contact">search</a>
            <a className="About" key="a5" href="#about">About</a>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container/>);

