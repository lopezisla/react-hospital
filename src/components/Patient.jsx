const Patient = () => {
  return (
    <div className="bg-white shadow-md rounded-md py-5 px-5 m-3">
      <p className="text-gray-700 font-medium uppercase">
        Name: <span className="font-normal">John Doe</span>
      </p>
      <p className="text-gray-700 font-medium uppercase">
        E-mail:{" "}
        <span className="font-normal lowercase">johndoe@company.com</span>
      </p>
      <p className="text-gray-700 font-medium uppercase">
        Registration Date: <span className="font-normal"></span>
      </p>
      <p className="text-gray-700 font-medium uppercase">
        Symptoms:{" "}
        <span className="font-normal lowercase">
          Laboris veniam deserunt amet ut pariatur excepteur. Aute cupidatat
          ullamco culpa eu laboris exercitation incididunt sint cupidatat.
          Voluptate adipisicing ex sunt qui exercitation minim tempor id sunt
          do. Commodo laboris do quis fugiat nostrud magna eiusmod sunt commodo
          exercitation. Dolore aute ipsum consectetur proident consectetur ea
          ullamco ut dolor officia eiusmod et cillum.{" "}
        </span>
      </p>
    </div>
  );
};

export default Patient;
