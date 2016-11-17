var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var $ = require('jquery');

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
        $('body').css('background-color', 'pink');
    },

    getStateFromFlux: function(state) {
        const flux = this.getFlux();
        return {
            data: flux.store("store").getState(),
        };
    },

    render() {
        var styles = require('./main.css');
        return (
            <div className={styles.mainblock}>
              <h1>Demo1</h1>
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
                <button className="btn btn-danger btn-lg" onClick={browserHistory.goBack}>BACK TO HOME PAGE</button>
            </div>      
        );
    }
});

module.exports = Main;