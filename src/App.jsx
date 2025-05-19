import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "./i18n";
import Home from "./pages/home-page/Home";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Home />
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
