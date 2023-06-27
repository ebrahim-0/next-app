import { Container } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <>
      <NavBar />
      <div className="container">{props.children}</div>
      <Footer />
    </>
  );
}
