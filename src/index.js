import React from 'react';
import PropTypes from 'prop-types';
import inflection from 'inflection';
import TextField from 'material-ui/TextField';
import * as ReactColor from 'react-color';

require('./ColorInput.css');

class ColorInput extends React.Component {
  state = {
    show: false
  };

  handleOpen = () => this.setState({ show: true });
  handleClose = () => this.setState({ show: false });
  handleChange = ({ hex }) => {
    this.props.input.onChange(hex);
    this.forceUpdate();
  };

  render() {
    const {
      label,
      source,
      touched,
      error,
      elStyle,
      options,
      picker,
      input,
    } = this.props;

    const Picker = ReactColor[`${picker}Picker`];

    return (
      <div>
        <TextField
          {...input}
          onFocus={this.handleOpen}
          floatingLabelText={ label || inflection.humanize(source) }
          errorText={touched && error}
          style={elStyle}
        />
        {
          this.state.show?
            <div className="ColorInput-popup">
              <div
                className="ColorInput-cover"
                onClick={this.handleClose}
              />
              <Picker
                {...options}
                color={input.value}
                onChange={this.handleChange}
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
  input: PropTypes.object,
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
