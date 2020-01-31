import React, { useEffect, Children } from 'react';
import PostCard from './PostCard';

const PostCarousel = ({ children }) => {

  const PostParent = ({ children }) => {
    return (
      <div className="post-carousel pt-4 pb-1">
        {
          Children.map(children, (x, i) => {
            // if (i === 1) {
            //   return <div className="scroll-card active-card">{x}</div>
            // }
            return <div className="scroll-card">{x}</div>

          })
        }
      </div>
    )
  }
  return (
    <div>
      <style>
        {`
          .post-carousel {
            overflow-x: auto;
            display:flex;
            flex-wrap: nowrap;
            align-items:center;
            width:80vw;
            margin:0 auto;
          }
          .scroll-card {
            flex:0 0 auto;
            width:300px;
            margin:0 0.5rem;
            font-size:0.8rem;
          }
          .active-card {
            color:red;
            width:400px;
            font-size:1rem;
          }
          ::-webkit-scrollbar {
            width: 0px;
            height:5px;
          }
          ::-webkit-scrollbar-thumb {
              background: lightblue;
          }
          @media(max-width:750px){
            .post-carousel {
              width:90vw;
            }
            .scroll-card {
              width:250px;
            }
            .active-card {
              width:400px;
            }
          }
          @media(max-width:450px){
            .scroll-card {
              width:150px;
            }
            .active-card {
              width:200px;
            }
          }
        `}
      </style>
      <PostParent>
        {children}
      </PostParent>
    </div>
  )
}

export default PostCarousel;