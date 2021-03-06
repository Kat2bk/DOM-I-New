const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// images

let headerImage = document.getElementById("cta-img");
headerImage.setAttribute("src", siteContent["cta"]["img-src"]);
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// navigation

let navItems = document.getElementsByTagName("a");
Array.from(navItems).forEach((item, index) => {
  item.textContent = siteContent["nav"][`nav-item-${(index += 1)}`];
});

// main title and button / text is different between querySelectorAll and getElementsByClassName and Query Selector
//

// let title = document.getElementsByClassName("cta-text")[0];
// title.textContent = siteContent["cta"]["h1"];

// let title = document.querySelector(".cta-text");
// title.textContent = siteContent["cta"]["h1"];

let title = document.querySelectorAll(".cta-text h1")[0];
title.textContent = siteContent["cta"]["h1"];

let titleButton = document.querySelectorAll(".cta-text button")[0];
titleButton.textContent = siteContent["cta"]["button"];

// main content

// top content

let topTitle = document.querySelectorAll(
  ".main-content .top-content .text-content h4"
)[0];
topTitle.textContent = siteContent["main-content"]["features-h4"];
let topTitleParagraph = document.querySelectorAll(
  ".main-content .top-content .text-content p"
)[0];
topTitleParagraph.textContent = siteContent["main-content"]["features-content"];

// second top content

let secondTitle = document.querySelectorAll(
  ".main-content .top-content .text-content h4"
)[1];
secondTitle.textContent = siteContent["main-content"]["about-h4"];
let secondTitleParagraph = document.querySelectorAll(
  ".main-content .top-content .text-content p"
)[1];
secondTitleParagraph.textContent = siteContent["main-content"]["about-content"];

// bottom content
// first tier

let bottomFirst = document.querySelectorAll(
  ".main-content .bottom-content .text-content h4"
)[0];

bottomFirst.textContent = siteContent["main-content"]["services-h4"];

let bottomFirstParagraph = document.querySelectorAll(
  ".main-content .bottom-content .text-content p"
)[0];
bottomFirstParagraph.textContent =
  siteContent["main-content"]["services-content"];

// second tier

let bottomSecond = document.querySelectorAll(
  ".main-content .bottom-content .text-content h4"
)[1];
bottomSecond.textContent = siteContent["main-content"]["product-h4"];
let bottomSecondParagraph = document.querySelectorAll(
  ".main-content .bottom-content .text-content p"
)[1];
bottomSecondParagraph.textContent =
  siteContent["main-content"]["product-content"];

// third tier

let bottomThird = document.querySelectorAll(
  ".main-content .bottom-content .text-content h4"
)[2];
bottomThird.textContent = siteContent["main-content"]["vision-h4"];
let bottomThirdParagraph = document.querySelectorAll(
  ".main-content .bottom-content .text-content p"
)[2];
bottomThirdParagraph.textContent =
  siteContent["main-content"]["vision-content"];

// contact

let contactTitle = document.querySelectorAll(".contact h4")[0];
contactTitle.textContent = siteContent["contact"]["contact-h4"];

let contactPara1 = document.querySelectorAll(".contact p")[0];
contactPara1.textContent = siteContent["contact"]["address"];

let contactPara2 = document.querySelectorAll(".contact p")[1];
contactPara2.textContent = siteContent["contact"]["phone"];

let contactPara3 = document.querySelectorAll(".contact p")[2];
contactPara3.textContent = siteContent["contact"]["email"];

// footer

let footerTitle = document.querySelectorAll("footer p")[0];
footerTitle.textContent = siteContent["footer"]["copyright"];

// change navigation items to green

let greenNavigation = document.querySelectorAll("a");
greenNavigation.forEach(items => {
  items.style.color = "green";
});

// create two new elements on nav bar / querySelectorAll doesn't work

const newNavigation = document.createElement("a");
newNavigation.textContent = "Hello";

const newNavItem = document.querySelector("nav");
newNavItem.appendChild(newNavigation);

const newNavigationElement = document.createElement("a");
newNavigationElement.textContent = "Coding";

const newNavi = document.querySelector("nav");
newNavi.prepend(newNavigationElement);
