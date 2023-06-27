import { posts } from "../../../posts";
export default function handler(req, res) {
  const { id } = req.query;
  let post = posts.find((p) => p.id == id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(400).json({ error: "there is no post" });
  }
}
