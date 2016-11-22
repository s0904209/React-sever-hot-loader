var React = require('react');
import ReactDom from "react-dom";
import TestOne from './TestOne.js';
var TestTwo = require('./TestTwo.js');

import {createStore} from 'redux';

const reducer = (state, action) => {
  if (action.type === 'INC') {
    return state + 1;
  }
  return state;
};

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log('[allen]store changed', store.getState());
});

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
    componentWillMount() {
        store.dispatch({type: 'INC', payload: 1});
        const myredux = store.getState();
        console.log('myredux='+myredux);
    },
    render() {
        const myredux = store.getState();
        return (
            <div>
                myredux={myredux}
                <input type="button" className="btn btn-danger" onClick={this._toggle} value="Press Me!"/>
                {this.state.switch ? <TestOne /> : <TestTwo />}
            </div>      
        );
    }
});

ReactDom.render(<Main />, document.body);