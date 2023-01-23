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

  const colours = ["76949F", "86BBBD", "6A6B83", "5F506B", "533747"];

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
        <div className="button-container">
          <button className="btn btn-block" onClick={() => setAddIdea(!addIdea)}>
            {addIdea ? "Close" : "Add new idea"}
          </button>
        </div>
        {addIdea ? <IdeaForm /> : ""}
      </section>
      <section className="content">
        {ideas.length > 0 ? (
          <div className="goals">
            {ideas.map((idea, i) => (
              <IdeaItem key={idea._id} idea={idea} colour={colours[i]} />
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
