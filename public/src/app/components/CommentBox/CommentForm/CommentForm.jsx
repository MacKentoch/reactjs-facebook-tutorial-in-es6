import React from 'react';

export default class CommentForm extends React.Component {
	
 constructor(props) {
  super(props);
	this.init();
 }
 
 init(){
	 this.state = {author : '', text : ''};
 }
 
	handleAuthorChange(e) {
		this.setState({author: e.target.value});
	}
	
	handleTextChange(e) {
		this.setState({text: e.target.value});
	}

 render(){
	return (
		<form className="commentForm">
			<input
				type="text"
				placeholder="Your name"
				value={this.state.author}
				onChange={(e)=>this.handleAuthorChange(e)} //NOTE : "(e)=>this.handleAuthorChange(e)" is the same as "this.handleAuthorChange.bind(this)"
			/>
			<input
				type="text"
				placeholder="Say something..."
				value={this.state.text}
				onChange={(e)=>this.handleTextChange(e)} //NOTE : "(e)=>this.handleAuthorChange(e)" is the same as "this.handleAuthorChange.bind(this)"
			/>
			<input type="submit" value="Post" />
		</form>
	);	
 }
 
}
