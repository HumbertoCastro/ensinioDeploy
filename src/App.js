import Provider from './context/Provider';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import SubSection from './components/SubSection';

function App() {
  return (
    <Provider>
      <main className='main-interface'>
        <Header />
        <MainSection />
        <SubSection />
      </main>
    </Provider>
  );
}

export default App;
