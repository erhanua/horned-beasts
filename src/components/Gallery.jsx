import HornedBeast from "./HornedBeast";
import galleryOfBeasts from "./data"; // Import the new data
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Gallery() {
  return (
    <Container>
      <Row>
        {galleryOfBeasts.map((beast) => (
          <Col xs={6} md={6} key={beast._id}>
            <HornedBeast
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
