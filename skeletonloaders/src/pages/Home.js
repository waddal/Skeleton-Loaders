import React, { useState } from "react";
import { Switch } from "antd";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Card from "../components/Card";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleLoading = () => {
    setLoading(!loading);
  };

  return (
    <div className="Home">
      <Switch
        checkedChildren="loaded"
        unCheckedChildren="loading"
        onClick={handleLoading}
      />
      <h1>Skeleton Loaders</h1>
      <Title loading={loading} />
      <br />
      <Card loading={loading} />
    </div>
  );
};

export default Home;
