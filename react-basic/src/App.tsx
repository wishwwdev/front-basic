import './App.css';
import TestComponent, { testVariable } from './components/TestComponent';
import './style.css';
import Footer from './views/Layout/Footer';
import Header from './views/Layout/Header';
import Main from './views/Layout/Main';

function App() {
  
  return (
    <>
      {/* 
        // <TestComponent arg1={'문자열'} /> 
        // <TestComponent arg1={'문자열'} arg2={100} />
      */}
      <Header count={0}/>
      <Main />
      <Footer />
    </>
  );
}

export default App;
