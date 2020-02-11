import React from 'react';
import Layout from '../components/Layout';

const PostsContainer = ({ children, name }) => {
  return (
    <Layout>
      <section className="section pt-5">
        <style>
          {`
          .posts-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 3rem 2rem;
          }
          .posts-container-header {
            color:var(--header-blue);
          }
          @media(max-width:760px){
            .posts-container {
              grid-template-columns: 1fr 1fr;
              grid-gap: 2rem 1rem;
            }
          }
          @media(max-width:450px){
            .posts-container {
              grid-template-columns: 1fr;
              grid-gap: 2rem 1rem;
            }
          }
        `}
        </style>
        <div className="container pt-4">
          <h1 className = "posts-container-header center">All {name} Posts</h1>
          <div className="py-4 posts-container">
            {children}
          </div>
        </div>
      </section>
    </Layout>
  )
}


export default PostsContainer;