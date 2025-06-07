import Comment from "./Comment";
import {commentsData} from "../utils/commentsData";

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border-l">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="p-2 m-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
