'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _index = require('next\\dist\\lib\\router\\index.js');

var _index2 = _interopRequireDefault(_index);

var _nprogress = require('nprogress');

var _nprogress2 = _interopRequireDefault(_nprogress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\dev\\apps\\r-next\\components\\MyHeaders.js';


_index2.default.onRouteChangeStart = function (url) {
    _nprogress2.default.start();
    // ga('set', 'page', url);
    // ga('send', 'pageview');
    // console.log(`Loading: ${url}`)
};
_index2.default.onRouteChangeComplete = function () {
    return _nprogress2.default.done();
};
_index2.default.onRouteChangeError = function () {
    return _nprogress2.default.done();
};

var linkStyle = {
    margin: '0 10px 0 0'
};

var MyHeaders = function (_React$Component) {
    (0, _inherits3.default)(MyHeaders, _React$Component);

    function MyHeaders() {
        (0, _classCallCheck3.default)(this, MyHeaders);

        return (0, _possibleConstructorReturn3.default)(this, (MyHeaders.__proto__ || (0, _getPrototypeOf2.default)(MyHeaders)).apply(this, arguments));
    }

    (0, _createClass3.default)(MyHeaders, [{
        key: 'render',
        value: function render() {
            // const title = this.props.title
            //     ? `${this.props.title} | OnlineWagerReview.com`
            //     : `Online Betting Tutorials, Sportsbook, Casino, Poker Review | OnlineWagerReview.com`

            var title = "ReportsDFS.com";
            return _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                }
            }, _react2.default.createElement('title', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, title), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }), _react2.default.createElement('script', { src: 'https://code.jquery.com/jquery-3.1.1.slim.min.js', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }), _react2.default.createElement('script', { src: 'https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }), _react2.default.createElement('script', { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/css/styles.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/css/nprogress.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }));
        }
    }]);

    return MyHeaders;
}(_react2.default.Component);

exports.default = MyHeaders;