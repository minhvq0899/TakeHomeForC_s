const request = require("request-promise")
const cheerio = require("cheerio");
const axios = require("axios")

exports.coinmarketcap = (req, res, next) => {
    async function getPrice() {
        try {
            const url = "https://coinmarketcap.com/"
    
            const { data } = await axios({
                method: "GET", 
                url: url,
            })
    
            // console.log(data)
            const $ = cheerio.load(data)
            const elementSelector = "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div > div.h7vnx2-1.bFzXgL > table > tbody > tr"; 
            const attributes = [
                'rank', 
                'name', 
                'price',
                '24h', 
                '7d', 
                'marketCap', 
                'volumn', 
                'circulatingSupply'
            ]
            const coinArr = []
            
            $(elementSelector).each((parentID, parentElem) => {
                let keyID = 0; 
                const coinObj = {}; 
    
                if (parentID < 2) {
                    $(parentElem).children().each((childID, childElem) => {
                        let tdValue = $(childElem).text(); 
                        if (keyID === 1 || keyID === 6) {
                            tdValue = $('p:first-child', $(childElem).html()).text(); 
                        }
    
                        if (tdValue) {
                            coinObj[attributes[keyID]] = tdValue; 
                            keyID++; 
                        }
                    })
                    coinArr.push(coinObj); 
                }
            })
            //console.log(coinArr); 
            req.coinmarketcap = coinArr; 
            return next(); 
        } catch (err) {
            console.log(err); 
        }
    }
    
    getPrice(); 
}


exports.cointracker = (req, res, next) => {
    async function getPrice() {
        try {
            const url = "https://www.cointracker.io/price"

            const { data } = await axios({
                method: "GET", 
                url: url,
            })

            //console.log("data: ", data);
            const $ = cheerio.load(data)
            const elementSelector = "#main > div:nth-child(2) > div.d-none.d-lg-block.table-responsive > table > tbody > tr"; 
            const attributes = [
                'rank', 
                'name', 
                'price',
                '24h_change',  
                'marketCap', 
                '24h_volume',
                'circulatingSupply', 
                'max'
            ]
            const coinArr = []
            
            $(elementSelector).each((parentID, parentElem) => {
                let keyID = 0; 
                const coinObj = {}; 

                if (parentID < 2) {
                    $(parentElem).children().each((childID, childElem) => {
                        let tdValue = $(childElem).text().replace(/(\r\n|\n|\r)/gm, "");

                        if (tdValue) {
                            coinObj[attributes[keyID]] = tdValue; 
                            keyID++; 
                        }
                    })
                    coinArr.push(coinObj); 
                }
            })
            // console.log(coinArr); 
            req.cointracker = coinArr; 
            return next(); 
        } catch (err) {
            console.log(err); 
        }
    }

    getPrice(); 
}





