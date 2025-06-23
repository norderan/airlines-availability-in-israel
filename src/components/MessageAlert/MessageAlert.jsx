import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { TriangleAlert } from "lucide-react";
import style from "./MessageAlert.module.scss";
function MessageAlert() {
  const { language } = useLanguage();

  const text = {
    header: language === "english" ? "For your attention!" : "לתשומת לבך!",
    discription:
      language === "english"
        ? "The following table summarizes information regarding foreign airlines, drawing from their own issued statements and media reports. However, please be aware that due to the war and the subsequent closure of Israeli airspace, regular civilian flights remain suspended. The only exceptions are special rescue flights organized to bring back Israelis who are currently abroad."
        : "הטבלה שלהלן מסכמת מידע אודות חברות תעופה זרות, אשר נאסף בהתאם להודעותיהן הרשמיות ולפרסומים באמצעי התקשורת. יחד עם זאת, שימו לב כי בשל המלחמה וסגירת המרחב האווירי הישראלי, טיסות אזרחיות סדירות מושעות. החריגים היחידים הם טיסות חילוץ מיוחדות המאורגנות להשבת ישראלים השוהים כרגע מחוץ למדינה.",
  };
  return (
    <div className={style.main}>
      <div className={style.header}>
        <TriangleAlert size={48} class={style.icon} />
        <h1>{text.header}</h1>
      </div>
      <p>{text.discription}</p>
    </div>
  );
}

export default MessageAlert;
