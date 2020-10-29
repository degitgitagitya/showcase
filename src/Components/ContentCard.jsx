import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const CardContainer = styled.div`
  height: 100px;

  @media only screen and (max-width: 600px) {
    height: 8rem;
  }
`;

const ContentCard = (props) => {
  return (
    <CardContainer className="d-flex">
      <FiberManualRecordIcon style={{ color: 'black' }} />
      <div style={{ position: 'absolute', borderLeft: '2px solid black', marginLeft: '10px', marginTop: '10px', paddingLeft: '20px' }}>
        <h4>{props.title}</h4>
        <div style={{ fontWeight: '500' }}>{props.subTitle}</div>
        <p>{props.desc}</p>
      </div>
    </CardContainer>
  )
}

export default ContentCard
