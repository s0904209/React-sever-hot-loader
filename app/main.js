var React = require('react');
var Fluxxor = require('fluxxor');
var Bootstrap = require('react-bootstrap');
var DropdownButton = Bootstrap.DropdownButton;
var MenuItem = Bootstrap.MenuItem;
var Grid = Bootstrap.Grid;
var Col = Bootstrap.Col;
var Row = Bootstrap.Row;
var FluxMixin = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Main = React.createClass({
  mixins: [FluxMixin, StoreWatchMixin('store')],

  getInitialState: function() {
    return {
      key: 0
    };
  },

  componentDidMount: function() {
    this.props.flux.actions.load();
  },

  getStateFromFlux: function(state) {
    const flux = this.getFlux();
    const data = flux.store("store").getState();

    return {
      data
    };
  },

  render() {
    const key = this.state.key;
    const item = this.state.data ? this.state.data[key] : {};
    const address = item ? item.address1 + ',' + item.address2 + ',' + item.address3 + ',' + item.city + ',' + item.postcode : '';
    const name = item.name;

    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}>
              <span>Find Pharmacy:</span>
                <DropdownButton bsStyle='primary' title={name} id='dropdown-basic'>
                  {this.state.data.map((item, idx) =>
                  <MenuItem key={idx} eventKey={idx} onSelect={(key) => this.setState({ key })} >
                    {`${item.name}`}
                  </MenuItem>
                  )}
                </DropdownButton>
            </Col>
            <Col sm={6} md={3}>
              <span>Address:</span>
                { address }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = Main;