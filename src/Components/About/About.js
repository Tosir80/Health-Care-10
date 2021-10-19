import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
      <Container>
        <Row>
          <Col className="py-3">
            <p>Our Management Team</p>
            <h2>BOARD OF DIRECTORS</h2>
          </Col>
        </Row>
        <Row xs={2}>
          <Col className="p-3">
            <Card>
              <img src='/images/about img/1.jpg' alt='' />
              <p>Cosmetic Surgeon</p>
              <h4>Stephanie Wosniack</h4>
              <p>
                Mauris fermentum tristique laoreet. Etiam sagittis erat quis
                cursus bibendum. Vestibulum elementum urna interdum velit
                dapibus, non faucibus sapien auctor. Nunc ullamcorper ultricies
                dignissim.
              </p>
            </Card>
          </Col>
          <Col className="p-3">
            <Card>
              <img src='/images/about img/2.jpg' alt='' />
              <p>Pediatrician</p>
              <h4>Hellen Lowe</h4>
              <p>
                Aliquam egestas, ipsum sed semper placerat, mauris ligula tempus
                ipsum, quis lacinia dui sem vitae purus. Quisque felis felis,
                facilisis eu maximus non, luctus ac dui.
              </p>
            </Card>
          </Col>
          <Col className="p-3">
            <Card>
              <img src='/images/about img/3.jpg' alt='' />
              <p>Dental surgeon</p>
              <h4>Emily Washington</h4>
              <p>
                Duis ac ultrices felis, quis volutpat ipsum. Aenean augue metus,
                suscipit non risus quis, malesuada suscipit urna. Nulla
                facilisi. Donec hendrerit rutrum nibh, id egestas magna sodales
                a.
              </p>
            </Card>
          </Col>
          <Col className="p-3">
            <Card>
              <img src='/images/about img/4.jpg' alt='' />
              <p>Cosmetic Surgeon</p>
              <h4>Stephanie Wosniack</h4>
              <p>
                Mauris fermentum tristique laoreet. Etiam sagittis erat quis
                cursus bibendum. Vestibulum elementum urna interdum velit
                dapibus, non faucibus sapien auctor. Nunc ullamcorper ultricies
                dignissim.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    );
};

export default About