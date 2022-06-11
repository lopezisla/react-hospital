import Patient from "./Patient";

const PatientList = ({ patients, setPatient, deletePatient }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
      {patients && patients.length ? (
        <>
          <h2 className="font-medium text-3xl text-center">Patient List</h2>
          <p className="font-medium text-center mt-2 mb-3 text-indigo-400">
            Here you can see the information of your patients
          </p>
          <div>
            {patients.map((patient, index) => (
              <Patient
                key={patient.id}
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-medium text-3xl text-center">
            There are no patients
          </h2>
          <p className="font-medium text-center mt-2 mb-3 text-indigo-400">
            You can add patients with the form
          </p>
        </>
      )}
    </div>
  );
};

export default PatientList;
