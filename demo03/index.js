 var React = require("react");
 var ReactDOM = require("react-dom");

var Test = React.createClass({
	propTypes:{
		title:React.PropTypes.string.isRequired
	},
	render: function(){
		return <div>
				{this.props.title}
				</div>;
	}
});
				
ReactDOM.render(
	<Test title={"123"}>
		<span>hello</span>
	</Test>,
		document.body
	)

