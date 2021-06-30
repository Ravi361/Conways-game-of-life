import React from "react"
import Box from './Box'
class Matrix extends React.Component{
    render(){
      const width=this.props.cols*24
      const height=this.props.rows*24
      var rowsArr=[]
      for(let i=0;i<this.props.rows;i++)
      {
        for(let j=0;j<this.props.cols;j++)
        {
          let boxClass=(this.props.Matrix[i][j]===false)?"off":"on"
          // console.log(this.props.Matrix[i][j])
          rowsArr.push(
            <Box
            boxClass={boxClass}
            Matrix={this.props.Matrix}
            key={i+" "+j}
            row={i}
            col={j}
            selectBox={this.props.selectBox}/>
          )
        }
      }
      return (
        <div className="matrix" style={{width:width,height:height}}>
          {rowsArr}
        </div>
      )
    }
  }
export default Matrix