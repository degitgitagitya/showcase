import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import First from '../Assets/First.png';
import Second from '../Assets/Second.png';

const ImageContainer = styled.img`
  object-fit: cover;
  height: 30rem;
  width: 100%;
`;

function Portfolio() {
  return (
    <Container className='mt-4'>
      <Row>
        <Col xs='12' md='6'>
          <h3>My Portfolios</h3>
          <hr />
          <div className='w-100'>
            <ImageContainer
              src={First}
              alt='first-portfolio'
              className='mt-2'
            />
          </div>
          <h5 className='mt-2'>Typography</h5>
          <p>Typography design to motivate people</p>
        </Col>
        <Col xs='12' md='6'>
          <div className='w-100'>
            <ImageContainer
              src={Second}
              alt='second-portfolio'
              className='mt-2'
            />
          </div>
          <h5 className='mt-2'>UI/UX Design</h5>
          <p>Simple UI/UX design for mobile app</p>
          <div className='d-flex justify-content-end'>
            <a
              className='btn'
              target='_blank'
              href='https://dribbble.com/nurmaulanimt'
              rel='noopener noreferrer'
            >
              <h5>
                <span className='mr-3'>More</span>{' '}
                <i className='fa fa-arrow-right'></i>
              </h5>
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Portfolio;
