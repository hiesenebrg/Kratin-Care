import React from 'react'
import {Button, Typography ,Box} from '@mui/material'
import { Link } from 'react-router-dom'

const HabitTracker = () => {
  return (
    <div>
        <Box sx={{m:2,}}>
        <Typography variant="h4" color="initial">Daily Exercise Tracker</Typography>
        <Typography sx={{color:"grey"}} variant="subtitle1">A Exercise Tracker app made to track your daily and weekly exercises so that you can remember 
        your day-to-day exercises and remain healthy</Typography>
        <Link to="https://habbittracker-nm6t.onrender.com" >
        <Button  sx={{mt:1,"&:hover":{bgcolor:"green"}}}variant="contained" >
          Exercise Tracker
        </Button>
        </Link>
        </Box>
    </div>
  )
}

export default HabitTracker