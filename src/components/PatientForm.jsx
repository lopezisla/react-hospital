const PatientForm = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-medium text-3xl text-center">Patient Form</h2>
      <p className="font-medium text-center mt-2 mb-3 text-indigo-400">
        Here you can manage your patients
      </p>
      <form className="bg-white shadow-md rounded-md py-10 px-5">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium uppercase">Patient Name</label>
          <input id="name" type="text" placeholder="Name" className="border-2 w-full p-2 mt-2 placeholder-slate-500 rounded-md"/>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
