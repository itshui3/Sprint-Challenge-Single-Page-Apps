import React from "react";
import {Card, CardBody, Col} from 'reactstrap';

export default function CharacterCard({data}) {
  return (
    <Col>
      <Card>
        <CardBody>
          <h5>{data.id}</h5>
          <p>{data.name}</p>
        </CardBody>
      </Card>
    </Col>
  )
}
