import Patient from "./Patient";
const PatientList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen">
      <h2 className="font-medium text-3xl text-center">Patient List</h2>
      <p className="font-medium text-center mt-2 mb-3 text-indigo-400">
        Here you can manage your patients
      </p>
      <div>
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
        <Patient />
      </div>
    </div>
  );
};

export default PatientList;
