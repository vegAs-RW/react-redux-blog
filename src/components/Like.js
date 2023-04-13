import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPostlike } from "../actions/post.action";
import { addUserlike } from "../actions/user.action";

const Like = ({ post }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer)

  const handleLike = () => {
    const postData = {
      title: post.title,
      author: post.author,
      content: post.content,
      id: post.id,
      likes: post.likes + 1
    };

    const userData = {
      pseudo: user.pseudo,
      age: user.age,
      id: user.id,
      likes: user.likes + 1
    }

    dispatch(addPostlike(postData));
    dispatch(addUserlike(userData));
  }


  return (
    <div>
      <img onClick={() => handleLike()} src="./icons/clap.png" className="clap" alt="clap" />
      <span>{post.likes}</span>
    </div>
  );
};

export default Like;
