import { useDispatch } from "react-redux";
// import { deleteIdea } from "../features/ideas/ideaSlice";

function NoteItem({ note }) {
  const dispatch = useDispatch();

  return (
    <div className="note-item">
      <div className="date-text">{new Date(note.createdAt).toLocaleString("en-GB")}</div>
      <div className="note-text">{note.text}</div>
      <div className="author-text">Posted by: {note.userName}</div>
      {note.tags ? (
        <div className="tags-container">
          {note.tags.map((tag, i) => (
            <div className="tag" key={i}>
              {tag}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
      {/* <button onClick={() => dispatch(deleteIdea(note._id))}>X</button> */}
    </div>
  );
}

export default NoteItem;
