import React from 'react'



class Post extends React.Component {
    state = {
      posts: []
    };
  
    componentDidMount() {
      this.fetchPosts();
    }
  
  
  
     render(){
          return(
              <h1>Hashnode api</h1>
          );
  }
  
}

export default Post;