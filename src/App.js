import React, { Component,Fragment } from 'react';
import './App.css';
import inputText from './textInput'
import marked from 'marked'
class App extends Component {
  state={
    data:inputText
  }
  inputChange = event=>{
   const data = event.target.value
   this.setState({data})
  }
  textChange = text=> marked(text,{ sanitize :true})

 componentDidMount() {
   
    console.log('started !! ')
    const data=localStorage.getItem('data')
    if(data){
      this.setState({data})
    }else{
      this.setState(this.state)
    }
    
  };

  componentDidUpdate(){
    console.log('updated!! ')
    const {data}=this.state
    localStorage.setItem('data',data)
  }
  render() {
   
    return (
      
      <Fragment>
        <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
          <textarea value={this.state.data} onChange={this.inputChange} className='form-control' rows='34'/>
          </div>
          <div className='col-sm-6'>
          <h1>Resultat</h1>
          <div dangerouslySetInnerHTML={{__html: this.textChange(this.state.data)}}></div>
          </div>
        </div>
        
        </div>
      </Fragment>
      

      
    );
  }
}

export default App;
