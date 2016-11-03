var React = require('react');

var TestOne = React.createClass({
    render() {
        var styles = require('./TestOne.css');
        return (
            /* jshint ignore: start*/
            <div className={styles.block}>Hello I am Test1 Component</div>
            /* jshint ignore: end*/
        );
    }
});

module.exports = TestOne;