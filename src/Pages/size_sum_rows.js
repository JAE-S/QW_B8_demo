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
  import EditIcon from '@material-ui/icons/Edit';
  import Grid from '@material-ui/core/Grid';
  import ModalData from "./modal_data";
  import Modal from '../Components/modal';
  import MockGraph from '../Assets/images/Mock_graph_2.png';

// Test Data
// =========================================================
  const columns = [
    { 
        id: 'edit', 
        label: 'Edit', 
        // inWidth: 60 
        align: 'center',
    },
    { 
        id: 'prodDesc', 
        label: 'Product Description', 
        // minWidth: 125 
        align: 'center',
    },
    {
      id: 'storeId',
      label: 'Store',
    //   minWidth: 60,
      align: 'center',
      // format: value => value.toLocaleString(),
    },
    {
      id: 'stycQty',
      label: 'Style-Color Qty',
    //   minWidth: 100,
      align: 'center',
      // format: value => value.toLocaleString(),
    },
    {
      id: 'ttlMismatch',
      label: 'Ttl Mismatch',
    //   minWidth: 100,
      align: 'center',
      format: value => value.toFixed(2),
    },
    {
      id: 'XS',
      label: 'XS',
    //   minWidth: 40,
      align: 'center',
      format: value => value.toFixed(2),
    },
    {
      id: 'S',
      label: 'S',
    //   minWidth: 40,
      align: 'center',
      format: value => value.toFixed(2),
    },
    {
      id: 'M',
      label: 'M',
    //   minWidth: 40,
      align: 'center',
      format: value => value.toFixed(2),
    },
    {
      id: 'L',
      label: 'L',
    //   minWidth: 40,
      align: 'center',
      format: value => value.toFixed(2),
    },
    {
        id: 'XL',
        label: 'XL',
        // minWidth: 40,
        align: 'center',
        format: value => value.toFixed(2),
      },
  ];
//   OUTPUT - SIZE SUMMARY 
  function createData(edit, prodDesc, storeId, stycQty, ttlMismatch, XS, S, M, L, XL) {
    return {edit, prodDesc, storeId, stycQty, ttlMismatch, XS, S, M, L, XL};
  }
  const rows = [
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6001", 13, setAlert(), -0.5, 0.24, -0.2, 0.56, -0.64),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6003", 3, 2.12, -0.39, 0.54, 0.32, 0.28, -0.59),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6006", 3, 0.7, -0.11, -0.16, 0.12, 0.07, 0.24),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6007", 2, 2.04, -0.39, -0.46, 0.32, 0.28, -0.59),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6011", 2, 2.04, -0.39, -0.46, 0.32, 0.28, -0.59),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6013", 3, 2.12, -0.39, 0.54, 0.32, 0.28, -0.59),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6016", 3, 2.12, -0.39, 0.54, 0.32, 0.28, -0.59),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6020", 3, 2.12, -0.39, 0.54, 0.32, 0.28, -0.59),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6028", 3, 2.12, -0.39, 0.54, 0.32, 0.28, -0.59),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6029", 3, 2.12, -0.39, 0.54, 0.32, 0.28, -0.59),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6030", 3, 2.12, -0.39, 0.54, 0.32, 0.28, -0.59),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6031", 3, 2.12, -0.39, 0.54, 0.32, 0.28, -0.59),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6035", 3, 0.7, -0.11, -0.16, 0.12, 0.07, 0.24),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6038", 0, 1.24, -0.17, -0.2, -0.3, -0.31, -0.26),
    createData( insertIcon(), "Dicte Mini Skirt Checked-Pale Blue/Black", "6042", 3, 0.7, -0.11, -0.16, 0.12, 0.07, 0.24),
];

function setAlert() {
    return <p style={{color: "red", fontWeight: "bold"}}>2.14</p>
}
 
  function insertIcon() {
    
    return   (
    <Modal
        modalTitle={<div><h2 style={{color: "#327ab7", fontWeight: "bold"}}>Store: 6001</h2><h4 style={{ color: "rgb(101, 101, 101)"}}>Product Description: Dicte Mini Skirt Checked-Pale Blue/Black</h4></div>}
        openModal={<EditIcon/>}
        openBody={
            <div>
                <Grid 
                    container 
                    spacing={2}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item md={6} xs={12}>
                        <ModalData/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img alt="Store 6001 Data" src={MockGraph} style={{maxWidth: "456px", width: "100%"}}/>
                    </Grid>
                </Grid>
            </div>
        }
    />
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
  export default function StickyHeadTable() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <h3 style={{color: "#327ab7", fontWeight: "bold"}}>{column.label}</h3>
                    
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.stycId}>
                    {columns.map(column => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} className={column < 0 ? "" : "warning"}>
                          {column.format && typeof value === 'number' ? column.format(value) : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20, 40]}
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