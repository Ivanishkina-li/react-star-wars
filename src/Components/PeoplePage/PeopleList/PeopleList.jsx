import "./PeopleList.css";

import { Link } from "react-router-dom";

const PeopleList = ({ people }) => {
  return (
    <ul className="list__container">
      {people.map(({ id, name, img }) => (
        <li className="list__item" key={id}>
          <Link to={`/people/${id}`}>
            <img className="person__photo" src={img} alt={name} />
            <p>{name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
