import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, data, name, id, value1, value2, value3, value, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        <select
          data-testid={ data }
          name={ name }
          id={ id }
          value={ value }
          onChange={ onChange }
        >
          <option value={ value1 } selected>{ value1 }</option>
          <option value={ value2 }>{ value2 }</option>
          <option value={ value3 }>{ value3 }</option>
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
  value3: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
