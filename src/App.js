import React, { useState } from 'react'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './App.css';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import CobrowseIO from 'cobrowse-sdk-js'



function CobrowseableDocument({ numPages, onDocumentLoadSuccess }) {
  CobrowseIO.license = 'sxVi44I63R4sSA'
  // CobrowseIO.customData = {
  //   user_id: "123123joijqem1k23",
  //   user_name: "Rehman ali akram",
  //   user_email: "rehman.ali@kwanso.com",
  //   device_name: "no device name"
  // };
  // A generic consent dialog class
  // function Consent() {
  //   var container = document.createElement('div');
  //   function content(title, description) {
  //     return '\
  //     <div style="background: rgba(50, 50, 50, 0.4); position: fixed; z-index: 2147483647; bottom: 0; top: 0; left: 0; right: 0">\
  //       <div style="color: #333; font-family:sans-serif; line-height:140%; position:fixed; padding:25px; background:white; border-radius:15px; z-index:2147483647; top:50px; left:50%; width:75%; max-width:350px; transform:translateX(-50%); box-shadow:0px 0px 15px #33333322;">\
  //         <div style="text-align:center; margin-top:10px; margin-bottom:20px"><b>'+ title + '</b></div>\
  //         <div>'+ description + '</div>\
  //         <div style="float:right; margin-top:40px; color:rgb(0, 122, 255);">\
  //           <a class="cobrowse-deny" style="cursor:pointer; padding:10px;">Deny</a>\
  //           <a class="cobrowse-allow" style="cursor:pointer; padding:10px; font-weight: bold;">Allow</a>\
  //         </div>\
  //       </div>\
  //     </div>\
  //   ';
  //   }

  //   this.show = function (title, description) {
  //     return new Promise(function (resolve) {
  //       container.innerHTML = content(title, description);
  //       container.querySelector('.cobrowse-allow').addEventListener('click', function () { resolve(true); this.hide() }.bind(this));
  //       container.querySelector('.cobrowse-deny').addEventListener('click', function () { resolve(false); this.hide() }.bind(this));
  //       if (document.body) document.body.appendChild(container);
  //     }.bind(this));
  //   }.bind(this);

  //   this.hide = function () {
  //     if (container.parentNode) {
  //       container.parentNode.removeChild(container);
  //     }
  //   }.bind(this);
  // }

  // // Integration with Cobrowse
  // CobrowseIO.confirmRemoteControl = function () {
  //   return new Consent().show('Remote Control Request', 'Do you want to allow remote control by ' + CobrowseIO.currentSession.agent().name + '?');
  // }
  // CobrowseIO.client().then(function () {
  //   var button = document.createElement('div');
  //   button.className = '__cbio_ignored';
  //   button.textContent = 'End';
  //   button.style.fontFamily = 'sans-serif';
  //   button.style.padding = '10px 13px';
  //   button.style.fontSize = '13px';
  //   button.style.color = 'white';
  //   button.style.boxShadow = '0px 2px 5px #33333344';
  //   button.style.cursor = 'pointer';
  //   button.style.borderRadius = '30px';
  //   button.style.background = 'blue';
  //   button.style.position = 'fixed';
  //   button.style.zIndex = '2147483647';
  //   button.style.bottom = '20px';
  //   button.style.left = '50%';
  //   button.style.transform = 'translateX(-50%)';
  //   button.addEventListener('click', function () {
  //     if (CobrowseIO.currentSession) CobrowseIO.currentSession.end();
  //   });

  //   CobrowseIO.showSessionControls = function () {
  //     document.body.appendChild(button);
  //   }

  //   CobrowseIO.hideSessionControls = function () {
  //     if (button.parentNode) button.parentNode.removeChild(button);
  //   }
  // });

  CobrowseIO.start()
  return (<>

    <Document file="/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
      {Array.from(
        new Array(numPages),
        (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
          />
        )
      )}
    </Document>
  </>
  );
}

function App() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="App">
      <center>
        <div>
          <CobrowseableDocument numPages={numPages} onDocumentLoadSuccess={onDocumentLoadSuccess} />
        </div>
      </center>
    </div>
  );
}

export default App;