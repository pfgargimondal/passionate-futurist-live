const axios = require("axios");
const fs = require("fs");
const { SitemapStream, streamToPromise } = require("sitemap");

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://www.passionatefuturist.com",
  }); 

  // Static Routes
  const staticRoutes = [
    "/",
    "/about-us",
    "/contact-us",
    "/careers",
    "/portfolio",
    "/business-register",
    "/blogs",
  ];

  staticRoutes.forEach((route) => {
    sitemap.write({ url: route, changefreq: "weekly", priority: 0.8 });
  });

  try {
    // Fetch dynamic services
    const services = await axios.get("https://asliadmin.passionatefuturist.com/public/api/get-all-slugs");
    const serviceResponse = services.data;

    serviceResponse.get_all_slugs.forEach((service) => {
        sitemap.write({
            url: `/${service.sub_category_slug}`,
            changefreq: "weekly",
            priority: 0.9,
        });
    });

    // Fetch blogs
    const blogs = await axios.get("https://asliadmin.passionatefuturist.com/public/api/get-all-slugs-blogs");
    const blogResponse = blogs.data;

    blogResponse.get_all_slugs_blogs.forEach((blog) => {
        sitemap.write({
            url: `/blog/${blog.slug}`,
            changefreq: "weekly",
            priority: 0.9,
        });
    });
} catch (err) {
    console.error("Dynamic route fetch failed", err);
}

  sitemap.end();

  const data = await streamToPromise(sitemap);
  fs.writeFileSync("./public/sitemap.xml", data.toString());
  console.log("✔ Sitemap created successfully!");
}

generateSitemap();
