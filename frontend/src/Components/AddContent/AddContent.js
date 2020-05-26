import React from 'react'
import MenuBar from '../Common/MenuBar';
import Drawer from '../Common/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import './AddContent.css';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  input: {
    display: 'none',
  },
}));

export default function AddContent(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  document.title = "Adicionar Conteúdo";
  return (
    <div className="load-container">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <MenuBar {...props} />
        </AppBar>
        <Drawer />
        <Grow in={checked}>
          <div className="Add">
            <Typography
              style={{ marginBottom: '15px' }}
              className="Add">
              Clique no botão abaixo para fazer upload de um novo arquivo.
            </Typography>
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button
                style={{ alignContent: 'center' }}
                variant="contained"
                color="primary"
                component="span"
                startIcon={<CloudUploadIcon />}
              >
                Upload
                </Button>
            </label>
          </div>

        </Grow>
      </div>
    </div>
  )
}