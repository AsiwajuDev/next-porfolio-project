import Link from "next/link";
import Layout from "../components/layout/Layout";

const Index = () => {
  return (
    <Layout title="Home">
      <div>
        <Link href="/about">Go to About</Link>
        <div>Welcome to page</div>
      </div>
    </Layout>
  );
};

export default Index;
