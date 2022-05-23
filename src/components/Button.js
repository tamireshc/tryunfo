import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { label, data, disabled, onClick } = this.props;
    return (
      <button
        type="button"
        data-testid={ data }
        onClick={ onClick }
        disabled={ disabled }
      >
        { label }
      </button>
    );
  }
}
Button.defaultProps = {
  disabled: true,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default Button;
