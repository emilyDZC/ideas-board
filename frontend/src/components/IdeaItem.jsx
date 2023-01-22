import { useDispatch } from "react-redux";
import { deleteIdea } from "../features/ideas/ideaSlice";

function IdeaItem({ idea }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(idea.createdAt).toLocaleString("en-GB")}</div>
      <h2>{idea.text}</h2>
      <button onClick={() => dispatch(deleteIdea(idea._id))}>X</button>
    </div>
  );
}

export default IdeaItem;
