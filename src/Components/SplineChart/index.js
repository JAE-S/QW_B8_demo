import React, { Component } from 'react';
import CanvasJSReact from '../../Assets/canvas_charts/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class SplineChart extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            message: "Mouse Event",
            dataPointsArray: [
                { y: 20, label: "X-SMALL", },
                { y: 15, label: "SMALL", },
                { y: 40, label: "MEDIUM" },
                { y: 15, label: "LARGE"},
                { y: 10, label: "X-LARGE"}
            ],
        }

    }

    componentDidMount(){
        this.chartData();
        
    }
    
    chartData = () => {
        var chart = this.chart;

        // API.fetchData()
		// .then((res) => {
        //     let results = res.data
        //     const dataArray = results.map((obj) => {
        //         chart.render();
        //         const { x,
        //                 y,
        //              } = obj;
                     
        //         return {
        //             x,
        //             y,
        //         }; 
                
        //     });
        //     console.log(dataArray)
            // this.setState({ message: "Mouse Down"});
            // this.setState({
            //         dataPointsArray: dataPointsArray
            //     });

            chart.render();
            // var parentOffset = document.getElementById("canvasjs-react-chart-container-0").offset();
            // document.getElementById("canvasjs-react-chart-container-0").onmousedown = function(){
                
            //     chart.isMouseDown = true;
            //     console.log("chart mouse down", chart.isMouseDown )
            //     getViewport()
            //         function getViewport(e){

            //             if(chart.isMouseDown && chart.draggingDataPoint){
                            
            //                 console.log("dragdatapoint", chart.draggingDataPoint)
            //                 console.log(parentOffset)
                            // chart.draggingDataPoint.y = (e.axisY[0].viewportMaximum - chart.draggingDataPoint.y) >
                            //                                 (chart.draggingDataPoint.y - e.axisY[0].viewportMinimum) ?
                            //                                     e.axisY[0].viewportMaximum :  e.axisY[0].viewportMinimum;
                        // console.log(chart.draggingDataPoint.y)
                        // } else {
                        //     console.log("no data")
                        // }
                        //For updating the y value
                        //     e.chart.draggingDataPoint.x = (e.axisX[0].viewportMaximum-e.chart.draggingDataPoint.x) >
                        //                                 (e.chart.draggingDataPoint.x - e.axisX[0].viewportMinimum) ?
                        //                                     e.axisX[0].viewportMaximum :  e.axisX[0].viewportMinimum;
                        //     e.chart.draggingDataPoint.y = (e.axisY[0].viewportMaximum-e.chart.draggingDataPoint.y) >
                        //                                 (e.chart.draggingDataPoint.y - e.axisY[0].viewportMinimum) ?
                        //                                     e.axisY[0].viewportMaximum :  e.axisY[0].viewportMinimum;
                        // }
                    
                        // if(!e.chart.options.axisY)
                        //     e.chart.options.axisY = {};
                        // if(!e.chart.options.axisX)
                        //     e.chart.options.axisX = {};
                    
                        // e.chart.options.axisY.viewportMinimum = e.chart.options.axisY.viewportMaximum = null;
                        // e.chart.options.axisX.viewportMinimum = e.chart.options.axisX.viewportMaximum = null;
                        // e.chart.isMouseDown = false;
                        // e.chart.draggingDataPoint = null;
                    // }
                
        //    };
            // this.targetData();
                console.log("chart data", this.state.dataPointsArray)
                

            // })
            
    }
    
	render() {
		const options = {
            animationEnabled: true,
            interactivityEnabled: true,
            // rangeChanging: function getViewport(e){

            //     if(e.chart.isMouseDown && e.chart.draggingDataPoint){
            //       //For updating the y value
            //           e.chart.draggingDataPoint.x = (e.axisX[0].viewportMaximum-e.chart.draggingDataPoint.x) >
            //                                        (e.chart.draggingDataPoint.x - e.axisX[0].viewportMinimum) ?
            //                                         e.axisX[0].viewportMaximum :  e.axisX[0].viewportMinimum;
            //          e.chart.draggingDataPoint.y = (e.axisY[0].viewportMaximum-e.chart.draggingDataPoint.y) >
            //                                        (e.chart.draggingDataPoint.y - e.axisY[0].viewportMinimum) ?
            //                                         e.axisY[0].viewportMaximum :  e.axisY[0].viewportMinimum;
            //      }
            
            //     if(!e.chart.options.axisY)
            //         e.chart.options.axisY = {};
            //     if(!e.chart.options.axisX)
            //         e.chart.options.axisX = {};
            
            //     e.chart.options.axisY.viewportMinimum = e.chart.options.axisY.viewportMaximum = null;
            //     e.chart.options.axisX.viewportMinimum = e.chart.options.axisX.viewportMaximum = null;
            //     e.chart.isMouseDown = false;
            //     e.chart.draggingDataPoint = null;
            // },
			title:{
                text: "Size Allocations",
                fontFamily: "Arial",
                fontColor: "rgb(50, 122, 183)",
            
			},
            subtitles: [{
                // text: ""
            }],
            axisX: {
				title: "",
                includeZero: false,
                crosshair:{
                    enabled: true,
                    snapToDataPoint: true
                }     
            },
            axisY:{
                minimum: 0,
                // suffix: " %",
                maximum: 100,
            },
            data: [
                {
                    type: "line",
                    cursor: "move",
                    toolTipContent: "{y} {label}",
                    mouseover:  function mouseoverHandler(e){
                        console.log("In mouse over")
                        e.chart.draggingDataPoint = e.dataPoint;
                     },
                    mouseout: function mouseoutHandler(e){
                        console.log("In mouse out")
                        if(!e.chart.isMouseDown)
                           e.chart.draggingDataPoint = null;
                    },
                    dataPoints: [
                        { y: 5, label: "X-SMALL",  mousemove : function(e){
                            alert(  e.dataSeries.type + ", dataPoint { x:" + e.dataPoint.x + ", y: "+ e.dataPoint.y + " }" );   },},
                        { y: 30, label: "SMALL", },
                        { y: 25, label: "MEDIUM" },
                        { y: 8, label: "LARGE"},
                        { y: 32, label: "X-LARGE"},
                    ],
                },
                    {
                        //It's a dummy invisible dataseries only for the purpose of increasing x or y value even upto samll values
                        toolTipContent:null,
                        color:"transparent",
                        dataPoints:[{x:.1, y:.1},{x:.2, y:.2}]
                     },
    
                    // click: this.handleClick
                
                {
                    type: "line",
                    cursor: "move",
                    toolTipContent: "{y} {label}",
                    dataPoints: [
                        { y: 5, label: "X-SMALL",  mousemove : function(e){
                            alert(  e.dataSeries.type + ", dataPoint { x:" + e.dataPoint.x + ", y: "+ e.dataPoint.y + " }" );   },},
                        { y: 30, label: "SMALL", },
                        { y: 25, label: "MEDIUM" },
                        { y: 8, label: "LARGE"},
                        { y: 32, label: "X-LARGE"},
                    ]
                }
            ]
		}
		
		return (
		<div>
			{/* <h1 id="interactive-chart">Spline Chart</h1> */}
            <CanvasJSChart  id="gameCanvas" options={options} 
                 onRef={ref => this.chart = ref} 
                //  onMouseDown={this.handleEvent} onMouseUp={ this.handleEvent }
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default SplineChart;



