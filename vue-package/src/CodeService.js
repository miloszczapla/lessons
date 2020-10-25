import axios from "axios";

const url = "api/lessons/";


class PostService {
  //Get Post
  static getCode() {
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
  static insertCode(text,style) {
    return axios.post(url, {
      text,
      style
    });
  }

  //deletePost
  static deleteCode(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default PostService;
