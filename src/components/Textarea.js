import React from 'react';
import PropTypes from 'prop-types';

class Textarea extends React.Component {
  render() {
    const { label, data, name, id, value, onChange } = this.props;
    return (
      <>
        <label htmlFor={ id }>
          { label }
        </label>
        <br />
        <textarea
          data-testid={ data }
          name={ name }
          id={ id }
          value={ value }
          onChange={ onChange }
        />
      </>

    );
  }
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Textarea;
