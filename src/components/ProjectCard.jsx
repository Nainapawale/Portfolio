import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardBody from "react-bootstrap/esm/CardBody";
import CardImg from "react-bootstrap/esm/CardImg";
import CardTitle from "react-bootstrap/esm/CardTitle";
import CardText from "react-bootstrap/esm/CardText";
// import Button from "react-bootstrap/Button";

function ProjectCard(props) {
  return (
    <div className="col-md-6">
      <Card className="h-100 shadow">
        <CardImg variant="top" src={props.projectImage} />

        <CardBody className="p-5">
          <Card.Title className="fw-bold text-uppercase">
            {props.projectName}
          </Card.Title>

          <Card.Text> {props.projectDesc}</Card.Text>
          <Button className="shadow text-capitalize" variant="outline-primary">
            View projects
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProjectCard;
