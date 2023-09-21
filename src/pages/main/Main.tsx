import { Link } from "react-router-dom";
import OnBoarding from "../../components/auth/OnBoarding";

function Main() {
  return (
    <div className={"flex flex-col items-center justify-center mt-[60px]"}>
      <div className={"font-mardoto text-[#101B28] text-[40px] space-x-0.5 font-normal mb-[65px]"}>
        Գլխավոր էջ
      </div>
      <OnBoarding />
      <Link
        to="auth"
        className={
          "middle none center rounded-lg py-3 px-6 font-sans text-xl mt-28 font-bold uppercase text-green-500 transition-all hover:bg-green-500/10 active:bg-green-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        }>
        Auth
      </Link>
    </div>
  );
}

export default Main;
