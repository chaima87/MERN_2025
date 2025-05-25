import { useParams } from "react-router-dom";

const ColoredWord = () => {
  const { word, textColor, bgColor } = useParams();

  const style = {
    color: textColor,
    backgroundColor: bgColor,
    padding: "20px",
    fontWeight: "bold",
    fontSize: "2rem",
    borderRadius: "8px",
    textAlign: "center",
    width: "fit-content",
    margin: "20px auto"
  };

  return <div style={style}>{word}</div>;
};

export default ColoredWord;
