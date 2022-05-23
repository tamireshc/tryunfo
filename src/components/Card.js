import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <section className="card-container">
        <h2 data-testid="name-card">{ cardName }</h2>
        <img
          src={ cardImage }
          alt=""
          data-testid="image-card"
        />
        <div data-testid="description-card">{ cardDescription }</div>
        <div data-testid="attr1-card">
          <p>Attr1.</p>
          <p>{ cardAttr1 }</p>
        </div>
        <div data-testid="attr2-card">
          <p>Attr2.</p>
          <p>{ cardAttr2 }</p>
        </div>
        <div data-testid="attr3-card">
          <p>Attr3.</p>
          <p>{ cardAttr3 }</p>
        </div>
        <div className="strength-card">
          <p data-testid="rare-card">{ cardRare }</p>
          { cardTrunfo && <p data-testid="trunfo-card">Super Trunfo</p> }
        </div>
      </section>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
};

export default Card;
