const url = "https://collegedunia.com/btech/prakasam-colleges"
const request = require("request");
const cheerio = require("cheerio");
const AllMatchngObj = require("./Allcourses");
// home page 
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        // console.log(html);
        extractLink(html);
    }
}
function extractLink(html) {
    let $ = cheerio.load(html);
    let anchorElem = $("a[data-hover='View All Courses']");
    let link = anchorElem.attr("href");
    // console.log(link);
    let fullLink = "https://collegedunia.com" + link;
    // console.log(fullLink);
    AllMatchngObj.gAlcourses(fullLink);
}