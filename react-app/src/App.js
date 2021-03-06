//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';
import TOC from './components/TOC';
import ReadContent from './components/ReadContent';
import Subject from './components/subject';
import Control from './components/Control';
import CreateContent from './components/CreateContent';
import UpdateContent from './components/UpdateContent';

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
    this.max_content_id = 3;
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
  //getReadContent start
  getReadContent() {
    let i = 0;
    while(i < this.state.contents.length) {
      let data = this.state.contents[i];
      if(data.id === this.state.selected_content_id){
        return data;
      }
      i = i + 1;
    }
  }
  //getReadContent end

  //getContent start
  getContent() {
    let _title, _desc = null, _article;
    if(this.state.mode === 'welcome') {//=== : 값과 타입이 모두 동일.
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }else if(this.state.mode === 'read') {
      
      let _content = this.getReadContent();
      _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>;
    }else if(this.state.mode === 'create') {
      _article = <CreateContent onSubmit={function(_title,_desc){
        this.max_content_id = this.max_content_id + 1;
        /* this.state.contents.push(
          {id:this.max_content_id, title:_title, desc:_desc}
        ); 
        let _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        ); */

        let _contents = Array.from(this.state.contents);
        _contents.push({id:this.max_content_id, title:_title, desc:_desc});

        this.setState({
          //contents:this.state.contents
          mode:'read',
          contents : _contents,
          selected_content_id : this.max_content_id 
        })
      }.bind(this)}>
      </CreateContent>
    }else if(this.state.mode === 'update') {
      let _content = this.getReadContent();
      _article = <UpdateContent 
                    data={_content} 
                    onSubmit={function(_id, _title, _desc){
                      let _contents = Array.from(this.state.contents);
                      let i = 0;
                      while(i < _contents.length) {
                        if(_contents[i].id === _id){
                          _contents[i] = {id:_id, title:_title, desc:_desc};
                          break;
                        }
                        i=i+1;
                      }
                      this.setState({
                        contents:_contents,
                        mode:'read'
                      })
                    }.bind(this)}>
                  </UpdateContent>
    }
    return _article;
  }
  //getContent end

  render() {
    console.log('App render');
    
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
          if(_mode === 'delete') {
            if(window.confirm('really?')){
              let _contents = Array.from(this.state.contents);
              let i = 0;
              while(i < _contents.length) {
                if(_contents[i].id === this.state.selected_content_id){
                  _contents.splice(i,1);
                  break;
                }
                i = i + 1;
              }
              this.setState({
                mode:'welcome',
                contents:_contents
              })
            }
          }else{
            this.setState({
              mode:_mode
            });
          }            
          }.bind(this)}>
        </Control>
        {this.getContent()}
      </div>
   
    );
  }
}
//}

export default App; //외부에서 사용할 수 있게 권한을 줌.
