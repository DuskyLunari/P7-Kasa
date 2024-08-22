import "./Thumb.scss";

export function Thumb({ cover, title }) {
    return (
      <article className="thumb">
        <img className="thumb__img" src={cover} alt={cover} ></img>
        <h2 className="thumb__title">{title}</h2>
      </article>
    );
  }