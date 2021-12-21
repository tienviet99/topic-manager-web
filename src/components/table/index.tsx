import {
  CircularProgress,
  Grid,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableProps,
  TableRow,
  Typography,
} from '@mui/material';
import { ReactNode, MouseEvent, ChangeEvent, useState } from 'react';

import { pageSizeOptions } from './table.constants';

interface TableProp extends TableProps {
  loading?: boolean;
  head: ReactNode;
  colSpan: number;
  data: any[];
  renderRows: Function;
  page: number;
  setPage: Function;
}

export default function Table({
  loading,
  head,
  data,
  colSpan,
  renderRows,
  page,
  setPage,
}: TableProp) {
  // const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);

  function handleChangePage(
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) {
    setPage(newPage);
  }
  function handleChangePageSize(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setPageSize(Number(event.target.value));
    setPage(0);
  }

  const indexOfLastItem = (page + 1) * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentDataList = data.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  function renderTableBody() {
    if (loading) {
      return (
        <TableRow>
          <TableCell
            align="center"
            style={{ border: 'none' }}
            colSpan={colSpan}
          >
            <CircularProgress />
          </TableCell>
        </TableRow>
      );
    }
    if (data?.length === 0 || !data) {
      return (
        <TableRow>
          <TableCell
            align="center"
            style={{ border: 'none' }}
            colSpan={colSpan}
          >
            <Typography variant="body1">No data</Typography>
          </TableCell>
        </TableRow>
      );
    }
    return currentDataList.map((item: any) => renderRows(item));
  }

  return (
    <TableContainer component={Paper} className="p-3">
      <TableHead>
        <TableRow>{head}</TableRow>
      </TableHead>
      <TableBody>{renderTableBody()}</TableBody>
      <Grid className="" container justifyContent="flex-end">
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPageOptions={pageSizeOptions}
          page={page}
          rowsPerPage={pageSize}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangePageSize}
        />
      </Grid>
    </TableContainer>
  );
}

Table.defaultProps = {
  loading: false,
};
