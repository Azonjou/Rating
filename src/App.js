import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="auto">
        <TextField className='User' id="outlined-basic" label="Пользователь" variant="outlined" /><br></br>
        <TextField className='Pass' id="outlined-pas" type="password" label="Пароль" variant="outlined" /><br></br>
        <Button className='Autor' variant="contained">Войти</Button>
    </div>
  );
}

export default App;
