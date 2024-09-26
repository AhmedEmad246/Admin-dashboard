import React from "react";
import TextField from "@mui/material/TextField";
import { Box, Button, Stack, Alert, Snackbar } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Header from "../../src/Header.jsx";
const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

export default function Form() {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    handleClick();
  };
  return (
    <>
       <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        noValidate
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Stack sx={{ flexDirection: "row", gap: 2 }}>
          <TextField
            sx={{ flex: 1 }}
            error={errors.firstName}
            helperText={
              errors.firstName
                ? "This is Field is Required & min 3 character"
                : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
            label="First Name"
            variant="outlined"
          />
          <TextField
            error={errors.lastName}
            helperText={
              errors.lastName
                ? "This is Field is Required & min 3 character"
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="outlined"
          />
        </Stack>
        <TextField
          error={errors.email}
          helperText={errors.email ? "Please Provide a valid Email" : null}
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="outlined"
        />
        <TextField
          error={errors.contactNumber}
          helperText={
            errors.contactNumber ? "Please Provide a valid contactNumber" : null
          }
          {...register("contactNumber", {
            required: true,
            pattern: phoneRegExp,
          })}
          label="Contact Number"
          variant="outlined"
        />
        <TextField label="Address 1" variant="outlined" />
        <TextField label="Address 2  " variant="outlined" />
        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="User"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained">
            Create New User
          </Button>

        
        </Box>
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              Account created successfully
            </Alert>
          </Snackbar>
      </Box>
    </>
  );
}
