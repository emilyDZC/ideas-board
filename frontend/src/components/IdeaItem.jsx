import { useDispatch } from "react-redux";
import { deleteIdea } from "../features/ideas/ideaSlice";
import { Link } from "react-router-dom";

function IdeaItem({ idea }) {
  const dispatch = useDispatch();

  return (
    <Link to={`/ideas/${idea._id}`}>
      <div className="goal">
        <div>{new Date(idea.createdAt).toLocaleString("en-GB")}</div>
        <h2>{idea.text}</h2>
        {/* <button onClick={() => dispatch(deleteIdea(idea._id))}>X</button> */}
      </div>
    </Link>
  );
}

export default IdeaItem;
