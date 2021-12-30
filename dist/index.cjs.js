'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Svg = require('react-native-svg');
var PropTypes = require('prop-types');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var Svg__default = /*#__PURE__*/_interopDefaultLegacy(Svg);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

var LogoFlatchr = function LogoFlatchr(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? '#ffffff' : _props$color,
      _props$width = props.width,
      widthProp = _props$width === void 0 ? null : _props$width,
      _props$height = props.height,
      heightProp = _props$height === void 0 ? null : _props$height,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? null : _props$textColor,
      _props$onlyPaul = props.onlyPaul,
      onlyPaul = _props$onlyPaul === void 0 ? false : _props$onlyPaul;
  var dimensions = React.useMemo(function () {
    var width = 347;
    var height = 90;

    if (onlyPaul) {
      height = 90;
      width = 75;
    }

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * height / width;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = width * heightProp / height;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  }, [widthProp, heightProp, onlyPaul]);
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: dimensions.width,
    height: dimensions.height,
    viewBox: "0 0 ".concat(onlyPaul ? '75 90' : '347 90'),
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M71.7865 75.1941C69.5333 74.7516 68.3645 73.7274 68.3645 73.7274C66.4385 72.3343 66.0909 69.4054 66.0909 69.4054L64.9648 61.4726C64.9249 60.2108 63.9787 56.6611 63.9787 56.6611C61.4586 46.3031 52.8075 45.8774 52.8075 45.8774C52.5893 45.8428 52.6053 45.5467 52.6053 45.5467C52.2719 43.1525 53.8858 39.5949 53.8858 39.5949L56.8635 34.0642C60.0903 27.9661 60.0265 23.7124 60.0265 23.7124C60.7359 13.6744 54.3619 7.61264 54.3619 7.61264C47.1359 -0.260765 38.1239 0.198563 37.5156 0.240242C36.9073 0.198563 27.8944 -0.260765 20.6683 7.61264C20.6683 7.61264 14.2953 13.6744 15.0047 23.7124C15.0047 23.7124 14.94 27.9661 18.1677 34.0642L21.1454 39.5949C21.1454 39.5949 22.7584 43.1525 22.425 45.5467C22.425 45.5467 22.4409 45.8428 22.2228 45.8774C22.2228 45.8774 13.5717 46.3031 11.0516 56.6611C11.0516 56.6611 10.1054 60.2108 10.0655 61.4726L8.93847 69.4054C8.93847 69.4054 8.59175 72.3343 6.66574 73.7274C6.66574 73.7274 5.4979 74.7516 3.2438 75.1941C3.2438 75.1941 -0.327125 76.0232 0.309558 79.6012C0.309558 79.6012 0.890378 82.5319 4.25823 82.4024C4.25823 82.4024 8.63254 82.6809 12.9341 79.611C12.9341 79.611 17.0983 77.129 19.0208 69.8124C19.0208 69.8124 21.6313 60.9477 22.5482 59.7709C22.5482 59.7709 22.8027 59.2158 23.3827 59.2017L23.85 59.1786C23.85 59.1786 24.2188 59.1103 24.2188 59.9643C24.2188 59.9643 24.7917 66.5457 24.4193 69.3017C24.4193 69.3017 24.1036 76.9756 20.5619 82.3616C20.5619 82.3616 19.395 84.1041 19.1617 84.5413C19.1617 84.5413 18.0249 86.7014 20.0112 88.7427C20.0112 88.7427 22.5979 91.0996 25.3149 88.701C25.3149 88.701 31.6507 83.4825 34.678 73.9136C34.678 73.9136 37.0704 66.3337 37.4748 61.6774V61.6331L37.5555 61.6774C37.9598 66.3337 40.3523 73.9136 40.3523 73.9136C43.3796 83.4825 49.7145 88.701 49.7145 88.701C52.4315 91.0996 55.0181 88.7427 55.0181 88.7427C57.0062 86.7014 55.8685 84.5413 55.8685 84.5413C55.6344 84.1041 54.4684 82.3616 54.4684 82.3616C50.9276 76.9756 50.6119 69.3017 50.6119 69.3017C50.2386 66.5457 50.8114 59.9643 50.8114 59.9643C50.8105 59.0296 51.1812 59.1759 51.1812 59.1759L51.6476 59.2017C52.2276 59.2158 52.4821 59.7709 52.4821 59.7709C53.3989 60.9477 56.0104 69.8124 56.0104 69.8124C57.932 77.129 62.0952 79.611 62.0952 79.611C66.3977 82.6809 70.7712 82.4024 70.7712 82.4024C74.1399 82.5319 74.7207 79.6012 74.7207 79.6012C75.3574 76.0232 71.7865 75.1941 71.7865 75.1941Z",
    fill: color
  }), !onlyPaul && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M133.81 74.4773C130.763 74.4773 128.325 72.0419 128.325 68.9905V20.749C128.325 17.7875 130.763 15.3491 133.985 15.3491C136.946 15.3491 139.384 17.7875 139.384 20.749V68.9905C139.384 72.0419 136.946 74.4773 133.81 74.4773ZM119.703 23.7093H118.744C115.697 23.7093 113.433 25.7116 113.433 29.6298V31.8943H117.788C120.312 31.8943 122.49 34.0723 122.49 36.7705C122.49 39.3823 120.312 41.5597 117.788 41.5597H113.433V68.9905C113.433 72.0419 110.995 74.4773 107.773 74.4773C104.725 74.4773 102.288 72.0419 102.288 68.9905V41.5597H99.5872C96.9742 41.5597 94.7968 39.3823 94.7968 36.5965C94.7968 34.0723 96.9742 31.8943 99.5872 31.8943H102.288V29.6298C102.288 20.4869 108.208 15 116.481 15C121.271 15 123.536 16.3053 123.536 19.4407C123.536 21.6188 122.142 23.7093 119.703 23.7093Z",
    fill: textColor || color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M175.611 58.628C173.782 56.1908 170.299 54.9725 166.729 54.9725C162.374 54.9725 158.804 57.2369 158.804 61.3297C158.804 65.248 162.374 67.5106 166.729 67.5106C170.299 67.5106 173.782 66.2911 175.611 63.8533V58.628ZM181.271 74.4773H180.4C179.529 74.4773 175.611 73.7797 175.611 69.6029C172.737 72.9981 167.773 74.9998 162.288 74.9998C155.581 74.9998 147.657 70.4727 147.657 61.067C147.657 51.2264 155.581 47.4821 162.288 47.4821C167.861 47.4821 172.823 49.3111 175.611 52.6216V46.959C175.611 42.6929 171.953 39.906 166.379 39.906C163.07 39.906 159.848 40.6905 156.975 42.6065C156.365 42.9538 155.668 43.2153 154.973 43.2153C152.969 43.2153 150.793 41.5598 150.793 38.948C150.793 38.1646 151.054 37.3794 151.402 36.7711C154.015 32.5901 163.419 30.8488 168.297 30.8488C177.875 30.8488 186.67 34.6812 186.67 46.7845V68.9905C186.67 72.0419 184.233 74.4773 181.271 74.4773Z",
    fill: textColor || color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M211.751 74.9998C204.002 74.9998 199.821 70.9945 199.821 63.5048V41.5597H197.122C194.51 41.5597 192.334 39.3828 192.334 36.5971C192.334 34.0723 194.51 31.8942 197.122 31.8942H199.821V25.363C199.821 22.3163 202.261 19.8774 205.483 19.8774C208.53 19.8774 210.968 22.3163 210.968 25.363V31.8942H215.323C217.848 31.8942 220.025 34.0723 220.025 36.771C220.025 39.3828 217.848 41.5597 215.323 41.5597H210.968V60.5445C210.968 63.8533 213.06 65.1603 214.801 65.1603H215.758C218.893 65.1603 220.635 67.249 220.635 69.9484C220.635 72.7383 218.981 74.9998 211.751 74.9998Z",
    fill: textColor || color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M259.998 70.8214C256.951 73.2598 252.597 75 246.674 75C233.699 75 224.381 65.8541 224.381 52.8822C224.381 39.9919 233.699 30.8483 246.674 30.8483C253.207 30.8483 259.301 33.1998 261.132 36.5967C261.479 37.2062 261.654 37.9038 261.654 38.5985C261.654 41.5599 258.865 43.3019 256.427 43.3019C255.383 43.3019 254.339 43.041 253.382 42.4321C251.55 41.2978 249.374 40.6901 247.196 40.6901C240.492 40.6901 235.789 45.5652 235.789 52.8822C235.789 60.1968 240.492 65.1606 247.196 65.1606C249.461 65.1606 251.55 64.5511 253.468 63.3316C254.424 62.7228 255.383 62.4583 256.427 62.4583C259.128 62.4583 261.738 64.3742 261.738 67.2493C261.738 68.5564 261.132 69.948 259.998 70.8214Z",
    fill: textColor || color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M304.5 74.4773C301.449 74.4773 299.012 72.0419 299.012 68.9905V48.3525C299.012 42.5171 295.964 40.6899 291.176 40.6899C286.907 40.6899 283.511 43.1283 281.594 45.6537V68.9905C281.594 72.0419 279.156 74.4773 276.021 74.4773C272.976 74.4773 270.538 72.0419 270.538 68.9905V20.7489C270.538 17.7875 272.976 15.3491 276.197 15.3491C279.156 15.3491 281.594 17.7875 281.594 20.7489V37.3793C284.296 34.1581 289.521 30.8487 296.398 30.8487C305.63 30.8487 310.072 35.9007 310.072 44.0869V68.9905C310.072 72.0419 307.636 74.4773 304.5 74.4773Z",
    fill: textColor || color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M340.724 41.7345C337.327 42.1705 334.106 43.5622 332.106 46.1758V68.99C332.106 72.042 329.667 74.4775 326.706 74.4775H326.532C323.482 74.4775 321.044 72.042 321.044 68.99V36.7707C321.044 33.8092 323.482 31.372 326.706 31.372C329.667 31.372 332.106 33.8092 332.106 36.7707V37.6428C334.195 34.8559 336.981 31.5459 341.159 31.5459C344.384 31.5459 346.036 33.5494 346.036 36.0742C346.036 39.3824 343.774 41.2984 340.724 41.7345Z",
    fill: textColor || color
  })));
};

