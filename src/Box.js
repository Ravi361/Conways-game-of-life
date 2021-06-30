import React from "react"
class Box extends React.Component{
    selectBox=()=>{
       this.props.selectBox(this.props.row,this.props.col)
    }
    render(){
      return(
        <div onClick={this.selectBox} className={[this.props.boxClass,"box"].join(' ')}></div>
      )
    }
  }
export default Box