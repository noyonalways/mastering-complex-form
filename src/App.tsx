import "./App.css";
import { BasicForm } from "./components/forms";

function App() {
  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Simple form using just react-hook-form */}
      {/* <SimpleForm /> */}

      {/* Advanced form with Zod validation and reusable components */}
      <BasicForm />
    </div>
  );
}

export default App;
