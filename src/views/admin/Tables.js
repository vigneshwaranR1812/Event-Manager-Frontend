import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable whom="Student" />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable whom="Uploader" color="dark" />
        </div>
      </div>
    </>
  );
}
