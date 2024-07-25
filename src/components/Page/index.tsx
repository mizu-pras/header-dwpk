import styles from "./styles.module.scss";

interface IProps {
    page?: string;
}

const Page = ({ page }: IProps) => {
    return (
        <div className={styles.page}>
            <p>{page}</p>
        </div>
    );
};

export default Page;
