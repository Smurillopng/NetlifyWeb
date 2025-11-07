
import "./Introduction.css";
import { useTranslation } from "react-i18next";

function Introduction() {
  const { t } = useTranslation();
  return (
    <div className="introduction">
      <div className="introduction-content">
        <h1>{t('introduction.title')}</h1>
        <p>{t('introduction.subtitle')}</p>
      </div>
    </div>
  );
}

export default Introduction;