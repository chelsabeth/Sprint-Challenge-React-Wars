import React from "react";
import {
    Col,
    Card,
    CardText,
    CardBody,
    CardTitle
  } from "reactstrap";



const CharacterCard = props => {
    return (
      <Col xs="6" key={props.key}>
        <Card outline color="warning">
          <CardBody>
            <CardTitle tag="h4">{props.name}</CardTitle>
            <CardText>Height: {props.height}</CardText>
            <CardText>Gender: {props.gender}</CardText>
            <CardText>Skin Color: {props.skin}</CardText>
            <CardText>Eye Color: {props.eyes}</CardText> 
          </CardBody>
        </Card>
       </Col>
    );
  };

  export default CharacterCard;