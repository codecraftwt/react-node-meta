// const express = require("express");
// const path = require("path");
// const fs = require("fs");

// const PORT = process.env.PORT || 8080;

// const app = express();

// app.get("/", (req, res) => {
//   const filePath = path.resolve(__dirname, "./build", "index.html");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }

//     data = data
//       .replace(/__TITLE__/g, "Home Page")
//       .replace(/__IMAGE__/g, "https://fastly.picsum.photos/id/61/200/300.jpg?hmac=4gnmCaXyXsOzE8pxb43yUtdfZnVbnUSGdPaJdh-aCUo")
//       .replace(/__DESCRIPTION__/g, "Home page description.");

//     res.send(data)
//   });
// });

// app.get("/about", (req, res) => {
//   const filePath = path.resolve(__dirname, "./build", "index.html");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }

//     data = data
//       .replace(/__TITLE__/g, "About Page")
//       .replace(/__DESCRIPTION__/g, "About page description.");

//     res.send(data)
//   });
// });

// app.use(express.static(path.resolve(__dirname, "./build")))

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`)
// })

const express = require("express");
const path = require("path");
const fs = require("fs");
const axios = require("axios"); // Import Axios here

const PORT = process.env.PORT || 5000;

const app = express();
// Function to fetch data from the API based on page ID
async function fetchDataFromAPI(pageId) {
  try {
    const response = await axios.get(
      `https://staging.theleansuite.com/backend/wp-json/wp/v2/pages/${pageId}`
    );
    return response?.data?.yoast_head_json; // Assuming response.data contains the necessary meta tag data
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return null;
  }
}

// Function to replace meta tags in HTML data
async function replaceMetaTags(htmlData, apiData) {
  if (!apiData) return htmlData;

  return htmlData
    .replace(/__TITLE__/g, apiData?.title || "")
    .replace(/__DESCRIPTION__/g, apiData?.description || "")
    .replace(/__CANONICAL__/g, apiData?.canonical || "")
    .replace(/__KEYWORDS__/g, apiData?.keywords || "")
    .replace(/__AUTHOR__/g, apiData?.author || "")
    .replace(/__IMAGE__/g, apiData?.og_image?.[0]?.url || "")
    .replace(/__URL__/g, apiData?.og_url || "")
    .replace(/__CARD__/g, apiData?.twitter_card || "")
    .replace(/__OGSITE__/g, apiData?.og_site_name || "")
    .replace(/__SITE__/g, apiData?.twitter_site || "");
}

