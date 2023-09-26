import React from "react";
import { ResourseListItem } from "../../data/ResourceList";
import { Link } from "react-router-dom";
const ResourcesList = () => {
  return (
    <div className="absolute bottom-0 translate-y-[100%]  bg-white z-10 shadow-md rounded-md py-4 px-4 hidden group-hover:block transition-all duration-200 w-fit min-w-[200px]">
      <ul>
        {ResourseListItem.map((item, index) => (
          <li className="mt-1 opacity-90 hover:text-blue-600  cursor-pointer hover:bg-slate-200 rounded-md">
            <Link to={item.path} key={index}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResourcesList;
