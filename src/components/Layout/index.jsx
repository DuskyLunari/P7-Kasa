import { Header } from "../Header";
import { Children } from "react";
import { Footer } from "../Footer";

export function Layout ({ children }) {

    return(
        <>
        <Header />
            {children}
        <Footer />
        </>
    );
}
