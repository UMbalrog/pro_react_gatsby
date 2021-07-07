import React from "react"
import '../styles/list.less'

export default function list ({setShow, list}) { 
  // Event
  function addLink (param) {  
    setShow(1);
  } 

  // Render
  function Cardtype1 ({item}) {
    return (
      <a className="card" href={item.href}>
        <div className="bgbox">
          <img className="img" src={item.icon} alt=""/>
        </div>
        <div className="text">{item.name}</div>
      </a>
    )
  }

  function Cardtype2 ({item}) {

    return (
      <div className="card" onClick={ () => addLink() } >
        <div className="bgbox">
          <svg className="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
        </div>
        <div className="text">{item.name}</div>
      </div>
    );
  }

  return (
    <div className="list">
      { list.map((item, k) => {
        return (
         (item.type === 2) ? <Cardtype2 item={item} key={k}/> : <Cardtype1 item={item} key={k}/>
        )
      }) }
    </div>
  )

}