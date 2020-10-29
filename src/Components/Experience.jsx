import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ContentCard from './ContentCard';

const DATA_EXPERIENCE = [
  {
    title: 'PT. Telkom Indonesia',
    subTitle: 'Web Developer Internship',
    desc: 'SEP 2018 - NOV 2018',
  },
];

const Experience = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h3>Experience</h3>
          <hr />
          <div>
            {DATA_EXPERIENCE.map((data, index) => {
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

export default Experience;
