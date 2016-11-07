var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

var TestOne = React.createClass({
    render() {
        var styles = require('./TestOne.css');
        return (
            /* jshint ignore: start*/
            <div className={styles.block}>
                <div>Hello I am Test1 Component</div>
                <button className="btn btn-success" onClick={browserHistory.goBack}>BACK TO HOME PAGE</button>
            </div>
            /* jshint ignore: end*/
        );
    }
});

module.exports = TestOne;