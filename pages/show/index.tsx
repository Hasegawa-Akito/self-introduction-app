import { NextPage } from "next";
import { useContext } from "react";
import { GeolocationContext } from "../_app";

const Home: NextPage = () => {
  const { position } = useContext(GeolocationContext);
  console.log(position.latitude);

  return <div></div>;
};

export default Home;