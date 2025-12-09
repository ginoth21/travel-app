import styles from "./button.module.css";

type ButtonType = {
  label: string;
  // buttonFxn: (result: any) => void;
  clickFxn: () => void | Promise<void>;
};

export default function Button({ label, clickFxn }: ButtonType) {

  return (
    <button className={styles.button} onClick={clickFxn}> 
        {label} 
    </button>
  );
}