'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _reactColor = require('react-color');

var ReactColor = _interopRequireWildcard(_reactColor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('./ColorInput.css');

var ColorInput = function (_Component) {
  _inherits(ColorInput, _Component);

  function ColorInput() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ColorInput);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ColorInput.__proto__ || Object.getPrototypeOf(ColorInput)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      show: false,
      color: _this.props.input.value
    }, _this.handleOpen = function () {
      return _this.setState({ show: true });
    }, _this.handleClose = function () {
      return _this.setState({ show: false });
    }, _this.handleChange = function (color) {
      return _this.setState({ color: color.hex });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ColorInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          source = _props.source,
          touched = _props.touched,
          error = _props.error,
          elStyle = _props.elStyle,
          options = _props.options,
          picker = _props.picker;


      var Picker = ReactColor[picker + 'Picker'];

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_TextField2.default, {
          value: this.state.color,
          onFocus: this.handleOpen,
          floatingLabelText: label || source,
          errorText: touched && error,
          style: elStyle
        }),
        this.state.show ? _react2.default.createElement(
          'div',
          { className: 'ColorInput-popup' },
          _react2.default.createElement('div', { className: 'ColorInput-cover', onClick: this.handleClose }),
          _react2.default.createElement(Picker, _extends({
            color: this.state.color,
            onChange: this.handleChange
          }, options))
        ) : null
      );
    }
  }]);

  return ColorInput;
}(_react.Component);

;

ColorInput.propTypes = {
  addField: _react.PropTypes.bool.isRequired,
  label: _react.PropTypes.string,
  options: _react.PropTypes.object,
  source: _react.PropTypes.string,
  picker: function picker(props, propName, componentName) {
    return !ReactColor[props[propName] + 'Picker'] && new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`.');
  }
};

ColorInput.defaultProps = {
  addField: true,
  picker: 'Chrome',
  options: {
    disableAlpha: true
  }
};

exports.default = ColorInput;
module.exports = exports['default'];