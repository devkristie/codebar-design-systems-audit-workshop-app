import "./App.css";
import { Heading } from "./gds/styles/Heading/Heading";
import { TextInput } from "./gds/styles/Input/TextInput";

const App = () => {
  return (
    <div className="govuk-width-container">
      <Heading>Hello World</Heading>
      <TextInput>Enter Your Postcode</TextInput>
    </div>
  );
};

export default App;
