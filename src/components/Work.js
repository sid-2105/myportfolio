import "./WorkCardStyle.css";
import WorkCard from "./WorkCard";
import Workdata from "./Workdata";
import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
         {Workdata.map((val, ind)=>{
          return(
               <WorkCard
               key={ind}
               imgsrc={val.imgsrc}
               title={val.title}
               text={val.text}
               view={val.view}
               source={val.source}
               />
          )
         })} 
      </div>
    </div>
  );
};

export default Work;
