import React from "react";

const MainCard = (props) => {
    console.log("pp",props.workout)
  return (
    <>
      <figure className="bg-white ht-80 rounded-lg shadow-md pt-2 pb-2 ">
        <img
          className="h-32 mx-auto"
          alt="workout"
          src={props.workout.urls.regular}
        />
        <figcaption className="text-center mt-2">
          <p>Workout</p>
        </figcaption>
      </figure>
      
    </>
  );
};

export default MainCard;
