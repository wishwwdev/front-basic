import './App.css';
import TestComponent from './components/TestComponent';
import './style.css';
import Footer from './views/Layout/Footer';
import Header from './views/Layout/Header';
import Main from './views/Layout/Main';

function App() {
  
  return (
    <>
      <TestComponent arg1='문자열' arg2={1} />
      <TestComponent arg1='문자열' arg2={100} />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
