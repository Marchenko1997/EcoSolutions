import Header from "./components/Header/Header";
import "./App.css";
import Container from "./components/Common/Container/Container";
import Hero from "./components/Hero/Hero"
import MainValues from "./components/MainValues/MainValues";
import Electricity from "./components/Electricity/Electricity";

function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
          <MainValues />
          <Electricity/>
        </Container>
      </main>
    </>
  );
}

export default App;
