import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

const ImageContainer = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  margin: 0 0 -30px 0;
`;

function Landing() {
  return (
    <Container className='py-5'>
      <Row className='align-items-center'>
        <Col xs='12' md='5' className='p-4'>
          <ImageContainer className='shadow-sm border border-light'>
            <Image
              src='https://image.shutterstock.com/image-photo/close-portrait-smiling-handsome-man-260nw-1011569245.jpg'
              alt=''
            />
          </ImageContainer>
        </Col>
        <Col xs='12' md='7'>
          <h3 style={{ color: '#402f1c' }}>Hello, My Name Is John Doe</h3>
          <h4 style={{ color: '#895423' }}>
            I'm a passionate graphic designer
          </h4>
          <p>You can take a look of my design here</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
