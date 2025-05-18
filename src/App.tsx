import "./App.css";
import { Switch, Route } from "wouter";
import HomePage from "@/pages/HomePage";
import ProjectPage from "@/pages/ProjectPage";
import ResearchPage from "@/pages/ResearchPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/projects" component={ProjectPage} />
      <Route path="/research" component={ResearchPage} />
    </Switch>
  );
};

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
