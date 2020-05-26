import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LoginIcon from '@material-ui/icons/VpnKey';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import Grow from '@material-ui/core/Grow';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './LoginPage.css'

const useStyles = makeStyles((theme) => ({
  alert: {
    width: '23%',
    '& > * + *': {
      marginTop: '2px',
    },
    alignItems: 'center',
    marginLeft: '38%'
  }
}));

function LoginPage(props) {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false)
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  let history = useHistory();
  document.title = "Login";

  const handleClose = () => {
    setOpen(false);
  };

  function submitAction() {
    if (email.length === 0 && password.length === 0) {
      setEmailError(true);
      setPasswordError(true);
      setAlertOpen(true)
    } else if (email.length === 0) {
      setPasswordError(false);
      setEmailError(true);
    } else if (password.length === 0) {
      setEmailError(false);
      setPasswordError(true);
      setAlertOpen(true);
    } else {
      setEmailError(false);
      setPasswordError(false);
      history.push("/dashboard");
    }
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      submitAction();
    }
  }

  return (
    <div>
      <Collapse in={alertOpen}>
        <Alert
          className={classes.alert}
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setAlertOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Preencha todos os campos!
        </Alert>
      </Collapse>
      <div className="logon-container">
        <Grow in={true}>
          <section>
            <TextField label="E-mail"
              style={{ width: 300 }}
              id="email"
              margin="normal"
              variant="outlined"
              color="primary"
              size="small"
              type="email"
              error={emailError}
              onChange={event => setEmail(event.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus={true}
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
              error={passwordError}
              onChange={event => setPassword(event.target.value)}
              onKeyDown={handleKeyDown}
              required={true}
            />

            <ul className="options" >
              <Typography>
                <Link style={{ textDecoration: 'none', textAlign: "left" }} onClick={event => { history.push("/register"); }}>
                  Cadastre-se
                </Link>

                <Link style={{ textDecoration: 'none', paddingLeft: "50px" }} onClick={event => setOpen(true)}>
                  Esqueceu sua senha?
                </Link>
              </Typography>
            </ul>

            <Button
              style={{ margin: "auto", marginTop: "15px", display: "flex" }}
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
              onClick={e => submitAction()}
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          </section>
        </Grow>
      </div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Redefinir Senha</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para Redefinir a sua senha informe o email associado a sua conta no campo abaixo:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
                </Button>
          <Button onClick={handleClose} color="primary">
            Redefinir
              </Button>
        </DialogActions>
      </Dialog>
    </div >
  )
}

export default LoginPage;
