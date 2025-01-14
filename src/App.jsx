import Header from "./components/Header/Header";
import "./App.css";
import Container from "./components/Common/Container/Container";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
        </Container>
      </main>
    </>
  );
}

export default App;
