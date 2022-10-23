import { useSelector } from "react-redux";
import Display from "@components/display";

function DisplayContainer() {
  const expression = useSelector((state) => state?.expression);

  return <Display expression={expression} />;
}

export default DisplayContainer;
