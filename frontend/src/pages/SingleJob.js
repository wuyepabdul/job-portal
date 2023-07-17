import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import LoadingBox from "../components/LoadingBox";
import { Box, Container } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { loadSingleJobAction } from "../redux/actions/jobActions";

const SingleJob = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { singleJob, loading } = useSelector((state) => state.loadSingleJob);

  useEffect(() => {
    dispatch(loadSingleJobAction(id));
  }, [dispatch, id]);

  return <div>SingleJob</div>;
};

export default SingleJob;
