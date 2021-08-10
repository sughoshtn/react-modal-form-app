import React from 'react';
import { Grid,DialogContentText } from '@material-ui/core';
import ValueSelector from "../controls/ValueSelector";
import * as assetTransferService from "../services/assetTransferDataService";
const TransferReason =(props) =>{
    const {values,handleInputChange} = props;
return(
    <Grid container justifyContent="center">
    <Grid item xs={12}>
      <DialogContentText>
       
      </DialogContentText>
    </Grid>
    <Grid item >
      <ValueSelector
        label="Transfer Reason"
        name="reason"
       value={values.reason}
       options={assetTransferService.transerReasonList()}
        onChange={handleInputChange}
      />
    </Grid>
  </Grid>
);
};
export default TransferReason;