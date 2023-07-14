import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfileAction } from "../../redux/actions/userActions";
import CardElement from "../../components/CardElement";

const UserJobsHistory = () => {
  const { user } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfileAction());
  }, [dispatch]);
  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ color: "#fafafa" }}>
          Jobs History
        </Typography>
        <Box>
          {user &&
            user.jobsHistroy.map((job) => (
              <CardElement
                key={job._id}
                id={job._id}
                jobTitle={job.title}
                description={job.description}
                category=""
                location={job.location}
              />
            ))}
        </Box>
      </Box>
    </>
  );
};

export default UserJobsHistory;
