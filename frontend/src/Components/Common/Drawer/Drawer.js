import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import AddBoxRoundedIcon from '@material-ui/icons/AddBoxRounded';
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import { NavLink } from 'react-router-dom';

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

function redirect(text) {
  switch (text) {
    case 'Início': return '/dashboard'
    case 'Adicionar Conteúdo': return '/addContent'
    case 'Minhas Disciplinas': return '/subjects'
    case 'Minhas Aulas': return '/classes'
    case 'Meus Exercícios': return '/exercises'
    default: return 'dashboard'
  }

}

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
            {['Início', 'Adicionar Conteúdo','Minhas Disciplinas', 'Minhas Aulas', 'Meus Exercícios'].map((text, index) => (
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={redirect(text)}
                activeStyle={{ color: "#445ce0", fontWeight: "", backgroundColor: "black" }}
                className=".Mui-focusVisible"
              >
                <ListItem button key={text}>
                  <ListItemIcon>{index === 0 ? <HomeRoundedIcon /> : index === 1 ? <AddBoxRoundedIcon /> : index === 2 ?
                    <StarRoundedIcon /> : <MenuBookRoundedIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}