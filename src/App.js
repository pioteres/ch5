import './App.css';
import { ModalDialogBox, Snackbars}  from './pages';

function App() {
  return (
    <div className="App">
      {/* <ModalDialogBox /> */}
      <Snackbars time={5000} type="information" position="center-top" >Snackbar with some props</Snackbars>
    </div>
  );
}

export default App;
