import './App.css';
import UserInfoValidationForm from './Components/UserInfoValidationForm';


function App() {
  const _userData ={
    name:'alok sharma',
    email:'aloksharma@gmail.com',
    phone:'234567'
  }
  return (
  <>
    <h1>Alok kumar</h1>
    <UserInfoValidationForm data={_userData}/>
  </>
  );
}

export default App;
