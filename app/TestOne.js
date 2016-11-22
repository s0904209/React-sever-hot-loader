// var React = require('react');
import React from "react";
import styles from "./TestOne";

export default class TestOne extends React.Component {
    render() {
        return (
            /* jshint ignore: start*/
            <div className={styles.block}>Hello I am Test1 Component</div>
            /* jshint ignore: end*/
        )
    }
}