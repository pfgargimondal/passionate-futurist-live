import { useEffect, useState } from "react";
import SEO from "./SEO";
import http from "../http";

export const PageWrapper = ({ slug, type = "page", children }) => {

  const [meta, setMeta] = useState({
    title: "",
    description: "",
    keyword:""
  });

  useEffect(() => {
    const fetchMeta = async () => {
      try {
        const getresponse = await http.get(`/seo?slug=${slug}&type=${type}`);
        const data = getresponse.data;

        if (data.success) {
          setMeta({
            title: data.title,
            description: data.description,
            keyword: data.keyword
          });
        } else {
          setMeta({
            title: "Not Found",
            description: "Page not found or metadata missing.",
            keyword: "keyword missing"
          });
        }
      } catch (error) {
        console.error("SEO Fetch Error", error);
      }
    };

    fetchMeta();
  }, [slug, type]);


  return (
    <div>
      <SEO title={meta.title} description={meta.description} keyword={meta.keyword}/>
      {children}
    </div>
  )
}
