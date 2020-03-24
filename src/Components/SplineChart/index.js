import React, { Component } from 'react';
import CanvasJSReact from '../../Assets/canvas_charts/canvasjs.react';
import API from "../../Utils/API";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class SplineChart extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            message: "Mouse Event",
            dataPointsArray: [],
        }

    }

    componentDidMount(){
        this.chartData();
    }
    
    chartData = () => {
        var chart = this.chart;

        API.fetchData()
		.then((res) => {
            let results = res.data
            const dataArray = results.map((obj) => {
                chart.render();
                const { x,
                        axisX, 
                        y,
                        yValue,
                        
                     } = obj;
                     
                return {
                    x,
                    axisX,
                    y,
                    yValue,
                }; 
                
            });
            console.log(dataArray)
            // this.setState({ message: "Mouse Down"});
            this.setState({
                    dataPointsArray: dataArray,
                });

            chart.render();
            this.targetData();
                console.log(this.state.dataPointsArray)
                

            })
            
    }

    targetData = (event) => {
        var record = false;
        var snapDistance = 5;
        var xValue, yValue, parentOffset, relX, relY;
        var selected;
        var newData = false;
        var timerId = null;
        var dataPointsTarget = this.state.dataPointsArray;
        // var canvas = document.querySelector("#interactive-chart");

		// canvas.onmousedown = function(event) {
            if (dataPointsTarget) {
            [].forEach.call( document.querySelectorAll('.canvasjs-chart-canvas'), function(event) {
                    event.addEventListener('mousedown', function() {
		                console.log('testing')
		 
                        parentOffset = document.getElementById("interactive-chart").getBoundingClientRect();
                        console.log("this is parentOffest", parentOffset)
                        relX = event.pageX - parentOffset.offsetLeft;
                        relY = event.pageY - parentOffset.offsetTop;
                        
                        console.log("this is relX", relX )
          
            // xValue = Math.round(dataPointsTarget.axisX.convertPixelToValue(relX));
            // yValue = Math.round(dataPointsTarget.axisY[0].convertPixelToValue(relY));
            // var dps = dataPointsTarget.data[0].dataPoints;
            // for (var i = 0; i < dps.length; i++) {
            //     if ((xValue >= dps[i].x - snapDistance && xValue <= dps[i].x + snapDistance) &&
            //     (yValue >= dps[i].y - snapDistance && yValue <= dps[i].y + snapDistance)) {
            //     record = true;
            //     selected = i;
            //     break;
            //     } else {
            //     selected = null;
            //     }
            // }
            // newData = (selected === null) ? true : false;
            // if (newData) {
            //     this.state.dataPointsArray.data[0].addTo("dataPoints", {
            //     x: xValue,
            //     y: yValue
            //     });
            //     this.state.dataPointsArray.axisX[0].set("maximum", Math.max(this.state.dataPointsArray.axisX[0].maximum, xValue + 30));
            //     //this.state.dataPointsArray.render();
            //     console.log(dps)
            // }
            }
        
                    )})
        }
    }

	render() {
		const options = {
			animationEnabled: true,
			title:{
				text: "Monthly Sales - 2017"
			},
            subtitles: [{
                text: "Click anywhere on plotarea to add new Data Points"
            }],
            axisY: {
				title: "Price in USD",
				prefix: "$",
				includeZero: false
			},
            data: [{
                type: "line",
                cursor: "move",
				xValueFormatString: "MMM YYYY",
				yValueFormatString: "$#,##0.00",
				dataPoints: this.state.dataPointsArray,
			}]
		}
		
		return (
		<div>
			<h1 id="interactive-chart">React Spline Chart</h1>
            <CanvasJSChart  options={options} 
                 onRef={ref => this.chart = ref} 
                //  onMouseDown={this.handleEvent} onMouseUp={ this.handleEvent }
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default SplineChart;

