import { useParams } from "react-router-dom";

const DisplayValue = () => {
  const { value } = useParams();

  if (!isNaN(+value)) {
    return <h1>The number is: {value}</h1>;
  } else {
    return <h1>The word is: {value}</h1>; 
  }
};

export default DisplayValue;
