import React from "react";
import { Circles } from "react-loader-spinner";
function Spinner() {
  return (
    <div className="container m-auto">
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
