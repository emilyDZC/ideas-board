function IdeaItem({ idea }) {
  return (
    <div className="goal">
      <div>{new Date(idea.createdAt).toLocaleString("en-GB")}</div>
      <h2>{idea.text}</h2>
    </div>
  );
}

export default IdeaItem;
