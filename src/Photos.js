import React, { useState, useEffect } from "react";
import PhotoCard from "./photocard";
import AddPhoto from "./addPhoto";
import Button from "@material-ui/core/Button";
import { db, snapshotToArray } from "./firebase";

export default function addPhotos(props) {
  const [dialog_open, setDialogOpen] = useState();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(props.user.uid)
      .collection("albums")
      .doc(props.match.params.album_id)
      .collection("photos")
      .onSnapshot(snapshot => {
        const updated_photos = snapshotToArray(snapshot);
        setPhotos(updated_photos);
      });
    return unsubscribe;
  }, [props]);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        paddingLeft: 10,
        paddingTop: 10
      }}
    >
      {photos.map(p => {
        return <PhotoCard photo={p} />;
      })}
      <Button
        color="secondary"
        variant="contained"
        onClick={() => {
          setDialogOpen(true);
        }}
        style={{ marginTop: 10, height: 50 }}
      >
        Add Photo
      </Button>
      <AddPhoto
        open={dialog_open}
        onClose={() => {
          setDialogOpen(false);
        }}
        user={props.user}
        album_id={props.match.params.album_id}
      />
    </div>
  );
}
