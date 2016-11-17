var React = require('react');

var Main = require('./main.js');
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

var mainwrapper = React.createClass({
  render: function () {
    return (
        <Main flux={flux} />
    );
  }
});

module.exports = mainwrapper;
