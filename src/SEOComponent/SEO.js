import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keyword }) => {
  return (
    <Helmet>
      <title>{title || "Default Title"}</title>
      <meta name="description" content={description || "Default description"} />
      <meta name="keywords" content={keyword || "Default keyword"}></meta>
      <meta property="og:title" content={title || "Default Title"} />
      <meta property="og:description" content={description || "Default description"} />
    </Helmet>
  );
};

export default SEO;