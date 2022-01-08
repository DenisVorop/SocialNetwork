// ------------------------------------
import './scss/null.scss';
import './scss/ui.scss';
import './App.scss';

// ------------------------------------
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// ------------------------------------
import Body from './components/Body/Body';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <main className='page'>
        <Body />
      </main>
      <Footer />
    </div>
  );
}

export default App;
