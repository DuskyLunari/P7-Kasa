import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Score } from "../../components/Score";
import { Collapse } from "../../components/Collapse";
import { Footer } from "../../components/Footer";

import "./Flat.scss";

export function Flat() {
    return (
        <main>
            <Header></Header>
            <Collapse></Collapse>
            <Score></Score>
            <Tag innerText="plop"></Tag>
            <Tag innerText="plop2"></Tag>
            <Footer></Footer>
        </main>
    )
}