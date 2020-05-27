import React from 'react'
import MenuBar from '../Common/MenuBar';
import Drawer from '../Common/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import Chip from '@material-ui/core/Chip';
import LibraryBook from '@material-ui/icons/LibraryBooksRounded';
import './Dashboard.css'

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '70px',
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
  chip: {
    margin: "5px",
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  document.title = "Início";

  function handleDelete() { }

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <MenuBar {...props} />
        </AppBar>
        <Drawer />
        <main className={classes.content}>
          <Grow in={checked}>
            <section>
              <h1>Dashboard</h1>
              <Chip
                className={classes.chip}
                color="secondary"
                icon={<LibraryBook />}
                label="Materia 1"
                onClick={event => { }}
                onDelete={handleDelete}
              />
              <Chip
                className={classes.chip}
                color="secondary"
                icon={<LibraryBook />}
                label="Materia 2"
                onClick={event => { }}
                onDelete={handleDelete}
              />
            </section>
          </Grow>
        </main>
      </div>
    </div>
  )
}