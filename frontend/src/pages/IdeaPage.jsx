import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIdea, reset } from "../features/ideas/ideaSlice";
import NoteItem from "../components/NoteItem";
import NoteForm from "../components/NoteForm";
import Spinner from "../components/Spinner";

function IdeaPage() {
  const [showForm, setShowForm] = useState(false);
  let { ideaId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { idea, isLoading, isError, message } = useSelector((state) => state.ideas);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getIdea(ideaId));

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  //   if (isLoading) {
  //     return <Spinner />;
  //   }

  const refreshPage = () => {
    setShowForm(false);
    dispatch(getIdea(ideaId));
  };

  return (
    <div>
      <div className="idea-header">{idea.text}</div>
      <div className="button-container">
        <button className="btn btn-clock" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Hide" : "Add note"}
        </button>
      </div>
      {showForm && <NoteForm ideaId={idea._id} onSave={() => refreshPage()} />}

      <div className="notes-container">{idea.notes && idea.notes.map((note) => <NoteItem key={note._id} note={note} />)}</div>
    </div>
  );
}

export default IdeaPage;
