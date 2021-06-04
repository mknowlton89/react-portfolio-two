(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(17),s=n.n(r),i=(n(24),n(25),n(7)),o=(n(26),n.p+"static/media/hero.2c464c8e.png"),l=n(0);function j(){return Object(l.jsxs)("div",{className:"hero",children:[Object(l.jsxs)("div",{className:"hero-left",children:[Object(l.jsx)("h1",{children:"Hi, my name is Michael."}),Object(l.jsx)("p",{children:"I'm a fullstack software developer based in Atlanta. I'm currently open to new opportunities. Check out some of my recent projects below."}),Object(l.jsx)(i.b,{to:"/projects",children:Object(l.jsx)("button",{className:"btn",children:"View Projects"})})]}),Object(l.jsx)("div",{className:"hero-right",children:Object(l.jsx)("img",{src:o,alt:"Michael Knowlton's Headshot"})})]})}n(36);var d=n(11),b=(n(37),n.p+"static/media/MK-Resume-Jun-2021.a6ee30b6.pdf");function h(){var e=Object(a.useState)(!1),t=Object(d.a)(e,2);t[0],t[1];return window.onload=function(){var e=document.querySelector(".hamburger"),t=document.querySelector(".mobile-nav");e.addEventListener("click",(function(){e.classList.toggle("is-active"),t.classList.toggle("is-active")}))},Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("header",{children:[Object(l.jsx)("div",{className:"logo-container",children:Object(l.jsx)(i.b,{className:"logo",to:"/",children:Object(l.jsx)("h1",{children:"MK"})})}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("nav",{className:"desktop-nav",children:[Object(l.jsx)(i.b,{to:"/projects",children:"Projects"}),Object(l.jsx)("a",{href:"https://github.com/mknowlton89",target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/michael-knowlton-81b0b15a/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),Object(l.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:"Resume"}),Object(l.jsx)(i.b,{to:"/contact",children:Object(l.jsx)("button",{className:"btn contact-button",children:"Contact"})})]}),Object(l.jsx)("button",{className:"hamburger",children:Object(l.jsx)("div",{className:"bar"})})]})]}),Object(l.jsxs)("nav",{className:"mobile-nav",children:[Object(l.jsx)(i.b,{to:"/projects",children:"Projects"}),Object(l.jsx)("a",{href:"https://github.com/mknowlton89",target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(l.jsx)("a",{href:"https://www.linkedin.com/in/michael-knowlton-81b0b15a/",target:"_blank",rel:"noreferrer",children:"LinkedIn"}),Object(l.jsx)("a",{href:b,target:"_blank",rel:"noopener noreferrer",children:"Resume"}),Object(l.jsx)("button",{className:"btn mobile-button",onClick:"#contact",children:"Contact"})]})]})}n(38);function m(){return Object(l.jsxs)("footer",{children:[Object(l.jsx)("div",{className:"contact-footer",children:Object(l.jsx)("p",{children:"770.843.4662 || mknowlton89@gmail.com"})}),Object(l.jsxs)("h3",{children:["Made with ",Object(l.jsx)("span",{children:"\u2764"})," in ATL"]})]})}function u(){return Object(l.jsxs)("div",{className:"page-wrapper",children:[Object(l.jsx)(h,{}),Object(l.jsx)(j,{}),Object(l.jsx)(m,{})]})}var p=n(10),O=n(16),x=n(19),g=n.n(x),f=(n(41),n.p+"static/media/contact.1d2ccfd6.png");function v(){var e=Object(a.useState)({reply_to:"",from_name:"",message:""}),t=Object(d.a)(e,2),n=t[0],c=t[1],r=function(e,t){c((function(n){return Object(O.a)(Object(O.a)({},n),{},Object(p.a)({},e,t))}))};return Object(l.jsxs)("section",{id:"contact",className:"contact",children:[Object(l.jsx)("div",{className:"contact-image",children:Object(l.jsx)("img",{src:f,alt:"Contact Us Image"})}),Object(l.jsxs)("div",{id:"contact-form",className:"form",onSubmit:function(e){e.preventDefault(),g.a.send("service_39i9t3z","template_ts0a6ib",n,"user_xMn5ZWR3u6FniRaV0vWip").then((function(e){console.log("SUCCESS!",e.status,e.text)}),(function(e){console.log("FAILED...",e)}))},children:[Object(l.jsx)("h3",{children:"Want to get in touch?"}),Object(l.jsxs)("form",{children:[Object(l.jsxs)("div",{className:"name-email",children:[Object(l.jsx)("input",{onChange:function(e){return r("from_name",e.target.value)},type:"text",placeholder:"Name",id:"fromName",required:!0}),Object(l.jsx)("input",{onChange:function(e){return r("reply_to",e.target.value)},type:"email",placeholder:"Email",id:"fromEmail",required:!0})]}),Object(l.jsx)("div",{children:Object(l.jsx)("textarea",{onChange:function(e){return r("message",e.target.value)},placeholder:"Enter your message.",id:"msg",required:!0})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"submit-btn btn",type:"submit",value:"Send"})})]})]})]})}n(42);function k(e){var t=e.title;return Object(l.jsx)("div",{className:"pageTitleContainer",children:Object(l.jsx)("h1",{children:t})})}function w(){return Object(l.jsxs)("div",{className:"page-wrapper",children:[Object(l.jsx)(h,{}),Object(l.jsx)(k,{title:"Let's Chat"}),Object(l.jsx)(v,{}),Object(l.jsx)(m,{})]})}n(43);var y=[{image:"/images/dadjokes.png",name:"Dad Joke Generator",description:"Built upon the icanhazdadjokes open API, this app will return a random Dad Joke on demand. If you find a joke you love, hit the Favorites button and add it to your favorites.",liveUrl:"https://mknowlton89.github.io/dadjokegenerator/",repoUrl:"https://github.com/mknowlton89/dadjokegenerator"},{image:"/images/employee-directory.png",name:"Employee Directory",description:"This is a React app, that leverages the Random User database to generate a list of random employees. This was an activity to get more familiar with setting state, mapping arrays, and doing on-page sorting.",liveUrl:"https://mknowlton89.github.io/employee-directory/",repoUrl:"https://github.com/mknowlton89/employee-directory"},{image:"/images/workout-tracker.png",name:"Workout Tracker",description:"This is a Node application that utilizes Express, Mongoose and is deployed to Heroku and utilizes a MongoDB Atlas database. Create workouts, and track weekly minutes exercised and weight lifted via MongoDB aggregators",liveUrl:"https://intense-meadow-04152.herokuapp.com/",repoUrl:"https://github.com/mknowlton89/fitness-tracker-hw"},{image:"/images/Screen Shot 2021-04-06 at 4.28.04 PM.png",name:"Is It Trademarked",description:"This is a platform that empowers entreprenuers during the early research phase of their business. Use this application to check if an idea for a brand name/slogan is already trademarked as well as if the domain is available. If the domain is not available, we'll lookup the WHOIS info and return (when available) the contact information of the domain's current owner.",liveUrl:"https://mknowlton89.github.io/is-it-trademarked/",repoUrl:"https://github.com/mknowlton89/is-it-trademarked"}];function N(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(k,{title:"Recent Projects"}),Object(l.jsx)("section",{className:"secondary-projects",children:y.map((function(e,t){return Object(l.jsxs)("div",{className:"project-card",children:[Object(l.jsx)("div",{className:"secondary-project-img",children:Object(l.jsx)("img",{src:e.image,alt:""})},t),Object(l.jsxs)("div",{className:"project-info",children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("p",{children:e.description}),Object(l.jsx)("button",{className:"btn project-cta",children:Object(l.jsx)("a",{className:"btn-link",href:e.liveUrl,children:"GitHub Repo"})}),Object(l.jsx)("a",{href:e.repoUrl,children:"GitHub Repo"})]})]})}))})]})}function U(){return Object(l.jsxs)("div",{className:"page-wrapper",children:[Object(l.jsx)(h,{}),Object(l.jsx)(N,{}),Object(l.jsx)(m,{})]})}var C=n(2);var I=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)(C.c,{children:[Object(l.jsx)(C.a,{path:"/contact",children:Object(l.jsx)(w,{})}),Object(l.jsx)(C.a,{path:"/projects",children:Object(l.jsx)(U,{})}),Object(l.jsx)(C.a,{path:"/",children:Object(l.jsx)(u,{})})]})})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(I,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.f3d51240.chunk.js.map