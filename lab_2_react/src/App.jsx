import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';

function App() {
  return (
    <div className="page">
      <Header />
      <main>
        <Profile />
        <Experience />
        <Education />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
