import React, { useEffect, useState } from "react";
import { getAllHeadline } from "../../data/httpService";

const Headline = () => {
  const [row, setRow] = useState("");

  useEffect(() => {
    getAllHeadline()
      .then((r) => {
        if (r.data && r.data.statusCode == 1) {
          // setRow(r.data.data);
          let str = "";
          r.data.data.map((m) => {
            str += m.headline + ".     "  
          });
          setRow(str);
        }
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      {row ? (
        <marquee width="100%" direction="left" height="100%">
          {row}
        </marquee>
      ) : null}
    </div>
  );
};

export default Headline;
