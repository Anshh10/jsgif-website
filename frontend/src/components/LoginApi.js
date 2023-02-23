import React, { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

function LoginApi() {
  const [response, setResponses] = useState([]);
  const responseId = useParams();

  const getResponse = async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/login/${responseId.id}`
    );
    setResponses(res.data);
  };

  useEffect(() => {
    getResponse();
  });

  return (
    <div>
      <p>
        username : {response.user} <br />
        password : {response.password}
      </p>
    </div>
  );
}

export default LoginApi;
