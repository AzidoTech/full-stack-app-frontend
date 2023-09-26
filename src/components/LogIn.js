import React from "react";
import { Box, Typography, Stack, TextField, Button } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LogIn = () => {
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

    try {
      const response = await fetch("http://localhost:8080/create-user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });

      response.json().then((res) => {
        console.log(res.message, res.data);
        alert(res.message);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
        {({ isSubmitting }) => (
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
                <ErrorMessage name="email" component="div" className="error" />
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
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LogIn;

// import React from "react";
// import { UseState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Grid,
//   Typography,
//   Stack,
//   TextField,
//   Button,
// } from "@mui/material";
// const LogIn = () => {
//   const [email, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");

//   const handleLogIn = async () => {
//     const body = {
//       email,
//       password,
//     };
//     console.log("body => ", body);
//     try {
//       const response = await fetch("http://localhost:8080/create-user", {
//         // const response = await fetch("http://localhost:8080/signUp", {
//         method: "POST",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       response.json().then((res) => {
//         console.log(res.message, res.data);
//         alert(res.message);
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Box className="register">
//       <Typography
//         color="#262626"
//         fontWeight="bold"
//         gutterBottom
//         variant="h4"
//         component="div"
//       >
//         Login
//       </Typography>
//       <Box>
//         <Stack spacing={2}>
//           <TextField
//             label="Enter Your Email*"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             label="Enter Your Password*"
//             variant="outlined"
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter password"
//           />
//           <Button onClick={handleLogIn} variant="contained" size="large">
//             Submit
//           </Button>
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

// export default LogIn;
