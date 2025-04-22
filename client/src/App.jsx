import Nav from "./components/nav/Nav";
import Footer from "./components/common/Footer";
import Router from "./Router";
import Ad from "./components/common/Ad";
import RootProvider from "./providers/RootProvider";

export default function App() {
  return (
    <RootProvider>
      <Nav />
      <main>
        <Router />
        <div className="padding-inline">
          <Ad />
        </div>
      </main>
      <Footer />
    </RootProvider>
  )
}