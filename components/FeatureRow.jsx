import { BsCheck2 } from "react-icons/bs";

export const FeatureRow = ({ data, refFeatures }) => {
  return (
    <div className="w-full text-gray-700" ref={refFeatures}>
      {/* <div className="grid md:grid-cols-2 mx-auto max-w-[1300px] items-center"> */}
      <div className="flex flex-wrap mx-auto max-w-[1000px] items-center p-10 gap-y-10">
        <data.image
          size={150}
          color="#27be84"
          variant="Bulk"
          className={`mx-auto ${
            data.reversed || false ? "lg:order-last" : ""
          } md:h-[200px] md:w-[200px]`}
        />
        <div className="space-y-5 lg:text-left text-center w-[500px] mx-auto">
          <h2 className="text-3xl font-bold txt-gradient-2">{data.title}</h2>
          <p>{data.body}</p>
          {data.subFeatures.map((e, i) => (
            <SubFeatureRow data={e} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const SubFeatureRow = ({ data }) => {
  return (
    <div className="flex items-center gap-3 text-left">
      <BsCheck2 color="#27be84" className="min-w-[30px] min-h-[30px]" />
      <div>
        <h3 className="text-gray-700 font-bold text-lg">{data.title}</h3>
        <p className="text-sm text-gray-700">{data.body}</p>
      </div>
    </div>
  );
};
