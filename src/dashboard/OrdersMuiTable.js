import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

// const rows = [
//   createData(
//     0,
//     '16 Mar, 2019',
//     'Elvis Presley',
//     'Tupelo, MS',
//     'VISA ⠀•••• 3719',
//     312.44,
//   ),
//   createData(
//     1,
//     '16 Mar, 2019',
//     'Paul McCartney',
//     'London, UK',
//     'VISA ⠀•••• 2574',
//     866.99,
//   ),
//   createData(2, '16 Mar, 2019', 'Tom Scholz', 'Boston, MA', 'MC ⠀•••• 1253', 100.81),
//   createData(
//     3,
//     '16 Mar, 2019',
//     'Michael Jackson',
//     'Gary, IN',
//     'AMEX ⠀•••• 2000',
//     654.39,
//   ),
//   createData(
//     4,
//     '15 Mar, 2019',
//     'Bruce Springsteen',
//     'Long Branch, NJ',
//     'VISA ⠀•••• 5919',
//     212.79,
//   ),
// ];


function createData(ID, Area, Province, CellNum4G, CellNum3G, CellNum2G, VlrCellRatio4G, VlrCellRatio3G, VlrCellRatio2G) {
  return { ID, Area, Province, CellNum4G, CellNum3G, CellNum2G, VlrCellRatio4G, VlrCellRatio3G, VlrCellRatio2G }
}

const rows = [
  createData(1, 'TTMLMT', 'TTMLMT', 6.396, 6.649, 3508, 268, 154, 200),
  createData(2, 'ĐVTĐN', 'Quảng Trị', 374, 394, 212, 109, 58, 80),
  createData(3, 'ĐVTĐN', 'Huế', 517, 523, 284, 326, 208, 229),
  createData(4, 'ĐVTĐN', 'Đà Nẵng', 768, 797, 330, 569, 329, 412),
  createData(5, 'ĐVTĐN', 'Quảng Nam', 771, 821, 439, 317, 188, 307),
  createData(6, 'ĐVTBĐ', 'Quảng Ngãi', 511, 535, 295, 168, 112, 182),
  createData(7, 'ĐVTBĐ', 'Bình Định', 502, 501, 283, 249, 182, 230),
  createData(8, 'ĐVTBĐ', 'Phú Yên', 341, 370, 217, 172, 113, 159),
  createData(9, 'ĐVTBĐ', 'Khánh Hòa', 681, 714, 359, 305, 201, 220),
  createData(10, 'ĐVTĐL', 'Kon Tum', 285, 302, 125, 159, 55, 87),
  createData(11, 'ĐVTĐL', 'Gia Lai', 614, 631, 361, 178, 80, 97),
  createData(12, 'ĐVTĐL', 'Đắc Lắc', 717, 740, 406, 192, 78, 134),
  createData(13, 'ĐVTĐL', 'Đắc Nông', 315, 321, 197, 178, 56, 89)
]

const lastRows = [
  createData(1, 'TTMLMT', 'TTMLMT', 6.396, 6.649, 3508, 268, 154, 201),
  createData(2, 'ĐVTĐN', 'Quảng Trị', 374, 394, 212, 109, 58, 79),
  createData(3, 'ĐVTĐN', 'Huế', 517, 523, 284, 326, 208, 228),
  createData(4, 'ĐVTĐN', 'Đà Nẵng', 768, 797, 330, 569, 329, 413),
  createData(5, 'ĐVTĐN', 'Quảng Nam', 771, 821, 439, 317, 188, 306),
  createData(6, 'ĐVTBĐ', 'Quảng Ngãi', 511, 535, 295, 168, 112, 180),
  createData(7, 'ĐVTBĐ', 'Bình Định', 502, 501, 283, 249, 182, 231),
  createData(8, 'ĐVTBĐ', 'Phú Yên', 341, 370, 217, 172, 113, 157),
  createData(9, 'ĐVTBĐ', 'Khánh Hòa', 681, 714, 359, 305, 201, 227),
  createData(10, 'ĐVTĐL', 'Kon Tum', 285, 302, 125, 159, 55, 86),
  createData(11, 'ĐVTĐL', 'Gia Lai', 614, 631, 361, 178, 80, 95),
  createData(12, 'ĐVTĐL', 'Đắc Lắc', 717, 740, 406, 192, 78, 135),
  createData(13, 'ĐVTĐL', 'Đắc Nông', 315, 321, 197, 178, 56, 90)
]






function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {

  return (
    <React.Fragment>
      <Title>BÁO CÁO VLR-TRẠM NGÀY</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell rowSpan={2} align="center">STT</TableCell>
            <TableCell rowSpan={2} align="center">Đài Viễn Thông</TableCell>
            <TableCell rowSpan={2} align="center">Tỉnh/Thành Phố</TableCell>
            <TableCell colSpan={3} align="center">Số Lượng Trạm</TableCell>
            <TableCell colSpan={3} align="center">Tỷ Lệ VLR/Trạm</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Trạm 4G</TableCell>
            <TableCell align="center">Trạm 3G</TableCell>
            <TableCell align="center">Trạm 2G</TableCell>
            <TableCell align="center">Tỷ Lệ VLR4G/Trạm 4G</TableCell>
            <TableCell align="center">Tỷ Lệ VLR3G/Trạm 3G</TableCell>
            <TableCell align="center">Tỷ Lệ VLR2G/Trạm 2G</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return (
              <TableRow key={row.ID}>
                <TableCell align="center">{row.ID}</TableCell>
                <TableCell align="left">{row.Area}</TableCell>
                <TableCell align="left">{row.Province}</TableCell>
                <TableCell align="center">{row.CellNum4G}</TableCell>
                <TableCell align="center">{row.CellNum3G}</TableCell>
                {/* <TableCell align="center">{row.CellNum2G}</TableCell> */}

                <TableCell align="center" style={row.CellNum2G > 400 ? { backgroundColor: 'red', } : { backgroundColor: 'green', }}>{row.CellNum2G}</TableCell>

                <TableCell align="center">{row.VlrCellRatio4G}</TableCell>
                <TableCell align="center">{row.VlrCellRatio3G}</TableCell>
                <TableCell align="center">{row.VlrCellRatio2G} {row.VlrCellRatio2G > lastRows[row.ID - 1].VlrCellRatio2G ? <ArrowUpwardIcon style={{ color: "green" }} /> : <ArrowDownwardIcon style={{ color: "red" }} />}</TableCell>
                {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
