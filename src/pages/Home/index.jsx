import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Banner } from "../../components/Banner";
import { Thumb } from "../../components/Thumb";

import "./Home.scss";
import customBannerImg from "/banner-home.png";

export function Home() {
    const [logements, setLogements] = useState([]);

    useEffect(() => {
        async function fetchLogements() {
            const res = await fetch("./logements.json");
            const datas = await res.json();
            setLogements(datas);
        }

        fetchLogements();
    }, []);

    return (
        <Layout>
            <main>
                <Banner 
                    bannerImg={customBannerImg} 
                    text="Chez vous, partout et ailleurs"
                />
                <section className="thumbs">
                    {logements.length > 0 ? (
                        logements.map((logement) => (
                            <Link key={logement.id} to={"/logement" + logement.id}>
                                <Thumb title={logement.title} cover={logement.cover} />
                            </Link>
                        ))
                    ) : (
                        <p>Chargement en cours...</p>
                    )}
                </section>
            </main>
        </Layout>
    );
}