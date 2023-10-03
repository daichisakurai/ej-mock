import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { Order, getComparator, stableSort } from "../../utils/table";

/************ TODO: 削除（MOCK用のための固定データをimport） ***********/
import callHistoryData from "../../mock-data/call-history.json";
/********************************************************************/

interface Data {
  id: number;
  call_id: string;
  date_start_time: string;
  date_end_time: string;
  reception_terminal: string;
  brtr: string;
  operator_terminal: string;
  work_type: string;
  memo: string;
  metadata: string;
}

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  order: Order;
  orderBy: string;
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "date_start_time",
    numeric: false,
    disablePadding: false,
    label: "通話開始時億",
  },
  {
    id: "date_end_time",
    numeric: false,
    disablePadding: false,
    label: "通話終了時刻",
  },
  {
    id: "reception_terminal",
    numeric: false,
    disablePadding: false,
    label: "受付端末名",
  },
  {
    id: "brtr",
    numeric: false,
    disablePadding: false,
    label: "BRTR",
  },
  {
    id: "operator_terminal",
    numeric: false,
    disablePadding: false,
    label: "オペレータ端末名称",
  },
  {
    id: "work_type",
    numeric: false,
    disablePadding: false,
    label: "対応事務種別",
  },
  {
    id: "memo",
    numeric: false,
    disablePadding: false,
    label: "対応メモ",
  },
  {
    id: "metadata",
    numeric: false,
    disablePadding: false,
    label: "メタデータ",
  },
];

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export const CallHistoryList: React.FC = () => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("id");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(20);
  const rows = callHistoryData;

  const handleClick = (_event: React.MouseEvent<unknown>, call_id: string) => {
    console.log(call_id);
  };

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Card>
      <CardHeader
        title="通話履歴一覧"
        titleTypographyProps={{ color: "primary" }}
      />
      <Divider />
      <CardContent>
        <Paper>
          <TableContainer>
            <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {visibleRows.map((row) => {
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.call_id)}
                      tabIndex={-1}
                      key={row.call_id}
                      sx={{ cursor: "pointer" }}
                    >
                      <TableCell align="right">{row.date_start_time}</TableCell>
                      <TableCell align="right">{row.date_end_time}</TableCell>
                      <TableCell align="right">
                        {row.reception_terminal}
                      </TableCell>
                      <TableCell align="right">{row.brtr}</TableCell>
                      <TableCell align="right">
                        {row.operator_terminal}
                      </TableCell>
                      <TableCell align="right">{row.work_type}</TableCell>
                      <TableCell align="right">{row.memo}</TableCell>
                      <TableCell align="right">{row.metadata}</TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 53 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={8} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 20, 30]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </CardContent>
    </Card>
  );
};
