import { useState } from "react";

const Section = (props) => {
  const { title, description } = props.item;
  const { isVisible, setShowIndex } = props;
  //const [isVisible, setIsVisible] = useState(true);

  console.log(setShowIndex);
  const handleClick = () => {
    // setIsVisible(!isVisible);
    setShowIndex();
  };

  return (
    <div className="bg-slate-100 p-2 m-2 border">
      <div
        className="cursor-pointer flex justify-between pb-3"
        onClick={handleClick}
      >
        <h1 className="font-bold text-orange-600">{title}</h1>
        {isVisible ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </div>

      {isVisible && <p>{description}</p>}
    </div>
  );
};

export default Section;
