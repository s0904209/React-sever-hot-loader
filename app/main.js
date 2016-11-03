var React = require('react');
var TestOne = require('./TestOne.js');
var TestTwo = require('./TestTwo.js');
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Main = React.createClass({
    getInitialState: function() {
        return {
          switch: true
        };
    },
    _toggle() {
        this.setState({
            switch: !this.state.switch
        });
    },

    mixins: [FluxMixin, StoreWatchMixin('store')],
    componentDidMount: function() {
        this.props.flux.actions.load();
    },

    getStateFromFlux: function(state) {
        const flux = this.getFlux();
        return {
            data: flux.store("store").getState(),
        };
    },

    render() {
        return (
            <div>
                <input type="button" className="btn btn-danger" onClick={this._toggle} value="Press Me!"/>
                {this.state.switch ? <TestOne /> : <TestTwo />}

                {this.state.data.map(item => {
                  return (
                    <div key={item.name}>
                        <div>
                            <strong><span>Find Pharmacy:</span></strong>
                            <span>{item.name}</span>
                        </div>
                        <div>
                            <strong><span>Address:</span></strong>
                            <span>{`${item.address1} ${item.address2} ${item.address3} ${item.city} ${item.postcode}`}</span>
                        </div>
                    </div>
                  );
                })}
            </div>      
        );
    }
});

module.exports = Main;