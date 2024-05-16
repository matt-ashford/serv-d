import { createTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

export const colorPalleteMatt = {
  primaryColor: "#225CF6",
  secondaryColor: "#88b7d7", //new
  liteBlue: "#108FE0",
  highlightColor: "#E08D20",
  darkBlue: "#104EE0",
  lightGrey: "#e6e8e6",
  darkGrey: "#d0d6d4",
  greenGrey: "#69cfa9",
  pinkHighlight: "#f45273",
  alternateHighlight: "#1ED4C7",
  alternateSecondary: "#1E7FD4",
  lineGraphTitleBlock: "#caf3fa",
};

export const {
  primaryColor,
  secondaryColor,
  liteBlue,
  highlightColor,
  lightGrey,
  darkGrey,
  pinkHighlight,
  greenGrey,
  alternateHighlight,
  alternateSecondary,
  lineGraphTitleBlock,
} = colorPalleteMatt;

export const lightGreyAgain = "#e6e8e6";

export const textNodeFont = "'Roboto', sans-serif";

const myTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 1223,
      lg: 1550,
    },
  },
});

export const useStyles_MDPage = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paperTopRow: {
    paddingBottom: "10%",
    height: 400,
    paddingTop: "2%",
  },
  mdGraphContainer: {
    maxWidth: 600,
    height: 500,
    marginTop: "2%",
  },
  titleBox: {
    marginTop: "1%",
  },
}));

export const useStyles_ClassPage = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperDropdown: {
    minWidth: 850,
    maxHeight: 50,
    padding: theme.spacing(1),
    marginTop: "1%",
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minWidth: 300,
  },
  paperCountTable: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minWidth: 300,
  },
  graphDiv: {
    width: 850,
    padding: "1%",
    height: 450,
  },
  graphDivFirstClass: {
    width: 850,
    padding: "1%",
    height: 500,
  },
  classGraphContainer: {
    maxWidth: 900,
  },
}));

export default myTheme;
