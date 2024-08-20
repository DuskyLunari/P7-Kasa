import { Layout } from "../../components/Layout";
import { Tag } from "../../components/Tag";
import { Score } from "../../components/Score";
import { Collapse } from "../../components/Collapse";

import "./Flat.scss";
import { useParams } from "react-router-dom";

export function Flat() {
    const { flatId } = useParams();
    return (
        <Layout>
            <main>
                <h1> Logement { flatId }</h1>
                <Collapse></Collapse>
                <Score></Score>
                <Tag innerText="plop"></Tag>
                <Tag innerText="plop2"></Tag>
            </main>
        </Layout>
    )
}