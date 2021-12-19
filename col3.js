const request = require("request");
const cheerio = require("cheerio");
const url = "https://collegedunia.com/college/24569-vrs-and-yrn-college-of-engineering-and-technology-prakasam"
console.log("Before");
request(url, cb);
function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractHTML(html);
    }
}

function extractHTML(html) {
    let $ = cheerio.load(html);
    let elemsArr = $(".jsx-3399697518.jsx-1406691586.college-content-section.body.content-wrap.px-4.py-1 .jsx-3399697518.jsx-1406691586.article-body");
    let text = $(elemsArr[1]).text();
    let htmldata = $(elemsArr[1]).html();

    console.log("text data", text);
    console.log("html data", htmldata);

    let teamsArr = $(".match-info.match-info-MATCH .team");
    let wTeamName;
    for (let i = 0; i < teamsArr.length; i++) {
        let hasclass = $(teamsArr[i]).hasClass("team-gray");
        if (hasclass == false) {
            // find 
            let teamNameElem = $(teamsArr[i]).find(".name");
            wTeamName = teamNameElem.text().trim();
        }
    }
 
    let tableArr = $(".jsx-2675951502.card-body.p-8.pd-4 .jsx-2675951502.table.table-striped.text-center");
 
    for (let i = 0; i < tableArr.length; i++) {
        
        let courseName = $(tableArr[i]).find(".header-title.label");
        let wCourseName = courseName.text();
        courseName = courseName.split("COURSE")[0];
        courseName = courseName.trim();
        
        let hwtName = "";
        let hwt = 0;
        if (wCourseName == courseName) {
            
            let fees = $(tableArr[i]).find(".table.fees");
            let eligibility = $(tableElem).find("tr");
            for (let j = 0; j < allfees.length; j++) {
                let allColsOfPlayer = $(allfees[j]).find("td");
                let courseName = $(allColsOfCourse[0]).text();
                let eligibility = $(allColsOfCourse[4]).text();
                if (eligibility >= hwt) {
                    hwt =eligibility;
                    hwtName = courseName;
                }
            }
            // console.log()
            console.log(`Course: ${wCourseName} Fees: ${hwtName} Eligibility: ${hwt}`)
        }
    }

}

