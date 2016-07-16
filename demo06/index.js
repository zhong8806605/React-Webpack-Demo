 var React = require("react");
 var ReactDOM = require("react-dom");

var Test = React.createClass({
	getInitialState:function(){
		return {opacity:1.0};
	},

	componentDidMount:function(){
		this.timer = setInterval(function(){
			var opacity = this.state.opacity;
			opacity -=0.05;
			if(opacity <0.1)
			{
				opacity =  1.0;
			}
			this.setState({
				opacity:opacity
			});
		}.bind(this),100);
	},

	render:function(){
		return(
			<div style = {{opacity:this.state.opacity}}>
				hello {this.props.name}
			</div>
		);
	}
});

ReactDOM.render(<Test name = '123'/>, document.body);