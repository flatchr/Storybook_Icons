(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{475:function(module,exports,__webpack_require__){__webpack_require__(476),__webpack_require__(869),__webpack_require__(861),__webpack_require__(870),__webpack_require__(871),__webpack_require__(862),__webpack_require__(865),__webpack_require__(864),__webpack_require__(866),__webpack_require__(863),__webpack_require__(867),__webpack_require__(868),module.exports=__webpack_require__(860)},542:function(module,exports){},860:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(75),__webpack_require__(30),__webpack_require__(41);var react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__),camelcase__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(467),camelcase__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_4__),_storybook_addons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(102),_storybook_addons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(313),_storybook_api__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(7),_storybook_components__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(174),_storybook_components__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(59),DownloadButton=function DownloadButton(_ref){var active=_ref.active,_useStorybookState=Object(_storybook_api__WEBPACK_IMPORTED_MODULE_7__.p)(),storyId=_useStorybookState.storyId,viewModeState=_useStorybookState.viewMode;return"iconography-all--default"!==storyId&&"story"===viewModeState?react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_8__.a,{active:active,title:"Download as SVG",onClick:function onDownload(){!function downloadURI(uri){var link=document.createElement("a"),name=storyId.replace("-story","").replace("iconography-icons--","").replace("iconography-career--","");link.download="".concat(camelcase__WEBPACK_IMPORTED_MODULE_4___default()(name,{pascalCase:!0}),".svg"),link.href=uri,document.body.appendChild(link),link.click(),document.body.removeChild(link)}(function getDownloadContent(){var source=document.getElementById("storybook-preview-iframe").contentWindow.document.getElementById("root").innerHTML;return source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)||(source=source.replace(/^<svg/,'<svg xmlns="http://www.w3.org/2000/svg"')),source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)||(source=source.replace(/^<svg/,'<svg xmlns:xlink="http://www.w3.org/1999/xlink"')),source='<?xml version="1.0" standalone="no"?>\r\n'.concat(source),"data:image/svg+xml;charset=utf-8,".concat(encodeURIComponent(source))}())}},react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_storybook_components__WEBPACK_IMPORTED_MODULE_9__.a,{icon:"download"})):null};_storybook_addons__WEBPACK_IMPORTED_MODULE_5__.a.register("flatch/downloadSvg",(function(){_storybook_addons__WEBPACK_IMPORTED_MODULE_5__.a.add("flatch/toolbar-download-svg",{title:"Download SVG Toolbar button",type:_storybook_addons__WEBPACK_IMPORTED_MODULE_6__.a.TOOL,match:function match(_ref2){var viewMode=_ref2.viewMode;return!(!viewMode||!viewMode.match(/^(story|docs)$/))},render:function render(_ref3){var active=_ref3.active;return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DownloadButton,{active:active})}})}))},869:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var esm=__webpack_require__(102),create=__webpack_require__(219),FlatchrTheme=Object(create.a)({base:"light",brandTitle:"Flatchr's icons",brandImage:"https://www.flatchr.io/hs-fs/hubfs/logo-flatchr-1.png?width=157&name=logo-flatchr-1.png"});esm.a.setConfig({theme:FlatchrTheme})}},[[475,2,3]]]);