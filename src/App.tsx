import CalculateEmi from "./pages/component_about/CalculateEMI";
import Founders from "./pages/component_about/Founders";
import People from "./pages/component_about/People";
import LoanSteps from "./pages/LoanSteps";
import "./styles.css";
import LoanTable from "./pages/LoanTable";
import LoanApply from "./pages/LoanApply";

export default function App() {
  return (
    <div className="App">
      <LoanApply />
      <LoanSteps />
      <LoanTable />
      <CalculateEmi />
      <People />
      <Founders />
    </div>
  );
}
