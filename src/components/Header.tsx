import styles from "./Header.module.css";
import todoLogo from "../assets/todo-logo.svg";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <img src={todoLogo}></img>
      </header>
    </div>
  );
};

export default Header;
