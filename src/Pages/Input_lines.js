// Import React
// =========================================================
  import React from 'react';
// Import Material Ui Components
// =========================================================
  import { makeStyles } from '@material-ui/core/styles';
  import Paper from '@material-ui/core/Paper';
  import Table from '@material-ui/core/Table';
  import TableBody from '@material-ui/core/TableBody';
  import TableCell from '@material-ui/core/TableCell';
  import TableContainer from '@material-ui/core/TableContainer';
  import TableHead from '@material-ui/core/TableHead';
  import TablePagination from '@material-ui/core/TablePagination';
  import TableRow from '@material-ui/core/TableRow';
  import Checkbox from '@material-ui/core/Checkbox';
  import FormControlLabel from '@material-ui/core/FormControlLabel';
  import TextField from '@material-ui/core/TextField';
  import Grid from '@material-ui/core/Grid';
  import Button from '@material-ui/core/Button';
// import { getThemeProps } from '@material-ui/styles';
import data from "../Utils/test_data.json";
import Modal from "../Components/modal"
import SplineChart from '../Components/SplineChart';

// Test Data
// =========================================================
  const columns = [
    { 
      id: 'lineId', 
      label: 'Line ID', 
      minWidth: 100, 
      align: 'left',
    },
    {
      id: 'stycDesc',
      label: 'Style-Color Desc',
      minWidth: 120,
      align: 'center',
      // format: value => value.toLocaleString(),
    },
    {
      id: 'deliveryDt',
      label: 'Delivery Date',
      minWidth: 120,
      align: 'center',
      // format: value => value.toLocaleString(),
    },
    {
      id: 'sizeRange',
      label: 'Size Range',
      minWidth: 100,
      align: 'center',
      // format: value => value.toFixed(2),
    },
    {
      id: 'storeDistro',
      label: 'Store Distribution',
      // minWidth: 120,
      align: 'center',
      // format: value => value.toFixed(2),
    },
    {
      id: 'style_color_need',
      label: 'Style-Color Need',
      // minWidth: 120,
      align: 'center',
      format: value => value.toFixed(2),
    },
    {
      id: 'pack_configs_available',
      label: '# of Pack Configs Available',
      // minWidth: 120,
      align: 'center',
      // format: value => value.toFixed(2),
    },
    {
      id: 'allocationParameters',
      label: 'Allocation Parameters',
      // minWidth: 120,
      align: 'center',
      // format: value => value.toFixed(2),
    },
  ];
 
