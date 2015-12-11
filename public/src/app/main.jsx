import React        from 'react';
import ReactDOM     from 'react-dom';
import CommentBox   from './components/CommentBox/CommenBox.jsx!';     
import data         from './mockup/data.json!json'; 
 
ReactDOM.render(
  <CommentBox url="/api/comments" />,
  document.getElementById('content')
);
