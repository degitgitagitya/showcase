import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';

const ImageContainer = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  margin: -200px 0 -30px 0;
`;

function Landing() {
  return (
    <Container className='py-5'>
      <Row className='align-items-center'>
        <Col xs='12' md='5' className='p-4'>
          <ImageContainer className='shadow-sm border border-light'>
            <Image
              src='https://ik.imagekit.io/4cly7cecrazuh/WhatsApp_Image_2020-10-30_at_7.01.15_PM_G0heG44ByJz.jpeg'
              alt='profile'
            />
          </ImageContainer>
        </Col>
        <Col xs='12' md='7'>
          <h3 style={{ color: '#402f1c' }}>
            Hello, My Name is Nurmaulani Mustika Tresna
          </h3>
          <h4 style={{ color: '#895423' }}>
            I'm a passionate graphic designer
          </h4>
          <p>This is my personal website</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
