const Section = (props) => {
  const { title, description } = props;

  return (
    <div className="bg-slate-100 p-2 m-2">
      <h1 className="font-bold my-2 text-orange-600">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Section;
