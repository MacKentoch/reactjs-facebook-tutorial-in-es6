import React    from 'react';
import Comment  from './Comment/Comment.jsx!';

export default class CommentList extends React.Component {
	
 constructor(props) {
  super(props);
 }

 render(){
  
  let commentNodes = this.props.data.map((comment)=>{
    return (
      <Comment author={comment.author} key={comment.id}>
        {comment.text}
      </Comment>
    );
  });
     
  return (
    <div className="commentList">
      {commentNodes}
    </div>
   );	
 }
 
}
