import CVStyles from "../styles/CV.module.css";

const CVTitle = ({ title }) => {
    return (
        <div className={CVStyles.item__title}>
            {title}
        </div>
    );
}

export default CVTitle;