function calcNeed1(){
//  console.log(data.inputRows.grossNeedByStore)
  // data.inputRows.forEach(item => {
    let totalNeed = 0
    // console.log("Store Need", item.grossNeedByStore)
    for (var i = 0; i < data.inputRows[0].grossNeedByStore.length; i++){
      let storeNeed = data.inputRows[0].grossNeedByStore[i].need
      console.log("store need", storeNeed)
      totalNeed = totalNeed + storeNeed
    }
    console.log("total", totalNeed)
    return (
      <Modal
        modalTitle={<div><h2 style={{color: "#327ab7", fontWeight: "bold"}}>Need to Allocate</h2></div>}
        openModal={totalNeed.toFixed(2)}
        openBody={
          <>
            {data.inputRows[0].grossNeedByStore.map((data, i) =>{
              return ( 
                <>
                  <form key={i} noValidate autoComplete="off">
                    <Grid 
                      container 
                      spacing={2}
                      direction="row"
                      justify="center"
                      alignItems="center"
                      style={{width: "300px", margin: "0 auto"}}
                    >
                      <Grid item xs={6}>
                        <p>Store: {data.storeId}</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField variant="outlined"defaultValue={data.need}/>
                      </Grid>
                    </Grid>
                  </form>
                </>
              )
            })}
          </>
        }
      />
    )
  // })
}
function calcNeed2(){
 
  // data.inputRows.forEach(item => {
    let totalNeed = 0
    // console.log("Store Need", item.grossNeedByStore)
    for (var i = 0; i < data.inputRows[1].grossNeedByStore.length; i++){
      let storeNeed = data.inputRows[1].grossNeedByStore[i].need
      console.log("store need", storeNeed)
      totalNeed = totalNeed + storeNeed
    }
    console.log("total", totalNeed)
    return (
      <Modal
        modalTitle={<div><h2 style={{color: "#327ab7", fontWeight: "bold"}}>Need to Allocate</h2></div>}
        openModal={totalNeed.toFixed(2)}
        openBody={
          <>
            {data.inputRows[1].grossNeedByStore.map((data, i) =>{
              return ( 
                <>
                  <form key={i} noValidate autoComplete="off">
                    <Grid 
                      container 
                      spacing={2}
                      direction="row"
                      justify="center"
                      alignItems="center"
                      style={{width: "300px", margin: "0 auto"}}
                    >
                      <Grid item xs={6}>
                        <p>Store: {data.storeId}</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField variant="outlined"defaultValue={data.need}/>
                      </Grid>
                    </Grid>
                  </form>
                </>
              )
            })}
          </>
        }
      />
    )
}
function calcNeed3(){
 
  // data.inputRows.forEach(item => {
    let totalNeed = 0
    // console.log("Store Need", item.grossNeedByStore)
    for (var i = 0; i < data.inputRows[2].grossNeedByStore.length; i++){
      let storeNeed = data.inputRows[2].grossNeedByStore[i].need
      console.log("store need", storeNeed)
      totalNeed = totalNeed + storeNeed
    }
    console.log("total", totalNeed)
    return (
      <Modal
        modalTitle={<div><h2 style={{color: "#327ab7", fontWeight: "bold"}}>Need to Allocate</h2></div>}
        openModal={totalNeed.toFixed(2)}
        openBody={
          <>
            {data.inputRows[2].grossNeedByStore.map((data, i) =>{
              return ( 
                <>
                  <form key={i} noValidate autoComplete="off">
                    <Grid 
                      container 
                      spacing={2}
                      direction="row"
                      justify="center"
                      alignItems="center"
                      style={{width: "300px", margin: "0 auto"}}
                    >
                      <Grid item xs={6}>
                        <p>Store: {data.storeId}</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField variant="outlined"defaultValue={data.need}/>
                      </Grid>
                    </Grid>
                  </form>
                </>
              )
            })}
          </>
        }
      />
    )
  // })
}
function calcNeed4(){
 console.log(data)
  // data.inputRows.forEach(item => {
    let totalNeed = 0
    // console.log("Store Need", item.grossNeedByStore)
    for (var i = 0; i < data.inputRows[3].grossNeedByStore.length; i++){
      let storeNeed = data.inputRows[3].grossNeedByStore[i].need
      console.log("store need", storeNeed)
      totalNeed = totalNeed + storeNeed
    }
    console.log("total", totalNeed)
    return (
      <Modal
        modalTitle={<div><h2 style={{color: "#327ab7", fontWeight: "bold"}}>Need to Allocate</h2></div>}
        openModal={totalNeed.toFixed(2)}
        openBody={
          <>
            {data.inputRows[3].grossNeedByStore.map((data, i) =>{
              return ( 
                <>
                  <form key={i} noValidate autoComplete="off">
                    <Grid 
                      container 
                      spacing={2}
                      direction="row"
                      justify="center"
                      alignItems="center"
                      style={{width: "300px", margin: "0 auto"}}
                    >
                      <Grid item xs={6}>
                        <p>Store: {data.storeId}</p>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField variant="outlined"defaultValue={data.need}/>
                      </Grid>
                    </Grid>
                  </form>
                </>
              )
            })}
          </>
        }
      />
    )
  // })
}
// INPUT LINES 

function createData(lineId, stycDesc, deliveryDt, sizeRange, storeDistro, style_color_need, pack_configs_available, allocationParameters) {
  return {lineId, stycDesc, deliveryDt, sizeRange, storeDistro, style_color_need, pack_configs_available, allocationParameters};
}
  const rows = [
    createData(0, "Dicte Mini Skirt Checked-Pale Blue/Black", "3/20/2020", "P-XL [5]", "Top 30 Stores", calcNeed1(), 5, packCongif1()),
    createData(1, "Dicte Overshirt Checked-Pale Blue/Black", "3/20/2020", "P-XL [5]", "Top 30 Stores",calcNeed2(), 5, packCongif2()),
    createData(2, "Jada Crossover Rib Knit Top-Mint", "3/20/2020", "P-XL [5]", "Top 30 Stores", calcNeed3(), 5, packCongif3()),
    createData(3, "Jolene Ribbed Wrap Midi Skirt-Mint", "3/20/2020", "P-XL [5]", "Top 30 Stores", calcNeed4(), 5, packCongif4()), 
];

