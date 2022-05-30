import React from 'react';
import Svg, { Path, G, Circle, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';
import { theme } from '@flatchr/system-design';
import { date } from '@flatchr/helper';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var stylePathDropShadow = {
  style: {
    filter: 'drop-shadow(rgba(10, 31, 51, 0.4) -57px 29px 33px)'
  }
};

var RenderEvent = function RenderEvent(_ref) {
  var event = _ref.event;

  if (event === 'prideMonth' || event === 'saintValentine') {
    var isSaintValentineEvent = event === 'saintValentine';
    return /*#__PURE__*/React.createElement(G, _extends({
      rotation: 18,
      scale: 0.065,
      translate: "38,25"
    }, stylePathDropShadow), /*#__PURE__*/React.createElement(Path, {
      d: "M251.332 420.609C251.332 420.609 296.591 394.083 348.517 353.313H154.148C206.075 394.083 251.332 420.609 251.332 420.609",
      fill: isSaintValentineEvent ? '#F00020' : '#68329A'
    }), /*#__PURE__*/React.createElement(Path, {
      d: "M154.148 353.313H348.517C374.869 332.624 402.936 308.268 427.68 281.845H74.9867C99.7307 308.268 127.797 332.624 154.148 353.313",
      fill: isSaintValentineEvent ? '#F00020' : '#385FB5'
    }), /*#__PURE__*/React.createElement(Path, {
      d: "M74.9867 281.845H427.68C448.885 259.201 467.648 235.043 480.793 210.376H21.8729C35.0188 235.043 53.7813 259.201 74.9867 281.845",
      fill: isSaintValentineEvent ? '#F00020' : '#11AB51'
    }), /*#__PURE__*/React.createElement(Path, {
      d: "M4.36506 162.664C7.34586 178.599 13.4599 194.592 21.8729 210.376H480.793C489.207 194.592 495.32 178.599 498.3 162.664C499.817 154.555 500.84 146.628 501.373 138.908H1.29266C1.82653 146.628 2.84839 154.555 4.36506 162.664Z",
      fill: isSaintValentineEvent ? '#F00020' : '#FEE314'
    }), /*#__PURE__*/React.createElement(Path, {
      d: "M1.29265 138.908H501.373C503.224 112.167 499.141 87.936 488.836 67.4387H13.8312C3.52545 87.936 -0.557351 112.167 1.29265 138.908Z",
      fill: isSaintValentineEvent ? '#F00020' : '#F3622A'
    }), /*#__PURE__*/React.createElement(Path, {
      d: "M383.963 1.68137C289.749 -12.0386 251.332 65.6654 251.332 65.6654C251.332 65.6654 212.916 -12.0386 118.703 1.68137C65.544 9.4227 31.0292 33.2347 13.8312 67.4387H488.836C471.639 33.2347 437.123 9.4227 383.963 1.68137",
      fill: isSaintValentineEvent ? '#F00020' : '#EE2544'
    }));
  }

  if (event === 'saintPatrick') {
    return /*#__PURE__*/React.createElement(G, {
      scale: 0.047,
      translate: "36,23"
    }, /*#__PURE__*/React.createElement(Path, _extends({}, stylePathDropShadow, {
      fill: "#00A651",
      d: "M138.6,164.2c1.4-42,51.5-67.9,88.5-69.7c24.1-1.2,46.8-6.3,64.7-24.4C306,55.7,324,48.4,343.4,44.8    c15.5-2.8,31.7-5.2,46.5,1.2c24.5,10.7,38,31.6,45.3,56.3c12.6,43.5,0,84-13.5,125.5c-2.1,6.6-18.1,45.9,3.9,39.9    c8.1-2.2,12.6-17.8,16.4-24.4c14.7-25.2,27.4-51.7,47.9-73.2c12.8-13.5,27.7-23.6,44.9-30.1c31.3-11.8,66.8-11,88.7,18.1    c15,19.9,25,40.8,24.9,66.1c-0.1,26,10.3,43.5,25.9,62.9c14.7,18.4,23.3,41.5,24.6,65c1.5,28.6-8.8,50.4-33.7,65.3    c-18.6,11.2-39.4,17-61.6,16.7c-26.9-0.3-52.4-7.6-77.8-15.3c-10.9-3.3-21.5-7.6-32.3-11.4c-4-1.4-9.5-3.6-11.5,1.3    c-3.3,7.9,32.6,18.6,38.4,21.2c16.6,7.1,33.2,14.6,48.9,23.6c16.5,9.4,31.6,21.1,42.5,36c9.2,12.6,15.7,27.9,18.8,43.9    c4.8,24.5-0.8,46.5-19.5,63.2c-20.3,18.1-43.8,30-72,32.2c-16.7,1.4-31.2,10.2-42.6,22.4c-16.9,18.2-35.5,33-60.4,38.2    c-15.7,3.3-31.7,7.7-47.1,0c-35.4-17.8-50.7-48.9-54.3-86.4c-3-30.7,3.1-60.8,9.7-90.7c2.4-10.8,5.6-21.5,8.3-32.2    c0.9-3.8,0.6-7.9-3.5-9.5c-2.8-1.1-3.9,0.1-5.8,1.8c-5.5,5.1-7.6,20.6-10.3,27.7c-3.8,9.8-7.8,19.6-12.2,29.2    c-8.7,19.2-18.6,37.8-29.7,55.7c-22.1,35.6-49.2,68.2-81.4,95.1C192.3,695,171.2,708.8,148,708c-8.9-0.3-18.2-3.1-24-9.9    c-5.8-6.8-6.5-18.2,0-24.2c3.3-3,7.8-4.3,12-5.6c13.9-4.3,27.4-9.8,40.4-16.5c71.6-36.6,117.5-103.4,143.3-177.7    c1.3-3.9,3.3-9.1-2.1-11.4c-4.8-2-6.8,2.6-9,6c-15.4,23.9-32.1,46.7-50.7,68.2c-24.2,28-53.5,46.3-91.3,48.1    c-18.6,0.9-37.3-0.6-50.5-15.4c-20.8-23.2-34.3-49.9-30-82.4c2.8-21.4-0.2-41.7-11.9-59.8c-22.4-34.7-34.3-77.2-10-114.6    c14.2-21.8,45.1-30.1,69.5-32.6c20.8-2.1,41.2,3,60.7,10c18.5,6.7,35.5,16.7,53.9,23.1c2.7,0.9,22.4,7.4,17.4-1.5    c-0.7-1.2-1.9-2.1-3-2.9c-19.2-13.8-40.9-24.1-60.7-37c-16.5-10.7-32.2-22.6-42.9-39.9c-7.3-11.8-13.3-24.8-16.9-38.3    C139.6,184.2,138.3,174.3,138.6,164.2z"
    })));
  }

  if (event === 'easter') {
    return /*#__PURE__*/React.createElement(G, _extends({
      rotation: 18,
      scale: 0.085,
      translate: "45,20"
    }, stylePathDropShadow), /*#__PURE__*/React.createElement(Path, {
      fill: "#FFDF96",
      d: "M381.23,384.488H130.772l-24.461,38.458C141.007,484.581,199.434,512,256.001,512   s114.994-27.419,149.69-89.054L381.23,384.488z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#FFDF96",
      d: "M256.001,0c-44.497,0-90.643,32.714-125.229,85.875l16.18,32.339h220.532l13.745-32.338   C346.643,32.714,300.497,0,256.001,0z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#b7d5ac",
      d: "M417.926,163.456l-50.442-45.242H146.953l-52.877,45.242c-12.12,36.912-19.236,78.278-19.236,122.187  c0,29.986,3.282,56.694,9.196,80.303l77.618,29.831h191.127l75.183-29.831c5.914-23.607,9.196-50.316,9.196-80.303  C437.162,241.734,430.046,200.368,417.926,163.456z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#FF7B78",
      d: "M333.02,108.08c-4.351,4.372-8.907,5.29-11.962,5.29c-3.056,0-7.612-0.918-11.963-5.29   c-14.368-14.435-33.223-22.386-53.096-22.386c-19.872,0-38.728,7.951-53.095,22.386c-4.351,4.372-8.906,5.29-11.962,5.29   c-3.056,0-7.611-0.918-11.962-5.289c-13.183-13.247-30.15-21.012-48.209-22.205c-14.641,22.504-27.205,48.672-36.697,77.581   c7.215-3.646,13.919-8.479,19.849-14.437c4.353-4.372,8.907-5.29,11.962-5.29c3.055,0,7.611,0.918,11.962,5.292   c14.367,14.435,33.223,22.385,53.095,22.385s38.728-7.949,53.096-22.386c4.351-4.372,8.906-5.29,11.961-5.29   s7.611,0.918,11.962,5.292c14.368,14.435,33.224,22.385,53.096,22.385c19.871,0,38.727-7.949,53.095-22.385   c4.351-4.373,8.907-5.29,11.963-5.29c3.055,0,7.609,0.918,11.961,5.292c5.93,5.958,12.634,10.791,19.849,14.437   c-9.492-28.909-22.056-55.076-36.697-77.581C363.171,87.068,346.203,94.834,333.02,108.08z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#FF7B78",
      d: "M386.116,352.921L386.116,352.921c-19.872,0-38.729,7.951-53.095,22.385   c-4.353,4.372-8.908,5.29-11.963,5.29c-3.056,0-7.612-0.918-11.963-5.29c-14.368-14.436-33.223-22.385-53.096-22.385   c-19.872,0-38.728,7.949-53.095,22.385c-4.351,4.372-8.907,5.29-11.962,5.29c-3.055,0-7.611-0.918-11.962-5.29   c-14.367-14.435-33.223-22.385-53.095-22.385c-0.001,0,0,0,0,0c-15.033,0-29.482,4.558-41.849,13.024   c5.396,21.54,12.983,40.498,22.275,57.002c2.65-2.052,5.2-4.277,7.613-6.701c4.353-4.373,8.907-5.29,11.962-5.29   c3.055,0,7.611,0.917,11.963,5.29c14.367,14.435,33.223,22.385,53.095,22.385s38.728-7.951,53.096-22.385   c4.351-4.373,8.906-5.29,11.961-5.29c3.055,0,7.611,0.917,11.963,5.29c14.367,14.435,33.223,22.385,53.095,22.385   c19.871,0,38.727-7.951,53.095-22.385c4.351-4.373,8.907-5.29,11.963-5.29c3.055,0,7.609,0.917,11.962,5.29   c2.413,2.425,4.963,4.65,7.613,6.701c9.29-16.504,16.877-35.461,22.273-57.001C415.599,357.478,401.151,352.921,386.116,352.921z"
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#FFDF96",
      cx: "143.739",
      cy: "263.659",
      r: "32.318"
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#FFFFFF",
      cx: "256",
      cy: "263.659",
      r: "32.318"
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#FFDF96",
      cx: "368.272",
      cy: "263.659",
      r: "32.318"
    }));
  }

  if (event === 'spring') {
    return /*#__PURE__*/React.createElement(G, _extends({
      rotation: 18,
      scale: 0.07,
      translate: "40,20"
    }, stylePathDropShadow), /*#__PURE__*/React.createElement(Path, {
      fill: "#ffdb2d",
      d: "M445.707 264.589c-5.99-3.459-14.401-6.323-25.167-8.589 10.767-2.267 19.176-5.13 25.167-8.589 20.22-11.675 34.685-30.525 40.729-53.079s2.941-46.111-8.733-66.331c-11.674-20.22-30.525-34.685-53.078-40.729-22.554-6.042-46.11-2.942-66.331 8.733-5.99 3.459-12.675 9.311-20.023 17.502 3.418-10.459 5.144-19.174 5.144-26.091C343.414 39.214 304.2 0 256 0s-87.415 39.214-87.415 87.415c0 6.917 1.726 15.632 5.145 26.091-7.347-8.191-14.033-14.043-20.023-17.502C111.966 71.905 58.399 86.256 34.297 128c-11.675 20.22-14.777 43.779-8.733 66.331s20.507 41.405 40.729 53.079c5.99 3.459 14.401 6.323 25.167 8.589-10.767 2.267-19.176 5.13-25.167 8.589-20.22 11.675-34.685 30.525-40.729 53.079S22.624 363.78 34.297 384s30.525 34.685 53.078 40.729a87.944 87.944 0 0 0 22.768 3.016c15.146 0 30.096-3.972 43.565-11.749 5.99-3.459 12.675-9.311 20.023-17.502-3.42 10.459-5.146 19.174-5.146 26.091 0 48.2 39.214 87.415 87.415 87.415s87.415-39.214 87.415-87.415c0-6.917-1.726-15.632-5.145-26.091 7.347 8.191 14.033 14.043 20.023 17.502 13.733 7.928 28.738 11.694 43.56 11.694 30.232 0 59.678-15.68 75.85-43.69 11.675-20.22 14.777-43.779 8.733-66.331-6.046-22.553-20.509-41.405-40.729-53.08z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#ffdb2d",
      d: "M445.707 264.589c-5.99-3.459-14.401-6.323-25.167-8.589 10.767-2.267 19.176-5.13 25.167-8.589 20.22-11.675 34.685-30.525 40.729-53.079s2.941-46.111-8.733-66.331c-11.674-20.22-30.525-34.685-53.078-40.729-22.554-6.042-46.11-2.942-66.331 8.733-5.99 3.459-12.675 9.311-20.023 17.502 3.418-10.459 5.144-19.174 5.144-26.091C343.414 39.214 304.2 0 256 0v512c48.2 0 87.415-39.214 87.415-87.415 0-6.917-1.726-15.632-5.145-26.091 7.347 8.191 14.033 14.043 20.023 17.502 13.733 7.928 28.738 11.694 43.56 11.694 30.232 0 59.678-15.68 75.85-43.69 11.675-20.22 14.777-43.779 8.733-66.331-6.046-22.553-20.509-41.405-40.729-53.08z"
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#bf256b",
      cx: 256,
      cy: 137.366,
      r: 18.732
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#bf256b",
      cx: 153.262,
      cy: 196.683,
      r: 18.732
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#bf256b",
      cx: 153.262,
      cy: 315.317,
      r: 18.732
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#bf256b",
      cx: 256,
      cy: 374.634,
      r: 18.732
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#bf256b",
      cx: 358.737,
      cy: 315.317,
      r: 18.732
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#bf256b",
      cx: 358.737,
      cy: 196.683,
      r: 18.732
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#bf256b",
      cx: 256,
      cy: 256,
      r: 62.439
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#bf256b",
      d: "M256 193.561c34.484 0 62.439 27.955 62.439 62.439S290.483 318.439 256 318.439"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#ffae33",
      d: "M256 337.171c-44.758 0-81.171-36.413-81.171-81.171s36.413-81.171 81.171-81.171 81.17 36.413 81.17 81.171-36.413 81.171-81.17 81.171zm0-124.878c-24.1 0-43.707 19.607-43.707 43.707S231.9 299.707 256 299.707 299.707 280.1 299.707 256 280.1 212.293 256 212.293z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#ffae33",
      d: "M256 174.829v37.463c24.1 0 43.707 19.607 43.707 43.707S280.1 299.707 256 299.707v37.463c44.758 0 81.171-36.413 81.171-81.171s-36.414-81.17-81.171-81.17z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#f90",
      d: "M256 174.829v37.463c24.1 0 43.707 19.607 43.707 43.707S280.1 299.707 256 299.707v37.463c44.758 0 81.171-36.413 81.171-81.171s-36.414-81.17-81.171-81.17z"
    }));
  }

  if (event === 'summer') {
    return /*#__PURE__*/React.createElement(G, _extends({
      rotation: 18,
      scale: 0.26,
      translate: "42,20"
    }, stylePathDropShadow), /*#__PURE__*/React.createElement(Path, {
      fill: "#fcdd66",
      d: "M42.307 77.142 16.268 91.02l29.471 1.242-17.407 23.813 27.087-11.684-5.374 29.006 19.323-22.285 7.773 28.452 7.774-28.452 19.323 22.285-5.375-29.006 27.088 11.683-17.408-23.813 29.472-1.241-26.04-13.878 26.04-13.877-29.472-1.242 17.408-23.814-27.088 11.685 5.375-29.006-19.323 22.285-7.774-28.452-7.773 28.452-19.323-22.285 5.374 29.006L28.332 38.21l17.406 23.813-29.47 1.242z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#fcdd66",
      d: "m77.141 154.284-9.601-35.143-23.908 27.574 6.649-35.883-33.478 14.441 21.521-29.441-36.452-1.536 32.187-17.154L1.872 59.988l36.451-1.535-21.52-29.44 33.478 14.44-6.65-35.884L67.54 35.143 77.141 0l9.601 35.143 23.909-27.574-6.649 35.884 33.478-14.441-21.521 29.441 36.453 1.536-32.189 17.154 32.189 17.155-36.453 1.535 21.521 29.44-33.478-14.44 6.647 35.883-23.907-27.574-9.601 35.142zm-5.945-51.203 5.945 21.762 5.946-21.762 14.737 16.998-4.1-22.13 20.697 8.927-13.293-18.186 22.491-.948-19.893-10.601 19.893-10.601-22.491-.948 13.293-18.186-20.697 8.928 4.1-22.129-14.737 16.998-5.946-21.762-5.945 21.762-14.738-16.997 4.1 22.13-20.697-8.927 13.293 18.185-22.489.948 19.891 10.601-19.891 10.601 22.49.948-13.293 18.186 20.697-8.928-4.1 22.13 14.737-16.999z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#fbd009",
      d: "M48.271 77.142 25.447 88.927l25.667.746-15.423 20.532 23.447-10.478-5.007 25.188 16.567-19.619 6.443 24.856 6.443-24.856 16.569 19.619-5.008-25.189 23.445 10.478-15.422-20.531 25.668-.746-22.824-11.785 22.824-11.785-25.668-.746L118.59 44.08 95.144 54.558l5.007-25.188-16.567 19.618-6.443-24.856-6.443 24.856L54.13 29.37l5.008 25.189-23.447-10.478 15.423 20.531-25.667.746z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#fbd009",
      d: "m77.141 131.87-6.652-25.659-17.106 20.259 5.17-26.009-24.207 10.818L50.27 90.08l-26.503-.77 23.564-12.168-23.564-12.166 26.503-.771-15.924-21.198 24.207 10.818-5.17-26.009L70.49 48.074l6.652-25.659 6.651 25.659L100.9 27.815l-5.17 26.009 24.206-10.818-15.924 21.198 26.505.771-23.565 12.167 23.565 12.168-26.505.77 15.924 21.198L95.73 100.46l5.171 26.009-17.108-20.258-6.652 25.659zm-6.235-27.489 6.235 24.053 6.235-24.053 16.027 18.979-4.844-24.368 22.686 10.139-14.922-19.865 24.833-.721-22.084-11.403 22.084-11.403-24.833-.721 14.922-19.865-22.686 10.139 4.844-24.368-16.027 18.98-6.235-24.054-6.235 24.053-16.028-18.979 4.845 24.368-22.686-10.138 14.922 19.865-24.832.721L49.21 77.142 27.127 88.545l24.832.722-14.922 19.865 22.687-10.139-4.844 24.368 16.026-18.98z"
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#fcdd66",
      cx: 77.141,
      cy: 77.142,
      r: 27.693
    }));
  }

  if (event === 'frenchNationalDay') {
    return /*#__PURE__*/React.createElement(G, _extends({
      rotation: 18,
      scale: 0.07,
      translate: "43,25"
    }, stylePathDropShadow), /*#__PURE__*/React.createElement(Path, {
      fill: "#fff",
      d: "M160 80h176v336H160z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#3757A6",
      d: "M160 80H48C21.6 80 0 99.2 0 126.4v243.2C0 396.8 21.6 416 48 416h112V80z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#f00020",
      d: "M448 80H336v336h112c26.4 0 48-19.2 48-46.4V126.4c0-27.2-21.6-46.4-48-46.4z"
    }));
  }

  if (event === 'frenchMusicDay') {
    return /*#__PURE__*/React.createElement(G, _extends({
      rotation: 20,
      scale: 0.22,
      translate: "40,8"
    }, stylePathDropShadow), /*#__PURE__*/React.createElement(Path, {
      fill: "#fd912c",
      d: "M196.58 211.812c-7.042-12.521-13.424-15.875-7.949-48.67 6.466-38.744-36.429-38.761-43.142-38.763-6.714-.003-49.609-.019-44.631 38.73 4.203 32.717.358 36.44-6.53 48.665-9.756 17.164-25.866 76.682 49.872 79.079v.03c.416 0 .814-.011 1.226-.015.411.004.81.016 1.226.016v-.03c75.74-2.341 59.67-61.871 49.928-79.042z"
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#d12200",
      cx: 145.467,
      cy: 184.456,
      r: 24.076
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#8e3300",
      cx: 145.467,
      cy: 184.455,
      r: 18.33
    }), /*#__PURE__*/React.createElement(Path, {
      transform: "rotate(-180 145.442 235.55)",
      fill: "#8e3300",
      d: "M120.361 231.039h50.162v9.022h-50.162z"
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#8e3300",
      d: "M137.343 36.156h16.303v146.901h-16.303z"
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#8e3300",
      cx: 130.885,
      cy: 8.949,
      r: 2.904
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#8e3300",
      cx: 130.885,
      cy: 19.604,
      r: 2.904
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#8e3300",
      cx: 130.885,
      cy: 30.258,
      r: 2.904
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#8e3300",
      cx: 159.943,
      cy: 8.949,
      r: 2.904
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#8e3300",
      cx: 159.943,
      cy: 19.604,
      r: 2.904
    }), /*#__PURE__*/React.createElement(Circle, {
      fill: "#8e3300",
      cx: 159.943,
      cy: 30.258,
      r: 2.904
    }), /*#__PURE__*/React.createElement(Path, {
      fill: "#8e3300",
      d: "M145.523 0c-6.448-.002-11.724.405-11.727 6.852l-.008 25.98c-.003 6.447 5.271 14.606 11.719 14.609 6.447.002 11.724-8.153 11.726-14.601l.009-25.98C157.244.414 151.971.003 145.523 0zm-3.405 33.438a2.562 2.562 0 0 1-2.555 2.555 2.562 2.562 0 0 1-2.554-2.555V8.356a2.562 2.562 0 0 1 2.554-2.554 2.562 2.562 0 0 1 2.555 2.554v25.082zm11.903 0a2.562 2.562 0 0 1-2.555 2.555 2.562 2.562 0 0 1-2.554-2.555V8.356a2.562 2.562 0 0 1 2.554-2.554 2.562 2.562 0 0 1 2.555 2.554v25.082z"
    }), /*#__PURE__*/React.createElement(Path, {
      style: {
        stroke: "#e2dab3",
        strokeWidth: 0.5391,
        strokeMiterlimit: 10
      },
      d: "M138.969 35.273v198.122M143.284 35.273v198.122M147.6 35.273v198.122M151.915 35.273v198.122"
    }), /*#__PURE__*/React.createElement(Path, {
      transform: "rotate(-180 145.442 233.393)",
      fill: "#8e3300",
      d: "M127.98 230.252h34.924v6.281H127.98z"
    }));
  }

  if (event === 'halloween') {
    return /*#__PURE__*/React.createElement(G, {
      scale: 0.1,
      translate: "11.5, -2" // {...stylePathDropShadow}

    }, /*#__PURE__*/React.createElement(Path, {
      fill: "#000",
      d: "m237.512 229.211-91.756-38.709 37.698 76.722 54.07-38.013h-.012zM274.474 229.211l91.756-38.709-37.698 76.722-54.07-38.013h.012zM120.211 278.188l45.345 15.552 1.024 22.42 15.866 4.751 7.005-22.734 35.882 11.005.054 28.606 36.115.778 1.024-26.38h6.664l1.024 20.372 28.414-4.37-.765-17.6 31.882-5.899 2.567 20.782 14.883-3.277 1.543-21.874 54.153-19.416-49.018 61.512-34.886 9.845-4.751-15.334-9.448 4.888-2.417 13.34s-36.743 4.765-50.602 4.765-35.924-3.824-35.924-3.824l-1.543-16.399-20.208-1.516-5.325 12.726-25.219-9.531-43.324-63.15-.015-.038z"
    }));
  }

  return null;
};

var LogoFlatchr = function LogoFlatchr(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? theme.colors.primary400 : _props$color,
      _props$width = props.width,
      widthProp = _props$width === void 0 ? null : _props$width,
      _props$height = props.height,
      heightProp = _props$height === void 0 ? null : _props$height,
      _props$textColor = props.textColor,
      textColor = _props$textColor === void 0 ? null : _props$textColor,
      _props$onlyPaul = props.onlyPaul,
      onlyPaul = _props$onlyPaul === void 0 ? false : _props$onlyPaul,
      _props$event = props.event,
      event = _props$event === void 0 ? null : _props$event,
      _props$noEventRender = props.noEventRender,
      noEventRender = _props$noEventRender === void 0 ? false : _props$noEventRender;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 ".concat(onlyPaul ? '75 90' : '347 90'),
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M71.7865 75.1941C69.5333 74.7516 68.3645 73.7274 68.3645 73.7274C66.4385 72.3343 66.0909 69.4054 66.0909 69.4054L64.9648 61.4726C64.9249 60.2108 63.9787 56.6611 63.9787 56.6611C61.4586 46.3031 52.8075 45.8774 52.8075 45.8774C52.5893 45.8428 52.6053 45.5467 52.6053 45.5467C52.2719 43.1525 53.8858 39.5949 53.8858 39.5949L56.8635 34.0642C60.0903 27.9661 60.0265 23.7124 60.0265 23.7124C60.7359 13.6744 54.3619 7.61264 54.3619 7.61264C47.1359 -0.260765 38.1239 0.198563 37.5156 0.240242C36.9073 0.198563 27.8944 -0.260765 20.6683 7.61264C20.6683 7.61264 14.2953 13.6744 15.0047 23.7124C15.0047 23.7124 14.94 27.9661 18.1677 34.0642L21.1454 39.5949C21.1454 39.5949 22.7584 43.1525 22.425 45.5467C22.425 45.5467 22.4409 45.8428 22.2228 45.8774C22.2228 45.8774 13.5717 46.3031 11.0516 56.6611C11.0516 56.6611 10.1054 60.2108 10.0655 61.4726L8.93847 69.4054C8.93847 69.4054 8.59175 72.3343 6.66574 73.7274C6.66574 73.7274 5.4979 74.7516 3.2438 75.1941C3.2438 75.1941 -0.327125 76.0232 0.309558 79.6012C0.309558 79.6012 0.890378 82.5319 4.25823 82.4024C4.25823 82.4024 8.63254 82.6809 12.9341 79.611C12.9341 79.611 17.0983 77.129 19.0208 69.8124C19.0208 69.8124 21.6313 60.9477 22.5482 59.7709C22.5482 59.7709 22.8027 59.2158 23.3827 59.2017L23.85 59.1786C23.85 59.1786 24.2188 59.1103 24.2188 59.9643C24.2188 59.9643 24.7917 66.5457 24.4193 69.3017C24.4193 69.3017 24.1036 76.9756 20.5619 82.3616C20.5619 82.3616 19.395 84.1041 19.1617 84.5413C19.1617 84.5413 18.0249 86.7014 20.0112 88.7427C20.0112 88.7427 22.5979 91.0996 25.3149 88.701C25.3149 88.701 31.6507 83.4825 34.678 73.9136C34.678 73.9136 37.0704 66.3337 37.4748 61.6774V61.6331L37.5555 61.6774C37.9598 66.3337 40.3523 73.9136 40.3523 73.9136C43.3796 83.4825 49.7145 88.701 49.7145 88.701C52.4315 91.0996 55.0181 88.7427 55.0181 88.7427C57.0062 86.7014 55.8685 84.5413 55.8685 84.5413C55.6344 84.1041 54.4684 82.3616 54.4684 82.3616C50.9276 76.9756 50.6119 69.3017 50.6119 69.3017C50.2386 66.5457 50.8114 59.9643 50.8114 59.9643C50.8105 59.0296 51.1812 59.1759 51.1812 59.1759L51.6476 59.2017C52.2276 59.2158 52.4821 59.7709 52.4821 59.7709C53.3989 60.9477 56.0104 69.8124 56.0104 69.8124C57.932 77.129 62.0952 79.611 62.0952 79.611C66.3977 82.6809 70.7712 82.4024 70.7712 82.4024C74.1399 82.5319 74.7207 79.6012 74.7207 79.6012C75.3574 76.0232 71.7865 75.1941 71.7865 75.1941Z",
    fill: color
  }), !noEventRender && /*#__PURE__*/React.createElement(RenderEvent, {
    event: event || date.getEventName(new Date())
  }), !onlyPaul && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Path, {
    d: "M133.81 74.4773C130.763 74.4773 128.325 72.0419 128.325 68.9905V20.749C128.325 17.7875 130.763 15.3491 133.985 15.3491C136.946 15.3491 139.384 17.7875 139.384 20.749V68.9905C139.384 72.0419 136.946 74.4773 133.81 74.4773ZM119.703 23.7093H118.744C115.697 23.7093 113.433 25.7116 113.433 29.6298V31.8943H117.788C120.312 31.8943 122.49 34.0723 122.49 36.7705C122.49 39.3823 120.312 41.5597 117.788 41.5597H113.433V68.9905C113.433 72.0419 110.995 74.4773 107.773 74.4773C104.725 74.4773 102.288 72.0419 102.288 68.9905V41.5597H99.5872C96.9742 41.5597 94.7968 39.3823 94.7968 36.5965C94.7968 34.0723 96.9742 31.8943 99.5872 31.8943H102.288V29.6298C102.288 20.4869 108.208 15 116.481 15C121.271 15 123.536 16.3053 123.536 19.4407C123.536 21.6188 122.142 23.7093 119.703 23.7093Z",
    fill: textColor || color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M175.611 58.628C173.782 56.1908 170.299 54.9725 166.729 54.9725C162.374 54.9725 158.804 57.2369 158.804 61.3297C158.804 65.248 162.374 67.5106 166.729 67.5106C170.299 67.5106 173.782 66.2911 175.611 63.8533V58.628ZM181.271 74.4773H180.4C179.529 74.4773 175.611 73.7797 175.611 69.6029C172.737 72.9981 167.773 74.9998 162.288 74.9998C155.581 74.9998 147.657 70.4727 147.657 61.067C147.657 51.2264 155.581 47.4821 162.288 47.4821C167.861 47.4821 172.823 49.3111 175.611 52.6216V46.959C175.611 42.6929 171.953 39.906 166.379 39.906C163.07 39.906 159.848 40.6905 156.975 42.6065C156.365 42.9538 155.668 43.2153 154.973 43.2153C152.969 43.2153 150.793 41.5598 150.793 38.948C150.793 38.1646 151.054 37.3794 151.402 36.7711C154.015 32.5901 163.419 30.8488 168.297 30.8488C177.875 30.8488 186.67 34.6812 186.67 46.7845V68.9905C186.67 72.0419 184.233 74.4773 181.271 74.4773Z",
    fill: textColor || color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M211.751 74.9998C204.002 74.9998 199.821 70.9945 199.821 63.5048V41.5597H197.122C194.51 41.5597 192.334 39.3828 192.334 36.5971C192.334 34.0723 194.51 31.8942 197.122 31.8942H199.821V25.363C199.821 22.3163 202.261 19.8774 205.483 19.8774C208.53 19.8774 210.968 22.3163 210.968 25.363V31.8942H215.323C217.848 31.8942 220.025 34.0723 220.025 36.771C220.025 39.3828 217.848 41.5597 215.323 41.5597H210.968V60.5445C210.968 63.8533 213.06 65.1603 214.801 65.1603H215.758C218.893 65.1603 220.635 67.249 220.635 69.9484C220.635 72.7383 218.981 74.9998 211.751 74.9998Z",
    fill: textColor || color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M259.998 70.8214C256.951 73.2598 252.597 75 246.674 75C233.699 75 224.381 65.8541 224.381 52.8822C224.381 39.9919 233.699 30.8483 246.674 30.8483C253.207 30.8483 259.301 33.1998 261.132 36.5967C261.479 37.2062 261.654 37.9038 261.654 38.5985C261.654 41.5599 258.865 43.3019 256.427 43.3019C255.383 43.3019 254.339 43.041 253.382 42.4321C251.55 41.2978 249.374 40.6901 247.196 40.6901C240.492 40.6901 235.789 45.5652 235.789 52.8822C235.789 60.1968 240.492 65.1606 247.196 65.1606C249.461 65.1606 251.55 64.5511 253.468 63.3316C254.424 62.7228 255.383 62.4583 256.427 62.4583C259.128 62.4583 261.738 64.3742 261.738 67.2493C261.738 68.5564 261.132 69.948 259.998 70.8214Z",
    fill: textColor || color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M304.5 74.4773C301.449 74.4773 299.012 72.0419 299.012 68.9905V48.3525C299.012 42.5171 295.964 40.6899 291.176 40.6899C286.907 40.6899 283.511 43.1283 281.594 45.6537V68.9905C281.594 72.0419 279.156 74.4773 276.021 74.4773C272.976 74.4773 270.538 72.0419 270.538 68.9905V20.7489C270.538 17.7875 272.976 15.3491 276.197 15.3491C279.156 15.3491 281.594 17.7875 281.594 20.7489V37.3793C284.296 34.1581 289.521 30.8487 296.398 30.8487C305.63 30.8487 310.072 35.9007 310.072 44.0869V68.9905C310.072 72.0419 307.636 74.4773 304.5 74.4773Z",
    fill: textColor || color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M340.724 41.7345C337.327 42.1705 334.106 43.5622 332.106 46.1758V68.99C332.106 72.042 329.667 74.4775 326.706 74.4775H326.532C323.482 74.4775 321.044 72.042 321.044 68.99V36.7707C321.044 33.8092 323.482 31.372 326.706 31.372C329.667 31.372 332.106 33.8092 332.106 36.7707V37.6428C334.195 34.8559 336.981 31.5459 341.159 31.5459C344.384 31.5459 346.036 33.5494 346.036 36.0742C346.036 39.3824 343.774 41.2984 340.724 41.7345Z",
    fill: textColor || color
  })));
};

