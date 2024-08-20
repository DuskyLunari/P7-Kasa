import { Header } from "../Header";
import { Children } from "react";
import { Footer } from "../Footer";

export function Layout ({ Children }) {

    return(
        <>
        <Header />
            {Children}
        <Footer />
        </>
    );
}
