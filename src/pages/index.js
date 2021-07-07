import React, { useState } from "react"
import List from "../components/list"
import Layer from "../components/layer"
import '../styles/pageindex.less'

export default function Home() {
  const [ show, setShow ] = useState(0);
  let locmsg = localStorage.getItem('x_bookmark');
  let [ list ] = useState([]);
  if(locmsg){
    list = JSON.parse(locmsg);
  }else{
    list = [
      {
        type: 2,
        name: '添加快捷方式',
        icon: '',
        href: 'javascript'
      }
    ];
  }

  function showEvent (param) {  
    setShow(param)
  }

  return (
    <div className="wrap" style={{
      width:'100%',
      height:'100%',
      paddingTop: "100px",
      position: "relative"
    }}>
      <div className="logo" style={{
        width:'272px',
        // height:'92px',
        margin: '0 auto'
      }}>
        <img style={{
            width:'100%',
            height:'100%'
          }} alt="" src="/img/logo.png"/>
      </div>
      <div className="main" style={{
          width:'560px',
          height:'auto',
          margin: '10px auto 0'
        }}>
        <div id="inputWrapper" style={{
          width:'100%',
          height:'44px',
          position: 'relative',
          borderRadius: '22px',
          boxShadow: '0 1px 6px 0 rgb(32 33 36 / 28%)',
          fontSize: '16px'
        }}>
          <input id="input" placeholder="在 Google 上搜索，或者输入一个网址" style={{
             border: 'none',
             borderRadius: '22px',
             color: '#333',
             fontFamily: 'inherit',
             fontSize: 'inherit',
             height: '100%',
             outline: 'none',
             paddingInlineEnd:  '44px',
             paddingInlineStart: '52px',
             position: 'relative',
             width: '100%',
             boxSizing: "border-box"
          }} />
          <div id="icon" style={{
            position: "absolute",
            height: "100%",
            left: "12px",
            top: "0",
            alignItems: "center",
            display: "flex",
            flexShrink: "0",
            justifyContent: "center",
            width: "32px",
          }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5F6368"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          </div>
          <div id="voiceSearchButton" title="语音搜索" style={{
            position: "absolute",
            height: "100%",
            right: "16px",
            width: "26px",
            top: "0",
            alignItems: "center",
            display: "flex",
            flexShrink: "0",
            justifyContent: "center",
          }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="#4285F4" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"/><path fill="#34A853" d="M11 18.92h2V22h-2z"/><path fill="#F4B400" d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"/><path fill="#EA4335" d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0 0 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z"/></svg></div>
        </div>
        <List 
          setShow={setShow} 
          list={list}
        ></List>
      </div>
      { show ? 
        <Layer 
          list={list}
          showEvent={showEvent}
        /> : '' }
    </div>
  )
}


// #inputWrapper {
//   height: 100%;
//     position: relative;
// }

// input {
 
// }

// input::-webkit-search-decoration, input::-webkit-search-cancel-button, input::-webkit-search-results-button, input::-webkit-search-results-decoration {
//   display: none;
// }

// input::placeholder {
//   color: var(--search-box-placeholder, var(--google-grey-refresh-700));
// }

// input:focus, :host([matches-are-visible]) input {
//   background-color: var(--search-box-results-bg, white);
// }

// ntp-realbox-icon {
//   height: 100%;
//     left: 12px;
//     position: absolute;
//     top: 0;
// }

// :host-context([dir='rtl']) ntp-realbox-icon {
//   left: unset;
//     right: 12px;
// }

// #voiceSearchButton {
//   background: url('chrome://new-tab-page/icons/googlemic_clr_24px.svg') no-repeat center;
//     background-size: 21px 21px;
//     border: none;
//     border-radius: 2px;
//     cursor: pointer;
//     height: 100%;
//     outline: none;
//     padding: 0;
//     pointer-events: auto;
//     position: absolute;
//     right: 16px;
//     width: 26px;
// }

// :host-context([dir='rtl']) #voiceSearchButton {
//   left: 16px;
//     right: unset;
// }

// :host-context(.focus-outline-visible) #voiceSearchButton:focus {
//   box-shadow: var(--ntp-focus-shadow);
// }

// :-webkit-any(input, ntp-realbox-icon, #voiceSearchButton) {
//   z-index: 2;
// }

// ntp-realbox-dropdown {
//   left: 0;
//     position: absolute;
//     right: 0;
//     top: 0;
//     z-index: 1;
// }
