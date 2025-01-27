import { JSX, useEffect, useState, KeyboardEvent, Fragment } from "react";
import { RatingProps } from "./Rating.props";
import cn from "classnames";
import styles from "./Rating.module.css";
import StarIcon from "./star.svg";

const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<HTMLSpanElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
        >
          <StarIcon isEditable={isEditable} />
        </span>
      );
    });

    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }

    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<HTMLSpanElement>) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }

    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <Fragment key={i}>{r}</Fragment>
      ))}
    </div>
  );
};

export default Rating;
