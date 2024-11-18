import { Col, Container, Form, ListGroup, Nav, Navbar, Row } from "react-bootstrap";
import { routes } from "../../routes/routes";
import AutoCompleteInput from "../autocomplete/AutoComplete";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    setUserInfo(null)
    navigate("/login")
  }

  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">
          <img
            alt=""
            src="https://react-bootstrap.netlify.app/img/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/post">Post</Nav.Link>
            <Nav.Link href="/contatos">Contatos</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form inline>
          <Row>
            <Col xs="auto">
              <>
                <AutoCompleteInput options={routes}/>
              </>
            </Col>
          </Row>
        </Form>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          Conectado como: <a href="#login">{userInfo?.nome}</a>
          </Navbar.Text>
          {userInfo && (
            <span className="text-secondary btn ms-3" onClick={logout}>
              Logout
            </span>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
