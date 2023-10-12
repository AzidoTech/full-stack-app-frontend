import React from "react";
import { useLogin } from "../hooks/useLogin";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LogIn = () => {
  const { login, error, isLoading } = useLogin();

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid email"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const handleSubmit = async (values) => {
    console.log("Form values => ", values);

    await login(values.email, values.password);
  };

  return (
    <>
      <Box sx={{ padding: "8px" }}>
        <Typography align="right">
          Do not have an account? <Link to="/signup">Sign Up</Link>
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
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({}) => (
            <Form>
              <Stack spacing={2}>
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
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isLoading}
                >
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </>
  );
};

export default LogIn;
