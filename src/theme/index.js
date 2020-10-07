import {createMuiTheme, colors} from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    background: {
      dark: '#3f51b5',
      default: colors.common.white,
      paper: colors.common.white
    },
    primary: {
      main: colors.indigo[500]
    },
    secondary: {
      main: colors.indigo[500]
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600]
    }
  }

});
export default theme;
