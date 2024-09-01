import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Certificate.css";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const useStyles1 = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        padding: theme.spacing(2),
    },
    form: {
        margin: theme.spacing(1),
        width: "100%",
    },
}));

const Certificate = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const classes1 = useStyles1();
    return (
        <div className="container">
            <Card className={classes.root}>
                <h1>Verify Certificate</h1>
                <form className={classes1.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Serial Number" />
                </form>
                <form className={classes1.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label=" Intern Name" />
                </form>
                <Button mt={2} variant="contained" color="primary">
                    Verify
                </Button>
            </Card>
        </div>
    );
};

export default Certificate;
