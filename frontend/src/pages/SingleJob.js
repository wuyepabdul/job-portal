import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import { Box, Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { loadSingleJobAction } from "../redux/actions/jobActions";
import Navbar from "../components/Navbar";
import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { userApplyJobsAction } from "../redux/actions/userActions";

const SingleJob = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleJob, loading } = useSelector((state) => state.loadSingleJob);

  useEffect(() => {
    dispatch(loadSingleJobAction(id));
  }, [dispatch, id]);

  const handleApplyJob = () => {
    dispatch(
      userApplyJobsAction({
        title: singleJob && singleJob.title,
        description: singleJob && singleJob.description,
        salary: singleJob && singleJob.salary,
        location: singleJob && singleJob.location,
      })
    );
  };
  return (
    <>
      <Box sx={{ bgcolor: "#fafafa" }}>
        <Navbar />
        <Box sx={{ height: "85vh" }}>
          <Container sx={{ pt: "30px" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
            >
              <Box sx={{ flex: 4, p: 2 }}>
                {loading ? (
                  <LoadingBox />
                ) : (
                  <Card>
                    <CardContent>
                      <Typography variant="h5" component="h3">
                        {singleJob && singleJob.title}
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          Salary: $
                          <span> {singleJob && singleJob.salary} </span>
                        </Box>
                      </Typography>
                      <Typography variant="body2">
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          Category :{" "}
                          <span> {singleJob && singleJob.category} </span>
                        </Box>
                      </Typography>
                      <Typography variant="body2" sx={{ pb: "12px" }}>
                        <Box component="span" sx={{ fontWeight: 700 }}>
                          Location:{" "}
                          <span> {singleJob && singleJob.location} </span>
                        </Box>
                      </Typography>

                      <Box variant="body2">
                        {/* <Typography
                          variant="body2"
                          //   component="span"
                          sx={{ fontSize: "12px", fontWeight: 700, pb:'12px' }}
                        >
                          Job Description:
                        </Typography> */}

                        <Typography variant="body2" sx={{ fontSize: "12px" }}>
                          {singleJob && singleJob.description}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                )}
              </Box>
              <Box sx={{ flex: 1, p: 2 }}>
                <Card sx={{ p: 2 }}>
                  <Button
                    onClick={handleApplyJob}
                    sx={{ fontSize: "13px" }}
                    variant="contained"
                  >
                    Apply for Job
                  </Button>
                </Card>
              </Box>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default SingleJob;
