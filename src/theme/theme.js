import { createTheme } from "@material-ui/core";

// const defaultTheme = createTheme();

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#010852',
    },
    secondary: {
      main: '#8200f5',
    },
    error: {
      main: '#f51807',
    },
    info: {
      main: '#21a4f3',
    },
    success: {
      main: '#22d82a',
    },
  },
  typography: {
    fontWeightLight: 400,
    fontFamily: ["Noto Sans", "sans-serif"].join(", "),
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        body: {
           background: 'linear-gradient(10deg, #69a8f5 .25%, #ffffff 90%)',
           backgroundRepeat: "no-repeat",
           backgroundAttachment: "fixed",
        },
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: '0.5rem'
      },
      // root: {
      //   padding: '2rem'
      // }
    }
    // MuiToolbar: {
    //   gutters: {
    //     [defaultTheme.breakpoints.up('sm')] : {
    //       paddingLeft: 16,
    //       paddingRight: 16
    //     }
    //   },
    //   root: {
    //     [defaultTheme.breakpoints.up('sm')]: {
    //       display: 'flex',
    //       alignItems: 'center',
    //       justifyContent: 'space-between'
    //     }
    //   }
    // }
  }
});