import { useDispatch } from "react-redux";
// import { deleteIdea } from "../features/ideas/ideaSlice";

function NoteItem({ note }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>{new Date(note.createdAt).toLocaleString("en-GB")}</div>
      <h2>{note.text}</h2>
      <div>{note.tags}</div>
      {/* <button onClick={() => dispatch(deleteIdea(note._id))}>X</button> */}
    </div>
  );
}

export default NoteItem;
