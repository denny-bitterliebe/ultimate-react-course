import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loading from "./Loading";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="layout">
      {isLoading && <Loading> </Loading>}
      <Header></Header>

      <main>
        <Outlet></Outlet>
      </main>

      <CartOverview></CartOverview>
    </div>
  );
}

export default AppLayout;
