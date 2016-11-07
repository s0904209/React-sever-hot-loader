var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render() {
        return (
            /* jshint ignore: start*/
            <div>
                {this.props.children}
            </div>
            /* jshint ignore: end*/
        );
    }
});

module.exports = Home;