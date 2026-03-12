import React, { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:3002/verify",
          {},
          { withCredentials: true }
        );

        if (data.status) {
          setIsVerified(true);
        } else {
          window.location.href = "http://localhost:3000/login";
        }
      } catch (error) {
        window.location.href = "http://localhost:3000/login";
      }
    };
    verifyUser();
  }, []);

  if (!isVerified) {
    return <div style={{ textAlign: "center", marginTop: "100px" }}>Loading...</div>;
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;