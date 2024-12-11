import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import notFoundImage from '../assets/not-found.jpg'; // Ensure this image exists in the assets folder.

const NotFound = () => {
  return (
    <Container className="text-center py-5" style={{ backgroundColor: '#f8f9fa', color: '#343a40' }}>
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={notFoundImage} alt="404 Not Found" fluid rounded className="mb-4" />
        </Col>
        <Col md={6}>
          <h1>404 - Page Not Found</h1>
          <p>Oops! The page youre looking for doesnt exist.</p>
          <NavLink to="/" style={{ textDecoration: 'none' }}>
            <Button variant="primary" className="mt-3">Go Back Home</Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
