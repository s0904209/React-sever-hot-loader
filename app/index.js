var React = require('react');
var ReactDOM = require('react-dom');
var { Router, Route, hashHistory, IndexRoute } = require( 'react-router' );
var Home = require('./Home.js');
var mypage = require('./mypage.js');
var Second = require('./Second.js');
var mainwrapper = require('./mainwrapper.js');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={mypage} />
      <Route path="/TestOne" component={mainwrapper} />
      <Route path="/TestTwo" component={Second} />
    </Route>
  </Router>
), document.getElementById('app'));

 // ReactDOM.render(<Home/>, document.getElementById('app'))