import React from 'react';
import PropTypes from 'prop-types';
import "./Thumb.scss";

export function Thumb({ cover, title }) {
  return (
    <article className="thumb">
      <img className="thumb__img" src={cover} alt={title} />
      <h2 className="thumb__title">{title}</h2>
    </article>
  );
}

Thumb.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};