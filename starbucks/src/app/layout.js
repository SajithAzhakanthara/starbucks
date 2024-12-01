import BootstrapJs from "./Bootstrap";
import HeaderMenuContextProvider from "./context/header-menu-context/HeaderMenuContextProvider";
import Header from "./components/header/Header";
import Footer from "@/app/components/footer/Footer";
import HeaderMobile from "@/app/components/header-mobile/HeaderMobile";
import LoginRegisterToggleContextProvider from "./context/login-register-toggle-context/LoginRegisterToggleContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./globals.scss";

export const metadata = {
  title: "Starbucks",
  description: "Starbucks coffee",
};

export default function RootLayout({ children }) {
  return (
    <HeaderMenuContextProvider>
      <LoginRegisterToggleContextProvider>
      <html lang="en">
        <body>
          <div className="d-md-block d-none">
            <Header/>
          </div>
          <div className="d-md-none d-block">
            <HeaderMobile/>
          </div>
          {children}
          <Footer/>
          <BootstrapJs/>
        </body>
      </html>
      </LoginRegisterToggleContextProvider>
    </HeaderMenuContextProvider>
  );
}
