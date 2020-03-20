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

// Test Data
// =========================================================
  const columns = [
    { id: 'lineId', label: 'Line ID', minWidth: 100, align: 'center' },
    { id: 'stycId', label: 'Style-Color ID', minWidth: 100,  align: 'center' },
    {
      id: 'dc',
      label: 'DC',
      minWidth: 100,
      align: 'center',
      // format: value => value.toLocaleString(),
    },
    {
      id: 'packId',
      label: 'Pack Id',
      minWidth: 100,
      align: 'center',
      // format: value => value.toFixed(2),
    },
    {
      id: 'available',
      label: 'Available',
      minWidth: 100,
      align: 'center',
      // format: value => value.toFixed(2),
    },
    {
      id: 'remaining',
      label: 'Remaining',
      minWidth: 100,
      align: 'center',
      // format: value => value.toFixed(2),
    },
  ];

  // OUTPUT - DC SUMMARY 

  function createData(lineId, stycId, dc, packId, available, remaining) {
    return {lineId, stycId, dc, packId, available, remaining};
  }

  const rows = [
  createData( "0-0", "Dicte Mini Skirt Checked-Pale Blue/Black", "DC1", "Bulk_P", 30, 6),
  createData( "0-1", "Dicte Mini Skirt Checked-Pale Blue/Black", "DC1", "Bulk_S", 94, 51),
  createData( "0-2", "Dicte Mini Skirt Checked-Pale Blue/Black", "DC1", "Bulk_M", 226, 46),
  createData( "0-3", "Dicte Mini Skirt Checked-Pale Blue/Black", "DC1", "Bulk_L", 404, 215),
  createData( "0-4", "Dicte Mini Skirt Checked-Pale Blue/Black", "DC1", "Bulk_XL", 207, 71),
  createData( "1-0", "Dicte Overshirt Checked-Pale Blue/Black", "DC1", "Bulk_P", 30, 5),
  createData( "1-1", "Dicte Overshirt Checked-Pale Blue/Black", "DC1", "Bulk_S", 50, 6),
  createData( "1-2", "Dicte Overshirt Checked-Pale Blue/Black", "DC1", "Bulk_M", 618, 431),
  createData( "1-3", "Dicte Overshirt Checked-Pale Blue/Black", "DC1", "Bulk_L", 318, 119),
  createData( "1-4", "Dicte Overshirt Checked-Pale Blue/Black", "DC1", "Bulk_XL", 268, 122),
];

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
                        <TableCell key={column.id} align={column.align}>
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