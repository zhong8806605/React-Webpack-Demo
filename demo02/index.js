var React = require('react');
var ReactDom = require('react-dom');


var names = ['aa','bb'];

var Dome2 = React.createClass({
	render: function(){
		return(
			 <div>
 				 {
   				 	names.map(function (name) {
     		 				return <div>Hello, {name}!</div>
   					 })
 			 	}
  			</div>
		)
	}
})
module.exports=Dome2;

ReactDom.render(<Dome2/>,document.body);