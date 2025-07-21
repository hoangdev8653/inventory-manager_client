import { IoPersonOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import userStore from "../store/userStore";
import { loginValidate } from "../validations/user";
import { useFormik } from "formik";
import { toast } from "react-toastify";

function Login() {
  const Navigate = useNavigate();
  const { login } = userStore();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidate,
    onSubmit: async (values) => {
      console.log(values);
      try {
        const result = await login(values);
        if (result.status === 200) {
          toast.success("Đăng nhập thành công");
          setTimeout(() => {
            Navigate("/");
          }, 3000);
        }
      } catch (error) {
        console.log("Đăng nhập thất bại", error);
      }
    },
  });

  return (
    <div className="max-w-[100%] min-h-screen flex flex-wrap justify-center items-center p-[15px] bg-no-repeat bg-center bg-cover bg-gray-100">
      <div className="w-[500px] bg-white rounded-xl overflow-hidden px-[20px] py-[30px]">
        <form onSubmit={formik.handleSubmit} className="w-full">
          <span className="block text-[39px]  text-center pb-3">Login</span>
          <div className="relative w-full border-b-2 border-solid  mb-[6px]">
            <label
              htmlFor="email"
              className="text-base text-gray-600 pl-[7px] font-medium"
            >
              Email:
            </label>
            <p className="flex mt-2">
              <MdOutlineEmail className="text-2xl  mx-2 font-bold" />
              <input
                className="w-full focus:outline-none"
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </p>
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500  text-center">
              {formik.errors.email}
            </div>
          )}
          <div className="relative w-full border-b-2 border-solid mb-[6px]">
            <label
              htmlFor="password"
              className="text-base text-gray-600 pl-[7px] font-medium"
            >
              Password:
            </label>
            <p className="flex mt-2">
              <CiLock className="text-2xl mx-2 font-bold" />
              <input
                className="w-full focus:outline-none"
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </p>
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-center">
              {formik.errors.password}
            </div>
          )}
          <div className="flex justify-end">
            <a href="forgot-password">
              <span className="hover:text-blue-600 cursor-pointer text-gray-600">
                Forgot Password?
              </span>
            </a>
          </div>
          <button
            type="submit"
            className="shadow text-white font-medium bg-blue-800 w-full text-xl my-6 px-4 py-3 rounded-xl hover:opacity-80"
          >
            LOGIN
          </button>
          <p className="text-center mx-auto text-gray-500">Or Sign Up Using </p>
          <a
            href="/register"
            className="text-gray-500 hover:text-blue-600 text-base cursor-pointer "
          >
            <p className="shadow text-center mt-4 text-gray-700 font-medium bg-gray-100 w-full text-xl my-6 px-4 py-3 rounded-xl hover:opacity-80">
              Create new account
            </p>
          </a>
        </form>
      </div>
    </div>
  );
}

export default Login;