LogoFlatchr.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number,
  textColor: PropTypes__default["default"].PropTypes.oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  onlyPaul: PropTypes__default["default"].bool
};

var PeopleIcon = function PeopleIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z",
    stroke: "none",
    fill: color
  }));
};

PeopleIcon.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var ErrorIcon = function ErrorIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: "none",
    d: "M0 0h24v24H0z",
    stroke: "none"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
    stroke: "none",
    fill: color
  }));
};

ErrorIcon.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var Notifications = function Notifications(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
    stroke: "none",
    fill: color
  }));
};

Notifications.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var NotificationsActive = function NotificationsActive(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: "none",
    d: "M0 0h24v24H0z",
    stroke: "none"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 0 1 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 0 1 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z",
    stroke: "none",
    fill: color
  }));
};

NotificationsActive.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var Heart = function Heart(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
    fill: color
  }));
};

Heart.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var ClipboardList = function ClipboardList(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;
  var dimensions = React.useMemo(function () {
    var width = 384 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 384;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 384 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  }, [widthProp, heightProp]);
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: dimensions.width,
    height: dimensions.height,
    viewBox: "0 0 384 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z",
    fill: color
  }));
};

ClipboardList.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var Donut = function Donut(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z",
    fill: color
  }));
};

Donut.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var List = function List(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z",
    fill: color
  }));
};

