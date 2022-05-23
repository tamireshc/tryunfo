import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { label, data, type, name, id, checked, onChange, hasTrunfo } = this.props;
    return (
      hasTrunfo ? (<p> Você já tem um Super Trunfo em seu baralho </p>) : (
        <label htmlFor={ id }>
          { label }
          <input
            className="inputao"
            data-testid={ data }
            type={ type }
            name={ name }
            id={ id }
            checked={ checked }
            onChange={ onChange }
          />
        </label>
      )
    );
  }
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Checkbox;
