import { Avatar, Box, Button, TextField } from "@mui/material";
import React from "react";
import LockClockOutlined from "@mui/icons-material/LockClockOutlined";
import * as yup from "yup";
import { useFormik } from "formik";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email cannot be empty"),
  password: yup
    .string("Enter your password")
    .min(8, "Password length should be of minimum 8 characters")
    .required("Password cannot be empty"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values, null, 2));
      actions.resetForm();
    },
  });
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: "81vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          onSubmit={formik.handleSubmit}
          component="form"
          className="form_style border-style"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main", mb: 3 }}></Avatar>
            <LockClockOutlined />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="email"
              name="email"
              label="Email"
              InputLabelProps={{ shrink: true }}
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              sx={{ mb: 3 }}
              fullWidth
              id="password"
              name="password"
              label="Password"
              InputLabelProps={{ shrink: true }}
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button fullWidth variant="contained" type="submit">
              Log In
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Login;
