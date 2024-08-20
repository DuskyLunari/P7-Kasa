import { Layout } from "../../components/Layout";

import "./Error.scss";

export function Error() {
    return (
        <Layout>
            <main>
                <div className="Error-container">
                <h1 className="Error-container__title">404</h1>
                <p className="Error-container__text">Oups! La page que vous demandez n'éxiste pas.</p>
                <a className="Error-container__link" href="/">Retourner sur la page d'accueil</a>
                </div>
            </main>
        </Layout>
    )
}