// Handle requests
app.get("/", async (req, res) => {
  const pageId = "1543"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    // console.log("API Response:", apiData);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Handle requests
app.get("/about-us", async (req, res) => {
  const pageId = "9616"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/what-is-leansuite", async (req, res) => {
  const pageId = "46807"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/safety-improvement", async (req, res) => {
  const pageId = "48884"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/quality-improvement", async (req, res) => {
  const pageId = "48905"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/operational-excellence", async (req, res) => {
  const pageId = "48910"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/cost-reduction", async (req, res) => {
  const pageId = "48915"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/workforce-enablement", async (req, res) => {
  const pageId = "48919"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/suggestion-platform", async (req, res) => {
  const pageId = "9319"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/suggestion-operations", async (req, res) => {
  const pageId = "37466"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/tag-management-for-safety", async (req, res) => {
  const pageId = "37148"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/tag-management-for-quality", async (req, res) => {
  const pageId = "37984"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/tag-management-for-operations-and-maintenance", async (req, res) => {
  const pageId = "38497"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/continuous-improvement-for-operations", async (req, res) => {
  const pageId = "45927"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/competency", async (req, res) => {
  const pageId = "45927"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/lms", async (req, res) => {
  const pageId = "27431"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/qa-matrix", async (req, res) => {
  const pageId = "26367"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/cilr", async (req, res) => {
  const pageId = "33725"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/gemba-walker", async (req, res) => {
  const pageId = "31458"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/rca", async (req, res) => {
  const pageId = "48380"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/partners", async (req, res) => {
  const pageId = "9817"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/press", async (req, res) => {
  const pageId = "11783"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/contact-us", async (req, res) => {
  const pageId = "12370"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/resources", async (req, res) => {
  const pageId = "49673"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/pricing", async (req, res) => {
  const pageId = "48433"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    console.log(apiData);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/schedule-demo", async (req, res) => {
  const pageId = "35513"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/careers", async (req, res) => {
  const pageId = "48068"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/points-and-leaderboard", async (req, res) => {
  const pageId = "10092"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/roles-and-permissions", async (req, res) => {
  const pageId = "19052"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/template-builder", async (req, res) => {
  const pageId = "44658"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/legal/privacy", async (req, res) => {
  const pageId = "1962"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/legal/terms", async (req, res) => {
  const pageId = "48982"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/customizable-forms", async (req, res) => {
  const pageId = "18316"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/theleansuite-marketplace", async (req, res) => {
  const pageId = "9963"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/sign-up", async (req, res) => {
  const pageId = "49159"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/job-cover-matrix", async (req, res) => {
  const pageId = "35716"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/attachment-tool", async (req, res) => {
  const pageId = "16571"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/campaign", async (req, res) => {
  const pageId = "10274"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/reports", async (req, res) => {
  const pageId = "17238"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/blog", async (req, res) => {
  const pageId = "11516"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/category", async (req, res) => {
  const pageId = "49677"; // Manually set the page ID
  const filePath = path.resolve(__dirname, "./build", "index.html");

  try {
    const htmlData = await fs.promises.readFile(filePath, "utf8");
    const apiData = await fetchDataFromAPI(pageId);
    const modifiedHtml = await replaceMetaTags(htmlData, apiData);
    res.send(modifiedHtml);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Internal Server Error");
  }
});

// app.get("/", (req, res) => {
//   const filePath = path.resolve(__dirname, "./build", "index.html");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }

//     data = data
//       .replace(/__TITLE__/g, "Lean Manufacturing Software - LeanSuite")
//       .replace(/__DESCRIPTION__/g, "Digital Solution to make execution of your lean manufacturing processes effortless by providing tools customized to your business needs.")
//       .replace(/__CANONICAL__/g, "https://staging.theleansuite.com")
//       .replace(/__KEYWORDS__/g, "Lean, LeanSuite Software, Solution")
//       .replace(/__AUTHOR__/g, "theLeanSuite")
//       .replace(/__IMAGE__/g, "https://staging.theleansuite.com/backend/wp-content/uploads/2022/10/Leansuite-Team.jpg")
//       .replace(/__URL__/g, "https://staging.theleansuite.com")
//       .replace(/__CARD__/g, "summary_large_image")
//       .replace(/__SITE__/g, "@theleansuite");

//     res.send(data)
//   });
// });

// app.get("/about-us", (req, res) => {
//   const filePath = path.resolve(__dirname, "./build", "index.html");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }

//     data = data
//     .replace(/__TITLE__/g, "About Us - LeanSuite")
//     .replace(/__DESCRIPTION__/g, "At LeanSuite, we believe in empowering frontline workers with solutions that foster a culture of lean thinking and continuous improvement.")
//     .replace(/__CANONICAL__/g, "https://staging.theleansuite.com/about-us")
//     .replace(/__KEYWORDS__/g, "Lean, LeanSuite Software, Solution")
//     .replace(/__AUTHOR__/g, "theLeanSuite")
//     .replace(/__IMAGE__/g, "https://staging.theleansuite.com/backend/wp-content/uploads/2022/10/Leansuite-Team.jpg")
//     .replace(/__URL__/g, "https://staging.theleansuite.com/about-us")
//     .replace(/__CARD__/g, "summary_large_image")
//     .replace(/__SITE__/g, "@theleansuite");

//     res.send(data)
//   });
// });

// app.get("/tag-management-for-safety", (req, res) => {
//   const filePath = path.resolve(__dirname, "./build", "index.html");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }

//     data = data
//       .replace(/__TITLE__/g, "Tag Management for Safety - LeanSuite")
//       .replace(
//         /__DESCRIPTION__/g,
//         "At LeanSuite, we believe in empowering frontline workers with solutions that foster a culture of lean thinking and continuous improvement."
//       )
//       .replace(
//         /__CANONICAL__/g,
//         "https://staging.theleansuite.com/tag-management-for-safety"
//       )
//       .replace(/__KEYWORDS__/g, "Lean, LeanSuite Software, Solution")
//       .replace(/__AUTHOR__/g, "theLeanSuite")
//       .replace(
//         /__IMAGE__/g,
//         "https://staging.theleansuite.com/backend/wp-content/uploads/2022/10/Leansuite-Team.jpg"
//       )
//       .replace(
//         /__URL__/g,
//         "https://staging.theleansuite.com/tag-management-for-safety"
//       )
//       .replace(/__CARD__/g, "summary_large_image")
//       .replace(/__SITE__/g, "@theleansuite");

//     res.send(data);
//   });
// });

// app.get("/tag-management-for-quality", (req, res) => {
//   const filePath = path.resolve(__dirname, "./build", "index.html");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }

//     data = data
//       .replace(/__TITLE__/g, "Tag Management for Quality - LeanSuite")
//       .replace(
//         /__DESCRIPTION__/g,
//         "At LeanSuite, we believe in empowering frontline workers with solutions that foster a culture of lean thinking and continuous improvement."
//       )
//       .replace(
//         /__CANONICAL__/g,
//         "https://staging.theleansuite.com/tag-management-for-quality"
//       )
//       .replace(/__KEYWORDS__/g, "Lean, LeanSuite Software, Solution")
//       .replace(/__AUTHOR__/g, "theLeanSuite")
//       .replace(
//         /__IMAGE__/g,
//         "https://staging.theleansuite.com/backend/wp-content/uploads/2022/10/Leansuite-Team.jpg"
//       )
//       .replace(
//         /__URL__/g,
//         "https://staging.theleansuite.com/tag-management-for-quality"
//       )
//       .replace(/__CARD__/g, "summary_large_image")
//       .replace(/__SITE__/g, "@theleansuite");

//     res.send(data);
//   });
// });

// app.get("/tag-management-for-operations-and-maintenance", (req, res) => {
//   const filePath = path.resolve(__dirname, "./build", "index.html");
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       return console.log(err);
//     }

//     data = data
//       .replace(
//         /__TITLE__/g,
//         "Tag Management for Operations and Maintenance - LeanSuite"
//       )
//       .replace(
//         /__DESCRIPTION__/g,
//         "At LeanSuite, we believe in empowering frontline workers with solutions that foster a culture of lean thinking and continuous improvement."
//       )
//       .replace(
//         /__CANONICAL__/g,
//         "https://staging.theleansuite.com/tag-management-for-operations-and-maintenance"
//       )
//       .replace(/__KEYWORDS__/g, "Lean, LeanSuite Software, Solution")
//       .replace(/__AUTHOR__/g, "theLeanSuite")
//       .replace(
//         /__IMAGE__/g,
//         "https://staging.theleansuite.com/backend/wp-content/uploads/2022/10/Leansuite-Team.jpg"
//       )
//       .replace(
//         /__URL__/g,
//         "https://staging.theleansuite.com/tag-management-for-operations-and-maintenance"
//       )
//       .replace(/__CARD__/g, "summary_large_image")
//       .replace(/__SITE__/g, "@theleansuite");

//     res.send(data);
//   });
// });

app.use(express.static(path.resolve(__dirname, "./build")));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
