const Servies = () => {
  return (
    <div className="h-screen w-screen bg-[#1c1c1c] flex flex-row items-center justify-between overflow-hidden pt-96 pl-20">
      <div className="gap-8 p-8 ml-20">
        <h1 className="text-4xl text-white pb-10">
          Have a project in mind or just want to say hi?
        </h1>
        <p className="text-gray-500">
          {" "}
          Drop me a message, I’d love to hear from you!
        </p>
      </div>
      <img
        className="h-[70vh] w-[50vh] rounded-tl-[80px] object-cover  "
        src="https://framerusercontent.com/images/KdaILJvS1jL1oh2kM3azBIKN3k.png?lossless=1&width=1792&height=2688"
      />
      <div className="pr-40 pl-20 gap-8 flex flex-col">
        <p className="text-white text-3xl pl-20"> Why me?</p>
        <p className="text-gray-500">
          Beacuse i bring a
          <span className="text-white">multidisciplinary background </span>
          that bridges development, UX, UI design, and accessibility. This
          diverse experience helps me understand different perspectives and
          collaborate effectively across teams.
        </p>
        <p className="text-gray-600">
          I enjoy hands-on design just as much as strategic thinking and
          technical problem-solving
        </p>
      </div>
    </div>
  );
};

export default Servies;
