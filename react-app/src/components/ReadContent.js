import React,{Component} from 'react';

class ReadContent extends Component{
    render() {
      console.log('Contents render');
      return(
       /*  <article>
          <h2>HTML</h2>
          HTML is HyperText MarkUp Language.
        </article> */
        <article>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      ); 
    }
}

export default ReadContent; 