LogoFlatchr.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  event: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  noEventRender: PropTypes.bool,
  height: PropTypes.number,
  with: PropTypes.number,
  textColor: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  onlyPaul: PropTypes.bool
};

var UserIcon = function UserIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z",
    stroke: "none",
    fill: color
  }));
};

UserIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ErrorIcon = function ErrorIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
    stroke: "none",
    fill: color
  }));
};

ErrorIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var NotificationsIcon = function NotificationsIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z",
    stroke: "none",
    fill: color
  }));
};

NotificationsIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var NotificationsActiveIcon = function NotificationsActiveIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M7.58 4.08 6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2a8.445 8.445 0 0 1 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43a8.495 8.495 0 0 1 3.54 6.42zM18 11c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-5zm-6 11c.14 0 .27-.01.4-.04.65-.14 1.18-.58 1.44-1.18.1-.24.15-.5.15-.78h-4c.01 1.1.9 2 2.01 2z",
    stroke: "none",
    fill: color
  }));
};

NotificationsActiveIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var HeartIcon = function HeartIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z",
    fill: color
  }));
};

HeartIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ClipboardListIcon = function ClipboardListIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 384 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z",
    fill: color
  }));
};

ClipboardListIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var DonutIcon = function DonutIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z",
    fill: color
  }));
};

DonutIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ArrowForwardIcon = function ArrowForwardIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z",
    fill: color
  }));
};

ArrowForwardIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var MenuIcon = function MenuIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z",
    fill: color
  }));
};

MenuIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var AccountPinCircleFillIcon = function AccountPinCircleFillIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12 2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744zm-8.233-6.328C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    fill: color
  }));
};

AccountPinCircleFillIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var GiftIcon = function GiftIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z",
    fill: color
  }));
};

GiftIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CircleIcon = function CircleIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z",
    fill: color
  }));
};

CircleIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var MenuUnfoldIcon = function MenuUnfoldIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 1024 1024",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z",
    fill: color
  }));
};

MenuUnfoldIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var MenuFoldIcon = function MenuFoldIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 1024 1024",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z",
    fill: color
  }));
};

MenuFoldIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CollectionsBookmarkIcon = function CollectionsBookmarkIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10l-2.5-1.5L15 12V4h5v8z",
    fill: color
  }));
};

CollectionsBookmarkIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ContentPasteIcon = function ContentPasteIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z",
    fill: color
  }));
};

ContentPasteIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var TrashBinIcon = function TrashBinIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Rect, {
    width: "448",
    height: "80",
    x: "32",
    y: "48",
    rx: "32",
    ry: "32",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M74.45 160a8 8 0 00-8 8.83l26.31 252.56a1.5 1.5 0 000 .22A48 48 0 00140.45 464h231.09a48 48 0 0047.67-42.39v-.21l26.27-252.57a8 8 0 00-8-8.83zm248.86 180.69a16 16 0 11-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 01-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0122.63-22.62L256 273.37l44.68-44.68a16 16 0 0122.63 22.62L278.62 296z",
    fill: color
  }));
};

TrashBinIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ChevronRightIcon = function ChevronRightIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 320 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z",
    fill: color
  }));
};

ChevronRightIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var BookmarkIcon = function BookmarkIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 384 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z",
    fill: color
  }));
};

BookmarkIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FolderIcon = function FolderIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M480 119c0-13.3-9.4-23-22.8-23H198.9c-2.8 0-4.3-.6-6.1-2.4l-22.5-22.5-.2-.2c-4.9-4.6-8.9-6.9-17.3-6.9H56.7C42.9 64 32 74.3 32 87v73.7c0 1.6 1.7 1.5 3 .7s5-1.4 7-1.4h428c2 0 5.7.6 7 1.4 1.3.8 3 .9 3-.7V119zM32 416.4c0 17.5 14.2 31.6 31.6 31.6H448c17.6 0 32-14.4 32-32V204c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v212.4z",
    fill: color
  }));
};

FolderIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ChatBubbleIcon = function ChatBubbleIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z",
    fill: color
  }));
};

ChatBubbleIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var BullhornIcon = function BullhornIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 576 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 576;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 576 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 576 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M576 240c0-23.63-12.95-44.04-32-55.12V32.01C544 23.26 537.02 0 512 0c-7.12 0-14.19 2.38-19.98 7.02l-85.03 68.03C364.28 109.19 310.66 128 256 128H64c-35.35 0-64 28.65-64 64v96c0 35.35 28.65 64 64 64h33.7c-1.39 10.48-2.18 21.14-2.18 32 0 39.77 9.26 77.35 25.56 110.94 5.19 10.69 16.52 17.06 28.4 17.06h74.28c26.05 0 41.69-29.84 25.9-50.56-16.4-21.52-26.15-48.36-26.15-77.44 0-11.11 1.62-21.79 4.41-32H256c54.66 0 108.28 18.81 150.98 52.95l85.03 68.03a32.023 32.023 0 0 0 19.98 7.02c24.92 0 32-22.78 32-32V295.13C563.05 284.04 576 263.63 576 240zm-96 141.42l-33.05-26.44C392.95 311.78 325.12 288 256 288v-96c69.12 0 136.95-23.78 190.95-66.98L480 98.58v282.84z",
    fill: color
  }));
};

BullhornIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FileIcon = function FileIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 384 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z",
    fill: color
  }));
};

FileIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FilterIcon = function FilterIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z",
    fill: color
  }));
};

FilterIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var KeyIcon = function KeyIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M512 176.001C512 273.203 433.202 352 336 352c-11.22 0-22.19-1.062-32.827-3.069l-24.012 27.014A23.999 23.999 0 0 1 261.223 384H224v40c0 13.255-10.745 24-24 24h-40v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24v-78.059c0-6.365 2.529-12.47 7.029-16.971l161.802-161.802C163.108 213.814 160 195.271 160 176 160 78.798 238.797.001 335.999 0 433.488-.001 512 78.511 512 176.001zM336 128c0 26.51 21.49 48 48 48s48-21.49 48-48-21.49-48-48-48-48 21.49-48 48z",
    fill: color
  }));
};

KeyIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var RegisterListAltIcon = function RegisterListAltIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z",
    fill: color
  }));
};

RegisterListAltIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var StarIcon = function StarIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z",
    fill: color
  }));
};

StarIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var TagsIcon = function TagsIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 640 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 640;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 640 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 640 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z",
    fill: color
  }));
};

TagsIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var PeopleIcon = function PeopleIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    fillRule: "evenodd",
    d: "M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
    fill: color
  }));
};

PeopleIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var BuildingIcon = function BuildingIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z",
    fill: color
  }));
};

BuildingIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ColumnsIcon = function ColumnsIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64V160h160v256zm224 0H288V160h160v256z",
    fill: color
  }));
};

ColumnsIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var StoreAltIcon = function StoreAltIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 640 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 640;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 640 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 640 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M320 384H128V224H64v256c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224h-64v160zm314.6-241.8l-85.3-128c-6-8.9-16-14.2-26.7-14.2H117.4c-10.7 0-20.7 5.3-26.6 14.2l-85.3 128c-14.2 21.3 1 49.8 26.6 49.8H608c25.5 0 40.7-28.5 26.6-49.8zM512 496c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V224h-64v272z",
    fill: color
  }));
};

StoreAltIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FileInvoiceDollarIcon = function FileInvoiceDollarIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 384 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07z",
    fill: color
  }));
};

FileInvoiceDollarIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var TachometerAltIcon = function TachometerAltIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 576 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 576;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 576 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 576 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c14.71 0 26.58 10.13 30.32 23.65-1.11 2.26-2.64 4.23-3.45 6.67l-9.22 27.67c-5.13 3.49-10.97 6.01-17.64 6.01-17.67 0-32-14.33-32-32S270.33 96 288 96zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm246.77-72.41l-61.33 184C343.13 347.33 352 364.54 352 384c0 11.72-3.38 22.55-8.88 32H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-33.94 26.5-61.43 59.9-63.59l61.34-184.01c4.17-12.56 17.73-19.45 30.36-15.17 12.57 4.19 19.35 17.79 15.17 30.36zm14.66 57.2l15.52-46.55c3.47-1.29 7.13-2.23 11.05-2.23 17.67 0 32 14.33 32 32s-14.33 32-32 32c-11.38-.01-20.89-6.28-26.57-15.22zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z",
    fill: color
  }));
};

TachometerAltIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var LayerGroupIcon = function LayerGroupIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12.41 148.02l232.94 105.67c6.8 3.09 14.49 3.09 21.29 0l232.94-105.67c16.55-7.51 16.55-32.52 0-40.03L266.65 2.31a25.607 25.607 0 0 0-21.29 0L12.41 107.98c-16.55 7.51-16.55 32.53 0 40.04zm487.18 88.28l-58.09-26.33-161.64 73.27c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.51 209.97l-58.1 26.33c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 276.3c16.55-7.5 16.55-32.5 0-40zm0 127.8l-57.87-26.23-161.86 73.37c-7.56 3.43-15.59 5.17-23.86 5.17s-16.29-1.74-23.86-5.17L70.29 337.87 12.41 364.1c-16.55 7.5-16.55 32.5 0 40l232.94 105.59c6.8 3.08 14.49 3.08 21.29 0L499.59 404.1c16.55-7.5 16.55-32.5 0-40z",
    fill: color
  }));
};

LayerGroupIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ShieldAltIcon = function ShieldAltIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z",
    fill: color
  }));
};

ShieldAltIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var TableAltIcon = function TableAltIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z",
    fill: color
  }));
};

TableAltIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var UserLockIcon = function UserLockIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 640 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 640;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 640 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 640 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M224 256A128 128 0 1 0 96 128a128 128 0 0 0 128 128zm96 64a63.08 63.08 0 0 1 8.1-30.5c-4.8-.5-9.5-1.5-14.5-1.5h-16.7a174.08 174.08 0 0 1-145.8 0h-16.7A134.43 134.43 0 0 0 0 422.4V464a48 48 0 0 0 48 48h280.9a63.54 63.54 0 0 1-8.9-32zm288-32h-32v-80a80 80 0 0 0-160 0v80h-32a32 32 0 0 0-32 32v160a32 32 0 0 0 32 32h224a32 32 0 0 0 32-32V320a32 32 0 0 0-32-32zM496 432a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm32-144h-64v-80a32 32 0 0 1 64 0z",
    fill: color
  }));
};

UserLockIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var PlusIcon = function PlusIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
    fill: color
  }));
};

PlusIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var PenIcon = function PenIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M290.74 93.24l128.02 128.02-277.99 277.99-114.14 12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z",
    fill: color
  }));
};

PenIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CheckIcon = function CheckIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z",
    fill: color
  }));
};

CheckIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CloseIcon = function CloseIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    fill: color
  }));
};

CloseIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CaretDownIcon = function CaretDownIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 320 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",
    fill: color
  }));
};

CaretDownIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CaretUpIcon = function CaretUpIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 320 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M288.662 352H31.338c-17.818 0-26.741-21.543-14.142-34.142l128.662-128.662c7.81-7.81 20.474-7.81 28.284 0l128.662 128.662c12.6 12.599 3.676 34.142-14.142 34.142z",
    fill: color
  }));
};

CaretUpIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var SearchIcon = function SearchIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z",
    fill: color
  }));
};

SearchIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var EyeIcon = function EyeIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M256 105c-101.8 0-188.4 62.4-224 151 35.6 88.6 122.2 151 224 151s188.4-62.4 224-151c-35.6-88.6-122.2-151-224-151zm0 251.7c-56 0-101.8-45.3-101.8-100.7S200 155.3 256 155.3 357.8 200.6 357.8 256 312 356.7 256 356.7zm0-161.1c-33.6 0-61.1 27.2-61.1 60.4s27.5 60.4 61.1 60.4 61.1-27.2 61.1-60.4-27.5-60.4-61.1-60.4z",
    fill: color
  }));
};

EyeIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var EyeOffIcon = function EyeOffIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M256.1 144.8c56.2 0 101.9 45.3 101.9 101.1 0 13.1-2.6 25.5-7.3 37l59.5 59c30.8-25.5 55-58.4 69.9-96-35.3-88.7-122.3-151.6-224.2-151.6-28.5 0-55.8 5.1-81.1 14.1l44 43.7c11.6-4.6 24.1-7.3 37.3-7.3zM52.4 89.7l46.5 46.1 9.4 9.3c-33.9 26-60.4 60.8-76.3 100.8 35.2 88.7 122.2 151.6 224.1 151.6 31.6 0 61.7-6.1 89.2-17l8.6 8.5 59.7 59 25.9-25.7L78.2 64 52.4 89.7zM165 201.4l31.6 31.3c-1 4.2-1.6 8.7-1.6 13.1 0 33.5 27.3 60.6 61.1 60.6 4.5 0 9-.6 13.2-1.6l31.6 31.3c-13.6 6.7-28.7 10.7-44.8 10.7-56.2 0-101.9-45.3-101.9-101.1 0-15.8 4.1-30.7 10.8-44.3zm87.8-15.7l64.2 63.7.4-3.2c0-33.5-27.3-60.6-61.1-60.6l-3.5.1z",
    fill: color
  }));
};

EyeOffIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var LockIcon = function LockIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z",
    fill: color
  }));
};

LockIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var LockOpenIcon = function LockOpenIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 576 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 576;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 576 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 576 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z",
    fill: color
  }));
};

LockOpenIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CheckCircleIcon = function CheckCircleIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    fill: color
  }));
};

CheckCircleIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var AddCircleOutlineIcon = function AddCircleOutlineIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    fill: color
  }));
};

AddCircleOutlineIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var RemoveCircleOutlineIcon = function RemoveCircleOutlineIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
    fill: color
  }));
};

RemoveCircleOutlineIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ChevronLeftIcon = function ChevronLeftIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 320 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z",
    fill: color
  }));
};

ChevronLeftIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CogIcon = function CogIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z",
    fill: color
  }));
};

CogIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ColorPaletteIcon = function ColorPaletteIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M256 64C150.401 64 64 150.401 64 256c0 105.604 86.401 192 192 192 18.136 0 32-13.864 32-32 0-8.531-3.198-16-8.531-21.333-5.333-5.334-8.531-12.803-8.531-21.334 0-18.135 13.864-32 32-32h38.396c58.667 0 106.667-48 106.667-106.666C448 140.802 361.604 64 256 64zM138.667 256c-18.136 0-32-13.864-32-32s13.864-32 32-32c18.135 0 32 13.864 32 32s-13.865 32-32 32zm64-85.333c-18.136 0-32-13.865-32-32 0-18.136 13.864-32 32-32 18.135 0 32 13.864 32 32 0 18.135-13.865 32-32 32zm106.666 0c-18.135 0-32-13.865-32-32 0-18.136 13.865-32 32-32 18.136 0 32 13.864 32 32 0 18.135-13.864 32-32 32zm64 85.333c-18.135 0-32-13.864-32-32s13.865-32 32-32c18.136 0 32 13.864 32 32s-13.864 32-32 32z",
    fill: color
  }));
};

ColorPaletteIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FormatAlignLeftIcon = function FormatAlignLeftIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z",
    fill: color
  }));
};

FormatAlignLeftIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var PublishIcon = function PublishIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z",
    fill: color
  }));
};

PublishIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CameraIcon = function CameraIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Circle, {
    cx: "256",
    cy: "280",
    r: "63",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M440 96h-88l-32-32H192l-32 32H72c-22.092 0-40 17.908-40 40v272c0 22.092 17.908 40 40 40h368c22.092 0 40-17.908 40-40V136c0-22.092-17.908-40-40-40zM256 392c-61.855 0-112-50.145-112-112s50.145-112 112-112 112 50.145 112 112-50.145 112-112 112z",
    fill: color
  }));
};

CameraIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var PlayCircleIcon = function PlayCircleIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M256 48C141.2 48 48 141.2 48 256s93.2 208 208 208 208-93.2 208-208S370.8 48 256 48zm-41.6 301.6V162.4L339.2 256l-124.8 93.6z",
    fill: color
  }));
};

PlayCircleIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var AnalyticsOutlineIcon = function AnalyticsOutlineIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M7 12h2v5H7zM15 7h2v10h-2zM11 14h2v3h-2zM11 10h2v2h-2z",
    fill: color
  }));
};

AnalyticsOutlineIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FacebookIcon = function FacebookIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 320 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z",
    fill: color
  }));
};

FacebookIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var TwitterIcon = function TwitterIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
    fill: color
  }));
};

TwitterIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var LinkedinIcon = function LinkedinIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z",
    fill: color
  }));
};

LinkedinIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var YoutubeIcon = function YoutubeIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 576 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 576;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 576 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 576 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z",
    fill: color
  }));
};

YoutubeIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var InstagramIcon = function InstagramIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
    fill: color
  }));
};

InstagramIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ChevronUpIcon = function ChevronUpIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z",
    fill: color
  }));
};

ChevronUpIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ChevronDownIcon = function ChevronDownIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z",
    fill: color
  }));
};

ChevronDownIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var LinkIcon = function LinkIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M74.6 256c0-38.3 31.1-69.4 69.4-69.4h88V144h-88c-61.8 0-112 50.2-112 112s50.2 112 112 112h88v-42.6h-88c-38.3 0-69.4-31.1-69.4-69.4zm85.4 22h192v-44H160v44zm208-134h-88v42.6h88c38.3 0 69.4 31.1 69.4 69.4s-31.1 69.4-69.4 69.4h-88V368h88c61.8 0 112-50.2 112-112s-50.2-112-112-112z",
    fill: color
  }));
};

LinkIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var MergeIcon = function MergeIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z",
    fill: color
  }));
};

MergeIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CloneIcon = function CloneIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M464 0c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48H176c-26.51 0-48-21.49-48-48V48c0-26.51 21.49-48 48-48h288M176 416c-44.112 0-80-35.888-80-80V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h288c26.51 0 48-21.49 48-48v-48H176z",
    fill: color
  }));
};

CloneIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var BookmarkAltIcon = function BookmarkAltIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 384 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z",
    fill: color
  }));
};

BookmarkAltIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var SourceTreeIcon = function SourceTreeIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M427.2 203c0-112.1-90.9-203-203-203C112.1-.2 21.2 90.6 21 202.6A202.86 202.86 0 0 0 161.5 396v101.7a14.3 14.3 0 0 0 14.3 14.3h96.4a14.3 14.3 0 0 0 14.3-14.3V396.1A203.18 203.18 0 0 0 427.2 203zm-271.6 0c0-90.8 137.3-90.8 137.3 0-.1 89.9-137.3 91-137.3 0z",
    fill: color
  }));
};

SourceTreeIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var VectorSquareIcon = function VectorSquareIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M512 128V32c0-17.67-14.33-32-32-32h-96c-17.67 0-32 14.33-32 32H160c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v96c0 17.67 14.33 32 32 32v192c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32h192c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32V160c17.67 0 32-14.33 32-32zm-96-64h32v32h-32V64zM64 64h32v32H64V64zm32 384H64v-32h32v32zm352 0h-32v-32h32v32zm-32-96h-32c-17.67 0-32 14.33-32 32v32H160v-32c0-17.67-14.33-32-32-32H96V160h32c17.67 0 32-14.33 32-32V96h192v32c0 17.67 14.33 32 32 32h32v192z",
    fill: color
  }));
};

VectorSquareIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var SaveIcon = function SaveIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM272 80v80H144V80h128zm122 352H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h42v104c0 13.255 10.745 24 24 24h176c13.255 0 24-10.745 24-24V83.882l78.243 78.243a6 6 0 0 1 1.757 4.243V426a6 6 0 0 1-6 6zM224 232c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88zm0 128c-22.056 0-40-17.944-40-40s17.944-40 40-40 40 17.944 40 40-17.944 40-40 40z",
    fill: color
  }));
};

SaveIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var DownloadIcon = function DownloadIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z",
    fill: color
  }));
};

DownloadIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var PaperPlaneIcon = function PaperPlaneIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z",
    fill: color
  }));
};

PaperPlaneIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var RandomIcon = function RandomIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M504.971 359.029c9.373 9.373 9.373 24.569 0 33.941l-80 79.984c-15.01 15.01-40.971 4.49-40.971-16.971V416h-58.785a12.004 12.004 0 0 1-8.773-3.812l-70.556-75.596 53.333-57.143L352 336h32v-39.981c0-21.438 25.943-31.998 40.971-16.971l80 79.981zM12 176h84l52.781 56.551 53.333-57.143-70.556-75.596A11.999 11.999 0 0 0 122.785 96H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12zm372 0v39.984c0 21.46 25.961 31.98 40.971 16.971l80-79.984c9.373-9.373 9.373-24.569 0-33.941l-80-79.981C409.943 24.021 384 34.582 384 56.019V96h-58.785a12.004 12.004 0 0 0-8.773 3.812L96 336H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h110.785c3.326 0 6.503-1.381 8.773-3.812L352 176h32z",
    fill: color
  }));
};

RandomIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var RedoLoopIcon = function RedoLoopIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M500.33 0h-47.41a12 12 0 0 0-12 12.57l4 82.76A247.42 247.42 0 0 0 256 8C119.34 8 7.9 119.53 8 256.19 8.1 393.07 119.1 504 256 504a247.1 247.1 0 0 0 166.18-63.91 12 12 0 0 0 .48-17.43l-34-34a12 12 0 0 0-16.38-.55A176 176 0 1 1 402.1 157.8l-101.53-4.87a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12h200.33a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12z",
    fill: color
  }));
};

RedoLoopIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var AppsIcon = function AppsIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z",
    fill: color
  }));
};

AppsIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var GridIcon = function GridIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z",
    fill: color
  }));
};

GridIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CalendarIcon = function CalendarIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z",
    fill: color
  }));
};

CalendarIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var EnvelopeIcon = function EnvelopeIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z",
    fill: color
  }));
};

EnvelopeIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var GlobeIcon = function GlobeIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 496 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 496;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 496 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 496 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z",
    fill: color
  }));
};

GlobeIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var GlobeEuropeIcon = function GlobeEuropeIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 496 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 496;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 496 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 496 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm200 248c0 22.5-3.9 44.2-10.8 64.4h-20.3c-4.3 0-8.4-1.7-11.4-4.8l-32-32.6c-4.5-4.6-4.5-12.1.1-16.7l12.5-12.5v-8.7c0-3-1.2-5.9-3.3-8l-9.4-9.4c-2.1-2.1-5-3.3-8-3.3h-16c-6.2 0-11.3-5.1-11.3-11.3 0-3 1.2-5.9 3.3-8l9.4-9.4c2.1-2.1 5-3.3 8-3.3h32c6.2 0 11.3-5.1 11.3-11.3v-9.4c0-6.2-5.1-11.3-11.3-11.3h-36.7c-8.8 0-16 7.2-16 16v4.5c0 6.9-4.4 13-10.9 15.2l-31.6 10.5c-3.3 1.1-5.5 4.1-5.5 7.6v2.2c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8s-3.6-8-8-8H247c-3 0-5.8 1.7-7.2 4.4l-9.4 18.7c-2.7 5.4-8.2 8.8-14.3 8.8H194c-8.8 0-16-7.2-16-16V199c0-4.2 1.7-8.3 4.7-11.3l20.1-20.1c4.6-4.6 7.2-10.9 7.2-17.5 0-3.4 2.2-6.5 5.5-7.6l40-13.3c1.7-.6 3.2-1.5 4.4-2.7l26.8-26.8c2.1-2.1 3.3-5 3.3-8 0-6.2-5.1-11.3-11.3-11.3H258l-16 16v8c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8v-20c0-2.5 1.2-4.9 3.2-6.4l28.9-21.7c1.9-.1 3.8-.3 5.7-.3C358.3 56 448 145.7 448 256zM130.1 149.1c0-3 1.2-5.9 3.3-8l25.4-25.4c2.1-2.1 5-3.3 8-3.3 6.2 0 11.3 5.1 11.3 11.3v16c0 3-1.2 5.9-3.3 8l-9.4 9.4c-2.1 2.1-5 3.3-8 3.3h-16c-6.2 0-11.3-5.1-11.3-11.3zm128 306.4v-7.1c0-8.8-7.2-16-16-16h-20.2c-10.8 0-26.7-5.3-35.4-11.8l-22.2-16.7c-11.5-8.6-18.2-22.1-18.2-36.4v-23.9c0-16 8.4-30.8 22.1-39l42.9-25.7c7.1-4.2 15.2-6.5 23.4-6.5h31.2c10.9 0 21.4 3.9 29.6 10.9l43.2 37.1h18.3c8.5 0 16.6 3.4 22.6 9.4l17.3 17.3c3.4 3.4 8.1 5.3 12.9 5.3H423c-32.4 58.9-93.8 99.5-164.9 103.1z",
    fill: color
  }));
};

GlobeEuropeIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var NetworkWiredIcon = function NetworkWiredIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 640 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 640;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 640 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 640 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z",
    fill: color
  }));
};

NetworkWiredIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var RegDotCircleIcon = function RegDotCircleIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z",
    fill: color
  }));
};

RegDotCircleIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var UniversityIcon = function UniversityIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M496 128v16a8 8 0 0 1-8 8h-24v12c0 6.627-5.373 12-12 12H60c-6.627 0-12-5.373-12-12v-12H24a8 8 0 0 1-8-8v-16a8 8 0 0 1 4.941-7.392l232-88a7.996 7.996 0 0 1 6.118 0l232 88A8 8 0 0 1 496 128zm-24 304H40c-13.255 0-24 10.745-24 24v16a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8v-16c0-13.255-10.745-24-24-24zM96 192v192H60c-6.627 0-12 5.373-12 12v20h416v-20c0-6.627-5.373-12-12-12h-36V192h-64v192h-64V192h-64v192h-64V192H96z",
    fill: color
  }));
};

UniversityIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var StreetViewIcon = function StreetViewIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M367.9 329.76c-4.62 5.3-9.78 10.1-15.9 13.65v22.94c66.52 9.34 112 28.05 112 49.65 0 30.93-93.12 56-208 56S48 446.93 48 416c0-21.6 45.48-40.3 112-49.65v-22.94c-6.12-3.55-11.28-8.35-15.9-13.65C58.87 345.34 0 378.05 0 416c0 53.02 114.62 96 256 96s256-42.98 256-96c0-37.95-58.87-70.66-144.1-86.24zM256 128c35.35 0 64-28.65 64-64S291.35 0 256 0s-64 28.65-64 64 28.65 64 64 64zm-64 192v96c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-96c17.67 0 32-14.33 32-32v-96c0-26.51-21.49-48-48-48h-11.8c-11.07 5.03-23.26 8-36.2 8s-25.13-2.97-36.2-8H208c-26.51 0-48 21.49-48 48v96c0 17.67 14.33 32 32 32z",
    fill: color
  }));
};

StreetViewIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var UserClockIcon = function UserClockIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 640 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 640;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 640 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 640 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z",
    fill: color
  }));
};

UserClockIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var GraduateIcon = function GraduateIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z",
    fill: color
  }));
};

GraduateIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ChatBubblesIcon = function ChatBubblesIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M132.8 368c-20.2 0-44.8-24.6-44.8-44.8V160h-9.6C61.7 160 48 173.7 48 190.4V464l58.5-58h215.1c16.7 0 30.4-14.1 30.4-30.9V368H132.8z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M429.1 48H149.9C130.7 48 115 63.7 115 82.9V309c0 19.2 15.7 35 34.9 35h238.2l75.9 53V82.9c0-19.2-15.7-34.9-34.9-34.9z",
    fill: color
  }));
};

ChatBubblesIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FacebookSquareIcon = function FacebookSquareIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z",
    fill: color
  }));
};

FacebookSquareIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var LinkedinSquareIcon = function LinkedinSquareIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
    fill: color
  }));
};

LinkedinSquareIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var AttachFileIcon = function AttachFileIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5a2.5 2.5 0 015 0v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5a2.5 2.5 0 005 0V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z",
    fill: color
  }));
};

AttachFileIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var StarHalfIcon = function StarHalfIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
    fill: color
  }));
};

StarHalfIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var StarBorderIcon = function StarBorderIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z",
    fill: color
  }));
};

StarBorderIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var GithubSquareIcon = function GithubSquareIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z",
    fill: color
  }));
};

GithubSquareIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var TwitterSquareIcon = function TwitterSquareIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z",
    fill: color
  }));
};

TwitterSquareIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ExternalLinkIcon = function ExternalLinkIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z",
    fill: color
  }));
};

ExternalLinkIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FileAltIcon = function FileAltIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 384 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z",
    fill: color
  }));
};

FileAltIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var PhoneIcon = function PhoneIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z",
    fill: color
  }));
};

PhoneIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var SkypeIcon = function SkypeIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z",
    fill: color
  }));
};

SkypeIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ShareIcon = function ShareIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M383.822 344.427c-16.045 0-31.024 5.326-41.721 15.979l-152.957-88.42c1.071-5.328 2.142-9.593 2.142-14.919 0-5.328-1.071-9.593-2.142-14.919l150.826-87.35c11.762 10.653 26.741 17.041 43.852 17.041 35.295 0 64.178-28.766 64.178-63.92C448 72.767 419.117 44 383.822 44c-35.297 0-64.179 28.767-64.179 63.92 0 5.327 1.065 9.593 2.142 14.919l-150.821 87.35c-11.767-10.654-26.741-17.041-43.856-17.041-35.296 0-63.108 28.766-63.108 63.92 0 35.153 28.877 63.92 64.178 63.92 17.115 0 32.089-6.389 43.856-17.042l151.891 88.421c-1.076 4.255-2.141 8.521-2.141 13.847 0 34.094 27.806 61.787 62.037 61.787 34.229 0 62.036-27.693 62.036-61.787.001-34.094-27.805-61.787-62.035-61.787z",
    fill: color
  }));
};

ShareIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var GoogleHangoutsIcon = function GoogleHangoutsIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12 0C6.2 0 1.5 4.7 1.5 10.5c0 5.5 5 10 10.5 10V24c6.35-3.1 10.5-8.2 10.5-13.5C22.5 4.7 17.8 0 12 0zm-.5 12c0 1.4-.9 2.5-2 2.5V12H7V7.5h4.5V12zm6 0c0 1.4-.9 2.5-2 2.5V12H13V7.5h4.5V12z",
    fill: color
  }));
};

GoogleHangoutsIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FontDownloadIcon = function FontDownloadIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z",
    fill: color
  }));
};

FontDownloadIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FormatBoldIcon = function FormatBoldIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z",
    fill: color
  }));
};

FormatBoldIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FormatClearIcon = function FormatClearIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M3.27 5L2 6.27l6.97 6.97L6.5 19h3l1.57-3.66L16.73 21 18 19.73 3.55 5.27 3.27 5zM6 5v.18L8.82 8h2.4l-.72 1.68 2.1 2.1L14.21 8H20V5H6z",
    fill: color
  }));
};

FormatClearIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FormatItalicIcon = function FormatItalicIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z",
    fill: color
  }));
};

FormatItalicIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FormatListBulletedIcon = function FormatListBulletedIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z",
    fill: color
  }));
};

FormatListBulletedIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FormatListNumberedIcon = function FormatListNumberedIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z",
    fill: color
  }));
};

FormatListNumberedIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FormatUnderlineIcon = function FormatUnderlineIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M0 0h24v24H0z",
    fill: "none"
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z",
    fill: color
  }));
};

FormatUnderlineIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ImageIcon = function ImageIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z",
    fill: color
  }));
};

ImageIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var RedoIcon = function RedoIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 017.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z",
    fill: color
  }));
};

RedoIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var UndoIcon = function UndoIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z",
    fill: color
  }));
};

UndoIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var TrashIcon = function TrashIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z",
    fill: color
  }));
};

TrashIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CalendarCheckIcon = function CalendarCheckIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M400 64h-48V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H160V12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v52H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V160h352v298a6 6 0 0 1-6 6zm-52.849-200.65L198.842 404.519c-4.705 4.667-12.303 4.637-16.971-.068l-75.091-75.699c-4.667-4.705-4.637-12.303.068-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l44.104 44.461 111.072-110.181c4.705-4.667 12.303-4.637 16.971.068l22.536 22.718c4.667 4.705 4.636 12.303-.069 16.97z",
    fill: color
  }));
};

CalendarCheckIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var BanIcon = function BanIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z",
    fill: color
  }));
};

BanIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var SignInIcon = function SignInIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z",
    fill: color
  }));
};

SignInIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ThumbsUpIcon = function ThumbsUpIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z",
    fill: color
  }));
};

ThumbsUpIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var TrophyIcon = function TrophyIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 576 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 576;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 576 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 576 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 35.7 22.5 72.4 61.9 100.7 31.5 22.7 69.8 37.1 110 41.7C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6c40.3-4.6 78.6-19 110-41.7 39.3-28.3 61.9-65 61.9-100.7V88c0-13.3-10.7-24-24-24zM99.3 192.8C74.9 175.2 64 155.6 64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-15.1-5.2-29.2-12.4-41.7-21.4zM512 144c0 16.1-17.7 36.1-35.3 48.8-12.5 9-26.7 16.2-41.8 21.4 7-25 11.8-53.6 12.8-86.2H512v16z",
    fill: color
  }));
};

TrophyIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var MapSignsIcon = function MapSignsIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M507.31 84.69L464 41.37c-6-6-14.14-9.37-22.63-9.37H288V16c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v16H56c-13.25 0-24 10.75-24 24v80c0 13.25 10.75 24 24 24h385.37c8.49 0 16.62-3.37 22.63-9.37l43.31-43.31c6.25-6.26 6.25-16.38 0-22.63zM224 496c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V384h-64v112zm232-272H288v-32h-64v32H70.63c-8.49 0-16.62 3.37-22.63 9.37L4.69 276.69c-6.25 6.25-6.25 16.38 0 22.63L48 342.63c6 6 14.14 9.37 22.63 9.37H456c13.25 0 24-10.75 24-24v-80c0-13.25-10.75-24-24-24z",
    fill: color
  }));
};

MapSignsIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var BriefCaseIcon = function BriefCaseIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z",
    fill: color
  }));
};

BriefCaseIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var SmileIcon = function SmileIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 496 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 496;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 496 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 496 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z",
    fill: color
  }));
};

SmileIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var SmileGrinHeartsIcon = function SmileGrinHeartsIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 496 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 496;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 496 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 496 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zM90.4 183.6c6.7-17.6 26.7-26.7 44.9-21.9l7.1 1.9 2-7.1c5-18.1 22.8-30.9 41.5-27.9 21.4 3.4 34.4 24.2 28.8 44.5L195.3 243c-1.2 4.5-5.9 7.2-10.5 6l-70.2-18.2c-20.4-5.4-31.9-27-24.2-47.2zM248 432c-60.6 0-134.5-38.3-143.8-93.3-2-11.8 9.2-21.5 20.7-17.9C155.1 330.5 200 336 248 336s92.9-5.5 123.1-15.2c11.4-3.6 22.6 6.1 20.7 17.9-9.3 55-83.2 93.3-143.8 93.3zm133.4-201.3l-70.2 18.2c-4.5 1.2-9.2-1.5-10.5-6L281.3 173c-5.6-20.3 7.4-41.1 28.8-44.5 18.6-3 36.4 9.8 41.5 27.9l2 7.1 7.1-1.9c18.2-4.7 38.2 4.3 44.9 21.9 7.7 20.3-3.8 41.9-24.2 47.2z",
    fill: color
  }));
};

SmileGrinHeartsIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var BinocularsIcon = function BinocularsIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M416 48c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v48h96V48zM63.91 159.99C61.4 253.84 3.46 274.22 0 404v44c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V288h32V128H95.84c-17.63 0-31.45 14.37-31.93 31.99zm384.18 0c-.48-17.62-14.3-31.99-31.93-31.99H320v160h32v160c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-44c-3.46-129.78-61.4-150.16-63.91-244.01zM176 32h-64c-8.84 0-16 7.16-16 16v48h96V48c0-8.84-7.16-16-16-16zm48 256h64V128h-64v160z",
    fill: color
  }));
};

BinocularsIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ToolsIcon = function ToolsIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z",
    fill: color
  }));
};

ToolsIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CompassIcon = function CompassIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 496 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 496;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 496 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 496 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25 12.49 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.5-12.49-32.76-12.49-45.25 0zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm126.14 148.05L308.17 300.4a31.938 31.938 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.938 31.938 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2z",
    fill: color
  }));
};

CompassIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var MoutainIcon = function MoutainIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 640 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 640;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 640 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 640 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M634.92 462.7l-288-448C341.03 5.54 330.89 0 320 0s-21.03 5.54-26.92 14.7l-288 448a32.001 32.001 0 0 0-1.17 32.64A32.004 32.004 0 0 0 32 512h576c11.71 0 22.48-6.39 28.09-16.67a31.983 31.983 0 0 0-1.17-32.63zM320 91.18L405.39 224H320l-64 64-38.06-38.06L320 91.18z",
    fill: color
  }));
};

MoutainIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CalculatorIcon = function CalculatorIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M400 0H48C22.4 0 0 22.4 0 48v416c0 25.6 22.4 48 48 48h352c25.6 0 48-22.4 48-48V48c0-25.6-22.4-48-48-48zM128 435.2c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm0-128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8v-38.4c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v38.4zm128 128c0 6.4-6.4 12.8-12.8 12.8h-38.4c-6.4 0-12.8-6.4-12.8-12.8V268.8c0-6.4 6.4-12.8 12.8-12.8h38.4c6.4 0 12.8 6.4 12.8 12.8v166.4zm0-256c0 6.4-6.4 12.8-12.8 12.8H76.8c-6.4 0-12.8-6.4-12.8-12.8V76.8C64 70.4 70.4 64 76.8 64h294.4c6.4 0 12.8 6.4 12.8 12.8v102.4z",
    fill: color
  }));
};

CalculatorIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var HandHoldingHeartIcon = function HandHoldingHeartIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 576 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 576;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 576 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 576 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M275.3 250.5c7 7.4 18.4 7.4 25.5 0l108.9-114.2c31.6-33.2 29.8-88.2-5.6-118.8-30.8-26.7-76.7-21.9-104.9 7.7L288 36.9l-11.1-11.6C248.7-4.4 202.8-9.2 172 17.5c-35.3 30.6-37.2 85.6-5.6 118.8l108.9 114.2zm290 77.6c-11.8-10.7-30.2-10-42.6 0L430.3 402c-11.3 9.1-25.4 14-40 14H272c-8.8 0-16-7.2-16-16s7.2-16 16-16h78.3c15.9 0 30.7-10.9 33.3-26.6 3.3-20-12.1-37.4-31.6-37.4H192c-27 0-53.1 9.3-74.1 26.3L71.4 384H16c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h356.8c14.5 0 28.6-4.9 40-14L564 377c15.2-12.1 16.4-35.3 1.3-48.9z",
    fill: color
  }));
};

HandHoldingHeartIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var SmileWinkIcon = function SmileWinkIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 496 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 496;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 496 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 496 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M0 256c0 137 111 248 248 248s248-111 248-248S385 8 248 8 0 119 0 256zm200-48c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32zm158.5 16.5c-14.8-13.2-46.2-13.2-61 0L288 233c-8.3 7.4-21.6.4-19.8-10.8 4-25.2 34.2-42.1 59.9-42.1S384 197 388 222.2c1.7 11.1-11.4 18.3-19.8 10.8l-9.7-8.5zM157.8 325.8C180.2 352.7 213 368 248 368s67.8-15.4 90.2-42.2c13.6-16.2 38.1 4.2 24.6 20.5C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.5-16.3 11.2-36.7 24.6-20.4z",
    fill: color
  }));
};

SmileWinkIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var BoltIcon = function BoltIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 320 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z",
    fill: color
  }));
};

BoltIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var OctopussDeployIcon = function OctopussDeployIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M455.6,349.2c-45.891-39.09-36.67-77.877-16.095-128.11C475.16,134.04,415.967,34.14,329.93,8.3,237.04-19.6,134.252,24.341,99.677,117.147a180.862,180.862,0,0,0-10.988,73.544c1.733,29.543,14.717,52.97,24.09,80.3,17.2,50.161-28.1,92.743-66.662,117.582-46.806,30.2-36.319,39.857-8.428,41.858,23.378,1.68,44.478-4.548,65.265-15.045,9.2-4.647,40.687-18.931,45.13-28.588C135.9,413.388,111.122,459.5,126.621,488.9c19.1,36.229,67.112-31.77,76.709-45.812,8.591-12.572,42.963-81.279,63.627-46.926,18.865,31.361,8.6,76.391,35.738,104.622,32.854,34.2,51.155-18.312,51.412-44.221.163-16.411-6.1-95.852,29.9-59.944C405.428,418,436.912,467.8,472.568,463.642c38.736-4.516-22.123-67.967-28.262-78.695,5.393,4.279,53.665,34.128,53.818,9.52C498.234,375.678,468.039,359.8,455.6,349.2Z",
    fill: color
  }));
};

OctopussDeployIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var BatteryThreeQuartersIcon = function BatteryThreeQuartersIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 640 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 640;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 640 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 640 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-144 96H96v128h320V192z",
    fill: color
  }));
};

BatteryThreeQuartersIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var DumbbellIcon = function DumbbellIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 640 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 640;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 640 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 640 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M104 96H56c-13.3 0-24 10.7-24 24v104H8c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h24v104c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24zm528 128h-24V120c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h24c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM456 32h-48c-13.3 0-24 10.7-24 24v168H256V56c0-13.3-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V288h128v168c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24z",
    fill: color
  }));
};

DumbbellIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CreditCardIcon = function CreditCardIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 576 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 576;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 576 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 576 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V256H0v176zm192-68c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-40zm-128 0c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM576 80v48H0V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48z",
    fill: color
  }));
};

CreditCardIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var InfoCircleIcon = function InfoCircleIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z",
    fill: color
  }));
};

InfoCircleIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var PauseIcon = function PauseIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z",
    fill: color
  }));
};

PauseIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var PlayIcon = function PlayIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z",
    fill: color
  }));
};

PlayIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ShoppingCartIcon = function ShoppingCartIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 576 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 576;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 576 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 576 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z",
    fill: color
  }));
};

ShoppingCartIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ShieldCheckmarkIcon = function ShieldCheckmarkIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M479.07 111.36l-.79-12.53-12.36-2.21c-86.5-15.52-122.61-26.74-203.33-63.2l-6.59-3-6.59 3C168.69 69.88 132.58 81.1 46.08 96.62l-12.36 2.21-.79 12.53c-3.85 61.11 4.36 118.05 24.43 169.24A349.47 349.47 0 00129 393.11c53.47 56.73 110.24 81.37 121.07 85.73l6 2.41 6-2.41c10.83-4.36 67.6-29 121.07-85.73a349.47 349.47 0 0071.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24zm-252.91 216L153.37 256l22.4-22.86 48.47 47.49 110.13-127.2 24.2 20.94z",
    fill: color
  }));
};

ShieldCheckmarkIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ArrowRepeatIcon = function ArrowRepeatIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z",
    fill: color
  }), /*#__PURE__*/React.createElement(Path, {
    d: "M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z",
    fill: color
  }));
};

ArrowRepeatIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var AddCircleIcon = function AddCircleIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z",
    fill: color
  }));
};

AddCircleIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var EyedropperIcon = function EyedropperIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M15.414 0.586c-0.781-0.781-2.047-0.781-2.828 0l-2.689 2.689-1.896-1.896-2.121 2.121 1.663 1.663-7.377 7.377c-0.126 0.126-0.179 0.296-0.161 0.46h-0.004v2.5c0 0.276 0.224 0.5 0.5 0.5h2.5c0 0 0.042 0 0.063 0 0.144 0 0.288-0.055 0.398-0.165l7.377-7.377 1.663 1.663 2.121-2.121-1.896-1.896 2.689-2.689c0.781-0.781 0.781-2.047 0-2.828zM2.705 15h-1.705v-1.705l7.337-7.337 1.704 1.704-7.337 7.337z",
    fill: color
  }));
};

EyedropperIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ImageEditIcon = function ImageEditIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M20 3c.552 0 1 .448 1 1v1.757l-2 2V5H5v8.1l4-4 4.328 4.329-1.327 1.327-.006 4.239 4.246.006 1.33-1.33L18.899 19H19v-2.758l2-2V20c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm1.778 4.808l1.414 1.414L15.414 17l-1.416-.002.002-1.412 7.778-7.778zM15.5 7c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5S14 9.328 14 8.5 14.672 7 15.5 7z",
    fill: color
  }));
};

ImageEditIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ReplyIcon = function ReplyIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M8.309 189.836L184.313 37.851C199.719 24.546 224 35.347 224 56.015v80.053c160.629 1.839 288 34.032 288 186.258 0 61.441-39.581 122.309-83.333 154.132-13.653 9.931-33.111-2.533-28.077-18.631 45.344-145.012-21.507-183.51-176.59-185.742V360c0 20.7-24.3 31.453-39.687 18.164l-176.004-152c-11.071-9.562-11.086-26.753 0-36.328z",
    fill: color
  }));
};

ReplyIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var MoreVerticalIcon = function MoreVerticalIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
    fill: color
  }));
};

MoreVerticalIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var MicrophoneIcon = function MicrophoneIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 352 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 352;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 352 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 352 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z",
    fill: color
  }));
};

MicrophoneIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var StopIcon = function StopIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z",
    fill: color
  }));
};

StopIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ControlPointDuplicateIcon = function ControlPointDuplicateIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16A6.99 6.99 0 012 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z",
    fill: color
  }));
};

ControlPointDuplicateIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var EditIcon = function EditIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 576 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 576;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 576 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 576 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z",
    fill: color
  }));
};

EditIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CheckSquareIcon = function CheckSquareIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z",
    fill: color
  }));
};

CheckSquareIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CallSplitIcon = function CallSplitIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M14 4l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10V4zm-4 0H4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3z",
    fill: color
  }));
};

CallSplitIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var EuroIcon = function EuroIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 320 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M310.706 413.765c-1.314-6.63-7.835-10.872-14.424-9.369-10.692 2.439-27.422 5.413-45.426 5.413-56.763 0-101.929-34.79-121.461-85.449h113.689a12 12 0 0 0 11.708-9.369l6.373-28.36c1.686-7.502-4.019-14.631-11.708-14.631H115.22c-1.21-14.328-1.414-28.287.137-42.245H261.95a12 12 0 0 0 11.723-9.434l6.512-29.755c1.638-7.484-4.061-14.566-11.723-14.566H130.184c20.633-44.991 62.69-75.03 117.619-75.03 14.486 0 28.564 2.25 37.851 4.145 6.216 1.268 12.347-2.498 14.002-8.623l11.991-44.368c1.822-6.741-2.465-13.616-9.326-14.917C290.217 34.912 270.71 32 249.635 32 152.451 32 74.03 92.252 45.075 176H12c-6.627 0-12 5.373-12 12v29.755c0 6.627 5.373 12 12 12h21.569c-1.009 13.607-1.181 29.287-.181 42.245H12c-6.627 0-12 5.373-12 12v28.36c0 6.627 5.373 12 12 12h30.114C67.139 414.692 145.264 480 249.635 480c26.301 0 48.562-4.544 61.101-7.788 6.167-1.595 10.027-7.708 8.788-13.957l-8.818-44.49z",
    fill: color
  }));
};

EuroIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var MapMarkerIcon = function MapMarkerIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 384 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z",
    fill: color
  }));
};

MapMarkerIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var HistoryIcon = function HistoryIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z",
    fill: color
  }));
};

HistoryIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var EnveloppeCheckIcon = function EnveloppeCheckIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M22 13.341A6 6 0 0 0 14.341 21H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9.341zm-9.94-1.658L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439zM19 22l-3.536-3.536 1.415-1.414L19 19.172l3.536-3.536 1.414 1.414L19 22z",
    fill: color
  }));
};

EnveloppeCheckIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var UserPlusIcon = function UserPlusIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 640 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 640;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 640 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 640 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z",
    fill: color
  }));
};

UserPlusIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CodeBranchIcon = function CodeBranchIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
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
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 384 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M384 144c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 36.4 24.3 67.1 57.5 76.8-.6 16.1-4.2 28.5-11 36.9-15.4 19.2-49.3 22.4-85.2 25.7-28.2 2.6-57.4 5.4-81.3 16.9v-144c32.5-10.2 56-40.5 56-76.3 0-44.2-35.8-80-80-80S0 35.8 0 80c0 35.8 23.5 66.1 56 76.3v199.3C23.5 365.9 0 396.2 0 432c0 44.2 35.8 80 80 80s80-35.8 80-80c0-34-21.2-63.1-51.2-74.6 3.1-5.2 7.8-9.8 14.9-13.4 16.2-8.2 40.4-10.4 66.1-12.8 42.2-3.9 90-8.4 118.2-43.4 14-17.4 21.1-39.8 21.6-67.9 31.6-10.8 54.4-40.7 54.4-75.9zM80 64c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm0 384c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16zm224-320c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16z",
    fill: color
  }));
};

CodeBranchIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var UserAssignmentIcon = function UserAssignmentIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z",
    fill: color
  }));
};

UserAssignmentIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var CloseCircleIcon = function CloseCircleIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z",
    fill: color
  }));
};

CloseCircleIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var ListAltIcon = function ListAltIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M464 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zM128 120c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm0 96c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288-136v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12zm0 96v-32c0-6.627-5.373-12-12-12H204c-6.627 0-12 5.373-12 12v32c0 6.627 5.373 12 12 12h200c6.627 0 12-5.373 12-12z",
    fill: color
  }));
};

ListAltIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var MinusIcon = function MinusIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 448 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 448;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 448 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 448 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
    fill: color
  }));
};

MinusIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var FolderOpenedIcon = function FolderOpenedIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? null : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? null : _ref$width;
  return /*#__PURE__*/React.createElement(Svg, {
    width: width || height || 16,
    height: height || width || 16,
    viewBox: "0 0 512 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M448 119c0-13.3-9.4-23-22.8-23H230.9c-2.8 0-4.3-.6-6.1-2.4l-22.5-22.5-.2-.2c-4.9-4.6-8.9-6.9-17.3-6.9H88.7C74.9 64 64 74.3 64 87v73h384v-41zM64 188h-8.3c-12.8 0-25.3 5.1-23.5 24.3C34 231.5 55.7 423 55.7 423c2.7 17.8 11.7 25 25 25h352.5c12.7 0 21-7.8 23-25 0 0 22.2-184.9 23.6-205.5 1.4-20.5-8.9-29.5-23.6-29.5H64z",
    fill: color
  }));
};

FolderOpenedIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var HandsHelpingIcon = function HandsHelpingIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 640 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 640;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 640 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 640 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z",
    fill: color
  }));
};

HandsHelpingIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var MobileIcon = function MobileIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 10 * 16 / 14;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 14 / 10;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 10 * heightProp / 14;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 10 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M7.33329 0.583333H2.66663C1.69829 0.583333 0.916626 1.365 0.916626 2.33333V11.6667C0.916626 12.635 1.69829 13.4167 2.66663 13.4167H7.33329C8.30163 13.4167 9.08329 12.635 9.08329 11.6667V2.33333C9.08329 1.365 8.30163 0.583333 7.33329 0.583333ZM6.16663 12.25H3.83329V11.6667H6.16663V12.25ZM8.06246 10.5H1.93746V2.33333H8.06246V10.5Z",
    fill: color
  }));
};

MobileIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

var SignatureIcon = function SignatureIcon(_ref) {
  var _ref$color = _ref.color,
      color = _ref$color === void 0 ? theme.colors.textPrimary : _ref$color,
      _ref$width = _ref.width,
      widthProp = _ref$width === void 0 ? null : _ref$width,
      _ref$height = _ref.height,
      heightProp = _ref$height === void 0 ? null : _ref$height;

  var dimensions = function dimensions() {
    var width = 640 * 16 / 512;
    var height = 16;

    if (widthProp && heightProp) {
      height = heightProp;
      width = widthProp;
    }

    if (widthProp && !heightProp) {
      height = widthProp * 512 / 640;
      width = widthProp;
    }

    if (!widthProp && heightProp) {
      width = 640 * heightProp / 512;
      height = heightProp;
    }

    return {
      height: height,
      width: width
    };
  };

  return /*#__PURE__*/React.createElement(Svg, {
    width: dimensions().width,
    height: dimensions().height,
    viewBox: "0 0 640 512",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(Path, {
    d: "M623.2 192c-51.8 3.5-125.7 54.7-163.1 71.5-29.1 13.1-54.2 24.4-76.1 24.4-22.6 0-26-16.2-21.3-51.9 1.1-8 11.7-79.2-42.7-76.1-25.1 1.5-64.3 24.8-169.5 126L192 182.2c30.4-75.9-53.2-151.5-129.7-102.8L7.4 116.3C0 121-2.2 130.9 2.5 138.4l17.2 27c4.7 7.5 14.6 9.7 22.1 4.9l58-38.9c18.4-11.7 40.7 7.2 32.7 27.1L34.3 404.1C27.5 421 37 448 64 448c8.3 0 16.5-3.2 22.6-9.4 42.2-42.2 154.7-150.7 211.2-195.8-2.2 28.5-2.1 58.9 20.6 83.8 15.3 16.8 37.3 25.3 65.5 25.3 35.6 0 68-14.6 102.3-30 33-14.8 99-62.6 138.4-65.8 8.5-.7 15.2-7.3 15.2-15.8v-32.1c.2-9.1-7.5-16.8-16.6-16.2z",
    fill: color
  }));
};

SignatureIcon.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number // used for null
  ]),
  height: PropTypes.number,
  with: PropTypes.number
};

export { AccountPinCircleFillIcon, AddCircleIcon, AddCircleOutlineIcon, AnalyticsOutlineIcon, AppsIcon, ArrowForwardIcon, ArrowRepeatIcon, AttachFileIcon, BanIcon, BatteryThreeQuartersIcon, BinocularsIcon, BoltIcon, BookmarkAltIcon, BookmarkIcon, BriefCaseIcon, BuildingIcon, BullhornIcon, CalculatorIcon, CalendarCheckIcon, CalendarIcon, CallSplitIcon, CameraIcon, CaretDownIcon, CaretUpIcon, ChatBubbleIcon, ChatBubblesIcon, CheckCircleIcon, CheckIcon, CheckSquareIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, CircleIcon, ClipboardListIcon, CloneIcon, CloseCircleIcon, CloseIcon, CodeBranchIcon, CogIcon, CollectionsBookmarkIcon, ColorPaletteIcon, ColumnsIcon, CompassIcon, ContentPasteIcon, ControlPointDuplicateIcon, CreditCardIcon, DonutIcon, DownloadIcon, DumbbellIcon, EditIcon, EnvelopeIcon, EnveloppeCheckIcon, ErrorIcon, EuroIcon, ExternalLinkIcon, EyeIcon, EyeOffIcon, EyedropperIcon, FacebookIcon, FacebookSquareIcon, FileAltIcon, FileIcon, FileInvoiceDollarIcon, FilterIcon, FolderIcon, FolderOpenedIcon, FontDownloadIcon, FormatAlignLeftIcon, FormatBoldIcon, FormatClearIcon, FormatItalicIcon, FormatListBulletedIcon, FormatListNumberedIcon, FormatUnderlineIcon, GiftIcon, GithubSquareIcon, GlobeEuropeIcon, GlobeIcon, GoogleHangoutsIcon, GraduateIcon, GridIcon, HandHoldingHeartIcon, HandsHelpingIcon, HeartIcon, HistoryIcon, ImageEditIcon, ImageIcon, InfoCircleIcon, InstagramIcon, KeyIcon, LayerGroupIcon, LinkIcon, LinkedinIcon, LinkedinSquareIcon, ListAltIcon, LockIcon, LockOpenIcon, LogoFlatchr, MapMarkerIcon, MapSignsIcon, MenuFoldIcon, MenuIcon, MenuUnfoldIcon, MergeIcon, MicrophoneIcon, MinusIcon, MobileIcon, MoreVerticalIcon, MoutainIcon, NetworkWiredIcon, NotificationsActiveIcon, NotificationsIcon, OctopussDeployIcon, PaperPlaneIcon, PauseIcon, PenIcon, PeopleIcon, PhoneIcon, PlayCircleIcon, PlayIcon, PlusIcon, PublishIcon, RandomIcon, RedoIcon, RedoLoopIcon, RegDotCircleIcon, RegisterListAltIcon, RemoveCircleOutlineIcon, ReplyIcon, SaveIcon, SearchIcon, ShareIcon, ShieldAltIcon, ShieldCheckmarkIcon, ShoppingCartIcon, SignInIcon, SignatureIcon, SkypeIcon, SmileGrinHeartsIcon, SmileIcon, SmileWinkIcon, SourceTreeIcon, StarBorderIcon, StarHalfIcon, StarIcon, StopIcon, StoreAltIcon, StreetViewIcon, TableAltIcon, TachometerAltIcon, TagsIcon, ThumbsUpIcon, ToolsIcon, TrashBinIcon, TrashIcon, TrophyIcon, TwitterIcon, TwitterSquareIcon, UndoIcon, UniversityIcon, UserAssignmentIcon, UserClockIcon, UserIcon, UserLockIcon, UserPlusIcon, VectorSquareIcon, YoutubeIcon };
