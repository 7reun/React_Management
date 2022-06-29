//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import TOC from './components/TOC';
import CONTENTS from './components/contents';
import Subject from './components/subject';


//컴포넌트는 분리해서 따로 만들어줌.
/* class Subject extends Component{
  render() {
    return(
     /*  <header>
          <h1>WEB</h1>
          world wide web 
      </header> 
      <header>
      <h1>{this.props.title}</h1>
      {this.props.sub}
      </header>
    ); 
  }
} */

/* class TOC extends Component{
  render() {
    return(
      <nav>
        <ul>
            <li><a href="1.html">HTML</a></li>
            <li><a href="2.html">CSS</a></li>
            <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    ); 
  }
} */

/* class Contents extends Component{
  render() {
    return(
     /*  <article>
        <h2>HTML</h2>
        HTML is HyperText MarkUp Language.
      </article> 
      <article>
        <h2>{this.props.title}</h2>
        {this.props.desc}
      </article>
    ); 
  }
} */

//function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject:{title:'WEB',sub:'world wild web'},
      contents:[
        {id:1,title:'HTML',desc:'HTML is for information'},
        {id:2,title:'CSS',desc:'CSS is for design'},
        {id:3,title:'JavaScript',desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    return (
      <div>
        <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject> {/* == <Subject/> */}
        <TOC data={this.state.contents}></TOC>
        <CONTENTS title="HTML" desc="HTML is HyperText MarkUp Language."></CONTENTS>
      </div>

      //<div>hello world</div> 상위 태그가 하나인 구조로 만들어야함.    
    );
  }
}
//}

export default App; //외부에서 사용할 수 있게 권한을 줌.
