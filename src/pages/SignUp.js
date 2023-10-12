import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useSignUp } from "../hooks/useSignUp";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";

const SignUp = () => {
  const { signup, signupSuccessful, isLoading, error } = useSignUp();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: Yup.string()
      .required("Confirm Your Password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = async (values) => {
    console.log("Form values => ", values);

    await signup(values.email, values.name, values.password);
    //   try {
    //     const response = await fetch("http://localhost:8080/create-user", {
    //       method: "POST",
    //       headers: { "content-type": "application/json" },
    //       body: JSON.stringify(values),
    //     });

    //     response.json().then((res) => {
    //       console.log(res.message, res.data);
    //       alert(res.message);
    //     });
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  return (
    <>
      {signupSuccessful ? (
        <Box>
          Sign Up is Succesful
          <Link to="/login">
            <Button>Proceed to login</Button>
          </Link>
        </Box>
      ) : (
        <>
          <Box sx={{ padding: "8px" }}>
            <Typography align="right">
              Go to <Link to="/login">Log In</Link>
            </Typography>
          </Box>
          <Box className="register">
            <Typography
              color="#262626"
              fontWeight="bold"
              gutterBottom
              variant="h4"
              component="div"
            >
              Register
            </Typography>

            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Stack spacing={2}>
                    <div>
                      <Field
                        type="text"
                        name="name"
                        as={TextField}
                        label="Enter Your Name*"
                        variant="outlined"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div>
                      <Field
                        type="text"
                        name="email"
                        as={TextField}
                        label="Enter Your Email*"
                        variant="outlined"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div>
                      <Field
                        type="password"
                        name="password"
                        as={TextField}
                        label="Enter Your Password*"
                        variant="outlined"
                      />
                      <ErrorMessage
                        name="password"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div>
                      <Field
                        type="password"
                        name="confirmPassword"
                        as={TextField}
                        label="Confirm Password*"
                        variant="outlined"
                      />
                      <ErrorMessage
                        name="confirmPassword"
                        component="div"
                        className="error"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Box>
        </>
      )}
    </>
  );
};

export default SignUp;
