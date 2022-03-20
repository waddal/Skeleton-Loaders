import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        type="primary"
        block={true}
        size="middle"
        onClick={() => navigate("/posts")}
      >
        Posts
      </Button>
      <Button block={true}>Secondary</Button>
    </>
  );
};

export default Home;
