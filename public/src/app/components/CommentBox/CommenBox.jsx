import React        from 'react';
import $            from 'jquery';
import CommentList  from './CommentList/CommentList.jsx!';
import CommentForm  from './CommentForm/CommentForm.jsx!';
 

export default class CommentBox extends React.Component {
	
 constructor(props) {
  super(props);
  this.init();      //init() = initialization function : just convention to avoid constructor pollution
 }
 
 init(){
   this.state = {data: []}; //ES6 way to getInitialState() = set state in constructor
 }


  loadCommentsFromServer() {
    $.ajax({
      url       : this.props.url,
      dataType  : 'json',
      cache     : false,
      success   : (data)=>{
        this.setState({data: data});
      }, //no more need to bind(this) this since ES6 arrow function
      error     : (xhr, status, err)=>{
        console.error(this.props.url, status, err.toString());
      } //no more need to bind(this) this since ES6 arrow function 
    });
  }


  componentDidMount() {
    this.loadCommentsFromServer();
    //setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval); //need to bind this to comboBox since loadCommentsFromServer() won't execcute in CommentBox context!
    setInterval(()=>this.loadCommentsFromServer, this.props.pollInterval);          //ES6 version to upper line :  save pain with ES6 arrow function :  "()=>this.loadCommentsFromServer === this.loadCommentsFromServer.bind(this)" but don't have to worry about bind(this)
  }


 render(){
	 return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
 }
 
}
