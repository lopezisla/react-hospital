import { useState } from "react";
import Error from "./Error";
const PatientForm = ({ patients, setPatients }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, email, date, symptoms].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    const patientObject = {
      name,
      email,
      date,
      symptoms,
    };

    setPatients([...patients, patientObject]);
    setName("");
    setEmail("");
    setDate("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3">
      <h2 className="font-medium text-3xl text-center">Patient Form</h2>
      <p className="font-medium text-center mt-2 mb-3 text-indigo-400">
        Here you can manage your patients
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md py-5 px-5 mb-5"
      >
        {error && <Error><p>All fields are required</p></Error>}
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium uppercase"
          >
            Patient Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            className="border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium uppercase"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="johndoe@company.com"
            className="border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 font-medium uppercase"
          >
            Registration Date
          </label>
          <input
            id="date"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms "
            className="block text-gray-700 font-medium uppercase"
          >
            Symptoms
          </label>
          <textarea
            id="symptoms"
            placeholder="Please describe the patient's symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="bg-indigo-400 w-full p-2 mt-2 rounded-md text-white uppercase font-medium hover:bg-indigo-600 cursor-pointer transition-all"
          value="Add Patient"
        />
      </form>
    </div>
  );
};

export default PatientForm;
