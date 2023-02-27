import { DefaultTheme } from 'styled-components';



export interface Theme {
  value: string,
  backgroundColor? : string,
  font? : Object| string,
  borderRadius? : string,
  color?: Object | string,
  size?: Object | string,
}

// def start
const themeColor = {
  primary: "#038cfc",
  secondary:"#18a8b8",
  white: "#ffffff",
  gray:'#CCCCCC',
  green: "#0afc32",
  red: "#f23a3a",
  black: "#000000"

}

const size = {
  xl: 24, //xlarge
  lg: 20, // large
  md : 16, // medium
  sm: 14, //small
  xs: 12, //xsmall
}

const BREAKPOINT_NAMES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL:'small',
}
const breakPoints = {
  [BREAKPOINT_NAMES.SMALL] : 1024,

}
//def end




export const lightTheme : Theme = {
  // 
  value: 'light',
  backgroundColor : "#ffffff",
  font : {
    fontSize : size.md,    //16px
    fontFamily :`'Roboto', 'Noto Serif KR','Noto Sans KR', sans-serif`,
    lineHeight: {
      xl:'60px',
      lg:'54px',
      md:'36px',
      sm:'24px',
      xs:'18px',
    },
    fontWeight : 700,
    color: themeColor.black,
  },
  color: themeColor,
  size: size,
};

export const darkTheme : Theme = {
  // 
  value: 'dark',
  backgroundColor : "#383838",
  font : {
    fontSize : size.md,    //16px
    fontFamily :`'Roboto', 'Noto Serif KR','Noto Sans KR', sans-serif`,
    lineHeight: {
      xl:'60px',
      lg:'54px',
      md:'36px',
      sm:'24px',
      xs:'18px',
    },
    fontWeight : 700,
    color: themeColor.white,
  },
  color: themeColor,
  size: size,
};



