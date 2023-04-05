import { Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import {Email,Call,Business} from '@mui/icons-material';
const Footer = () => {
  return (
    <div>
      <Container
        sx={{
          mt: 8,
          // borderTop: "2px solid black",
          display: "flex",
          flexDirection: "row",
          justifyContent:"space-evenly"
        }}
      >
        <Box>
          <img src="kratin.png"></img>
        </Box>
        <Box  sx={{pt:2,borderTop: "1px solid green"}}>
          <Typography variant="body1" color="initial">
            <Business/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ashok Nagar, New Delhi
          </Typography>
          <Typography variant="body1" color="initial">
            <Call/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+918009275584
          </Typography>
          
          <Typography sx={{mb:"-10px"}}variant="body1" color="initial" gutterBottom>
          <Email/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;adarshsingh8008@gmail.com
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
