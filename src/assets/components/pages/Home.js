import React from "react";
import Main from "../MainComponents/Main";
import FormCard from "../MainComponents/FormCard";
import Specialties from "../MainComponents/Specialties";

export default function Home() {
  return (
    <React.Fragment>
      <div className="container">
        <Main />
        <FormCard />
        <Specialties />
      </div>
    </React.Fragment>
  );
}
