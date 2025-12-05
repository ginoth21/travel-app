import styles from "./button.module.css";
import {getMessage} from "@/utils/api"

type ButtonType = {
  label: string;
  buttonFxn: (result: any) => void;
};

export default function Button({ label, buttonFxn }: ButtonType) {
  const generateClick = async () => {
    var data = await getMessage("/ai/generate");
    buttonFxn(data.message)
  };

  return (
    <button className={styles.button} onClick={generateClick}> 
        {label} 
    </button>
  );
}