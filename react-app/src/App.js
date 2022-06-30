//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import TOC from './components/TOC';
import CONTENTS from './components/contents';
import Subject from './components/subject';
import Control from './components/Control';

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
      mode:'read',
      selected_content_id:2,
      subject:{title:'WEB',sub:'world wild web'},
      welcome:{title:'Welcome',desc:'Hello, React'},
      contents:[
        {id:1,title:'HTML',desc:'HTML is for information'},
        {id:2,title:'CSS',desc:'CSS is for design'},
        {id:3,title:'JavaScript',desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    console.log('App render');
    let _title, _desc = null;
    if(this.state.mode === 'welcome') {//=== : 값과 타입이 모두 동일.
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }else if(this.state.mode === 'read') {
     /*  _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc; */
      let i = 0;
      while(i < this.state.contents.length) {
        let data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div>
        <Subject title={this.state.subject.title} 
                 sub={this.state.subject.sub}
                 onChangePage={function(){
                  this.setState({mode:'welcome'});
                 }.bind(this)}>
        </Subject>
        <TOC data={this.state.contents}
             onChangePage={function(id){
              this.setState(
                {
                  mode:'read', 
                  selected_content_id:Number(id)
                } 
              );
            }.bind(this)}
        ></TOC>
        <Control onChangeMode={function(_mode){
              this.setState({
                mode:_mode
              });
            }.bind(this)}>
        </Control>
        <CONTENTS title={_title} desc={_desc}></CONTENTS>
      </div>

      //<div>hello world</div> 상위 태그가 하나인 구조로 만들어야함.    
    );
  }
}
//}

export default App; //외부에서 사용할 수 있게 권한을 줌.
