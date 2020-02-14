import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
import cardImg from '../images/318x180.svg';
import { Link } from 'gatsby';

const PostCard = (props) => {
  return (
    <div>
      <style>
        {`
          .techwinx-card-title {
            font-size:1.3rem;
          }
          .post-link {
            color:inherit;
          }
          .post-link:hover {
            text-decoration:none;
            color:inherit;
          }
        `}
      </style>
      <Link to={props.path || "/404"} className="post-link">
        <Card>
          {
            props.image ?
              <CardImg key = {new Date()} top width="100%" src={props.image} alt="Stuff" />:
              ''
          }
          <CardBody>
            <CardTitle className="techwinx-card-title">{props.title} </CardTitle>
            <CardText>{props.content} </CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default PostCard;