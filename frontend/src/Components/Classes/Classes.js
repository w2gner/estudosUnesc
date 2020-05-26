import React from 'react'
import MenuBar from '../Common/MenuBar';
import Drawer from '../Common/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import './Classes.css'

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
}));

export default function Classes(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  document.title = "Minhas Aulas";
  return (
    <div className="Classes">
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <MenuBar {...props} />
        </AppBar>
        <Drawer />
        <Grow in={checked}>
          <main className={classes.content}>
            <h1>Minhas Aulas</h1>
          </main>
        </Grow>
      </div>
    </div>
  )
}