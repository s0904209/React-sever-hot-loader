var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;
var $ = require('jquery');

var TestOne = React.createClass({

    componentDidMount: function() {
        console.log('allen test1');
        $('body').css('background-color', 'pink');
    },

    render() {
        var styles = require('./TestOne.css');
        return (
            <div className={styles.oneblock}>
                <h1>Hello I am Test1 Component</h1>
                <button className="btn btn-danger" onClick={browserHistory.goBack}>BACK TO HOME PAGE</button>
            </div>
        );
    }
});

module.exports = TestOne;