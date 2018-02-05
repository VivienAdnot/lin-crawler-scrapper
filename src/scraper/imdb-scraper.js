var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var axios = require('axios');

const extractTitle = (data) => {
    var $ = cheerio.load(data);
    let title = $("#title").text();
    console.log("title", title);
}

const callUrl = function(url) {
    axios.get(url)
        .then(response => {
            console.log(response.data);
            extractTitle(response.data);
        })
        .catch(error => console.error(error));
}

const callLinkedin = () => {
    axios.request({
        url: "https://www.linkedin.com/psettings/",
        method: "get",
        headers: {
            Cookie: "li_at=AQEDAQRMQOAFc-DIAAABYWIencgAAAFhhishyE4Agpn8yMqqj8zmwcLIYmKal3V0-61NLFiGgSjEcXX35KYEBJ6wB7kRdKlojLPwGpIbEamrg3W5icRb10UuUKBC27_KOqMG2lS3ID2NpdkH03XIo6ly"
        }
    }).then(response => {
        console.log(response.data);
    }).catch(error => console.error(error));
}

module.exports = {
    callUrl,
    callLinkedin
};