import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ContentCard from './ContentCard';

const DATA_EDUCATION = [
  {
    title: 'Universitas Pendidikan Indonesia',
    subTitle: 'Bachelor of Computer Science',
    desc: 'August 2016 - August 2020',
  },
];

const Education = () => {
  return (
    <Container className='mt-4'>
      <Row>
        <Col>
          <h3>Education</h3>
          <hr />
          <div>
            {DATA_EDUCATION.map((data, index) => {
              return (
                <ContentCard
                  key={index}
                  title={data.title}
                  subTitle={data.subTitle}
                  desc={data.desc}
                ></ContentCard>
              );
            })}
          </div>
          <br />
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
