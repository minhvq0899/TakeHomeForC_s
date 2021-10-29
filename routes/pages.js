const express = require('express');
const fetchPrice = require('../controllers/get_price'); 
const router = express.Router();

// res.render() function is used to render a view
router.get('/', (req,res) => {
    res.render('index');             
});

router.get('/btc',fetchPrice.coinmarketcap, fetchPrice.cointracker, (req,res) => {
    let time_date = new Date();
    time_date = time_date.toString().slice(0,24); 
    price_coinmarketcap_float = parseFloat(req.coinmarketcap[0].price.slice(1,).replace(",","")); 
    price_cointracker_float = parseFloat(req.cointracker[0].price.slice(1,).replace(",","")); 
    buy = ""; 
    sell = ""; 
    if (price_coinmarketcap_float > price_cointracker_float) {
        buy = "Cointracker"; 
        sell = "Coinmarketcap"; 
    } else {
        buy = "Coinmarketcap"; 
        sell = "Cointracker"; 
    }

    res.render('btc', {
        btc_coinmarketcap: req.coinmarketcap[0],
        btc_cointracker: req.cointracker[0],  
        time_date: time_date, 
        buy: buy, 
        sell: sell
    });             
});

router.get('/ethereum',fetchPrice.coinmarketcap, fetchPrice.cointracker, (req,res) => {
    let time_date = new Date();
    time_date = time_date.toString().slice(0,24); 
    price_coinmarketcap_float = parseFloat(req.coinmarketcap[1].price.slice(1,).replace(",","")); 
    price_cointracker_float = parseFloat(req.cointracker[1].price.slice(1,).replace(",","")); 
    buy = ""; 
    sell = ""; 
    if (price_coinmarketcap_float > price_cointracker_float) {
        buy = "Cointracker"; 
        sell = "Coinmarketcap"; 
    } else {
        buy = "Coinmarketcap"; 
        sell = "Cointracker"; 
    }

    res.render('ethereum', {
        ethereum_coinmarketcap: req.coinmarketcap[1],
        ethereum_cointracker: req.cointracker[1], 
        time_date: time_date, 
        buy: buy, 
        sell: sell
    });             
});

router.get('/register', (req,res) => {
    if (req.session) {
        res.render('register', {
            message_fail: req.session.message_fail,
            message_success: req.session.message_success
        });
    } else {
        res.render('register'); 
    }
    delete req.session.message_fail;
    delete req.session.message_success;
});


router.get('/login', (req,res) => {
    res.render('login', {
        message: req.session.message
    });
    delete req.session.message; 
});


router.get('/settings',(req,res) => {
    if (req.user) {
        console.log(req.user); 
        console.log( "user.fname: ", req.user.fname); 
        res.render('settings', {
            user: req.user,
            message_fail: req.session.message_fail,
            message_success: req.session.message_success
        }); 
    } else {
        res.redirect('/login'); 
    }
    delete req.session.message_fail;    
    delete req.session.message_success;
});


router.get('/logout', (req,res) => {
    res.render('logout'); 
});


router.get('/question',(req,res) => {
    if (req.user) {
        res.render('question', {
            user: req.user, 
            message_fail: req.session.message_fail,
            message_success: req.session.message_success
        }); 
    } else {
        res.redirect('/login'); 
    }

    delete req.session.message_fail;
    delete req.session.message_success;
});


module.exports = router; 



