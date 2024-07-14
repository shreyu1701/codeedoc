import { Button, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./img/Black-Codeedoc-Transparant-201x74.png";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Container fluid>
        <div className="Container">
          <div className="Container-flex-space-between,">
            <Row>
              <div className="Container-flex, justify-space-between ">
                <a href="/">
                  <img src={logo} className="als-custom-logo" alt="logo" />
                </a>

                <div>
                  <Button
                    className="header-text"
                    onClick={() => navigate("/consultation ")}
                  >
                    Free consultation
                  </Button>
                </div>
              </div>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );

}
export default Header;
