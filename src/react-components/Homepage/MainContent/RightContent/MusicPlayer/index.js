import React, { useState } from "react";
import './styles.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "310px",
    height: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    backgroundColor: 'rgba(52, 52, 52, 0.1)',

  },

  input: {
    width: '80%',
    color: "white",
    lineHeight: 'normal'
  },

  button: {
    float: 'right',
    color: "white"
  }
}))

export default function MediaControlCard() {
  const classes = useStyles();

  const [searchKey, setSearchKey] = useState("https://open.spotify.com/embed/playlist/37i9dQZF1DX8NTLI2TtZa6");
  var a = ""

  const searchButtonClickHandler = (e) => {
    e.preventDefault();
    var temp = a.split("/")
    temp = temp[0] + "//" + temp[2] + "/embed/playlist/" + temp[4]
    setSearchKey(temp)
    console.log(searchKey)
  }

  const searchTextChangeHandler = (e) => {
    a = e.target.value
  }
  return (
    <div id="spotify">
      <div id="playlistInputContainer">
        <Paper component="form" className={classes.root}>
          {/* <TextField id="input" variant="outlined"
            placeholder="Spotify Playlist URL"
            onChange={searchTextChangeHandler}
        >
         </TextField> */}
          <InputBase className={classes.input} placeholder="  Spotify Playlist URL" onChange={searchTextChangeHandler} />
          <Button type="submit" className={classes.button} aria-label="search">
            Go
          </Button>
          {/* <IconButton id="button" type="submit"  aria-label="search" onClick={searchButtonClickHandler}>
           submit
        </IconButton> */}
        </Paper>
      </div>
      <div>
        <iframe src={searchKey} width="320" height="340" frameborder="0" allowtransparency="true" allow="encrypted-media" style={{ borderRadius: "2%" }}></iframe>
      </div>
    </div>
  );
}


