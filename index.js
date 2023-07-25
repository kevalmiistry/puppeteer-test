const puppeteer = require("puppeteer");
const fs = require("fs");
const template = require("./data");

(async () => {
    // Create a browser instance
    const browser = await puppeteer.launch();

    // Create a new page
    const page = await browser.newPage();

    fs.writeFileSync("sample.html", template, (err) => {
        if (err) throw err;
        console.log("File is created successfully.");
    });

    //Get HTML content from HTML file
    const html = fs.readFileSync("sample.html", "utf-8");
    await page.setContent(html, { waitUntil: "networkidle0" });

    //To reflect CSS used for screens instead of print
    await page.emulateMediaType("screen");

    // Downlaod the PDF
    const pdf = await page.pdf({
        path: "result.pdf",
        margin: { top: "50px", right: "50px", bottom: "100px", left: "50px" },
        printBackground: true,
        format: "A4"
    });

    // Close the browser instance
    await browser.close();
})();
