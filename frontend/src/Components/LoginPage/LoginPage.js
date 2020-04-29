import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    color: 'dark'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

function LoginPage() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  document.title = "Login";
  
  function submitAction() {
    document.location.replace("/dashboard")
  }
  
  function goToRegister() {
    document.location.replace("/register")
  }
  
  return (
    <div className={classes.root}>
      <div className="centered">
        <TextField label="E-mail"
          style={{ width: 300 }}
          id="Nome"
          margin="normal"
          variant="outlined"
          color="primary"
          size="small"
          onChange={event => setEmail(event.target.value)}
          required={true}
        />

        <TextField label="Senha"
          style={{ width: 300 }}
          id="Nome"
          margin="normal"
          variant="outlined"
          color="primary"
          size="small"
          type="password"
          onChange={event => setPassword(event.target.value)}
          required={true}
        />

        <Typography className={classes.root}>
          <Link href="#" style={{ marginBottom: 25 }} onClick={goToRegister}>
            Não possuí conta?
          </Link>
        </Typography>

        <Button style={{ margin: "auto", display: "flex" }}
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
          onClick={e => submitAction()}
          startIcon={<ArrowUpwardIcon />}
        >Login
      </Button>
      </div>
    </div>
  )
}

export default LoginPage;