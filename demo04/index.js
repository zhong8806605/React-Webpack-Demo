var React = require('react');
var ReactDom = require('react-dom');

var LikeButton =React.createClass({
	getInitialState:function(){
		return {liked:false};
	},
	handleClick:function(){
		this.setState({liked: !this.state.liked});
	},
	render:function(){
		var text = this.state.liked ? 'like' : 'have\t liked'
		return (
				<p onClick = {this.handleClick}>
					you {text} this click to toggle
				</p>
			);
	}
})
ReactDom.render(
	<LikeButton />,
	document.body
)