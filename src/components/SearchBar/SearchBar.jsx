import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={term}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>Search</button>
      </form>
    </header>
  );
}
