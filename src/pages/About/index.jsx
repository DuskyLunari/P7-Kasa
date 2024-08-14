import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Collapse } from "../../components/Collapse";
import { Footer } from "../../components/Footer";

import "./About.scss";

export function About() {
    return (
        <main>
            <Header></Header>
            <Banner></Banner>
            <Collapse></Collapse>
            <Collapse></Collapse>
            <Collapse></Collapse>
            <Collapse></Collapse>
            <Footer></Footer>
        </main>
    )
}