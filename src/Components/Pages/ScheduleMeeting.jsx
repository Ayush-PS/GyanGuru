// ScheduleMeeting.js
import React, { useState } from "react";
import {TextField, Typography } from "@mui/material";
import { format } from "date-fns";
import { motion } from "framer-motion";
import classes from "../Styles/ScheduleMeeting.module.css";
const names = [
  "Shree Mam",
  "Ajay Sir",
  "Vijay Sir",
  "Verma Sir",
  "Kirti Mam",
  "Sharma Sir",
  "Shivam Sir",
  "Shivani Mam",
  " Shivangi Mam",
  " Shivansh Sir",
  " Ayush Sir",
];
const getRandomPart = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters.charAt(randomIndex);
};
const generateRandomMeetingLink = () => {
  return `https://meet.google.com/${getRandomPart()}${getRandomPart()}${getRandomPart()}-${getRandomPart()}${getRandomPart()}${getRandomPart()}${getRandomPart()}-${getRandomPart()}${getRandomPart()}${getRandomPart()}`;
};

const ScheduleMeeting = () => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [scheduledMeeting, setScheduledMeeting] = useState(null);

  const handleScheduleMeeting = () => {
    const randomMeetingLink = generateRandomMeetingLink();
    const formattedTime = format(new Date(time), "MMMM d, yyyy h:mm a");

    setScheduledMeeting({
      name,
      time: formattedTime,
      link: randomMeetingLink,
    });
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      className={classes.wrapper}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className={classes["schedule-meeting-container"]}>
        <Typography
          variant="h4"
          gutterBottom
          color={"rgba(0, 0, 0, 0.883)"}
          fontWeight={"600"}
          margin={"1rem"}
        >
          Clear your Doubt
        </Typography>
        <TextField
          label="Description of problem"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Time"
          variant="outlined"
          type="datetime-local"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
        />
        
       <button className={classes["bton"]}
          onClick={handleScheduleMeeting}> Schedule</button>
        {scheduledMeeting && (
          <div className={classes["scheduled-meeting-info"]}>
            <Typography variant="h6" gutterBottom>
              Get your doubts cleared:
            </Typography>
            <Typography>
              Name: {names[Math.floor(Math.random() * names.length)]}
            </Typography>
            <Typography>
              Description of Problem:{scheduledMeeting.name}
            </Typography>
            <Typography>Time: {scheduledMeeting.time}</Typography>
            <Typography>
              Link:
              <a
                href={scheduledMeeting.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {scheduledMeeting.link}
              </a>{" "}
            </Typography>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ScheduleMeeting;
