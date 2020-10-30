import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ReactPlayer from 'react-player';

const Achievement = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Achievement</h3>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col xs='12' md='4'>
          <h4>SELISIK IT And Animation Competition 2018</h4>
          <h5>
            <i className='fa fa-trophy mr-2' style={{ color: '#ffd700' }}></i>
            1st place winner in animation category
          </h5>
          <p>
            Information Technology and Animation competition that held by
            Sekolah Tinggi Teknologi Bandung (STTB) with the theme: “Preparing
            Human Resources to Face Industry 4.0”.
          </p>
        </Col>
        <Col xs='12' md='8'>
          <ReactPlayer width='100%' url='https://youtu.be/h3Z0WRlHzjw' />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs='12' md='4'>
          <h4>KEMAKOM IT Festival 2018</h4>
          <h5>
            <i className='fa fa-trophy mr-2' style={{ color: '#ffd700' }}></i>{' '}
            2nd place winner in animation category
          </h5>
          <p>
            Competition about Information Technology that held by Departement of
            Computer Science with the theme: “Building Innovation and Creativity
            with KEMAKOM with heart”.
          </p>
        </Col>
        <Col xs='12' md='8'>
          <ReactPlayer width='100%' url='https://youtu.be/iaVPUnuy1TY' />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs='12' md='4'>
          <h4>Cimahi IT Creative 2019</h4>
          <h5>
            <i className='fa fa-trophy mr-2' style={{ color: '#ffd700' }}></i>
            1st runner-up winner in motion graphic category
          </h5>
          <p>
            Competition about Information Technology that held by Departement of
            Computer Science with the theme: “Building Innovation and Creativity
            with KEMAKOM with heart”.
          </p>
        </Col>
        <Col xs='12' md='8'>
          <ReactPlayer width='100%' url='https://youtu.be/VTuvIOCYQXU' />
        </Col>
      </Row>
    </Container>
  );
};

export default Achievement;
