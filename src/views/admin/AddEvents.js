import React from "react";

// components

import { CardSettings2 } from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

export default function AddEvent() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-12/12 px-4">
          <CardSettings2 />
        </div>
        {/* <div className="w-full lg:w-4/12 px-4">
          <CardProfile />
        </div> */}
      </div>
    </>
  );
}
