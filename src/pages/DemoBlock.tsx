import styles from './demoBlock.less';

export default ({title,children}: any) => {
    return <div className={styles['demo-block']}>
        <p  className={styles.title}>{title}</p>
        <div  className={styles.main}>{children}</div>
    </div>
}