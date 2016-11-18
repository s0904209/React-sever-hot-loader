var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var Fluxxor = require('fluxxor');
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;
var $ = require('jquery');

var Bootstrap = require('react-bootstrap');
var DropdownButton = Bootstrap.DropdownButton;
var MenuItem = Bootstrap.MenuItem;
var Grid = Bootstrap.Grid;
var Col = Bootstrap.Col;
var Row = Bootstrap.Row;

var Main = React.createClass({
    mixins: [FluxMixin, StoreWatchMixin('store')],

    getInitialState: function() {
        return {
          key: 0
        };
    },



    componentDidMount: function() {
        this.props.flux.actions.load();
        $('body').css('background-color', 'pink');
    },

    getStateFromFlux: function(state) {
        const flux = this.getFlux();
        const data = flux.store("store").getState();

        return {
            data
        };
    },

    render() {
        var styles = require('./main.css');
        const key = this.state.key;
        const item = this.state.data ? this.state.data[key] : {};
        const address = item ? item.address1 + ',' + item.address2 + ',' + item.address3 + ',' + item.city + ',' + item.postcode : '';
        const name = item ? item.name : '';

        return (
            <div className={styles.mainblock}>
              <h1>Demo1</h1>
              <div>
                       <div><h2>Find Pharmacy:</h2></div>
                         <DropdownButton bsStyle='primary' title={name} id='dropdown-basic'>
                           {this.state.data.map((item, idx) =>
                           <MenuItem key={idx} eventKey={idx} onSelect={(key) => this.setState({ key })} >
                             {`${item.name}`}
                           </MenuItem>
                           )}
                          </DropdownButton>
                        <div><h2>Address:</h2></div>
                        <h4>{ address }</h4>
             </div>
                <button className="btn btn-danger btn-lg" onClick={browserHistory.goBack}>BACK TO HOME PAGE</button>
            </div>      
        );
    }
});

module.exports = Main;