import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/footer";
import Testimonial from "./components/testimonial";
import Service from "./components/services";
import Team from "./components/team";
import Body from "./components/body";

const AppLayoutHome = () => {
    return (
        <div>
            < Header />
            < Body />
            < Service />
            < Testimonial />
            < Team />
            < Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutHome />);