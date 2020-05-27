import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { Grow } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './RegisterPage.css';

const useStyles = makeStyles((theme) => ({
  alert: {
    width: '23%',
    '& > * + *': {
      marginTop: '2px'
    },
    alignItems: 'center',
    marginLeft: '38%'
  }
}));

function RegisterPage(props) {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [registration, setRegistration] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [courseID, setCourseID] = useState("");
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [successAlert, setSuccessAlert] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = React.useState(false);
  let history = useHistory();
  document.title = "Registrar Usuário";

  function submitAction() {
    if (name.length === 0 || registration.length === 0 || email.length === 0 || phone.length === 0 ||
      password.length === 0 || confirmPassword.length === 0 || courseID.length === 0) {
      setAlertOpen(true);
    } else if (password !== confirmPassword) {
      setAlertOpen(false);
      setPasswordError(true);
      setConfirmPasswordError(true);
    } else {
      setSuccessAlert(true);
      setTimeout(() => {
        history.push("/login");
      }, 1500);
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
      <Collapse in={successAlert}>
        <Alert
          className={classes.alert}
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setSuccessAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Registrado com sucesso!
        </Alert>
      </Collapse>
      <section className="centered">
        <Grow in={true}>
          <form noValidate autoComplete="off">
            <TextField label="Nome"
              style={{ width: 300 }}
              id="standard-error-helper-text"
              margin="normal"
              variant="outlined"
              color="primary"
              size="small"
              required={true}
              onChange={event => setName(event.target.value)}
            />

            <TextField label="Matrícula"
              style={{ width: 300 }}
              id="matricula"
              margin="normal"
              variant="outlined"
              color="primary"
              size="small"
              required={true}
              onChange={event => setRegistration(event.target.value)}
            />

            <TextField label="E-mail"
              style={{ width: 300 }}
              id="email"
              margin="normal"
              variant="outlined"
              color="primary"
              size="small"
              required={true}
              onChange={event => setEmail(event.target.value)}
            />

            <TextField label="Telefone"
              style={{ width: 300 }}
              id="telefone"
              margin="normal"
              variant="outlined"
              color="primary"
              size="small"
              required={true}
              type="phone"
              onChange={event => setPhone(event.target.value)}
            />

            <TextField label="Senha"
              style={{ width: 300 }}
              id="senha"
              margin="normal"
              variant="outlined"
              color="primary"
              size="small"
              required={true}
              type="password"
              error={passwordError}
              onChange={event => setPassword(event.target.value)}
            />

            <TextField label="Confirmar Senha"
              style={{ width: 300 }}
              id="confirmaSenha"
              margin="normal"
              variant="outlined"
              color="primary"
              size="small"
              required={true}
              type="password"
              error={confirmPasswordError}
              onChange={event => setConfirmPassword(event.target.value)}
            />

            <TextField label="Código do Curso"
              style={{ width: 300, marginBottom: 25 }}
              id="idCurso"
              margin="normal"
              variant="outlined"
              size="small"
              required={true}
              onChange={event => setCourseID(event.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
              onClick={event => { event.preventDefault(); submitAction() }}
              startIcon={<AddCircleIcon />}
            >
              Confirmar
            </Button>

            <Button style={{ position: "absolute", right: 0 }}
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
              onClick={event => history.push('/login')}
              startIcon={<CancelIcon />}
            >
              Cancelar
            </Button>
          </form>
        </Grow>
      </section>
    </div >
  )
}

export default RegisterPage;
