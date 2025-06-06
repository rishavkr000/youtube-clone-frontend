const Comment = ({data}) => {
  const {name, text} = data;
  return (
    <div className="mt-2 flex bg-gray-200 w-full px-3 py-1 rounded-lg">
        <img className="w-12 h-12 mr-2 rounded-full" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="user" />
        <div className="">
          <p className="text-lg font-bold">{name}</p>
          <p>{text}</p>
        </div>
    </div>
  );
};

// export const CommentsList = ({comments}) => {
//   return comments && comments.map((comment, index) => (
//     <div key={index}>
//       <Comment data={comment} />
//       <div className="pl-5 border border-l-black ml-5">
//         <CommentsList comments={comment.replies}/>
//       </div>
//     </div>

//   ))
// }

export default Comment;
