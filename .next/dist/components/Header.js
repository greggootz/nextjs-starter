'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\dev\\apps\\r-next\\components\\Header.js';

exports.default = function () {
    return _react2.default.createElement('nav', { className: 'navbar navbar-toggleable-md bg-faded navbar-inverse bg-primary', __source: {
            fileName: _jsxFileName,
            lineNumber: 5
        }
    }, _react2.default.createElement('button', { className: 'navbar-toggler navbar-toggler-right',
        type: 'button',
        'data-toggle': 'collapse',
        'data-target': '#navbarSupportedContent',
        'aria-controls': 'navbarSupportedContent',
        'aria-expanded': 'false',
        'aria-label': 'Toggle navigation', __source: {
            fileName: _jsxFileName,
            lineNumber: 6
        }
    }, _react2.default.createElement('span', { className: 'navbar-toggler-icon', __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    })), _react2.default.createElement(_routes.Link, { route: 'index', __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement('a', { className: 'navbar-brand', __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, 'ReportsDFS')), _react2.default.createElement('div', { className: 'collapse navbar-collapse', id: 'navbarSupportedContent', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement('ul', { className: 'navbar-nav mr-auto', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement('li', { className: 'nav-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement(_routes.Link, { route: 'index', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement('a', { className: 'nav-link', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, 'Home'))), _react2.default.createElement('li', { className: 'nav-item', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement(_routes.Link, { route: 'blog', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement('a', { className: 'nav-link', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, 'Blog'))))));
};