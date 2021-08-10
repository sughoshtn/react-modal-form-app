import React, { useState, makeStyles } from "react";
import ModalPopup from "../components/ModalPopup";
import {
  Button,
  Paper,
  DialogContentText,
  Input,
  Grid,
} from "@material-ui/core";
import StepFlow from "../components/StepFlow";
/*
const useStyles=makeStyles((theme)=>({
  root: {
    width: '100%',
  },
  paper:{
    height:'400px',
  },
  step:{
padding:'5px',
  },
}
));
*/
const AssetTransfer = () => {
  //const classes = useStyles();

  const incomingParams = {
    id: 0,
    reason: "",
    transferDate: new Date(),
    transferDetails:"This is just a dialog content text block. You can enter the heading or info details here which needs to be displayed differently on diferent pages."
  };

  const [values, setValues] = useState(incomingParams);

  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    setOpenPopup(true);
  };



  return (
    <Paper>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <ModalPopup
        title={"Asset Transfer Scenaro"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        values={values}
        setValues={setValues}
      >
        <StepFlow 
          values={values}
          setValues={setValues}
        />
      </ModalPopup>
    </Paper>
  );
};
export default AssetTransfer;
