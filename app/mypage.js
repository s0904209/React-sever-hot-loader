var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var $ = require('jquery');

var Home = React.createClass({

    componentDidMount: function() {
        $('body').css('background-color', 'gray');
    },

    render() {
        var styles = require('./mypage.css');
        return (
            /* jshint ignore: start*/
            <div className={styles.mypage}>
                <h1>Home Page</h1>
                <Link to="/TestOne"><button className="btn btn-danger btn-lg">TestOne</button></Link>
                <Link to="/TestTwo"><button className="btn btn-success btn-lg">TestTwo</button></Link>
            </div>
            /* jshint ignore: end*/
        );
    }
});

module.exports = Home;