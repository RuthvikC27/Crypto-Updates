// pk_live_QWvwDl3WJAq7S8fDjsOUMfjn09DSw8R



export default async function handler(req, res) {
    
    const response = await fetch("https://x.wazirx.com/wazirx-falcon/api/v2.0/crypto_rates");
    let myJson = await response.json();
    myJson = {"crypto": myJson};

    const cryptos = [];
    
    cryptos.push(
        {
            "name": "Dogecoin",
            "code": "doge",
            "price": myJson.crypto.doge.inr
        },
        {
            "name": "Bitcoin",
            "code": "btc",
            "price" : myJson.crypto.btc.inr
        },
        {
            "name": "Ethereum",
            "code": "eth",
            "price" : myJson.crypto.eth.inr
        },
        {
            "name": "WaxirX Token",
            "code": "wrx",
            "price" : myJson.crypto.wrx.inr
        },
        {
            "name": "WINk",
            "code": "win",
            "price" : myJson.crypto.win.inr
        },
        {
            "name": "Matic Network",
            "code": "matic",
            "price" : myJson.crypto.matic.inr
        },
        {
            "name": "BitTorrent",
            "code": "btt",
            "price" : myJson.crypto.btt.inr
        },
        {
            "name": "Ethereum Classic",
            "code": "etc",
            "price" : myJson.crypto.etc.inr
        },
        {
            "name": "Ripple",
            "code": "xrp",
            "price" : myJson.crypto.xrp.inr
        },
        {
            "name": "Cardano",
            "code": "ada",
            "price" : myJson.crypto.ada.inr
        },
        {
            "name": "Polkadot",
            "code": "dot",
            "price" : myJson.crypto.dot.inr
        },
        {
            "name": "Enjin",
            "code": "enj",
            "price" : myJson.crypto.enj.inr
        },
        {
            "name": "Tron",
            "code": "trx",
            "price" : myJson.crypto.trx.inr
        },
        {
            "name": "Binance Coin",
            "code": "bnb",
            "price" : myJson.crypto.bnb.inr
        },
        {
            "name": "Litecoin",
            "code": "ltc",
            "price" : myJson.crypto.ltc.inr
        },
        {
            "name": "Steller",
            "code": "xlm",
            "price" : myJson.crypto.xlm.inr
        },
        {
            "name": "Verge",
            "code": "xvg",
            "price" : myJson.crypto.xvg.inr
        },
        {
            "name": "Chainlink",
            "code": "link",
            "price" : myJson.crypto.link.inr
        },
        {
            "name": "Swipe",
            "code": "sxp",
            "price" : myJson.crypto.sxp.inr
        },
        {
            "name": "EOS",
            "code": "eos",
            "price" : myJson.crypto.eos.inr
        },
        {
            "name": "Basic Attention Token",
            "code": "bat",
            "price" : myJson.crypto.bat.inr
        },
        {
            "name": "Uniswap",
            "code": "uni",
            "price" : myJson.crypto.uni.inr
        },
        {
            "name": "Yearn Finance",
            "code": "yfi",
            "price" : myJson.crypto.yfi.inr
        },
        {
            "name": "Cosmos",
            "code": "atom",
            "price" : myJson.crypto.atom.inr
        },
        {
            "name": "Dash",
            "code": "dash",
            "price" : myJson.crypto.dash.inr
        },
        {
            "name": "Shiba coin",
            "code": "shib",
            "price" : myJson.crypto.shib.inr
        },

    );


    res.status(200).json(cryptos);
  }
  