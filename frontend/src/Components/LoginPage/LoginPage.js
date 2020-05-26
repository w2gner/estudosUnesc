import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Grow from '@material-ui/core/Grow';
import './LoginPage.css'

const useStyles = makeStyles((theme) => ({
  alert: {
    width: '23%',
    '& > * + *': {
      marginTop: '5px',
    },
    alignItems: 'center',
    marginLeft: '38%'
  }
}));

function LoginPage(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(true)
  const [checked, setChecked] = React.useState(true);
  document.title = "Login";

  function submitAction() {
    if (email.length === 0 || password.length === 0) {
      //console.log("Erro")
      setOpen(true);
    } else {
      props.history.push("/dashboard");
    }
  }

  function goToRegister() {
    props.history.push("/register");
  }

  function goToPasswordReset() {
    alert("Que pena :(");
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      submitAction();
    }
  }

  return (
    <div>
      <Collapse in={open}>
        <Alert
          className={classes.alert}
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Preencha todos os campos!
        </Alert>
      </Collapse>
      <section className="logon-container">
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

        <ul className="options" >
          <Typography>
            <Link className="link1" style={{ textDecoration: 'none', textAlign: "left" }} onClick={e => { goToRegister() }}>
              Cadastre-se
            </Link>

            <Link style={{ textDecoration: 'none', paddingLeft: "50px" }} onClick={e => { goToPasswordReset() }}>
              Esqueceu sua senha?
            </Link>
          </Typography>
        </ul>

        <Button
          style={{ margin: "auto", marginTop: "15px", display: "flex" }}
          to="login"
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
          onClick={e => { submitAction() }}
          startIcon={<ArrowUpwardIcon />}
        >Login
        </Button>
      </section>
    </div>
  )
}

export default LoginPage;
