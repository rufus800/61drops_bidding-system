import React, { useState } from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    margin-top: 50px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const BidForm: React.FC = () => {
    const [amount, setAmount] = useState<number>(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Send bid to backend
        const response = await fetch('http://localhost:8000/bids/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user_id: 1, amount }),
        });
        const data = await response.json();
        console.log(data);
    };

    return (
        <Container>
            <StyledCard>
                <Card.Body>
                    <Card.Title>Place a Bid</Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(Number(e.target.value))}
                                placeholder="Enter amount"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Place Bid
                        </Button>
                    </Form>
                </Card.Body>
            </StyledCard>
        </Container>
    );
};

export default BidForm;
