 var React = require("react");
 var ReactDOM = require("react-dom");

 var Input = React.createClass({
 	getInitialState:function(){
 		return {value:'hello!'}
 	},
 	handleChange:function(event){
 		this.setState({value: event.target.value});
 	},
 	render:function(){
 		var value = this.state.value;
 		return (
 			<div>
 			<input type='text' onChange={this.handleChange} value = {value} />
 				<p>{value}</p>
 			</div>
 			)
 	}
 });

 ReactDOM.render(<Input/>, document.body);