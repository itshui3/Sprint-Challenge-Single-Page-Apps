import React, {useState, useEffect} from "react";
import {Card, CardBody, Col, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import InfoModal from './InfoModal';

export default function CharacterCard({data}) {

  const [useModal, setUseModal] = useState(false);

  return (
    <>
      <Col>
        <Card>
          <CardBody>
            <h5>{data.id}</h5>
            <p>{data.name}</p>
            <Button onClick={() => setUseModal(!useModal)}>Info</Button>
          </CardBody>
        </Card>
      </Col>
      <Modal isOpen={useModal} onClick={() => setUseModal(!useModal)}>
        <ModalHeader>
          {data.name}
        </ModalHeader>
        <ModalBody>
          <p>{data.id}</p>

          {
            data.type
              ? <p>{data.type}</p>
              : null
          }
          {
            data.image
              ? <img src={data.image} />
              : null
          }
        </ModalBody>

      </Modal>
    </>
  )
}
