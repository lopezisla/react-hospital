import { useState } from "react";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
  const [patients, setPatients] = useState([]);
  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <PatientForm patients={patients} setPatients={setPatients} />
        <PatientList patients={patients} />
      </div>
    </div>
  );
}

export default App;
