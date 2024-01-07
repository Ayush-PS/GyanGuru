import React from "react";
import classes from "../Styles/Home.module.css";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import LocalPoliceOutlinedIcon from '@mui/icons-material/LocalPoliceOutlined';
function Home() {
  const data = [
    {
      icon: <SchoolOutlinedIcon />,
      title: "Professional Teachers",
      description: "Morbi ddefvk lofdsgy lasjdii df sifrutriedfnm  idg99ytfe jdaders vjfibfduf jfnbkvbom zccde wuffee knvfdiv fv vdrge erg.",
    },
    {
      icon: <MapsHomeWorkOutlinedIcon />,
      title: "Home Like Environment",
      description: "Morbi ddefvk lofdsgy lasjdii df sifrutriedfnm  idg99ytfe jdaders vjfibfduf jfnbkvbom zccde wuffee knvfdiv fv vdrge erg.",
    },
    {
      icon: <LocalPoliceOutlinedIcon/>,
      title: "Instructed and Licenced",
      description: "Morbi ddefvk lofdsgy lasjdii df sifrutriedfnm  idg99ytfe jdaders vjfibfduf jfnbkvbom zccde wuffee knvfdiv fv vdrge erg.",
    },
  ];
  const img2 = "https://i.ytimg.com/vi/4dCAFDXhyVo/maxresdefault.jpg";
  const c1 =
    "https://w0.peakpx.com/wallpaper/622/358/HD-wallpaper-pink-yellow-orange-gradient-colors-background-ultra-aero-colorful-orange-purple-yellow-abstract-pink-background-gradient-blending.jpg";
  const c2 =
    "https://w0.peakpx.com/wallpaper/622/358/HD-wallpaper-pink-yellow-orange-gradient-colors-background-ultra-aero-colorful-orange-purple-yellow-abstract-pink-background-gradient-blending.jpg";
  return (
    <div>
      <div className={classes.s1}>
        <div className={classes.head}>
          <h2>Empowering Student Knowledge</h2>
          <p>
            Through the combination of lectures, reading, discussions, Students
            will gain a solid foundation in education.
          </p>
        </div>
      </div>
      <div className={classes.s2}>
        <img src={img2} className={classes.left} />
        <img src={c1} className={classes.b1} />
        <img src={c2} className={classes.b2} />
        <div className={classes.right}>
          <h2>Request a Tutors For a Free Online Class.</h2>
          <h4>Play As You Learn</h4>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            randomised words which don't look even slightly believable.
          </p>
        </div>
      </div>
      <div className={classes.s3}>
        <div className={classes.des}>
          <h2>We Provide Your Child With An Opportunity.</h2>
          <p>
            There are many variations passages Lorem Ipsum available, but
            majority have suffered alteration in some form, by injected
            randomized.
          </p>
        </div>
        <div className={classes.com} style={{display:"flex", justifyContent:"space-evenly"}}>
          {data.map((item, index) => (
            <div key={index} >
              <svg>{item.icon}</svg>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
