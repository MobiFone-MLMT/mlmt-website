import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import { BarChart, Bar,  CartesianGrid, Legend} from 'recharts';
import Title from './Title';


function createData(ID, Area, Province, CellNum4G, CellNum3G, CellNum2G, VlrCellRatio4G, VlrCellRatio3G, VlrCellRatio2G) {
  return { ID, Area, Province, CellNum4G, CellNum3G, CellNum2G, VlrCellRatio4G, VlrCellRatio3G, VlrCellRatio2G }
}

const rows = [
  createData(1, 'TTMLMT', 'TTMLMT', 374, 394, 212, 109, 58, 80),
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


export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <BarChart width={730} height={250} data={rows}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Province" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="CellNum4G" fill="#8884d8" />
          <Bar dataKey="CellNum3G" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
