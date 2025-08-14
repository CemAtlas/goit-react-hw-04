import styles from "./ImageCard.module.css";

export default function ImageCard({ src, alt, onClick }) {
  return (
    <div className={styles.card}>
      <img
        src={src}
        alt={alt || "Image"}
        className={styles.image}
        onClick={onClick} // Doğrudan <img>’e eklendi
      />
    </div>
  );
}

