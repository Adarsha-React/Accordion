import Section from "./Section";
import { mockdata } from "../utils/constants";

const Body = () => {
  return (
    <div className="m-2 p-2 w-1/2">
      <Section title={"Kabadi"} description={"Kabadi section"} />
      <Section title={"Cricket"} description={"Cricket section"} />
      <Section title={"Football"} description={"Football section"} />
    </div>
  );
};
export default Body;
