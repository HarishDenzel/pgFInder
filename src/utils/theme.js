import { createTheme } from '@mui/material/styles';
import {Poppins} from "next/font/google"

const poppins =  Poppins({
  weight: ['100','300','400','600'],
  style:['italic','normal'],
  subsets:['latin']
})
export const theme = createTheme({
  palette: {
    primary: {
      main: "#E14E64",
      'contrastText':'#f4f4f4',
      'light':'#f4f4f4'
    },
    secondary: {
      main: '#f4f4f4',
      "contrastText":'#E14E64'
    },
  },
  typography: {
    allVariants: {
      fontFamily: poppins.style.fontFamily,
      // textTransform: 'none',
      // fontSize: 16,
    },
  },

});