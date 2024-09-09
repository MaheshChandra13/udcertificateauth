import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./Certificate.css";
import { UserState } from "../Context/Context";
import { useNavigate } from "react-router-dom"; // Updated import

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
    textField: {
        marginBottom: theme.spacing(2),
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const Certificate = () => {
    const [state, setState] = useState({
        serialNumber: "",
        internName: "",
    });

    // Using the UserState from the context
    const { setUser } = UserState(); // Only use setUser, user isn't used here

    const classes = useStyles();
    const classes1 = useStyles1();

    // Get the navigate function from useNavigate
    const navigate = useNavigate(); // Replacing useHistory with useNavigate

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Update the user context with form data
        setUser(state);

        // Redirect to the verification page if the serial number is present
        if (state.serialNumber.length > 0) {
            navigate("/verification"); // Use navigate instead of history.push
        }
    };

    // Function to handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    return (
        <div className="container">
            <Card className={classes.root}>
                <h1>Verify Certificate</h1>
                <form
                    onSubmit={handleSubmit}
                    className={classes1.root}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        className={classes1.textField}
                        onChange={handleChange}
                        id="serialNumber"
                        label="Serial Number"
                        value={state.serialNumber}
                        fullWidth
                    />
                    <TextField
                        className={classes1.textField}
                        onChange={handleChange}
                        id="internName"
                        label="Intern Name"
                        value={state.internName}
                        fullWidth
                    />
                    <Button
                        className={classes1.button}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >
                        Verify
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Certificate;
