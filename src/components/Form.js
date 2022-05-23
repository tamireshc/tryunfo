import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Checkbox from './Checkbox';
import Input from './Input';
import Select from './Select';
import Textarea from './Textarea';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;

    return (
      <section>
        <h1>Adicionar nova carta</h1>
        <form>
          <Input
            label="Nome"
            data="name-input"
            type="text"
            name="name"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
          />
          <br />
          <Textarea
            label="Descrição"
            data="description-input"
            name="description"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
          <br />
          <Input
            label="Attr01"
            data="attr1-input"
            type="number"
            name="attr1"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
          <br />
          <Input
            label="Attr02"
            data="attr2-input"
            type="number"
            name="attr2"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
          <br />
          <Input
            label="Attr03"
            data="attr3-input"
            type="number"
            name="attr3"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
          <br />
          <Input
            label="Imagem"
            data="image-input"
            type="text"
            name="image"
            id="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
          <br />
          <Select
            label="Raridade"
            data="rare-input"
            name="Raridade"
            id="Raridade"
            value={ cardRare }
            onChange={ onInputChange }
            value1="normal"
            value2="raro"
            value3="muito raro"
          />
          <br />
          <Checkbox
            label="Super Trunfo"
            data="trunfo-input"
            type="checkbox"
            name="soper"
            id="super"
            checked={ cardTrunfo }
            onChange={ onInputChange }
            hasTrunfo={ hasTrunfo }
          />
          <br />
          <Button
            data="save-button"
            label="Salvar"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          />

        </form>
      </section>

    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
