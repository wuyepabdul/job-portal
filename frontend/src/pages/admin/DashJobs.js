import React, { useEffect } from "react";
import { DataGrid, GridToolbar, gridClasses } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import { jobLoadAction } from "../../redux/actions/jobActions";

const DashJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(jobLoadAction());
  }, [dispatch]);

  const { jobs, loading } = useSelector((state) => state.loadJobs);
  let data = [];
  data = jobs !== undefined && jobs.length > 0 ? jobs : [];

  const deleteJobById = (e, id) => {
    console.log(e, id);
  };

  const columns = [
    { field: "_id", headerName: "Job ID", width: 150, editable: true },
    { field: "title", headerName: "Title", width: 150 },
    {
      field: "jobType",
      headerName: " Category",
      width: 150,
      valueGetter: (data) => data.row.jobType.jobTypeName,
    },
    {
      field: "user",
      headerName: "User",
      width: 150,
      valueGetter: (data) => data.row.user.firstName,
    },
    {
      field: "available",
      headerName: "Available",
      width: 150,
      renderCell: (values) => (values.row.available ? "Yes" : "No"),
    },
    {
      field: "salary",
      headerName:'Salary',
      width: 150,
      renderCell: (values) => ('$' + values.row.salary),
    },
    {
      field: "Actions",
      width: 200,
      renderCell: (values) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "170px",
          }}
        >
          <Button variant="contained">
            <Link
              style={{ color: "white", textDecoration: "none" }}
              to={`/admin/edit/job/${values.row_id}`}
            >
              {" "}
              Edit
            </Link>
          </Button>
          <Button
            onClick={(e) => deleteJobById(e, values.row._id)}
            variant="contained"
            color="error"
          >
            Delete{" "}
          </Button>
        </Box>
      ),
    },
  ];
  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ color: "white", pb: 3 }}>
          Jobs List
        </Typography>
        <Box sx={{ pb: 2, display: "flex", justifyContent: "right" }}>
          <Button variant="contained" color="success" startIcon={<AddIcon />}>
            Create Job
          </Button>
        </Box>
        <Paper sx={{ bgcolor: "midNightBlue" }}>
          <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
              sx={{
                "& .MuiTablePagination-displayedRows": { color: "white" },
                color: "white",
                [`& .${gridClasses.row}`]: {
                  bgcolor: (theme) => theme.palette.secondary.main,
                },
                button: {
                  color: "#ffffff",
                },
              }}
              getRowId={(row) => row._id}
              rows={data}
              columns={columns}
              pageSize={3}
              rowsPerPageOptions={[3]}
              checkboxSelection
              slots={{ toolbar: GridToolbar }}
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default DashJobs;
