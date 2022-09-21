export const FeatureGrid = ({ data, refFeatures }) => {
  return (
    <div className="max-w-[1300px] lg:mx-auto pt-20" ref={refFeatures}>
      <h1 className="mb-10 text-4xl font-bold text-center md:text-5xl txt-gradient-3 md:mb-20">
        More Features
      </h1>

      <div className="flex flex-wrap justify-center gap-5 gap-y-10">
        {data.map((e, i) => (
          <div className="text-gray-800 w-[300px] space-y-3" key={i}>
            {
              <e.image
                size={100}
                color="#27be84"
                className="mx-auto"
                variant="TwoTone"
              />
            }
            <h3 className="text-2xl font-medium text-center py-5">{e.title}</h3>
            <p className="text-center text-gray-700">{e.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
