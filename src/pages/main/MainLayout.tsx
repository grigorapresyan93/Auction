import { Outlet } from "react-router-dom";
import OnBoarding from "../../components/auth/OnBoarding";

function MainLayout() {
  return (
    <>
      <div className={"flex items-center justify-center p-20"}>
        <OnBoarding />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
