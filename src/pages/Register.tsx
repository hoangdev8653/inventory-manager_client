import { IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
// import Facebook from "../assets/fb_logo-512x512.png";
// import Google from "../assets/google-search-3.png";
// import { useFormik } from "formik";
// import { loginValidate } from "../validations/auth";
// import { useNavigate } from "react-router-dom";
// import { userStore } from "../store/userStore";
function Register() {
  //   const Navigate = useNavigate();
  //   const { user, login } = userStore();
  //   const formik = useFormik({
  //     initialValues: {
  //       email: "",
  //       password: "",
  //     },
  //     validationSchema: loginValidate,
  //     onSubmit: async (values) => {
  //       try {
  //         const { role, error } = await login(values);
  //         if (error) {
  //           console.log("Đăng nhập không thành công:", error);
  //         } else if (role) {
  //           setTimeout(() => {
  //             if (role === "admin") {
  //               Navigate("/dashboard/product");
  //             } else {
  //               Navigate("/");
  //             }
  //           }, 3000);
  //         }
  //       } catch (error) {
  //         console.log("Đăng nhập không thành công:", error);
  //       }
  //     },
  //   });

  return (
    <div className="max-w-[100%] min-h-screen flex flex-wrap justify-center items-center p-[15px] bg-no-repeat bg-center bg-cover bg-gray-100">
      <div className="w-[500px] bg-white rounded-xl overflow-hidden px-[20px] py-[30px]">
        <form
          //  onSubmit={formik.handleSubmit}
          className="w-full"
        >
          <span className="block text-4xl text-center pb-3">Register</span>
          <div className="relative w-full border-b-2 border-solid mb-4">
            <span className="text-base text-gray-600 pl-[7px] font-medium">
              Username:
            </span>
            <p className="flex mt-2">
              <IoPersonOutline className="text-2xl mx-2" />
              <input
                className="w-full focus:outline-none"
                type="email"
                id="email"
                name="email"
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
            </p>
          </div>
          <div className="relative w-full border-b-2 border-solid  mb-4">
            <label
              htmlFor="email"
              className="text-base text-gray-600 pl-[7px] font-medium"
            >
              Email:
            </label>
            <p className="flex mt-2">
              <MdOutlineEmail className="text-2xl  mx-2" />
              <input
                className="w-full focus:outline-none"
                type="email"
                id="email"
                name="email"
                // value={formik.values.email}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
            </p>
          </div>
          {/* {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 mb-2 text-center">
              {formik.errors.email}
            </div>
          )} */}
          <div className="relative w-full border-b-2 border-solid mb-4">
            <label
              htmlFor="password"
              className="text-base text-gray-600 pl-[7px] font-medium"
            >
              Password:
            </label>
            <p className="flex mt-2">
              <CiLock className="text-2xl mx-2" />
              <input
                className="w-full focus:outline-none"
                type="password"
                id="password"
                name="password"
                // value={formik.values.password}
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
              />
            </p>
          </div>
          {/* {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 mb-2 text-center">
              {formik.errors.password}
            </div>
          )} */}
          <a href="forgot-password">
            <p className="text-right hover:text-blue-600 cursor-pointer text-gray-600">
              Forgot Password?
            </p>
          </a>
          <button
            type="submit"
            className="shadow text-white font-medium bg-blue-800 w-full text-xl my-6 px-4 py-3 rounded-xl hover:opacity-80"
          >
            REGISTER
          </button>
          <p className="text-center mx-auto text-gray-500">Or Sign Up Using </p>
          {/* <div className="flex text-center items-center justify-center gap-6 my-2">
            <img
              className="w-[40px] h-[40px] rounded-3xl hover:opacity-60 cursor-pointer"
              src={Facebook}
              alt="facebook"
            />
            <img
              className="w-[40px] h-[40px] rounded-3xl hover:opacity-60 cursor-pointer"
              src={Google}
              alt="google"
            />
          </div> */}
          <a
            href="/login"
            className="text-gray-500 hover:text-blue-600 text-base cursor-pointer "
          >
            <p className="shadow text-center mt-4 text-gray-700 font-medium bg-gray-100 w-full text-xl my-6 px-4 py-3 rounded-xl hover:opacity-80">
              Login
            </p>
          </a>
        </form>
      </div>
    </div>
  );
}

export default Register;
