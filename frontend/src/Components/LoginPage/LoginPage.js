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

const useStyles = makeStyles((theme) => ({
  alert: {
    width: '25%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginLeft: '38%'
  }
}));

function LoginPage(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(true)
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

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      submitAction();
    }
  }

  return (
    <div className="centered">
      <Collapse in={open}>
        <Alert
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
      <section>
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

        <Typography>
          <Link style={{ textDecoration: 'none', marginBottom: 25 }} to="register" onClick={goToRegister}>
            Não possui conta?
          </Link>
        </Typography>

        <Button
          style={{ margin: "auto", marginTop: "15px", display: "flex" }}
          to="login"
          type="submit"
          variant="contained"
          color="primary"
          size="medium"
          onClick={e => submitAction()}
          startIcon={<ArrowUpwardIcon />}
        >Login
      </Button>
      </section>
    </div>
  )
}

export default LoginPage;
