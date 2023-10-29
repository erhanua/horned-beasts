import HornedBeast from "./HornedBeast";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Gallery({ handleShowModal, beasts }) {
  return (
    <Container>
      <Row>
        {beasts.map((beast) => (
          <Col xs={6} md={6} key={beast._id}>
            <HornedBeast
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              onClick={() => handleShowModal(beast)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
