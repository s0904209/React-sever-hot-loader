var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var $ = require('jquery');

var TestTwo = React.createClass({

    componentDidMount: function() {
        console.log('allen test1');
        $('body').css('background-color', 'green');
    },

    render() {
        var styles = require('./TestTwo.css');
        return (
            <div className={styles.twoblock}>
                <h1>Hello I am TestTwo Component</h1>
                <button className="btn btn-success" onClick={browserHistory.goBack}>BACK TO HOME PAGE</button>
            </div>
        );
    }
});

module.exports = TestTwo;