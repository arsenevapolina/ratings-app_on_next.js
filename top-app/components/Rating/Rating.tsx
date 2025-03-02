import React, { useEffect, useState, KeyboardEvent, JSX, useRef } from "react";
import { RatingProps } from "./Rating.props";
import cn from "classnames";
import styles from "./Rating.module.css";
import StarIcon from "./star.svg";

const Rating = ({
  isEditable = false,
  error,
  rating,
  tabIndex,
  setRating,
  ref,
  ...props
}: RatingProps & { ref?: React.Ref<HTMLDivElement> }) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>(null);

  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);

  const computerFocus = (r: number, i: number): number => {
    if (!isEditable) {
      return -1;
    }
    if (!rating && i == 0) {
      return tabIndex ?? 0;
    }
    if (r == i + 1) {
      return tabIndex ?? 0;
    }
    return -1;
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClick(i + 1)}
          tabIndex={computerFocus(rating, i)}
          onKeyDown={handleKey}
          ref={(r) => ratingArrayRef.current?.push(r)}
        >
          <StarIcon />
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

  const handleKey = (e: KeyboardEvent) => {
    if (!isEditable || !setRating) {
      return;
    }
    if (e.code == "ArrowRight" || e.code == "ArrowUp") {
      if (!rating) {
        setRating(1);
      } else {
        e.preventDefault();
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
      e.preventDefault();
      setRating(rating > 1 ? rating - 1 : 1);
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  return (
    <div
      ref={ref}
      {...props}
      className={cn(styles.ratingWrapper, {
        [styles.error]: error,
      })}
    >
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
      {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>
  );
};

export default Rating;
