import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import './RegisterPage.css'

async function submitAction(e) {
  e.preventDefault();
  alert("teste")
}

class RegisterPage extends Component {

  render() {
    return (
      <div style={{ boxAlign: "center" }} >
        <div style={{ width: 300 }}>
          <TextField label="Nome"
            margin="normal"
            variant="outlined"
            color="inherit"
            size="small"
          />

          <TextField label="Matrícula"
            margin="normal"
            variant="outlined"
            color="inherit"
            size="small"
          />

          <TextField label="E-mail"
            margin="normal"
            variant="outlined"
            color="inherit"
            size="small"
          />

          <TextField label="Telefone"
            margin="normal"
            variant="outlined"
            color="inherit"
            size="small"
          />

          <TextField label="Senha"
            margin="normal"
            variant="outlined"
            color="inherit"
            size="small"
          />

          <TextField label="Confirmar Senha"
            margin="normal"
            variant="outlined"
            color="inherit"
            size="small"
          />

          <TextField label="Código do Curso"
            margin="normal"
            variant="outlined"
            size="small"
            required="true"
          />

          <Button style={{ marginTop: 20, marginLeft: 20 }}
            type="submit"
            variant="contained"
            color="primary"
            size="medium"
            onChange={e => submitAction(e.target.value)}
            onSubmit={e => submitAction(e.target.value)}
            startIcon={<SaveIcon />}
          >Criar Usuário
          </Button>
        </div>
      </div>
    )
  }
}

export default RegisterPage;
