import { useState } from "react";
import { useDispatch } from "react-redux";
import { createIdeaNote } from "../features/ideas/ideaSlice";

function NoteForm({ ideaId }) {
  const [text, setText] = useState();
  const [tags, setTags] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    let tagsArray = [];
    if (tags) {
      tagsArray = tags.replace(/\s+/g, "").split(",");
    }

    const payload = {
      text,
      tags: tagsArray,
      ideaId,
    };

    dispatch(createIdeaNote(payload));
    setText("");
    setTags("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">New note:</label>
          <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}></input>
          <label htmlFor="tags">Tags</label>
          <input type="text" name="tags" id="tags" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Add tags as a comma-separated list"></input>
        </div>
        <div className="form-group">
          <div className="button-container">
            <button className="btn btn-block" type="submit">
              Add note
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default NoteForm;
