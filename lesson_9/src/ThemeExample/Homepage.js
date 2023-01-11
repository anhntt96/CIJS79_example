import Content from "./components/Content";
import Header from "./components/Header";

// Context
// Component A => Component B => Component C
// Context Provider

const Homepage = () => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
};

export default Homepage;
