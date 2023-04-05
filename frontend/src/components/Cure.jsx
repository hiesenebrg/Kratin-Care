import { Box, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcure } from "../redux/apiCalls";

const Cure = () => {
  const [cure, setCure] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.info.info);
  useEffect(() => {
    const getcures = async () => {
      if (data) {
        
        setLoading(true);
        let res = await getcure(dispatch, {
          age: data.data.info.age,
          disease: data.data.info.disease,
          from: data.data.info.from,
        });
        if (res.success) {
          console.log(res)
          setCure(res.data);
          setLoading(false);
        }else{
          setLoading(false);
          setCure("Sorry")
        }
      }
    };
    getcures();
  }, [data]);

  return (
    <>
      <Box
        sx={{
          height: "40vh",
          width: "60vw",
          bgcolor: "white",
          m: "auto",
          mt: 10,
          borderBottom: "2px solid black",
        }}
      >
        <Typography variant="body1" color="initial">
          <div>
            {loading ? (
              <div>Loading....</div>
            ) : (cure ? (
              <div>{cure.textgenerated}</div>
            ) : (
              "Sorry! The rate Limit of OpenAI api for ChatGPT3 is reached."
            ))}
          </div>
        </Typography>
      </Box>
    </>
  );
};

export default Cure;
