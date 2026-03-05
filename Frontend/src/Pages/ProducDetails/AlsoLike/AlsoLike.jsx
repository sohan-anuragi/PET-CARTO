import WeekDeal from "../../Home/WeekDeal/WeekDeal";

export default function AlsoLike() {
  return (
    <>
      <div>
        <h2 className="px-[2rem] text-[1.8rem] font-semibold mt-[3rem] ">
          {" "}
          You may also like…
        </h2>
        <div>
          <WeekDeal />
        </div>
      </div>
    </>
  );
}
