import React        from 'react';
import CommentList  from './CommentList/CommentList.jsx!';
import CommentForm  from './CommentForm/CommentForm.jsx!';
 

export default class CommentBox extends React.Component {
	
 constructor(props) {
  super(props);
 }

 render(){
	 return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
 }
 
}
