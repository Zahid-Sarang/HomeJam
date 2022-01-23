import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(8, 0, 6),
  },
  upcoming: {
    margin: "160px",
  },
  upcoming__show: {
    display: "flex",
  },
  upcoming__title: {
    color: "white",
    fontWeight: "normal",
    fontSize: "32px",
    lineHeight: "40px",
  },
  upcoming__line: {
    position: "absolute",
    width: "48px",
    height: "3px",
    left: "154px",
    marginTop: "4.2rem",
    background: "#0259EB",
    borderRadius: "16px",
  },
  upcoming__view: {
    marginTop: "1.1rem",
    marginLeft: "700px",
    color: "#e5c558",
    fontFamily: "Nunito",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
  },

  upcoming__cardGrid: {
    padding: "20px 0",
    marginTop: "30px",
  },
  upcoming__card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    boxShadow: "2px solid #fff",
    borderTopWidth: "7px",
    borderTopStyle: "solid",
    borderTopColor: "#2F216E",
    borderRightWidth: "7px",
    borderRightStyle: "solid",
    borderRightColor: "#2F216E",
    zIndex:10
  },
  upcoming__cardMedia: {
    paddingTop: "80.25%",
    height: 140,
    width: 210,
  },
  upcoming__cardContent: {
    flexGrow: 1,
  },
  upcoming__category: {
    backgroundColor: "#E5C558",
    marginTop: "2px",
    padding: "3px",
    paddingLeft: "4px",
    paddingRight: "5px",
    top: 0,
  },
  upcoming_moreInfo: {
    color: "#0259EB",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "10px",
    lineHeight: "32px",
    cursor:'pointer',
  },
}));

export default useStyles;
