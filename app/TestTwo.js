var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory;

var TestTwo = React.createClass({
    render() {
        return (
            <div>
                <h1>Hello I am TestTwo Component</h1>
                <button className="btn btn-success" onClick={browserHistory.goBack}>BACK TO HOME PAGE</button>
            </div>
        );
    }
});

module.exports = TestTwo;