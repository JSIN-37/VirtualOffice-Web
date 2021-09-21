import { AppData } from "../../App";
import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { Input, Container } from "@material-ui/core";
import { EmployeeSelect } from "../EmployeeSelect";
import { Alert } from '@material-ui/lab';
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        boxSizing: "border-box",
        marginTop: 0,
    },
    field: {
        width: 300,
        marginTop: 10,
        fontSize: "16px",
        padding: 5
    },
    inviteButton: {
        margin: 10,
    },
}));

export const DocSign = () => {
    const classes = useStyles();
    const [appD] = React.useContext(AppData);
    const [success, setSuccess] = useState(false);
    const [docID, setDocID] = React.useState("");
    const [fileSel, setFileSel] = React.useState("");
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [selectedEmployees, setSelectedEmployees] = React.useState([]);

    const sendInvites = () => {
        const boo = selectedEmployees.map((emp) => {
            return {
                first_name: emp.first_name,
                last_name: emp.last_name,
                email: emp.email,
            };
        });
        var formData = new FormData();
        formData.append("file", fileSel);
        formData.append(
            "data",
            JSON.stringify({
                name: "my doc",
                recipients: boo,
            })
        );
        const config = {
            headers: {
                Authorization: `API-Key ${appD.keys.DOC_SIGN_KEY}`,
                "content-type": "multipart/form-data",
            },
        };
        axios
            .post("https://api.pandadoc.com/public/v1/documents/", formData, config)
            .then((res) => {
                console.log(res.data);
                setDocID(res.data.id);
            })
            .catch((err) => {
                console.log(err.request);
                console.log(err.response);
            });
    };

    useEffect(() => {
        if (docID) {
            setTimeout(() => {
                var formData = new FormData();
                formData.append(
                    "data",
                    JSON.stringify({
                        message: "Hello! This document was sent from VirtualOffice.",
                        subject: "VirtualOffice Document Sign Request",
                        silent: false,
                    })
                );
                const config = {
                    headers: {
                        Authorization: `API-Key ${appD.keys.DOC_SIGN_KEY}`,
                        "content-type": "multipart/form-data",
                    },
                };
                axios
                    .post(
                        `https://api.pandadoc.com/public/v1/documents/${docID}/send`,
                        formData,
                        config
                    ) //get the ids of all the divisions
                    .then((res) => {
                        //alert("Document was sent to employees to be signed!");
                        setSuccess(true);
                        console.log(res.data);
                    })
                    .catch((err) => {
                        console.log(err.request);
                        console.log(err.response);
                    });
            }, 1000);
        }
    }, [docID, appD.keys.DOC_SIGN_KEY]);

    const handleClose = () => {
        setSuccess(false);
    };

    function Success() {
        if (success) {
            return (
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    open={Success}
                    onClose={handleClose}
                    autoHideDuration={4000} >
                    <Alert severity="success">Document was sent to employees to be signed!</Alert>
                </Snackbar>
            );
        }
        return "";
    }

    return (
        <>
            <Container className={classes.root}>
                <Success />
                <Input
                    className={classes.field}
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => {
                        setFileSel(e.target.files[0]);
                    }}
                />
                {fileSel ? (
                    <Button
                        className={classes.inviteButton}
                        variant="outlined"
                        size="small"
                        color="primary"
                        onClick={() => {
                            setDialogOpen(true);
                        }}
                    >
                        Invite to Sign
                    </Button>

                ) : (
                    ""
                )}
                {/* {docID && fileSel ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            const config = {
              headers: {
                Authorization: `API-Key ${appD.keys.DOC_SIGN_KEY}`,
                "content-type": "multipart/form-data",
              },
            };
            axios
              .post(
                `https://api.pandadoc.com/public/v1/documents/${docID}/session`,
                JSON.stringify({ recipient: "bogus@vo.com" }),
                config
              ) //get the ids of all the divisions
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.log(err.request);
                console.log(err.response);
              });
          }}
        >
          Show Document on Cloud
        </Button>
      ) : (
        ""
      )} */}
                <EmployeeSelect
                    dialogOpen={dialogOpen}
                    setDialogOpen={setDialogOpen}
                    selectedEmployees={selectedEmployees}
                    setSelectedEmployees={setSelectedEmployees}
                    callback={sendInvites}
                />
            </Container>
        </>

    );
};
