import styles from "./button.module.css";

export default function Button({ label }: { label: string; }) {
  const generateClick = async () => {
    var data = await getMessage();
    console.log(data.message);
  };

  async function getMessage() {
    const res = await fetch("http://localhost:8000/ai/generate");
    return res.json();
  }

  return (
    <button className={styles.button} onClick={generateClick}> 
        {label} 
    </button>
  );
}