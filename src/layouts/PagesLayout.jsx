import Footer from "../pages/components/Footer";
import Navbar from "../pages/components/Navbar";
import React from "react";





const PageLayout = ({children}) =>{

    return(
        <div>
            <Navbar />
            {children}

            <Footer />
        </div>
    )
}

export default PageLayout;