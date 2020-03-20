// Import React
// =========================================================
  import React, { Component } from 'react';
// Import Components
// =========================================================
  import Nav from "./Components/Nav"
  import Wrapper from "./Components/Wrapper"; 
  import {ApproveBtn, LogoutBtn, OptimizeBtn } from "./Components/Buttons"
// Import Styling
// =========================================================
  import "./Assets/css/reset.css";
  import "./Assets/css/globalStyle.css";
// Import Media
// =========================================================
  import Quantworks from "./Assets/images/Quantworks_Icon.jpg";
  import data from "./Utils/test_data.json";
  import InputLines from "./Pages/Input_lines";
  import DCSumRows from "./Pages/dc_sum_rows";
  import SizeSumRows from "./Pages/size_sum_rows";


  const inputRows = data.inputRows
  const globalSumRows = data.globalSumRows
  const dcSumRows = data.dcSumRows
  const storeSumRows = data.storeSumRows
  const sizeSumRows = data.sizeSumRows
// App Function 
// =========================================================
 class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        activeTab: inputRows,
        inputRows: inputRows, 
        globalSumRows: globalSumRows, 
        dcSumRows: dcSumRows, 
        storeSumRows: storeSumRows, 
        sizeSumRows: sizeSumRows
      };
    }; 

    componentDidMount = () => {
      console.log("setting up redrawAll function")
      // console.log(sizeSumRows);
      // redrawAll([]);
      // console.log(this.state.inputRows)
      this.renderInput();
      // console.log(this.state.globalSumRows)
      // console.log(this.state.dcSumRows)
      // console.log(this.state.storeSumRows)
      // console.log(this.state.sizeSumRows)
    }

    handleClick = (event) => {
      event.preventDefault(); 
      console.log("you clicked a button")
      // this.setState({inputRows: "hi"})
      console.log(this.state.data.keys)

      // console.log(this.state.inputRows)

    }
    renderInput = () => {
      let results = inputRows
                // console.log(res.data.items)
                const itemsArray = results.map((obj) => {
                    
                    const { lineId, 
                            stycId, 
                            stycDesc, 
                            deliveryDt,
                            sizeRange,
                            storeDistro,
                            grossNeedByStore, 
                            numPackConfigs,
                            packConfigId,

                    } = obj; 
                    console.log(obj)
                    return {
                      lineId, 
                      stycId, 
                      stycDesc, 
                      deliveryDt,
                      sizeRange,
                      storeDistro,
                      grossNeedByStore, 
                      numPackConfigs,
                      packConfigId,
                    };
                })

                this.setState({
                    data: itemsArray,
                })
    }
  
   render() {
    return (
      <>
        <Wrapper>
          <LogoutBtn/> 

          <img src={Quantworks} alt="Quantworks Logo" style={{height: "84px", width: "128px", display: "flex", margin: "0 auto"}}/>
          <div align="center" style={{paddingBottom: "10px", marginBottom: "10px", borderBottom: "1px solid #c7c7c7"}}><h2>Allocation Optimization</h2></div>
          <div style={{textAlign:"center"}}><OptimizeBtn onClick={this.handleClick}/><ApproveBtn/></div>

          <Nav
            inputRows={<InputLines/>}
            dcSumRows={<DCSumRows id="dc-summary"/>}
            sizeSumRows={<SizeSumRows/>}
          />
        </Wrapper>
      </>
    );
   }
  }

  export default App;
