import { useState, useEffect } from "react";
import Header from "./components/Header";
import PatientForm from "./components/PatientForm";
import PatientList from "./components/PatientList";

function App() {
  const [patients, setPatients] = useState(JSON.parse(localStorage.getItem("patients")) ?? []);
  const [patient, setPatient] = useState({});

  // useEffect(() => {
  //   const getLS = () => {
  //     const patientsLS = JSON.parse(localStorage.getItem("patients")) ?? [];
  //     setPatients(patientsLS);
  //   };
  //   getLS();
  // }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const deletePatient = (id) => {
    const patientsUpdated = patients.filter(
      (patientState) => patientState.id !== id
    );
    setPatients(patientsUpdated);
  };

  return (
    <div className="container mx-auto mt-10">
      <Header />
      <div className="mt-12 md:flex">
        <PatientForm
          patients={patients}
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
