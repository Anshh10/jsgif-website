import React, { useState, useEffect } from "react";
import axios from "axios";

function RegionList() {
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    const fetchRegions = async () => {
      const response = await axios.get("http://localhost:8000/user/region");

      setRegions(response.data);
    };
    fetchRegions();
  }, []);

  return (
    <div>
      {regions.map((region) => (
        <h3 key={region.id}>{region.region}</h3>
      ))}
    </div>
  );
}

export default RegionList;
