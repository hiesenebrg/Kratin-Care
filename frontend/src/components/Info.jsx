import styled from "@emotion/styled";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getinfo, info } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Info = () => {
  const [age, setAge] = useState(null);
  const [disease, setDisease] = useState(null);
  const [from, setFrom] = useState(null);
  const [inage, setinAge] = useState(null);
  const [indisease, setinDisease] = useState(null);
  const [indate, setinDate] = useState(null);
  const [ad, setAd] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userid = user.currentUser.data.user._id;

  useEffect(() => {
    const info = async () => {
      let res = await getinfo(dispatch, userid);
      if (res) {
        setinDisease(res.data.info.disease);
        setinAge(res.data.info.age);
        setinDate(res.data.info.from);
      }
    };
    info();
  }, [ad]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await info(dispatch, { age, disease, from, userid });

    if (res) {
      setAd(true);
      return res.data;
    }
  };

  return (
    <div>
      <Container
        sx={{
          display: { xs: "none", md: "flex" },
          mt: 4,
          bgcolor: "white",

          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "75%",
          height: "40%",
          borderBottom: "2px solid black",
        }}
      >
        {!inage ? (
          <Typography variant="h4">Enter the Details </Typography>
        ) : (
          <Typography variant="h3" color="initial">
            Information
          </Typography>
        )}
        <Box
          sx={{
            display: "Flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 7,
          }}
        >
          <Box sx={{ mt: 1 }}>
            <Typography variant="h6" color="initial">
              Age
            </Typography>
            {!inage ? (
              <TextField
                value={age}
                onChange={(e) => setAge(e.target.value)}
                id="standard-basic"
                label="Age"
                variant="standard"
              />
            ) : (
              <Typography variant="body1">{inage}</Typography>
            )}
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ mt: 1 }} variant="h6" color="initial">
              Disease
            </Typography>
            {!indisease ? (
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel variant id="demo-simple-select-standard-label">
                  Disease
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={disease}
                  onChange={(e) => setDisease(e.target.value)}
                  label="Disease"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Sugar"}>Diabetes</MenuItem>
                  <MenuItem value={"Blood Pressures"}>Blood Pressures</MenuItem>
                  <MenuItem value={"Hydrocil"}>Cardiovascular</MenuItem>
                  <MenuItem value={"Hydrocil"}>Osteoarthritis</MenuItem>
                  <MenuItem value={"Hydrocil"}>Osteoporosis</MenuItem>
                  <MenuItem value={"Hydrocil"}>Hypertension</MenuItem>
                  <MenuItem value={"Hydrocil"}>Cancer</MenuItem>
                  <MenuItem value={"Hydrocil"}>Continence</MenuItem>
                  <MenuItem value={"Hydrocil"}>Hydrocil</MenuItem>
                </Select>
              </FormControl>
            ) : (
              <Typography gutterBottom svariant="body1">
                {indisease}
              </Typography>
            )}
          </Box>
          <Box sx={{ mt: 1 }}>
            <Typography variant="h6" color="initial">
              From
            </Typography>
            {!indate ? (
              <TextField
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                id="standard-basic"
                label="Date"
                variant="standard"
              />
            ) : (
              <Typography variant="body1">{indate}</Typography>
            )}
          </Box>
        </Box>
        <Box>
          {!inage && (
            <Button onClick={handleSubmit} variant="contained">
              Submit
            </Button>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default Info;
