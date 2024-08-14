import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { Thumb } from "../../components/Thumb";
import { Footer } from "../../components/Footer";

import "./Home.scss";

export function Home() {
    return (
        <main>
            <Header></Header>
            <Banner></Banner>
            <Thumb></Thumb>
            <Thumb></Thumb>
            <Thumb></Thumb>
            <Thumb></Thumb>
            <Thumb></Thumb>
            <Thumb></Thumb>
            <Tag innerText="plop"></Tag>
            <Tag innerText="plop2"></Tag>
            <Footer></Footer>
        </main>
    )
}