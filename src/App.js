// ------------------------------------
import './scss/null.scss';
import './App.scss';

// ------------------------------------
import Header from './components/Header';
import './scss/Header.scss';

// ------------------------------------
import Body from './components/Body';
import './scss/Body.scss';

// ------------------------------------
// import Navigation from './components/Navigation';
import './scss/Navigation.scss';

// ------------------------------------
// import Profile from './components/Profile';
import './scss/Profile.scss';

// ------------------------------------
import Footer from './components/Footer';
import './scss/Footer.scss';

// ------------------------------------


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