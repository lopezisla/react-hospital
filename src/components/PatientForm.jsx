const PatientForm = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-medium text-3xl text-center">Patient Form</h2>
      <p className="font-medium text-center mt-2 mb-3 text-indigo-400">
        Here you can manage your patients
      </p>
      <form className="bg-white shadow-md rounded-md py-5 px-5 mb-5">
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
            placeholder="Jhon Doe"
            className="border-2 w-full p-2 mt-2 placeholder-slate-500 rounded-md"
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
            placeholder="jhondoe@company.com"
            className="border-2 w-full p-2 mt-2 placeholder-slate-500 rounded-md"
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
            className="border-2 w-full p-2 mt-2 placeholder-slate-500 rounded-md"
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
            className="border-2 w-full p-2 mt-2 placeholder-slate-500 rounded-md"
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
