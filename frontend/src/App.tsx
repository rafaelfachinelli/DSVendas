import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

export default function App() {
  return (
    <div className="App">
      <>
        <NavBar />
        <div className="container">
          <h1 className="text-primary">Olá Mundo!</h1>

          <DataTable />
        </div>
        <Footer />
      </>
    </div>
  );
}
