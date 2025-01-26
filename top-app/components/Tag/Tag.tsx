import { TagProps } from "./Tag.props";
import cn from "classnames";
import styles from "./Tag.module.css";

const Tag = ({
  size = "small",
  children,
  href,
  color = "ghost",
  className,
  ...props
}: TagProps) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.grey]: color === "grey",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