function packCongif1(){
  return (
    <>
        {data.inputRows[0].lineId === 0 ? (
          <>
            <Modal
              modalTitle={<div><h2 style={{color: "#327ab7", fontWeight: "bold"}}>Pack Configuration</h2></div>}
              openModal={data.inputRows[0].packConfigId}
              openBody={
                <>
                        <form noValidate autoComplete="off">
                          <Grid 
                            container 
                            spacing={2}
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                            style={{width: "600px", margin: "0 auto"}}
                          >
                            <Grid item xs={6}>
                              <p>Pack Configuration ID: </p>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField style={{width: "100%"}}variant="outlined"defaultValue={data.inputRows[0].packConfigId}/>
                            </Grid>
                            <Grid 
                            container 
                            spacing={2}
                            direction="row"
                            justify="space-between"
                            // alignItems="center"
                            style={{width: "600px", margin: "0 auto", color: "#327ab7"}}

                          >

                            <Grid item xs={6}>
                              <p>Paramters</p>
                            </Grid>
                            <Grid align="right"item xs={6}>
                              <Button style={{color: "#327ab7"}}variant="outlined">Edit</Button>
                            </Grid>
                          </Grid>

                            <Grid item xs={6}>
                              <p>Min Units per Style-Color per Store: </p>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField style={{width: "100%"}}defaultValue={"0"}/>
                            </Grid>
                            <Grid item xs={6}>
                              <p>Max Units per Style-Color per Store: </p>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField style={{width: "100%"}}defaultValue={"0"}/>
                            </Grid>
                            <Grid item xs={6}>
                              <p>One SKU per Store: </p>
                            </Grid>
                            <Grid item xs={6}>
                              <Checkbox variant="outlined"/>
                            </Grid>
                            <Grid item xs={6}>
                              <p>Min Buy Threshold</p>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField style={{width: "100%"}}defaultValue={"0"}/>
                            </Grid>
                            <Grid item xs={6}>
                              <p>Max Buy Threshold</p>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField style={{width: "100%"}}defaultValue={"0"}/>
                            </Grid>
                            <Grid item xs={6}>
                              <p>Minimum Packs to Order</p>
                            </Grid>
                            <Grid item xs={6}>
                              <TextField style={{width: "100%"}}defaultValue={"0"}/>
                            </Grid>
                          </Grid>
                        </form>
                      </>
              }
            />
          </>
        ) : (null)}
    </>
  )
}
function packCongif2(){
  return (
    <>
        {data.inputRows[1].lineId === 1 ? (
           <>
           <Modal
             modalTitle={<div><h2 style={{color: "#327ab7", fontWeight: "bold"}}>Pack Configuration</h2></div>}
             openModal={data.inputRows[1].packConfigId}
             // modalBody={}
           />
         </>
        ) : (null)}
    </>
  )
}
function packCongif3(){
  return (
    <>
        {data.inputRows[2].lineId === 2 ? (
           <>
           <Modal
             modalTitle={<div><h2 style={{color: "#327ab7", fontWeight: "bold"}}>Pack Configuration</h2></div>}
             openModal={data.inputRows[2].packConfigId}
             // modalBody={}
           />
         </>
        ) : (null)}
    </>
  )
}
function packCongif4(){
  return (
    <>
        {data.inputRows[3].lineId === 3 ? (
           <>
           <Modal
             modalTitle={<div><h2 style={{color: "#327ab7", fontWeight: "bold"}}>Pack Configuration</h2></div>}
             openModal={data.inputRows[3].packConfigId}
             // modalBody={}
           />
         </>
        ) : (null)}
    </>
  )
}
// Styling 
// =========================================================
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });

// Data Table function 
// =========================================================
  export default function StickyHeadTable(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column, i) => (
                  <TableCell
                    key={i}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label === "Line ID" ? (
                      <FormControlLabel
                        control={
                          <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            name="checkedB"
                            color="primary"
                          />
                        }
                        label={<h3 style={{color: "#327ab7", fontWeight: "bold"}}>{column.label}</h3>}
                      /> ) : (<h3 style={{color: "#327ab7", fontWeight: "bold"}}>{column.label}</h3>)
                    }
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column, i) => {
                      const value = row[column.id];
                      return (
                        <>
                        {/* {column.label === "Style-Color Need" ? ( 
                          <TableCell key={i} align={column.align}>
                           <Modal
                           openModal={column.format && typeof value === 'number' ? column.format(value) : value}
                           modalBody={"Loading..."}
                          />  
                       </TableCell> 
                          ) : (
                         */}
                        <TableCell key={i} align={column.align}>
                        {column.label === "Line ID" ? (
                          <FormControlLabel
                            control={
                              <Checkbox
                                // checked={state.checkedB}
                                // onChange={handleChange}
                                name="checkedB"
                                color="primary"
                              />
                            }
                            // label="Primary"
                          /> ) : (null)
                        }
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell> 
                        {/* )} */}
                        </>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    );
  }