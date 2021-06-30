import React from "react"
import Matrix from "./Matrix"
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
class App extends React.Component{
    constructor(){
      super()
      this.speed=100
      this.rows=15
      this.cols=25
      this.end=1
      this.state={
        year:1,
        Matrix:Array(this.rows).fill().map(()=>{
          return Array(this.cols).fill(false)
        })
      }
    }
    selectBox=(row,col)=>{
      var newArray = this.state.Matrix.map(function(arr) {
        return arr.slice()
    })
    newArray[row][col]=!newArray[row][col]
          this.setState({
            Matrix:newArray
          })
    }
    start=()=>{
      var newArray = this.state.Matrix.map(function(arr) {
        return arr.slice()})
        const dx=[-1,1,0,0,-1,-1,1,1]
        const dy=[0,0,-1,1,-1,1,-1,1]
      for(let i=0;i<this.rows;i++)
      {
        for(let j=0;j<this.cols;j++)
        {
          let alive=0
          for(let k=0;k<8;k++)
          {
          let nx=i+dx[k]
          let ny=j+dy[k]
          if(nx>=0 && ny>=0 && nx<this.rows && ny<this.cols && this.state.Matrix[nx][ny])
            alive++
          }
          if(this.state.Matrix[i][j]==true)
          {
            if(alive<2 || alive>3)
            newArray[i][j]=false
          }
          else
          {
            if(alive==3)
            newArray[i][j]=true
          }
        }
      }
      this.setState({
        year:this.state.year+1,
        Matrix:newArray
      })
    }
    starte=()=>{
      this.end=setInterval(this.start,this.speed)
    }
    stope=()=>{
      clearInterval(this.end)
    }
    setsize=(size)=>{
        if(size=="small")
        {
        this.rows=10
        this.cols=10
        }
        else if(size=="medium")
        {
        this.rows=17
        this.cols=25
        }
        else
        {
        this.rows=17
        this.cols=50
        }
        this.setState({
            year:1,
        Matrix:Array(this.rows).fill().map(()=>{
          return Array(this.cols).fill(false)
        })
        })
    }
    setspeed=(speed)=>{
        if(speed=="slow")
         this.speed=1000
        else if(speed=="medium")
        this.speed=250
        else
        this.speed=10
    }
    clear=()=>{
        clearInterval(this.end)
        this.setState({
            year:1,
            Matrix:Array(this.rows).fill().map(()=>{
              return Array(this.cols).fill(false)
            })
        })
    }
    seed=()=>{
      var newArray = this.state.Matrix.map(function(arr) {
        return arr.slice()})
      for(let i=0;i<this.rows;i++)
      {
        for(let j=0;j<this.cols;j++)
        {
           if(Math.floor(Math.random()*4)==1)
            newArray[i][j]=true
        }
      }
      this.setState({
        year:1,
        Matrix:newArray
      })
    }
    render(){
      return (
        <div>
          <h1>Conway's Game of Life</h1>
          <h3>Year:{this.state.year}</h3>
          <div className="d-flex justify-content-around" style={{marginLeft: "394px",
    marginRight: "389px"}}>
          <button className="btn btn-primary p-2" onClick={this.starte} style={{color: "#212529",
    backgroundColor: "#e9ecef",
    borderColor: "#007bff"}}>Start</button>
          <button style={{color: "#212529",
    backgroundColor: "#e9ecef",
    borderColor: "#007bff"}} className="btn btn-primary p-2" onClick={this.stope}>Stop</button>
          <button style={{color: "#212529",
    backgroundColor: "#e9ecef",
    borderColor: "#007bff"}} className="btn btn-primary p-2" onClick={this.seed}>Autofill</button>
          <DropdownButton className="btn-primary" onSelect={this.setspeed} id="dropdown-item-button" title="Speed">
  <Dropdown.Item eventKey="slow" as="button">Slow</Dropdown.Item>
  <Dropdown.Item eventKey="medium" as="button">Medium</Dropdown.Item>
  <Dropdown.Item eventKey="fast" as="button">Fast</Dropdown.Item>
</DropdownButton>
          <DropdownButton onSelect={this.setsize} id="dropdown-item-button" title="Matrix Size">
  <Dropdown.Item eventKey="small" as="button">Small</Dropdown.Item>
  <Dropdown.Item eventKey="medium" as="button">Medium</Dropdown.Item>
  <Dropdown.Item eventKey="large" as="button">Large</Dropdown.Item>
</DropdownButton>
          <button style={{color: "#212529",
    backgroundColor: "#e9ecef",
    borderColor: "#007bff"}} className="btn btn-primary p-2" onClick={this.clear}>Clear</button>
          </div>
          <Matrix selectBox={this.selectBox} Matrix={this.state.Matrix} rows={this.rows} cols={this.cols}/>
        </div>
      )
    }
  }
export default App