import React from "react";
import { useParams } from "react-router";

export default function Servicing() {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>o{serviceId}y</h1>
    </div>
  );
}
