const React=require('react')
const ReactDOM=require('react-dom')
const {Router, Route, IndexRoute, hashHistory}= require('react-router')
const TodoApp=require('TodoApp')


//load foundation

require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

//app css

require('style!css!applicationStyles')

ReactDOM.render(
   <TodoApp/>,
    document.getElementById('app')
);