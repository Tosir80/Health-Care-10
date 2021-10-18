import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <Row className="bg-dark text-white py-3">
                <Col>
                <h4>Dental-Care</h4>
                </Col>
                <Col>
                <p> <span>&copy;2021</span> Copyright By Dental-Care</p>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;