import ProjectDescr from "./components/ProjectDescr/ProjectDescr";
import Card from "./components/Card/Card";
import topics from "./topics.json";
import "./App.css";

export default function App() {
  return (
    <div className="background">
      <ProjectDescr />
      <div className="cards-section">
        {topics.map((topic, index) => {
          return (
            <Card
              key={index}
              topicTitle={topic.topicTitle}
              topicDescription={topic.topicDescription}
              themeImageUrl={topic.themeImageUrl}
              themeStyle={topic.themeStyle}
            />
          );
        })}
      </div>
    </div>
  );
}
