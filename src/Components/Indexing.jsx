import React from "react";
import Client from "./Client";
function Indexing() {
  return (
    <div className="my-8">
      <div className="w-2/3 mx-auto text-center max-md:w-full max-md:p-4">
        <h1 className="text-4xl  uppercase font-bold text-blue-800 mb-4">
          Indexing
        </h1>
        <p>
          We provide higher scientific quality by providing a service of
          citations for all published articles at various indexing sites so as
          to increase reach of articles to audience.
        </p>
      </div>
      <Client />
    </div>
  );
}

export default Indexing;
