import Form from "./components/Form";
import Header from "./components/Header";
import PatientList from "./components/PatientList";

function App() {
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <Form />
      <PatientList />
    </div>
  );
}

export default App;
