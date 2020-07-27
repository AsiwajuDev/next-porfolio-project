import Link from "next/link";
import Layout from "../components/layout/Layout";

const About = () => {
  return (
    <Layout title="About">
      <div>
        <p>
          <Link href="/">Go to home</Link>
        </p>
        <img src="/static/images/me.jpeg" alt="Image" height="300px" />
      </div>
    </Layout>
  );
};

export default About;
