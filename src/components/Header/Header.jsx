import { Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { routes } from "../../routes/routes";
import AutoCompleteInput from "../autocomplete/AutoComplete";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import "./Header.css"


export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }
  useEffect(() => {
    if(isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode])

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
    <Navbar bg={isDarkMode ? 'dark' : ''} data-bs-theme={isDarkMode ? 'dark' : ''} className="bg-body-tertiary mb-3">
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
          <Row className="d-flex align-items-center">
            <Col xs="auto" className="pt-3">
                <AutoCompleteInput options={routes}/>
            </Col>
            <Col xs="auto" >
            <FontAwesomeIcon 
            color={isDarkMode ? "blue" : "yellow"}
            icon={isDarkMode ? faMoon : faSun} 
            onClick={toggleTheme} 
            cursor={"pointer"} />
            </Col>
          </Row>
        </Form>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
          Conectado como: <a href="#login">{userInfo?.nome}</a>
          </Navbar.Text>
          {userInfo && (
            <span className="text-black btn ms-3 d-flex align-items-center gap-2" onClick={logout}>
              Sair <i class="bi bi-box-arrow-right text-danger"></i>
            </span>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
