import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state={nama:'',usia:'',kota:'',stud:[]};
  }
  click=()=>{ 
    this.setState({
      nama:this.refs.nama.value, 
      usia:this.refs.usia.value,
      kota:this.refs.kota.value,
    });
  }
   searching=()=>{
     axios.get('http://localhost:433/data')
     .then((ambildata)=>{
       console.log(ambildata.data);
        this.setState({
          stud:ambildata.data,
        })
     })
   };
  
   muat=()=>{
    axios.post('http://localhost:433/data',
    {
      nama: this.state.nama,
      usia: this.state.usia,
      kota: this.state.kota,
    })
  }
  render() {
     const data=this.state.stud.map((item, index)=>{
       var nm =[item.nama]
       var reg=[item.usia]
       var city=[item.kota] 
       return <tr key={index}><td>{nm}</td><td>{reg}</td><td>{city}</td></tr>
     });
    return (
      <div>
        <div className="container">
           <center>
              <h1>REACT TO EXPRESS AND MLab</h1>
                  <div className="row">
                      <div className="col-lg-4">
                        <form>
                          <input className="form-control" ref="nama" type="text" placeholder="name" style={{width:'250px'}} onInput={()=>{this.click();}}/><br></br>
                          <input className="form-control" ref="usia" type="number" placeholder="age" style={{width:'250px'}} onInput={()=>{this.click();}}/><br></br>
                          <input className="form-control" ref="kota" type="text" placeholder="city" style={{width:'250px'}} onInput={()=>{this.click();}}/><br></br>
                          <button type="submit" className="btn btn-success btn-block" style={{width:'100px'}} onClick={()=>{this.muat();}}>post</button>
                        </form>
                          <button type="submit" className="btn btn-success btn-block" style={{width:'100px'}} onClick={()=>{this.searching();}}>get</button>
                          
                      </div><br></br>
                  </div>
            </center>
              <br/>
              <center>
                  <table>
                    <tr>
                      <td>Name</td>
                      <td>Age</td>
                      <td>City</td>
                    </tr>
                      {data}
                  </table>
              </center> 
        </div>
      </div>
    );
  }
}

export default App;