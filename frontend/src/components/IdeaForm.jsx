import { useState } from "react";
import { useDispatch } from "react-redux";
import { createIdea } from "../features/ideas/ideaSlice";

function IdeaForm() {
  const [text, setText] = useState();
  const [tags, setTags] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    let tagsArray = [];
    if (tags) {
      tagsArray = tags.replace(/\s+/g, "").split(",");
    }

    dispatch(createIdea({ text, tags: tagsArray }));
    setText("");
    setTags("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">New idea:</label>
          <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}></input>
          <label htmlFor="tags">Tags</label>
          <input type="text" name="tags" id="tags" value={tags} onChange={(e) => setTags(e.target.value)} placeholder="Add tags as a comma-separated list"></input>
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add idea
          </button>
        </div>
      </form>
    </section>
  );
}

export default IdeaForm;
