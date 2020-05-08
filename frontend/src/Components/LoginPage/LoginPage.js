import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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

function LoginPage(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  document.title = "Login";

  function submitAction() {
    props.history.push("/dashboard/home");
  }

  function goToRegister() {
    props.history.push("/register");
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      submitAction();
    }
  }

  return (
    <div className={classes.root}>
      <div className="centered">
        <TextField label="E-mail"
          style={{ width: 300 }}
          id="email"
          margin="normal"
          variant="outlined"
          color="primary"
          size="small"
          onChange={event => setEmail(event.target.value)}
          onKeyDown={handleKeyDown}
          required={true}
        />

        <TextField label="Senha"
          style={{ width: 300 }}
          id="senha"
          margin="normal"
          variant="outlined"
          color="primary"
          size="small"
          type="password"
          onChange={event => setPassword(event.target.value)}
          onKeyDown={handleKeyDown}
          required={true}
        />

        <Typography className={classes.root}>
          <Link style={{ textDecoration: 'none', marginBottom: 25 }} to="register" onClick={goToRegister}>
            Não possui conta?
          </Link>
        </Typography>

        <Button to="login" style={{ margin: "auto", display: "flex" }}
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
