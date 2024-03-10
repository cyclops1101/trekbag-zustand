import { BackgroundHeading, Footer, Container } from "./components";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <BackgroundHeading />
      <Container />
      <Footer />
    </>
  );
}

export default App;
