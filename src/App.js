import AppStyles from './App.module.css';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  return (
    <div className={AppStyles.container}>
      <Header />
      <Form />
    </div>
  );
}

export default App;
