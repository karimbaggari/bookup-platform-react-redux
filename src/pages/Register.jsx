import React, { useState } from "react";
import store from "../store/store";
import { Link } from "react-router-dom";
import { validateRegisterForm } from "../validation/registerValidation";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formErrors = validateRegisterForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      store.dispatch({ type: "LOGIN", payload: { isLogged: true } });

      console.log(store.getState());
      navigate("/");
    }
  };

  return (
    <React.Fragment>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
            Register
          </h2>

          <form
            className="mx-auto  max-w-lg rounded-lg border"
            style={{ "max-width": "85%" }}
            onSubmit={handleSubmit}
          >
            <div
              className="flex flex-col grid gap-4 p-4 md:p-8"
              style={{ "grid-template-columns": "1fr 1fr" }}
            >
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  First Name
                </label>
                <input
                  name="firstName"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  onChange={handleInputChange}
                />
                {errors.firstName && (
                  <p className="error text-red-500">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Last Name
                </label>
                <input
                  name="lastName"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  onChange={handleInputChange}
                />
                {errors.lastName && (
                  <p className="error text-red-500">{errors.lastName}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Email
                </label>
                <input
                  name="email"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className="error text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  onChange={handleInputChange}
                />
                {errors.password && (
                  <p className="error text-red-500">{errors.password}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && (
                  <p className="error text-red-500">{errors.confirmPassword}</p>
                )}
              </div>
              <button
                className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
                style={{
                  height: "43px",
                  position: "relative",
                  top: "42%",
                }}
                onClick={handleSubmit}
              >
                Register
              </button>
            </div>

            <div className="flex items-center justify-center bg-gray-100 p-4">
              <p className="text-center text-sm text-gray-500">
                already have an account?{" "}
                <Link
                  to="/login"
                  className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
