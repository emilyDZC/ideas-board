import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import IdeaForm from "../components/IdeaForm";
import Spinner from "../components/Spinner";
import { getIdeas, reset } from "../features/ideas/ideaSlice";
import IdeaItem from "../components/IdeaItem";

function IdeasBoard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { ideas, isLoading, isError, message } = useSelector((state) => state.ideas);
  const [addIdea, setAddIdea] = useState(false);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getIdeas());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        {user ? (
          <>
            <h1>Welcome {user.name}!</h1>
            <p>Ideas Dashboard</p>
          </>
        ) : (
          <></>
        )}
      </section>
      <section className="content">
        <button className="btn btn-block" onClick={() => setAddIdea(!addIdea)}>
          {addIdea ? "Close" : "Add new idea"}
        </button>
        {addIdea ? <IdeaForm /> : ""}
      </section>
      <section className="content">
        {ideas.length > 0 ? (
          <div className="goals">
            {ideas.map((idea) => (
              <IdeaItem key={idea._id} idea={idea} />
            ))}
          </div>
        ) : (
          <h3>You have not had any ideas yet!</h3>
        )}
      </section>
    </>
  );
}

export default IdeasBoard;
