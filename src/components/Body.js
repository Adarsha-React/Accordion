import Section from "./Section";
import { mockdata } from "../utils/constants";

const Body = () => {
  return (
    <div className="m-2 p-2 w-1/2">
      {mockdata.map((item) => (
        <Section item={item} key={item.id} />
      ))}
    </div>
  );
};
export default Body;
