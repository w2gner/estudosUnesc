import React from 'react'
import MenuBar from '../Common/MenuBar';
import Drawer from '../Common/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import teal from '@material-ui/core/colors/teal';
import lightBlue from '@material-ui/core/colors/lightBlue';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import LibraryBook from '@material-ui/icons/LibraryBooksRounded';
import AddIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Grow from '@material-ui/core/Grow';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './Subjects.css';

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
  palette: {
    primary: teal,
    secondary: lightBlue,
  },
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export default function Subjects(props) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  document.title = "Minhas Disciplinas";

  return (
    <div>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <MenuBar {...props} />
        </AppBar>
        <Drawer />
        <Grow in={checked}>
          <section className={classes.content}>
            <div className="button-container">
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={handleClickOpen}
                className={classes.button}
                startIcon={<AddIcon />}
              >Adicionar Matéria</Button>
            </div>
            <div className="list">
              <Grid item xs={12} md={4}>
                <div className={classes.demo}>
                  <List dense={dense}>
                    {generate(
                      <ListItem>
                        <ListItemAvatar>
                          <Avatar>
                            <LibraryBook />
                          </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                          primary="Matérias"
                          secondary={secondary ? 'Secondary text' : null}
                        />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" aria-label="delete">
                            <DeleteIcon onClick={e => { alert("Não está implementado") }} />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>,
                    )}
                  </List>
                </div>
              </Grid>
            </div >
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
              <DialogTitle id="form-dialog-title">Adicionar Matéria</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Para adicionar uma nova matéria por favor insira o nome da matéria no campo abaixo:
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Nome da Matéria"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancelar
                </Button>
                <Button onClick={handleClose} color="primary">
                  Adicionar
              </Button>
              </DialogActions>
            </Dialog>
          </section>
        </Grow>
      </div>
    </div >
  )
}