import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import * as ReactColor from 'react-color';

require('./ColorInput.css');

class ColorInput extends Component {
  state = {
    show: false,
    color: this.props.input.value
  };

  handleOpen = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });
  handleChange = (color) => this.setState({ color: color.hex });

  render() {
    const {
      label,
      source,
      touched,
      error,
      elStyle,
      options,
      picker,
    } = this.props;

    const Picker = ReactColor[`${picker}Picker`];

    return (
      <div>
        <TextField
          value={this.state.color}
          onFocus={this.handleOpen}
          floatingLabelText={label || source}
          errorText={touched && error}
          style={elStyle}
        />
        {
          this.state.show?
            <div className="ColorInput-popup">
              <div className="ColorInput-cover" onClick={this.handleClose} />
              <Picker
                color={ this.state.color }
                onChange={ this.handleChange }
                {...options}
              />
            </div>
            : null
        }
      </div>
    )
  }
};

ColorInput.propTypes = {
  addField: PropTypes.bool.isRequired,
  label: PropTypes.string,
  options: PropTypes.object,
  source: PropTypes.string,
  picker: (props, propName, componentName) =>
    !ReactColor[`${props[propName]}Picker`] &&
    new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`.`)
};

ColorInput.defaultProps = {
  addField: true,
  picker: 'Chrome',
  options: {
    disableAlpha: true
  },
};

export default ColorInput;
