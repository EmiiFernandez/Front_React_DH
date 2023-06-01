import styles from './Card.module.css'
import '../../App.css'

function Card(props) {
  return (
    <>
      <div className={styles.card}>
        {props.title ? (
          <h1 className={styles.title}>{props.title}</h1>
        ) : undefined}
        {props.children}
        {props.footer ? (
          <h3 className={styles.footer}>{props.footer}</h3>
        ) : undefined}
      </div>
    </>
  )
}

export default Card
