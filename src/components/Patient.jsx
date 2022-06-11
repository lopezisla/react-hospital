const Patient = ({ patient }) => {
  const { name, email, date, symptoms } = patient;
  return (
    <div className="bg-white shadow-md rounded-md py-5 px-5 m-3">
      <p className="text-gray-700 font-medium uppercase">
        Name: <span className="font-normal">{name}</span>
      </p>
      <p className="text-gray-700 font-medium uppercase">
        E-mail: <span className="font-normal lowercase">{email}</span>
      </p>
      <p className="text-gray-700 font-medium uppercase">
        Registration Date: <span className="font-normal">{date}</span>
      </p>
      <p className="text-gray-700 font-medium uppercase">
        Symptoms: <span className="font-normal lowercase">{symptoms}</span>
      </p>
      <div className="flex justify-between mt-3">
        <button
          type="button"
          className="bg-indigo-400 p-2 rounded-md text-white uppercase font-medium hover:bg-indigo-600 cursor-pointer transition-all"
        >
          Edit
        </button>
        <button
          type="button"
          className="bg-red-400 p-2 rounded-md text-white uppercase font-medium hover:bg-red-600 cursor-pointer transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
