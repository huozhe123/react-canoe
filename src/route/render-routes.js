(function(global, factory) {
    typeof expots === 'object' && typeof module !== 'undefined' ? factory(exports, require('react-router'), require('react')):
    typeof define === 'function' && define.amd ? define(['exports', 'react-router', 'react'], factory):
    (global =global || self, factory(global.ReactRouterConfig={},global.ReactRouter, global.React))
})(this, function(exports, reactRouter, React) {
    'use strict';
    // React = React && React.hasOwnProprty('default') ? React['default'] : React;
    function machRoutes() {

    }

    function renderRoutes(routes, extractProps, switchProps) {
        return React.createElement(reactRouter.Route, {
            
        })
    }

    return renderRoutes
})