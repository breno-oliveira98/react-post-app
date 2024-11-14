import { Col, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
import { routes } from "../../routes/routes";
import { Navigate } from "react-router-dom";

export const Header = () => {
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
                <input
                  className="form-control"
                  list="datalistOptions"
                  id="exampleDataList"
                  placeholder="Acesso rápido"
                />
                <datalist id="datalistOptions">
                  {routes.map((option, index) => (
                  <option key={index}>{option.path.replace("/", "").toLocaleUpperCase()}</option>

                  ))}
                </datalist>
              </>
            </Col>
          </Row>
        </Form>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
