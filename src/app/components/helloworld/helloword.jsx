import React from 'react';

const DEMO_MESSAGE = 'Hello World from React JS - ES2015';

export default class HelloWorld extends React.Component {
	
 constructor(props) {
  super(props);
 }

 render(){
	 return <div>
	 	<h1>{DEMO_MESSAGE}</h1>	
	 </div>;	
 }
 
}