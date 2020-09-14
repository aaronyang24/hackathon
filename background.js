// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// 'use strict';

// chrome.runtime.onInstalled.addListener(function() {
//   chrome.storage.sync.set({color: '#3aa757'}, function() {
//     console.log('The color is green.');
//   });
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([{
//       conditions: [new chrome.declarativeContent.PageStateMatcher({
//         pageUrl: {hostEquals: 'developer.chrome.com'},
//       })],
//       actions: [new chrome.declarativeContent.ShowPageAction()]
//     }]);
//   });
// });

const text = document.querySelectorAll('h1,h2,h3,h4,h5,p,li,td,caption,span')

      //it is enabled, do accordingly
for(let i = 0; i < text.length; i++) {
  if(text[i].innerHTML.includes('Hack Reactor')) {
      text[i].innerHTML = text[i].innerHTML.replace('Hack Reactor', 'Codesmith')
    }
  if(text[i].innerHTML.includes('Galvanize')) {
      text[i].innerHTML = text[i].innerHTML.replace('Galvanize', 'Codesmith')
    }
    if(text[i].innerHTML.includes('App Academy')) {
      text[i].innerHTML = text[i].innerHTML.replace('App Academy', 'Codesmith')
    }
    if(text[i].innerHTML.includes('Coding Dojo')) {
      text[i].innerHTML = text[i].innerHTML.replace('Coding Dojo', 'Codesmith')
    }
    if(text[i].innerHTML.includes('Fullstack Academy')) {
      text[i].innerHTML = text[i].innerHTML.replace('Full Stack Academy', 'Codesmith')
    }
    if(text[i].innerHTML.includes('Flatiron School')) {
      text[i].innerHTML = text[i].innerHTML.replace('Flatiron School', 'Codesmith')
    }   
    if(text[i].innerHTML.includes('Coding Bootcamp')) {
      text[i].innerHTML = text[i].innerHTML.replace('Coding Bootcamp', 'Codesmith')
    }   
    if(text[i].innerHTML.includes('Full Stack')) {
      text[i].innerHTML = text[i].innerHTML.replace('Full Stack', 'Codesmith')
    }    
    if(text[i].innerHTML.includes('Fullstack')) {
      text[i].innerHTML = text[i].innerHTML.replace('Fullstack', 'Codesmith')
    }    
    if(text[i].innerHTML.includes('Full-Stack')) {
      text[i].innerHTML = text[i].innerHTML.replace('Full-Stack', 'Codesmith')
    }     
    if(text[i].innerHTML.includes('Learn to Code')) {
      text[i].innerHTML = text[i].innerHTML.replace('Learn to Code', 'Codesmith')
}
if(text[i].innerHTML.includes('Developer')) {
  text[i].innerHTML = text[i].innerHTML.replace('Developer', 'Codesmith Graduate')
}
}



const links = document.querySelectorAll('a')
const url = "https://codesmith.io/"

for(let i = 0; i < links.length; i++) {
    links[i].href = url;
}


//Change all images to logo

const logos = document.querySelectorAll('img');
const link = "images/codesmith.png"
for(let i = 0; i < logos.length; i++) {
  logos[i].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZX0C0nDBXGDufj4qprzYY5mkUOutoVWfxAgfjtY_KiyfuyJR6&s';
}


    // do your things
// function replaceCS() {
//   document.body.innerHTML = document.body.innerHTML.replace(/extension/gi, 'REPLACED');
//   console.log("HELLLO");
// }


