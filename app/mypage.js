var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
    render() {
        return (
            /* jshint ignore: start*/
            <div>
                <Link to="/TestOne"><button className="btn btn-danger">TestOne</button></Link>
                <Link to="/TestTwo"><button className="btn btn-success">TestTwo</button></Link>
            </div>
            /* jshint ignore: end*/
        );
    }
});

module.exports = Home;