List.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var ArrowForward = function ArrowForward(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    fill: color
  }));
};

ArrowForward.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var Menu = function Menu(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z",
    fill: color
  }));
};

Menu.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var AccountPinCircleFill = function AccountPinCircleFill(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744zm-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    fill: color
  }));
};

AccountPinCircleFill.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var Gift = function Gift(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z",
    fill: color
  }));
};

Gift.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var Circle = function Circle(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
    fill: color
  }));
};

Circle.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var MenuUnfold = function MenuUnfold(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 1024 1024",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z",
    fill: color
  }));
};

MenuUnfold.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var MenuFold = function MenuFold(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 1024 1024",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z",
    fill: color
  }));
};

MenuFold.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var CollectionsBookmark = function CollectionsBookmark(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z",
    fill: color
  }));
};

CollectionsBookmark.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var ContentPaste = function ContentPaste(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z",
    fill: color
  }));
};

ContentPaste.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var TrashBin = function TrashBin(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Rect, {
    width: "448",
    height: "80",
    x: "32",
    y: "48",
    rx: "32",
    ry: "32",
    fill: color
  }), /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M74.45 160a8 8 0 00-8 8.83l26.31 252.56a1.5 1.5 0 000 .22A48 48 0 00140.45 464h231.09a48 48 0 0047.67-42.39v-.21l26.27-252.57a8 8 0 00-8-8.83zm248.86 180.69a16 16 0 11-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 01-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0122.63-22.62L256 273.37l44.68-44.68a16 16 0 0122.63 22.62L278.62 296z",
    fill: color
  }));
};

