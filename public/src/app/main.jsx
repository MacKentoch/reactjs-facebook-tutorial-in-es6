import React        from 'react';
import ReactDOM     from 'react-dom';
import CommentBox   from './components/CommentBox/CommenBox.jsx!';     
import data         from './mockup/data.json!json';  //mockup data (tutorial step 10)
 
ReactDOM.render(
  <CommentBox url="/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);
