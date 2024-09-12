import NavBar from "../components/NavBar";
import Overview from "../components/Overview";
import Markdown from "../utils/MdRender";
import useFetchHeadings from "../utils/FetchHeadings";

function AboutPage() {
  const headings = useFetchHeadings();

  return (
    <>
      <NavBar />
    <div className="container">
      <div className="content">
        <Overview headings={headings} />
        <main>
          <Markdown filename="markdown/AboutPage.md" />
        </main>
      </div>
    </div>
    <footer>
        <p>2024 - LTS, By Team Codeine</p>
      </footer>
    </>
  );
}

export default AboutPage;
