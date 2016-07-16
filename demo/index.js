var React = require('react');
var ReactDom = require('react-dom');

var HelloWorldComponent = React.createClass({
    displayName: 'HelloWorldComponent',
    render: function() {
        return (
		<div>Hello world</div>
		);
	}
});
module.exports = HelloWorldComponent;

ReactDom.render(<HelloWorldComponent/>,document.getElementsByTagName('body')[0])
