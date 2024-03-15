const PreLoader = () => {
  return (
    <>
      <div
        className="h-screen w-full fixed bg-black z-50 !overflow-x-hidden"
        id="loading"
      >
        <div className=" flex items-center justify-center h-screen">
          <div className="follow-the-leader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreLoader;
