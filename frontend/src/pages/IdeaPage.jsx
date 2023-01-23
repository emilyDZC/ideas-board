import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getIdea, reset } from "../features/ideas/ideaSlice";
import NoteItem from "../components/NoteItem";
import NoteForm from "../components/NoteForm";
import Spinner from "../components/Spinner";

function IdeaPage() {
  const [notes, setNotes] = useState();
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

  return (
    <div>
      <div>{idea.text}</div>
      <NoteForm ideaId={idea._id} />
      <div>{idea.notes && idea.notes.map((note) => <NoteItem key={note._id} note={note} />)}</div>
    </div>
  );
}

export default IdeaPage;
