"use client";
// React & Next Imports
import { useRouter } from "next/navigation";
import { FC } from "react";

// Assets

// Components
import Button from "@/components/buttons/button";
import Input from "@/components/inputs/input";
import PasswordInput from "@/components/inputs/password-input";

// Formik
import { useFormik } from "formik";

// Schema
import { loginSchema } from "@/schema/login.schema";

// Services
import { cn } from "@/lib/utils";
import { loginSuccess } from "@/redux/slices/authentication.slice";
import { useAdminLoginMutation } from "@/services/react-query-client/auth/admin-login";
import { setCookie } from "cookies-next";
import { useDispatch } from "react-redux";
import { UserRole } from "@/types/Enum/user-role.enum";

// Type

// Interface
interface ISignInViewProps {}

// Initial Values
const initialValues = {
  email: "",
  password: "",
  submit: false,
};

const SignInView: FC<ISignInViewProps> = () => {
  // Router
  const router = useRouter();
  const dispatch = useDispatch();

  const { mutateAsync } = useAdminLoginMutation();

  // Formik
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        formik.setFieldValue("submit", true);
        const res = await mutateAsync({
          email: values.email,
          password: values.password,
        });
        if (res) {
          setCookie("accessToken", res?.token);
          dispatch(loginSuccess(res));
          router.push("/analytics");
        }
        formik.resetForm();
      } catch (error) {
        console.error(error);
      } finally {
        formik.setFieldValue("submit", false);
      }
    },
  });

  const { values, errors, handleChange, handleBlur, touched, handleSubmit } =
    formik;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 h-screen overflow-x-hidden w-screen">
      {/* Section 1 - Logo */}
      <div className="lg:col-span-2 px-4 bg-panel bg-cover bg-no-repeat sm:flex justify-center items-center hidden">
        <div className="font-medium font-mono text-5xl text-primary  tracking-widest text-center">
          ZENKODERS ZEN-<span className="animate-pulse">AI</span>
          <p className="font-mono text-base tracking-[0.3rem] !font-normal !leading-5">
            We are a Software Development Company
          </p>
        </div>
      </div>

      {/* Section 2 - Sign In Form */}
      <div className="bg-light-gray flex justify-center sm:!bg-white items-center px-12">
        <div className="flex flex-col gap-y-6 w-full">
          <h3 className="text-text-primary text-2xl font-medium">Log in</h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-6 w-full"
          >
            <Input
              type="text"
              label="Email address"
              name="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
            />

            <PasswordInput
              type="password"
              label="Password"
              name="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
            />

            <div className="w-full">
              <Button
                disabled={values.submit}
                type="submit"
                text="Log in"
                onClick={handleSubmit}
                className={cn(
                  "w-full justify-center hover:bg-btn-hover",
                  values.submit && "bg-gray-500 cursor-not-allowed"
                )}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInView;
