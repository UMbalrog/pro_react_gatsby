import React from "react"

export default function list ({data}) { 
  const list = [
    {
      type: 1,
      name: 'git',
      icon: 'https://github.com/favicon.ico',
      href: 'https://github.com'
    },
    {
      type: 2,
      name: '添加快捷方式',
      icon: 'https://www.yizhibo.com/favicon.ico',
      href: 'https://www.yizhibo.com'
    },
  ]
  return (
    <div class="list" style={{
      width: "100%",
      marginTop: '20px'
    }}>
      { list.map( item => {
        return (
          // {if item.type == 2}
          <a class="card" style={{
            width: "112px",
            height: "112px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            justifyContent: "center",
            float: "left"
          }} href={item.href}>
            <div style={{
              width: "48px",
              height: "48px",
              lineHeight: "48px",
              textAlign: "center"
            }}>
              <img src={item.icon} alt="" style={{
                width: "24px",
                height: "24px",
              }}/>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
            </div>
            <div style={{
              fontWeight: "400",
              overflow: "hidden",
              textAlign: "center",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              width: "100%",
              color: "#333",
              fontSize: "14px"
            }}>{item.name}</div>
          </a>
        )
      }) }
      
    </div>
  )

}