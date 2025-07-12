const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center ">
      <div className="bg-white shadow-md rounded-2xl mb-8 p-24 max-w-4xl w-full flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-10">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4">About me</h2>
          <p className="text-gray-700 mb-4">
            I am an allround web developer. I am a senior programmer with good
            knowledge of front-end techniques. Vitae sapien pellentesque
            habitant morbi tristique senectus et. Aenean sed adipiscing diam
            donec adipiscing tristique risus.
          </p>
          <p className="text-sm text-gray-500">
            Image by{" "}
            <a href="https://www.freepik.com" className="underline">
              Freepik
            </a>
          </p>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" // Replace with actual image if needed
            alt="Profile"
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex-1 text-center md:text-right">
          <h2 className="text-xl font-semibold mb-4">Details</h2>
          <p className="mb-2">
            <span className="font-semibold">Name:</span> Hunter Norton
          </p>
          <p className="mb-2">
            <span className="font-semibold">Age:</span> 33 years
          </p>
          <p className="mb-4">
            <span className="font-semibold">Location:</span> 's-Hertogenbosch,
            The Netherlands, Earth
          </p>
          <div className="flex justify-center md:justify-end space-x-4">
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
