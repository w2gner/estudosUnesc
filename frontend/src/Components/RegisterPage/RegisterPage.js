import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import './RegisterPage.css'

function submitAction() {
  let name = document.getElementById("Nome").value
  let matricula = document.getElementById("matricula").value
  let email = document.getElementById("email").value
  let telefone = document.getElementById("telefone").value
  let senha = document.getElementById("senha").value
  let confirmaSenha = document.getElementById("confirmaSenha").value
  let idCurso = document.getElementById("idCurso").value

  if (name.length === 0 || matricula.length === 0 || email.length === 0 || telefone.length === 0 ||
    senha.length === 0 || confirmaSenha.length === 0 || idCurso.length === 0) {
    console.error("Preencha todos os campos!")
  } else {
    console.warn("Sucesso!")
  }
}

function RegisterPage() {
  return (
    <div className="centered" >
      <TextField label="Nome"
        style={{ width: 300 }}
        id="Nome"
        margin="normal"
        variant="outlined"
        color="primary"
        size="small"
        required={true}
      />

      <TextField label="Matrícula"
        style={{ width: 300 }}
        id="matricula"
        margin="normal"
        variant="outlined"
        color="primary"
        size="small"
        required={true}
      />

      <TextField label="E-mail"
        style={{ width: 300 }}
        id="email"
        margin="normal"
        variant="outlined"
        color="primary"
        size="small"
        required={true}
      />

      <TextField label="Telefone"
        style={{ width: 300 }}
        id="telefone"
        margin="normal"
        variant="outlined"
        color="primary"
        size="small"
        required={true}
      />

      <TextField label="Senha"
        style={{ width: 300 }}
        id="senha"
        margin="normal"
        variant="outlined"
        color="primary"
        size="small"
        required={true}
      />

      <TextField label="Confirmar Senha"
        style={{ width: 300 }}
        id="confirmaSenha"
        margin="normal"
        variant="outlined"
        color="primary"
        size="small"
        required={true}
      />

      <TextField label="Código do Curso"
        style={{ width: 300, marginBottom: 25 }}
        id="idCurso"
        margin="normal"
        variant="outlined"
        size="small"
        required={true}
      />

      <Button style={{ margin: "auto", display: "flex" }}
        type="submit"
        variant="contained"
        color="primary"
        size="medium"
        onClick={e => submitAction()}
        startIcon={<SaveIcon />}
      >Criar Usuário
      </Button>
    </div>
  )
}

export default RegisterPage;
