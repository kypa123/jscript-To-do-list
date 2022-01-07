const quotes=[
    {
        quote: "일단 똥을 싸라, 그럼 박수를 쳐줄 것이다.",
        author:"Andy Asshole",
    },
    {
        quote: "대충 멋있는 말.",
        author:"이말년",
    },
    {
        quote: "흑백배경에 들어가면 뭐든 명언처럼 보인다.",
        author:"주호민",
    },
    {
        quote: "혼란하다 혼란해.",
        author:"혼세마왕",
    },
    {
        quote: "습관은 인생을 바꾼다.",
        author:"유튜브 댓글",
    },
    {
        quote: "일단 똥을 싸라, 그럼 박수를 쳐줄 것이다.",
        author:"Andy Asshole",
    },
    {
        quote: "대충 멋있는 말.",
        author:"이말년",
    },
    {
        quote: "흑백배경에 들어가면 뭐든 명언처럼 보인다.",
        author:"주호민",
    },
    {
        quote: "혼란하다 혼란해.",
        author:"혼세마왕",
    },
    {
        quote: "습관은 인생을 바꾼다.",
        author:"유튜브 댓글 펌",
    },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote
author.innerText = "-"+todaysQuote.author+"-";