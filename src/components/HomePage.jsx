import { Button, Card, Image, Container} from 'react-bootstrap';
import backgroundImage from'../assets/background-image.jpg'; 

function HomePage() {
    const pageStyle = {
        backgroundColor: '#f0f8ff',
        color: '#333',
        padding: '20px',
        borderRadius: '10px',
        border: '2px solid #ccc',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    };

    return (
        <div style={pageStyle}>
            <h1>Welcome to Our Store</h1>

            <Image src={backgroundImage} alt="Welcome to our store" fluid />
            <div>
            <Button variant="primary" style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)'}}>
                Shop Now
            </Button>
            </div>
            <Card style={{ width: '18rem', marginTop: '20px'}}>
                <Card.Body>
                    <Card.Title>Featured Product</Card.Title>
                    <Card.Text>
                        This is a great product!
                    </Card.Text>
                    <Button variant="outline-primary">Learn More</Button>
                </Card.Body>
            </Card>
            <Container className="text-center py-5" style={{ backgroundColor: '#e3f2fd', color: '#0d47a1' }}>
                <h1>Welcome to the Error Page</h1>
                <p>This will bring you to an error screen</p>
                <Button variant="danger" href="/browse">Error</Button>
            </Container>
        </div>
    );
};

export default HomePage;