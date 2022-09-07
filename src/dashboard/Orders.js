import React, { useState } from "react"
import Link from '@mui/material/Link';
// import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MaterialTable from 'material-table';
import { Table } from "@material-ui/core";
import { Tab } from "@mui/material";
import Title from './Title';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const columns = [
    { title: "ID", field: "ID"},
    { title: "Area", field: "Area" },
    { title: "Province", field: "Province" },
    { title: "NumCell4G", field: "NumCell4G" },
    { title: "NumCell3G", field: "NumCell3G" },
    { title: "NumCell2G", field: "NumCell2G" },
    { title: "VlrCellRatio4G", field: "VlrCellRatio4G" },
    { title: "VlrCellRatio3G", field: "VlrCellRatio3G" },
    { title: "VlrCellRatio2G", field: "VlrCellRatio2G" }
  ]

  //Generate model data
  // const [tableData, setTableData] = useState([
  //   { ID: 1, Area: 'TTMLMT', Province: 'TTMLMT', NumCell4G: 6.396, NumCell3G: 6.649, NumCell2G: 3.508, VlrCellRatio4G: 268, VlrCellRatio3G: 154, VlrCellRatio2G: 200 },
  //   { ID: 2, Area: 'ĐVTĐN', Province: 'Quảng Trị', NumCell4G: 374, NumCell3G: 394, NumCell2G: 212, VlrCellRatio4G: 109, VlrCellRatio3G: 58, VlrCellRatio2G: 80 },
  //   { ID: 3, Area: 'ĐVTĐN', Province: 'Huế', NumCell4G: 517, NumCell3G: 523, NumCell2G: 284, VlrCellRatio4G: 326, VlrCellRatio3G: 208, VlrCellRatio2G: 229 },
  //   { ID: 4, Area: 'ĐVTĐN', Province: 'Đà Nẵng', NumCell4G: 768, NumCell3G: 797, NumCell2G: 330, VlrCellRatio4G: 569, VlrCellRatio3G: 329, VlrCellRatio2G: 412 },
  //   { ID: 5, Area: 'ĐVTĐN', Province: 'Quảng Nam', NumCell4G: 771, NumCell3G: 821, NumCell2G: 439, VlrCellRatio4G: 317, VlrCellRatio3G: 188, VlrCellRatio2G: 307 },
  //   { ID: 6, Area: 'ĐVTBĐ', Province: 'Quảng Ngãi', NumCell4G: 511, NumCell3G: 535, NumCell2G: 295, VlrCellRatio4G: 168, VlrCellRatio3G: 112, VlrCellRatio2G: 182 },
  //   { ID: 7, Area: 'ĐVTBĐ', Province: 'Bình Định', NumCell4G: 502, NumCell3G: 501, NumCell2G: 283, VlrCellRatio4G: 249, VlrCellRatio3G: 182, VlrCellRatio2G: 230 },
  //   { ID: 8, Area: 'ĐVTBĐ', Province: 'Phú Yên', NumCell4G: 341, NumCell3G: 370, NumCell2G: 217, VlrCellRatio4G: 172, VlrCellRatio3G: 113, VlrCellRatio2G: 159 },
  //   { ID: 9, Area: 'ĐVTBĐ', Province: 'Khánh Hòa', NumCell4G: 681, NumCell3G: 714, NumCell2G: 359, VlrCellRatio4G: 305, VlrCellRatio3G: 201, VlrCellRatio2G: 220 },
  //   { ID: 10, Area: 'ĐVTĐL', Province: 'Kon Tum', NumCell4G: 285, NumCell3G: 302, NumCell2G: 125, VlrCellRatio4G: 159, VlrCellRatio3G: 55, VlrCellRatio2G: 87 },
  //   { ID: 11, Area: 'ĐVTĐL', Province: 'Gia Lai', NumCell4G: 614, NumCell3G: 631, NumCell2G: 361, VlrCellRatio4G: 178, VlrCellRatio3G: 80, VlrCellRatio2G: 97 },
  //   { ID: 12, Area: 'ĐVTĐL', Province: 'Đắc Lắc', NumCell4G: 717, NumCell3G: 740, NumCell2G: 406, VlrCellRatio4G: 192, VlrCellRatio3G: 78, VlrCellRatio2G: 134 },
  //   { ID: 13, Area: 'ĐVTĐL', Province: 'Đắc Nông', NumCell4G: 315, NumCell3G: 321, NumCell2G: 197, VlrCellRatio4G: 178, VlrCellRatio3G: 56, VlrCellRatio2G: 89 }

  // ])

  // const [lastTableData, setLastTableData] = useState([
  //   { ID: 1, Area: 'TTMLMT', Province: 'TTMLMT', NumCell4G: 6.396, NumCell3G: 6.649, NumCell2G: 3.508, VlrCellRatio4G: 268, VlrCellRatio3G: 154, VlrCellRatio2G: 201 },
  //   { ID: 2, Area: 'ĐVTĐN', Province: 'Quảng Trị', NumCell4G: 374, NumCell3G: 394, NumCell2G: 212, VlrCellRatio4G: 109, VlrCellRatio3G: 58, VlrCellRatio2G: 81 },
  //   { ID: 3, Area: 'ĐVTĐN', Province: 'Huế', NumCell4G: 517, NumCell3G: 523, NumCell2G: 284, VlrCellRatio4G: 326, VlrCellRatio3G: 208, VlrCellRatio2G: 228 },
  //   { ID: 4, Area: 'ĐVTĐN', Province: 'Đà Nẵng', NumCell4G: 768, NumCell3G: 797, NumCell2G: 330, VlrCellRatio4G: 569, VlrCellRatio3G: 329, VlrCellRatio2G: 411 },
  //   { ID: 5, Area: 'ĐVTĐN', Province: 'Quảng Nam', NumCell4G: 771, NumCell3G: 821, NumCell2G: 439, VlrCellRatio4G: 317, VlrCellRatio3G: 188, VlrCellRatio2G: 306 },
  //   { ID: 6, Area: 'ĐVTBĐ', Province: 'Quảng Ngãi', NumCell4G: 511, NumCell3G: 535, NumCell2G: 295, VlrCellRatio4G: 168, VlrCellRatio3G: 112, VlrCellRatio2G: 181 },
  //   { ID: 7, Area: 'ĐVTBĐ', Province: 'Bình Định', NumCell4G: 502, NumCell3G: 501, NumCell2G: 283, VlrCellRatio4G: 249, VlrCellRatio3G: 182, VlrCellRatio2G: 230 },
  //   { ID: 8, Area: 'ĐVTBĐ', Province: 'Phú Yên', NumCell4G: 341, NumCell3G: 370, NumCell2G: 217, VlrCellRatio4G: 172, VlrCellRatio3G: 113, VlrCellRatio2G: 158 },
  //   { ID: 9, Area: 'ĐVTBĐ', Province: 'Khánh Hòa', NumCell4G: 681, NumCell3G: 714, NumCell2G: 359, VlrCellRatio4G: 305, VlrCellRatio3G: 201, VlrCellRatio2G: 221 },
  //   { ID: 10, Area: 'ĐVTĐL', Province: 'Kon Tum', NumCell4G: 285, NumCell3G: 302, NumCell2G: 125, VlrCellRatio4G: 159, VlrCellRatio3G: 55, VlrCellRatio2G: 88 },
  //   { ID: 11, Area: 'ĐVTĐL', Province: 'Gia Lai', NumCell4G: 614, NumCell3G: 631, NumCell2G: 361, VlrCellRatio4G: 178, VlrCellRatio3G: 80, VlrCellRatio2G: 98 },
  //   { ID: 12, Area: 'ĐVTĐL', Province: 'Đắc Lắc', NumCell4G: 717, NumCell3G: 740, NumCell2G: 406, VlrCellRatio4G: 192, VlrCellRatio3G: 78, VlrCellRatio2G: 135 },
  //   { ID: 13, Area: 'ĐVTĐL', Province: 'Đắc Nông', NumCell4G: 315, NumCell3G: 321, NumCell2G: 197, VlrCellRatio4G: 178, VlrCellRatio3G: 56, VlrCellRatio2G: 88 }

  // ])


  const [tableData, setTableData] = useState([])  
  const [lastTableData, setLastTableData] = useState([])

  React.useEffect(function() {
    fetch("http://localhost:5000/simpleNodejsApi/yesterdayData")
      .then(res => res.json())
      .then(data => setLastTableData(data))
    fetch("http://localhost:5000/simpleNodejsApi/todayData")
      .then(res => res.json())
      .then(data => setTableData(data))
  },[])

  return (
    <React.Fragment>
      <MaterialTable
        columns={columns}
        data={tableData}
        title="BÁO CÁO VLR-TRẠM NGÀY..."
        components={{
          Header: props => {
            return (
              <TableHead style={{ backgroundColor: '#1976d2',}}>
                <TableRow>
                  <TableCell size="small" rowSpan={2} align="center" style={{ color: 'white',}}>STT</TableCell>
                  <TableCell size="small" rowSpan={2} align="center" style={{ color: 'white',}}>Đài Viễn Thông</TableCell>
                  <TableCell size="small" rowSpan={2} align="center" style={{ color: 'white',}}>Tỉnh/Thành Phố</TableCell>
                  <TableCell size="small" colSpan={3} align="center" style={{ color: 'white',}}>Số Lượng Trạm</TableCell>
                  <TableCell size="small" colSpan={3} align="center" style={{ color: 'white',}}>Tỷ Lệ VLR/Trạm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell size="small" align="center" style={{ color: 'white',}}>Trạm 4G</TableCell>
                  <TableCell size="small" align="center" style={{ color: 'white',}}>Trạm 3G</TableCell>
                  <TableCell size="small" align="center" style={{ color: 'white',}}>Trạm 2G</TableCell>
                  <TableCell size="small" align="center" style={{ color: 'white',}}>Tỷ Lệ VLR4G/Trạm 4G</TableCell>
                  <TableCell size="small" align="center" style={{ color: 'white',}}>Tỷ Lệ VLR3G/Trạm 3G</TableCell>
                  <TableCell size="small" align="center" style={{ color: 'white',}}>Tỷ Lệ VLR2G/Trạm 2G</TableCell>
                </TableRow>
              </TableHead>
            )
          },
          Row: ({ data }) => {
            return (
              <TableRow key={data.ID}>
                <TableCell size="small" align="center">{data.ID}</TableCell>
                <TableCell size="small" align="left">{data.Area}</TableCell>
                <TableCell size="small" align="left">{data.Province}</TableCell>
                <TableCell size="small" align="center">{data.NumCell4G}</TableCell>
                <TableCell size="small" align="center">{data.NumCell3G}</TableCell>
                <TableCell size="small" align="center" style={data.NumCell2G > 400 ? { backgroundColor: 'red', } : { backgroundColor: 'green', }}>{data.NumCell2G}</TableCell>
                <TableCell size="small" align="center">{data.VlrCellRatio4G} {data.VlrCellRatio4G > lastTableData[data.ID - 1].VlrCellRatio4G ? <ArrowUpwardIcon style={{ color: "green" }} /> : data.VlrCellRatio4G < lastTableData[data.ID - 1].VlrCellRatio4G? <ArrowDownwardIcon style={{ color: "red" }} />:<ArrowForwardIcon style={{ color: "orange" }}/>}</TableCell>
                <TableCell size="small" align="center">{data.VlrCellRatio3G} {data.VlrCellRatio3G > lastTableData[data.ID - 1].VlrCellRatio3G ? <ArrowUpwardIcon style={{ color: "green" }} /> : data.VlrCellRatio3G < lastTableData[data.ID - 1].VlrCellRatio3G? <ArrowDownwardIcon style={{ color: "red" }} />:<ArrowForwardIcon style={{ color: "orange" }}/>}</TableCell>
                <TableCell size="small" align="center">{data.VlrCellRatio2G} {data.VlrCellRatio2G > lastTableData[data.ID - 1].VlrCellRatio2G ? <ArrowUpwardIcon style={{ color: "green" }} /> : data.VlrCellRatio2G < lastTableData[data.ID - 1].VlrCellRatio2G? <ArrowDownwardIcon style={{ color: "red" }} />:<ArrowForwardIcon style={{ color: "orange" }}/>}</TableCell>
                {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
              </TableRow>
            );
          }

        }}
        options={{
          // grouping: true,
          sorting: true,
          exportButton: true,
          exportAllData: true,
          pageSize: 5,
          pageSizeOptions: [5, 13,20],
        }}
      >
      </MaterialTable>
    </React.Fragment>
  );
}