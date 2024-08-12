import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag";
import "./Home.scss";

export function Home() {
    return (
        <main>
            <Header></Header>
            <h1>Home</h1>
            <Tag innerText="plop"></Tag>
            <Tag innerText="plop2"></Tag>
            <Footer></Footer>
        </main>
    )
}