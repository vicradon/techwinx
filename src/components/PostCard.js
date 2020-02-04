import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import cardImg from '../images/318x180.svg';

const PostCard = (props) => {
  return (
    <div>
      <style>
        {`
          .techwinx-card-title {
            font-size:1.3rem;
          }
        `}
      </style>
      <Card>
        <CardImg top width="100%" src={cardImg} alt="Stuff" />
        <CardBody>
          <CardTitle className = "techwinx-card-title">{props.title} </CardTitle>
          <CardText>{props.content} </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostCard;