import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { UserState } from "../Context/Context";

const useStyles = makeStyles({
    card: {
        padding: "40px",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
        border: "1px solid #ddd",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
    },
    logo: {
        textAlign: "left",
        fontSize: "24px",
        fontWeight: "bold",
    },
    title: {
        fontSize: "30px",
        fontWeight: "bold",
        margin: "20px 0",
    },
    subtitle: {
        fontSize: "18px",
        fontWeight: "normal",
        color: "#666",
        marginBottom: "40px",
    },
    info: {
        fontSize: "16px",
        textAlign: "left",
        marginBottom: "20px",
    },
    name: {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    date: {
        fontSize: "16px",
        color: "#666",
    },
});

const Verification = () => {
    const classes = useStyles();
    const { user, setUser } = UserState();
    console.log(user);
    return (
        <div className="container">
            <Card className={classes.card}>
                <div className={classes.logo}>
                    <img
                        src="/imgs/Screenshot 2024-09-06 161058.jpg"
                        alt="UnlockDiscounts Logo"
                    />
                </div>
                <h1 className={classes.title}>CERTIFICATE OF COMPLETION</h1>

                <div className={classes.name}>{user.internName}</div>
                <div className={classes.date}>
                    Serial number : {user.serialNumber}
                    <br /> Joining date: 17 Jun 2024
                </div>
                <div>VERIFIED</div>
                <p className={classes.info}>
                    Certificate issued on : 31 Dec 2024 <br />
                </p>
            </Card>
        </div>
    );
};

export default Verification;
