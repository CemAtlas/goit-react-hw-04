import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={styles.wrapper}>
      <button onClick={onClick} className={styles.btn}>
        Load More
      </button>
    </div>
  );
}
