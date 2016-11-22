var React = require('react');
import ReactDom from "react-dom";
import TestOne from './TestOne.js';
var TestTwo = require('./TestTwo.js');

var Main = React.createClass({
    getInitialState: function() {
        return {
          switch: true
        };
    },
    _toggle() {
        this.setState({
            switch: !this.state.switch
        });
    },
    render() {
        return (
            <div>
                <input type="button" className="btn btn-danger" onClick={this._toggle} value="Press Me!"/>
                {this.state.switch ? <TestOne /> : <TestTwo />}
            </div>      
        );
    }
});

ReactDom.render(<Main />, document.body);