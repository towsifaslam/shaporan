/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { workSpace } from "../../features/workspaces/workSlic";
import {
  useGetWorkspacesListandTasksQuery,
  useGetWorkspacesQuery,
} from "../../features/workspaces/workspaceApi";
export default function WorkTitle() {
  const [id, setId] = useState();
  const { work } = useSelector((state) => state.work);

  console.log(id);

  const { data } = useGetWorkspacesListandTasksQuery(id);
  console.log(data);
  const handleClick = (Id) => {
    setId(Id);
  };

  return (
    <div className="flex justify-between ">
      {work.map((wor, i) => (
        <div className="" key={i}>
          <button onClick={() => handleClick(wor._id)}> {i + 1}</button>
          {i + 1}
        </div>
      ))}
    </div>
  );
}
