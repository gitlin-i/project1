
export interface ThemeProps {
  value: string,
  backgroundColor : string,
  font : Object| string,
  color: Object | string,
  size: Object | string,
  breakPoints: Object,
  breakPointsNames: Object,
  layoutPadding: Object,
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
  XLARGE: 'xlarge',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
  XSMALL:'xsmall',
}
const breakPoints = {
  [BREAKPOINT_NAMES.XLARGE]: 1130,
  [BREAKPOINT_NAMES.LARGE] : 950,
  [BREAKPOINT_NAMES.MEDIUM]: 744, // 
  [BREAKPOINT_NAMES.SMALL] : 550, // 550~950
  [BREAKPOINT_NAMES.XSMALL] : 0,//0~550
}
const layoutPadding = {
  p0 : 24,
  p744 : 40,
  p1440 : 80,
}
//def end




export const lightTheme : ThemeProps = {
  // 
  value: 'light',
  backgroundColor : "#ffffff",
  font : {
    fontSize : size.md,    //16px
    fontFamily :`'Noto Sans KR', 'Roboto', 'Noto Serif KR', sans-serif`,
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
  breakPoints : breakPoints,
  breakPointsNames: BREAKPOINT_NAMES,
  layoutPadding: layoutPadding,
};

export const darkTheme : ThemeProps = {
  // 
  value: 'dark',
  backgroundColor : "#383838",
  font : {
    fontSize : size.md,    //16px
    fontFamily :`'Noto Sans KR', 'Roboto', 'Noto Serif KR', sans-serif`,
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
  breakPoints : breakPoints,
  breakPointsNames: BREAKPOINT_NAMES,
  layoutPadding: layoutPadding,
};



// ./src/theme.js
//////////////////////////////////////////////////////////////
export const copyTheme = {
  colors: {
    background: '#F6F9FC',
    backgroundInverse: '#7A8997',
    positive: '#E1FFD4',
    negative: '#FEDED2',
    primary: '#FF4785',
    secondary: '#1EA7FD',
    tertiary: '#DDDDDD',
    text: '#222222',
  },
  spacing: {
    padding: {
      small: 10,
      medium: 20,
      large: 30,
    },
    borderRadius: {
      small: 5,
      default: 10,
    },
  },
  typography: {
    type: {
      primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
    },
    weight: {
      regular: '400',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
    size: {
      s1: 12,
      s2: 14,
      s3: 16,
      m1: 20,
      m2: 24,
      m3: 28,
      l1: 32,
      l2: 40,
      l3: 48,
    },

  },
};