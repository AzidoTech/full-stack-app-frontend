import React from "react";
import classes from "./contactUs.module.css";
import { Box, Button, Grid, styled, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

import Loading from "react-fullscreen-loading";
import SweetAlertPopup from "../common/sweetAlertPopup";

const validationSchema = yup.object({
  userName: yup.string().required("Name is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required"),
  mobileNo: yup
    .string()
    .required("Mobile Number is required")
    .matches(/^[0-9]{10}$/, "Mobile Number must be 10 digits"),
  userEmail: yup
    .string()
    .required("Email Address is required")
    .matches(
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
      "Enter a valid email address"
    ),
});

export default function ContactUs() {
  const [isLoading, setIsloading] = React.useState(false);

  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      userName: "",
      mobileNo: "",
      userEmail: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        setIsloading(true);

        await axios
          .post("https://localhost/3000/create-user", {
            ...values,
          })
          .then((response) => {
            setIsloading(false);
            // console.log(response);
            SweetAlertPopup(
              "Thanks for contacting ABC. One of our colleagues will get back to you soon! Have a great day!",
              "Success",
              "success"
            );
            formik.resetForm();
          });
      } catch (error) {
        // console.log(error);
        setIsloading(false);
        SweetAlertPopup(
          "Please try connecting again. If the issue keeps happening, Kindly contact: info@ABC.in",
          "Error",
          "error"
        );
        formik.resetForm();
      }
    },
  });

  return (
    <div className={classes.mainDiv}>
      {isLoading ? (
        <Loading
          loading={true}
          background="rgba(236, 240, 241, 0.7)"
          loaderColor="#e74c3c"
        />
      ) : (
        <Loading
          loading={false}
          background="rgba(236, 240, 241, 0.7)"
          loaderColor="#e74c3c"
        />
      )}
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div>
              <div>Name</div>

              <div>
                <TextField
                  size="small"
                  label=""
                  placeholder="Enter Your Name"
                  variant="outlined"
                  id="userName"
                  name="userName"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.userName && Boolean(formik.errors.userName)
                  }
                  helperText={formik.touched.userName && formik.errors.userName}
                />
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <div>
              <div>Email</div>

              <div className={classes.frow1aff}>
                <TextField
                  size="small"
                  label=""
                  placeholder="Enter Your Email Address"
                  variant="outlined"
                  id="userEmail"
                  name="userEmail"
                  value={formik.values.userEmail}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.userEmail && Boolean(formik.errors.userEmail)
                  }
                  helperText={
                    formik.touched.userEmail && formik.errors.userEmail
                  }
                />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={12}>
            <div>
              <div>
                Mobile Number<sup className={classes.required}>*</sup>
              </div>
              <div>
                <TextField
                  size="small"
                  label=""
                  placeholder="Enter Your Mobile Number"
                  variant="outlined"
                  id="mobileNo"
                  name="mobileNo"
                  value={formik.values.mobileNo}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.mobileNo && Boolean(formik.errors.mobileNo)
                  }
                  helperText={formik.touched.mobileNo && formik.errors.mobileNo}
                />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={12}>
            <div>
              <div>Subject</div>
              <div>
                <TextField
                  size="small"
                  label=""
                  placeholder="Enter Your Subject"
                  variant="outlined"
                  id="subject"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.subject && Boolean(formik.errors.subject)
                  }
                  helperText={formik.touched.subject && formik.errors.subject}
                />
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={12} md={12}>
            <div>
              <div>Message</div>
              <div>
                <TextField
                  size="small"
                  label=""
                  placeholder="Enter Your Message"
                  variant="outlined"
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                />
              </div>
            </div>
          </Grid>
        </Grid>

        <div className={classes.buttondiv}>
          <Button variant="contained" type="submit">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}

// import React, { useState } from "react";

// function ContactUs() {
//   const [input1, setInput1] = useState(1);
//   const [input2, setInput2] = useState(1);
//   const constant1 = 22;
//   const constant2 = 7;

//   const handleChangeInput1 = (event) => {
//     setInput1(parseFloat(event.target.value) || 0);
//   };

//   const handleChangeInput2 = (event) => {
//     setInput2(parseFloat(event.target.value) || 0);
//   };

//   const sum = 30 * (input1 * constant1 + input2 * constant2);
//   const dailyIncome = input1 * constant1 + input2 * constant2;

//   return (
//     <div>
//       <div>
//         <div style={{ color: "blue" }}>Money Transfer</div>
//         <div>Avg transaction of ₹4500</div>
//         <div style={{ display: "flex" }}>
//           <input type="number" value={input1} onChange={handleChangeInput1} />
//           <div>No of Transactions Per Day</div>
//         </div>
//       </div>

//       <div style={{ color: "blue" }}>Aadhaar ATM - AePS</div>
//       <div>Avg transaction of ₹3500</div>
//       <div style={{ display: "flex" }}>
//         <input type="number" value={input2} onChange={handleChangeInput2} />
//         <div>No of Transactions Per Day</div>
//       </div>
//       <div>
//         <h2>Result</h2>
//         <p>
//           Sum of (No of Money Transfer Transactions per Day* {constant1}) and
//           (No of Aadhaar ATM - AePS Transactions Per Day * {constant2}):{" "}
//           <h3>Total Income: Rs.{sum}/Month </h3> {""}
//           and the<h3> Income Per Day : Rs. {dailyIncome}</h3>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;
