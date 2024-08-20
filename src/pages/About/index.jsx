import { Layout } from "../../components/Layout";
import { Banner } from "../../components/Banner";
import { Collapse } from "../../components/Collapse";

import "./About.scss";

export function About() {
    return (
        <Layout>
            <main>
                <Header></Header>
                <Banner></Banner>
                <Collapse></Collapse>
                <Collapse></Collapse>
                <Collapse></Collapse>
                <Collapse></Collapse>
                <Footer></Footer>
            </main>
        </Layout>
    )
}