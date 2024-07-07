import React from "react";

import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({title,tags,handleDelete,index,description}) => {

  return (
    <article className="task_card">
      <p className="task_text">Title: {title}</p>
      <p className="todo-item-desc"><span class="description_text_title">Description:</span><br/>{description}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map(tag=><Tag tagName={tag} selected/>)}
        </div>
        <div className="task_delete" onClick={()=>handleDelete(index)}>
          <img src={deleteIcon} className="delete_icon" alt="" />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
