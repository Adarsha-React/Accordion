import Section from "./Section";
import { mockdata } from "../utils/constants";
import { useState } from "react";

const Body = () => {
  const [showIndex, setShowIndex] = useState(0);

  return (
    <div className="m-2 p-2 w-1/2">
      {mockdata.map((item, index) => (
        <Section
          item={item}
          key={item.id}
          isVisible={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default Body;
