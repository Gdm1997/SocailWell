import "./App.css";
import {
  BlogDetail,
  BlogSideBar,
  Contact,
  Footer,
  Header,
  Hero,
  Navbar,
} from "./components";

function App() {
  return (
    <>
      <header>
        <Header />
        <Navbar />
      </header>
      <Hero title={"SocialWell Technologies"} />
      <main className="container-fluid main-padding">
        <section className="row">
          <BlogDetail />
          <BlogSideBar />
        </section>
        <section className="row">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
