import axios from "axios";

const url = "api/lessons/";

class PostService {
  //Get Post
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((post) => ({
            ...post,
            createdAt: new Date(post.createdAt),
          }))
        );
      } catch (err) {
        reject(err);
      }
    });
  }
  //ADD post
  static insertPost(text) {
    return axios.post(url, {
      text,
    });
  }

  //deletePost
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
