import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, data, type, name, id, value, onChange } = this.props;
    return (
      <>
        <label htmlFor={ id }>
          { label }
        </label>

        <input
          data-testid={ data }
          type={ type }
          name={ name }
          id={ id }
          value={ value }
          onChange={ onChange }
        />
      </>

    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
