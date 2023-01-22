import { useState } from "react";
import { useDispatch } from "react-redux";
import { createIdea } from "../features/ideas/ideaSlice";

function IdeaForm() {
  const [text, setText] = useState();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createIdea({ text }));
    setText("");
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Idea</label>
          <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}></input>
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
