import React, { Component } from 'react'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import Axios from 'axios'

class BarChart extends Component {
  state ={
    budgetData:[],
    budgetNumber:[]
  }
  constructor(props){
    super(props)
    this.createBarChart = this.createBarChart.bind(this)
  }

  componentDidMount() {
   Axios.get('http://localhost:3001/budget').then(result=>{
     this.setState({budgetData:result.data});
     console.log(result);
     const tempBudget=result.data.map((key)=>{return parseInt(key.budget)});
     this.setState({budgetNumber:tempBudget});
   });
 //var budgetData=Axios.get('http://localhost:3001/budget');
    console.log("print budget data");
    this.createBarChart()
  }

  componentDidUpdate() {
    this.createBarChart()
  }

  createBarChart() {
    const node = this.node
    const dataMax = max(this.state.budgetNumber)
    const yScale = scaleLinear()
      .domain([0, dataMax])
      .range([0, this.props.size[1]])

    select(node)
      .selectAll("rect")
      .data(this.state.budgetNumber)
      .enter()
      .append("rect")

    select(node)
      .selectAll("rect")
      .data(this.state.budgetNumber)
      .exit()
      .remove()

    select(node)
      .selectAll("rect")
      .data(this.state.budgetNumber)
      .style("fill", "#fe9922")
      .attr("x", (d,i) => i * 25)
      .attr("y", d => this.props.size[1] - yScale(d))
      .attr("height", d => yScale(d))
      .attr("width", 25)
      
  }

  render() {
  
    return   <svg className="barClass" ref={node => this.node = node}
            width={500} height={500}>

    </svg>
  }
}

export default BarChart

