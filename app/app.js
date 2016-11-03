var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('./main');
var actions = require('./actions');

var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var store = require('./store');
var stores = {
  store: new store()
};

var flux = new Fluxxor.Flux(stores, actions);

flux.on('dispatch', function(type, payload) {
    if (console && console.log) {
        console.log('[Dispatch]', type, payload);
    }
});

ReactDOM.render(<Main flux={flux} />, document.body);