TrashBin.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var ChevronRight = function ChevronRight(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;
  var dimensions = React.useMemo(function () {
    var width = 320 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 320;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 320 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  }, [widthProp, heightProp]);
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: dimensions.width,
    height: dimensions.height,
    viewBox: "0 0 320 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z",
    fill: color
  }));
};

ChevronRight.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var Bookmark = function Bookmark(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M400 480a16 16 0 01-10.63-4L256 357.41 122.63 476A16 16 0 0196 464V96a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v368a16 16 0 01-16 16z",
    fill: color
  }));
};

Bookmark.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

var Folder = function Folder(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000000' : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React__default["default"].createElement(Svg__default["default"], {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement(Svg.Path, {
    d: "M480 119c0-13.3-9.4-23-22.8-23H198.9c-2.8 0-4.3-.6-6.1-2.4l-22.5-22.5-.2-.2c-4.9-4.6-8.9-6.9-17.3-6.9H56.7C42.9 64 32 74.3 32 87v73.7c0 1.6 1.7 1.5 3 .7s5-1.4 7-1.4h428c2 0 5.7.6 7 1.4 1.3.8 3 .9 3-.7V119zM32 416.4c0 17.5 14.2 31.6 31.6 31.6H448c17.6 0 32-14.4 32-32V204c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v212.4z",
    fill: color
  }));
};

Folder.propTypes = {
  color: PropTypes__default["default"].oneOfType([PropTypes__default["default"].string, PropTypes__default["default"].number // used for null
  ]),
  height: PropTypes__default["default"].number,
  with: PropTypes__default["default"].number
};

exports.AccountPinCircleFillIcon = AccountPinCircleFill;
exports.ArrowForwardIcon = ArrowForward;
exports.BookmarkIcon = Bookmark;
exports.ChevronRightIcon = ChevronRight;
exports.CircleIcon = Circle;
exports.ClipboardListIcon = ClipboardList;
exports.CollectionsBookmarkIcon = CollectionsBookmark;
exports.ContentPasteIcon = ContentPaste;
exports.DonutIcon = Donut;
exports.ErrorIcon = ErrorIcon;
exports.FlatchrIcon = LogoFlatchr;
exports.FolderIcon = Folder;
exports.GiftIcon = Gift;
exports.HeartIcon = Heart;
exports.ListIcon = List;
exports.MenuFoldIcon = MenuFold;
exports.MenuIcon = Menu;
exports.MenuUnfoldIcon = MenuUnfold;
exports.NotificationsActiveIcon = NotificationsActive;
exports.NotificationsIcon = Notifications;
exports.PeopleIcon = PeopleIcon;
exports.TrashBinIcon = TrashBin;
