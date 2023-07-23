import styles from '@/components/Loading/loading.module.css'

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <span className={styles.loader}></span>
    </div>
  )
}
