import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import ClassRoundedIcon from '@material-ui/icons/ClassRounded';
import AssignmentIcon from '@material-ui/icons/Assignment';

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

export default function ClippedDrawer() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Início', 'Adicionar Conteúdo', 'Minhas Disciplinas',
              'Minhas Aulas', 'Meus Exercícios'].map((text, index) => (
                <ListItem
                  onClick={e => {
                    switch (text) {
                      case 'Início':
                        history.push('/dashboard');
                        break;
                      case 'Adicionar Conteúdo':
                        history.push('/addContent');
                        break;
                      case 'Minhas Disciplinas':
                        history.push('/subjects')
                        break;
                      case 'Minhas Aulas':
                        history.push('/classes');
                        break;
                      case 'Meus Exercícios':
                        history.push('/exercises');
                        break;
                      default:
                        history.push('/dashboard');
                    }
                  }}
                  button key={text}
                >
                  <ListItemIcon>{index === 0 ? <HomeRoundedIcon />
                    : index === 1 ? <AddBoxRoundedIcon />
                      : index === 2 ? <ClassRoundedIcon />
                        : index === 3 ? <MenuBookRoundedIcon />
                          : <AssignmentIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
          </List>
        </div>
      </Drawer>
    </div >
  );
}
