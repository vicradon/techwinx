import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import cardImg from '../images/318x180.svg';

const PostCard = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={cardImg} alt="Stuff" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostCard;