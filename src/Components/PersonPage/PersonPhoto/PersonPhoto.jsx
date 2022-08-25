import { useDispatch } from "react-redux";
import {
  setPersonToFavourite,
  removePersonToFavourite,
} from "../../../store/actions";

import iconFavorite from "./img/favorite.svg";
import iconFavoriteFill from "./img/favorite-fill.svg";
import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavourite,
  setPersonFavourite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavourite) {
      dispatch(removePersonToFavourite(personId));
      setPersonFavourite(false);
    } else {
      dispatch(
        setPersonToFavourite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavourite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personPhoto} alt={personName} />
        <img
          src={personFavourite ? iconFavoriteFill : iconFavorite}
          onClick={dispatchFavoritePeople}
          className={styles.favorite}
          alt="Add to favorite"
        />
      </div>
    </>
  );
};

export default PersonPhoto;
