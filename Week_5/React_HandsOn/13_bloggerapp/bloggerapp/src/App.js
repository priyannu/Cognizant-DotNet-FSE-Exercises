import "./App.css";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const sectionStyle = {
    flex: 1,
    padding: "20px",
  };

  const borderedSectionStyle = {
    ...sectionStyle,
    borderLeft: "4px solid green",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "80%",
        margin: "60px auto",
      }}
    >
      <div style={sectionStyle}>
        <CourseDetails />
      </div>

      <div style={borderedSectionStyle}>
        <BookDetails />
      </div>

      <div style={borderedSectionStyle}>
        <BlogDetails />
      </div>
    </div>
  );
}

export default App;