import styles from './Avatar.module.css';

interface AvatarPropos {
  hasBorder?: boolean;
  src: string;
  alt?: string;
}

export function Avatar({ hasBorder = true, src, alt }: AvatarPropos) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src}
      alt={alt}
    />
  );
}