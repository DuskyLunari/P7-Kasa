import "./Banner.scss";
import BannerImg from "/banner-home.png";

export function Banner({bannerImg = BannerImg}) {
    return (
        <main>
            <div className="banner-home">
                <img className="banner-home__img"src={bannerImg} alt="Bannière"></img>
                <p className="banner-home__text">Chez vous, partout et ailleurs</p>
            </div>
        </main>
    )
}