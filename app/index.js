var React = require('react');
var ReactDOM = require('react-dom');
var { Router, Route, hashHistory, IndexRoute } = require( 'react-router' );
var Home = require('./Home.js');
var mypage = require('./mypage.js');
var TestOne = require('./TestOne.js');
var TestTwo = require('./TestTwo.js');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={mypage} />
      <Route path="/TestOne" component={TestOne} />
      <Route path="/TestTwo" component={TestTwo} />
    </Route>
  </Router>
), document.getElementById('app'));

 // ReactDOM.render(<Home/>, document.getElementById('app'))