# Minh's Website

### Question 1. Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?
1. When I scrape the prices of all types of crypto from the two website, I only want the prices of Bitcoin and Ethereum. Instead of checking the name attribute of each JSON to get Bitcoin and Ethereum (something I should do), I took only the first two JSON because on both sites, Bitcoin and Ethereum are on top of the list. This is not ideal, as some sites may have different order of their crypto. 

2. In the assignment, there is a requirement asking us to differentiate "buy and sell price clearly". I do not know a lot about cryptocurrency, but when I try to look up the price of each coin, there is only one market price. I cannot find any website that has two different buying and selling prices. 
I found an explanation on Google: "Typically, the spread centers on the market price; in other words, the market price will be somewhere in the middle of the buy and sell price. The price at which you buy will always be higher than the price at which you sell your cryptocurrencies for on Buy/Sell."
So I decide to suggest the user to buy on the site with lower market price and sell on the site with higher market price. I know this is not the requirement you asked for and I am sorry for that. I emailed Mr. Kadimisetty at Anil@chainalysis.com about this but never got a response. 


### Question 2. Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)
I over-designed the user authentication and the frontend a little bit, as I think there is much more potential if people can sign up for an account. 


### Question 3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?
I would store users' infomation and different type of crypto prices in a database. Live-scraping info of hundreds of crypto from dozens of sites can slow down the backend. Therefore, I will have people pick which crypto to check out and I will only show them info of those crypto.


### Question 4. What are some other enhancements you would have made, if you had more time to do this implementation
I will fix both point 1 and 2 of question 1. I am curious to know where I can find a website that has both buy and sell prices. 




