import styles from './button.module.css'

const Button = ({ children, variant, fullWidth, active, ...props }) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]}${
        fullWidth ? ' ' + styles.fullWidth : ''
      }${active ? ' ' + styles.active : ''}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
