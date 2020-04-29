import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React, { useState } from 'react';
import './RegisterPage.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: 300,
    },
  },
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
  let passwordError = false;

  document.title = "Registrar Usuário";

  function submitAction() {

    if (name.length === 0 || registration.length === 0 || email.length === 0 || phone.length === 0 ||
      password.length === 0 || confirmPassword.length === 0 || courseID.length === 0) {

    } else if (password !== confirmPassword) {
      passwordError = true;
    } else {
      console.warn("Sucesso!")
    }
  }

  return (
    <form className="centered" noValidate autoComplete="off">
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
        onChange={event => setPassword(event.target.value)}
      />

      <TextField error={passwordError} label="Confirmar Senha"
        style={{ width: 300 }}
        id="confirmaSenha"
        margin="normal"
        variant="outlined"
        color="primary"
        size="small"
        required={true}
        type="password"
        onChange={event => setConfirmPassword(event.target.value)}
      />

      <TextField error={passwordError} label="Código do Curso"
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
        onClick={e => submitAction(this)}
        startIcon={<AddCircleIcon />}
      >Criar Usuário
      </Button>

      <Button style={{ position: "absolute", right: 0 }} to="login"
        type="submit"
        variant="contained"
        color="primary"
        size="medium"
        onClick={e => { props.history.put("/login") }}
      >Cancelar
      </Button>
    </form>
  )
}

export default RegisterPage;
