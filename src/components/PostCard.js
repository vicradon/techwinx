import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';
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
          .post-card-image {
            max-height: 200px !important;
            // height:inherit !important;
          }
          .card-img-cont {
            height:200px;
          }
        `}
      </style>
      <Link to={props.path || "/404"} className="post-link">
        <Card>
          {/* <div className="card-img-cont"> */}


            {
              props.image ?
                <CardImg className="post-card-image" key={new Date()} top width="100%" src={props.image} alt="Stuff" /> :
                ''
            }
          {/* </div> */}
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