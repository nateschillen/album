import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { db } from "./firebase";

export default function addAlbum(props) {
  const [name, setName] = useState("");

  const handleSaveAlbum = () => {
    db.collection("users")
      .doc(props.user.uid)
      .collection("albums")
      .add({ name: name });
  };
  return (
    <Dialog open={props.open} maxWidth="sm" fullWidth onClose={props.onClose}>
      <DialogTitle>Add an Album</DialogTitle>
      <DialogContent>
        <TextField
          label="Album Name"
          fullWidth
          value={name}
          onChange={e => {
            setName(e.target.value);
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={props.onClose}>
          Cancel
        </Button>
        <Button onClick={handleSaveAlbum} color="primary" variant="contained">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
