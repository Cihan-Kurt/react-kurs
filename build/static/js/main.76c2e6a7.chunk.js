(this["webpackJsonpreact-kurs"]=this["webpackJsonpreact-kurs"]||[]).push([[0],{72:function(e,n,t){"use strict";t.r(n);var i=t(0),a=t(8),r=t(97),s=t(40),c=t(7),d=t(75),o=t(96),l=t(99),m=t(2);function h(){return Object(m.jsxs)("div",{style:{marginLeft:"220px"},children:[Object(m.jsx)("p",{children:"In diesem Beispiel werden die React Hooks useState und useEffect, sowie der React-Router verwendet."}),Object(m.jsx)("iframe",{src:"https://codesandbox.io/embed/silly-allen-9j8z0?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"silly-allen-9j8z0",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})]})}var p=t(42),u=Object(d.a)({mainMargin:{marginLeft:240,marginRight:100},description:{marginBottom:"40px"},codeSample:{backgroundColor:"black",borderRadius:"3px",marginBottom:"5px"},playGround:{width:"100%",height:"400px"}});function j(){var e=u();return Object(m.jsxs)(l.a,{className:e.mainMargin,children:[Object(m.jsxs)(l.a,{className:e.description,children:[Object(m.jsx)(p.a,{variant:"h1",children:"React"}),Object(m.jsx)(p.a,{variant:"h2",children:"Create React App"}),Object(m.jsxs)(p.a,{component:"p",children:["Mit dem befehlt ",Object(m.jsx)("code",{children:"npx create-react-app my-app"}),"richten wir eine Etnwicklungsumgebung ein in der wir React.js nutzen k\xf6nnen. Um eine React App so zu erstellen ben\xf6tgst du Node 10.16 (oder neuer) und npm 5.6(oder h\xf6her)."]}),Object(m.jsx)(l.a,{className:e.codeSample,children:Object(m.jsxs)("code",{children:["npx create-react-app my-app",Object(m.jsx)("br",{}),"cd my-app",Object(m.jsx)("br",{}),"npm start",Object(m.jsx)("br",{})]})}),Object(m.jsx)(l.a,{className:e.codeSample,children:Object(m.jsx)("code",{children:"import React from 'react'"})})]}),Object(m.jsx)(p.a,{variant:"h2",children:"React Elemente rendern"}),Object(m.jsxs)(l.a,{className:"description",children:["Die React App die darufhin erstellt wurde hat ein 'Root' Element in der index.html. Mithilfe von ",Object(m.jsx)("a",{href:"https://reactjs.org/docs/react-dom.html",target:"_blank",style:{color:"#fff"},children:"ReactDOM.render()"})," rendern wir Elemente in diesem 'Root'.",Object(m.jsx)(l.a,{className:e.codeSample,children:Object(m.jsxs)("code",{children:["const element = ","<h1>Hello, world</h1>",";",Object(m.jsx)("br",{}),"ReactDOM.render(element, document.getElementById('root'));"]})})]}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)("p",{children:"Hier sieht man wie eine solche App aufgebaut ist. Schaut man sich die Dateien an, sieht man in der index.html das 'Root'-Element. Dar\xfcber hinaus befindet sich im 'src'-Ordner die App.js und die index.js. Die index.js wird genutzt um sich das 'root'-Element zu holen und mithilfe des ReactDOM.render() wird die App.js an den 'root' angehangen. In der App.js beschreiben wir dann wie die Seite aussehen soll. Wenn Komponente geschrieben werden wie eine Navigation.js, muss diese in der App.js importiert und im return hinzugef\xfcgt werden, damit diese gerendert wird. Diese enth\xe4lt ein div mit der id='root' damit React weis wo unser React code gemanaged werden soll."}),Object(m.jsx)("iframe",{src:"https://codesandbox.io/embed/proud-sunset-cbzws?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"proud-sunset-cbzws",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"})]})]})}var b=t(93),g=Object(b.a)({description:{marginBottom:"50px"},mainMargin:{marginLeft:240,paddingRight:60},h6:{marginTop:10,fontWeight:600,fontSize:"16px",textDecoration:"underline"}});function x(){var e=g();return Object(m.jsxs)(l.a,{className:e.mainMargin,children:[Object(m.jsx)(p.a,{component:"h1",variant:"h1",children:"REACT"}),Object(m.jsx)(p.a,{component:"h2",variant:"h2",children:"Warum React?"}),Object(m.jsx)(p.a,{variant:"h6",className:e.h6,children:"Virtual DOM"}),Object(m.jsxs)(p.a,{className:e.description,component:"div",children:[Object(m.jsx)("p",{children:"DOM steht f\xfcr Document Object Model und repr\xe4sentiert die Baumstruktur die aus dem HTML generiert wird. Diese Baumstruktur dient z.B JavaScript als Schnittstelle um auf Elemente der Website zuzugreifen und diese zu ver\xe4ndern. Daraufhin werden die \xc4nderungen auf die Webseite angewendet und ausgef\xfchrt."}),Object(m.jsx)("p",{children:"Das Problem daran ist das JavaScript daf\xfcr jedes mal die Baumstruktur durchsucht um zum gew\xfcnschten Element zu gelangen und diese zu ver\xe4ndern. Sobald das geschehen ist wird die ganze Webseite komplett neu geladen mit der gew\xfcnschten \xc4nderung, was nicht sehr performant ist. Aus diesem Grund gibt es das Virtual DOM."}),Object(m.jsx)("p",{children:"React erstellt eine virtuelle Kopie von eurem DOM das auf das N\xf6tigste an Informationen runtergebrochen wird. Dieses virtuelle DOM ist deutlich kleiner wodurch es viel schneller ver\xe4ndert werden kann, daher ist das der Ort an dem diese \xc4nderungen vorgenommen werden. Wann immer in diesem virtuellen DOM ver\xe4nderungen vorgenommen werden, vergleicht React beide Versionen des DOM's durch einen Algorithmus der die \xc4nderungendann in einem Schritt direkt an der entsprechenden Stelle im DOM vornimmt ohne dieses nochmal durchsuchen zu m\xfcssen."})]}),Object(m.jsx)(p.a,{variant:"h6",className:e.h6,children:"Komponenten"}),Object(m.jsxs)(p.a,{className:e.description,component:"p",children:[Object(m.jsx)("p",{children:"Komponenten erlauben es einem seinen Code in wiederverwertbare Teile aufzubrechen."}),Object(m.jsx)("p",{children:"Um eine Komponente zu definieren erstellen wir eine Funktion die maximal ein 'props' entgegennimmt und React-Elemente zur\xfcckgibt.(React Komponenten m\xfcssen gro\xdf geschrieben werden also Navigation.js nicht navigation.js)"}),Object(m.jsx)("code",{style:{backgroundColor:"black"}}),Object(m.jsxs)("p",{children:["Diese Komponenten k\xf6nnen exportiert werden und in anderen Komponenten genutzt werden. Dies macht mann wenn man z.B eine Komponente hat die auf allen Seiten der Web Applikation genutzt werden soll. Ein Beispiel daf\xfcr sieht man anhand des ",Object(m.jsx)("a",{href:"beispiel.js",style:{color:"white"},children:"Beispiels"})," in dem die Navigationsleiste auf jeder Seite vorkommt."]})]})]})}var w=Object(b.a)({description:{marginBottom:"70px"},mainMargin:{marginLeft:240}});function f(){var e=w();return Object(i.useEffect)((function(){}),[]),Object(m.jsxs)(l.a,{className:e.mainMargin,children:[Object(m.jsx)("h2",{children:"Hooks"}),Object(m.jsx)("h3",{children:"UseState API"}),Object(m.jsx)("code",{style:{backgroundColor:"black"},children:"const [state, setState] = useState(initialState);"}),Object(m.jsx)("p",{children:"So erstellen wir einen useState, allerdings muss dieser erstmal importiert werden aus React. Wie das Funktioniert sieht man im unteren Beispiel, da haben wir '0' als initialen Wert gesetzt, weil wir beim erstmaligen rendern sehen wollen das wir 0 mal geclickt haben. State und setState benennt man immer nach dem Zweck in userem Beispiel ist das count und setCount. Wenn gew\xfcnscht kann man einen initialState setzten wie im unteren Beispiel."}),Object(m.jsx)("p",{children:"Mithilfe des State Hooks kann mann funktionellen Komponenten einen State vergeben. React merkt sich diesen State und reagiert auf ver\xe4nderungen des States. In diesem Beispiel haben wir einen useState erstellt mit dem Namen Count und dem Initalen Wert von 0. Durch das bet\xe4tigen des Buttons setzten wir Count auf Count+1 "}),Object(m.jsx)("iframe",{src:"https://codesandbox.io/embed/rough-https-3oouo?fontsize=14&hidenavigation=1&theme=dark",style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:"rough-https-3oouo",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}),Object(m.jsx)("h3",{children:"UseEffect API"}),Object(m.jsxs)("code",{style:{backgroundColor:"black"},children:["useEffect(() => ","{}",",[])"]}),Object(m.jsx)("p",{children:'Mit dem useEffect Hook k\xf6nnen wir "Nebeneffekte", nach dem rendern ausf\xfchren. Das "Array" am Ende des useEffects ist das dependancies Array. Da k\xf6nnen wir den State (oder mehrere States) reingeben auf den das useEffect reagieren soll. In dem Beispiel von oben m\xf6chten wir jedes mal wenn sich der count State \xe4ndert als Nebeneffekt den document.title anpassen.'})]})}var O=t(98),k=t(100),v=t(94),R=Object(b.a)({nav:{borderRight:"1px solid rgba(0, 0, 0, 0.2)",overflow:"scroll"},drawerPaper:{width:200,backgroundColor:"#282c34"},listLogo:{height:"25px"},link:{display:"block",height:"auto",textDecoration:"none",color:"inherit"},linkWrapper:{padding:8},header:{borderBottom:"1px solid rgba(0, 0, 0, 0.2)",display:"flex",textAlign:"center",justifyContent:"center"}});function y(){var e=R();return Object(m.jsxs)(O.a,{variant:"permanent",classes:{paper:e.drawerPaper},className:e.drawer,children:[Object(m.jsxs)(l.a,{className:e.header,children:[Object(m.jsx)("img",{className:e.listLogo,alt:"logo",src:"./Download.svg"}),Object(m.jsx)(p.a,{variant:"h6",className:e.listTitle,children:"REACT"})]}),[{key:"startseite",text:"Was ist React"},{key:"warum-react",text:"Warum React"},{key:"createReactApp",text:"Wie nutze ich React"},{key:"Hooks",text:"Wie nutze ich React Hooks"},{key:"beispiel",text:"React Beispiel"}].map((function(n){return Object(m.jsx)(k.a,{button:!0,className:e.linkWrapper,children:Object(m.jsx)(v.a,{children:Object(m.jsx)(s.b,{to:"/"+n.key,className:e.link,children:n.text})})},n.key)}))]})}var z=t(95),S=Object(b.a)({description:{marginBottom:"50px"},mainMargin:{marginLeft:240},h6:{marginTop:10,fontWeight:600,fontSize:"16px",textDecoration:"underline"}});function B(){var e=S();return Object(m.jsxs)(l.a,{className:e.mainMargin,children:[Object(m.jsx)(p.a,{className:e.h1,variant:"h1",component:"h1",children:"REACT"}),Object(m.jsx)(p.a,{id:"was",variant:"h2",component:"h2",children:"Was ist React"}),Object(m.jsx)(p.a,{className:e.description,component:"div",children:"React ist eine JavaScript Bibliothek mit dem man User Interfaces f\xfcr Web Applikationen entwickelt. Man nutzt Frameworks oder Bibliotheken statt rein mit HTML,CSS und JavaScript zu entwickeln, da man mithilfe von Frameworks einfacher Web-Applikationen bauen kann die in jedem Browser laufen und dar\xfcber hinaus auch performant sind."}),Object(m.jsxs)(p.a,{className:e.description,component:"div",children:[Object(m.jsx)(p.a,{variant:"h6",className:e.h6,children:"Warum nutzen wir Frameworks oder Bibiliotheken?"}),"Wenn man Komplexe Vorg\xe4nge ohne Biblitoheken oder einem Framework umsetzen, hat man am ende einen schwer wartbaren Code und sind dadurch fehleranf\xe4lliger. Dar\xfcber hinaus muss man f\xfcr jedes Problem erstmal eine eigene L\xf6sung entwickeln. Frameworks und Bibliotheken bieten da vordefinierte L\xf6sungen die man nutzen kann. Bei React handelt es sich wie gesagt um eine JavaScript Bibliothek mit dem man sehr gut UserInterfaces entwickeln kann. Wieso dass so ist erfahrt Ihr im laufe dieses Kurses."]}),Object(m.jsx)(z.a,{color:"primary",href:"/warum-react",variant:"contained",children:" Warum React?"})]})}var N=Object(d.a)((function(e){return{main:{padding:(0,e.spacing)(1)}}}));var D=function(){var e=N();return Object(m.jsxs)(s.a,{children:[Object(m.jsx)(o.a,{}),Object(m.jsxs)(l.a,{children:[Object(m.jsx)(y,{}),Object(m.jsx)(l.a,{className:e.main,children:Object(m.jsxs)(c.c,{children:[Object(m.jsx)(c.a,{path:"/startseite",children:Object(m.jsx)(B,{})}),Object(m.jsx)(c.a,{path:"/warum-react",children:Object(m.jsx)(x,{})}),Object(m.jsx)(c.a,{path:"/createReactApp",children:Object(m.jsx)(j,{})}),Object(m.jsx)(c.a,{path:"/Hooks",children:Object(m.jsx)(f,{})}),Object(m.jsx)(c.a,{path:"/beispiel",children:Object(m.jsx)(h,{})})]})})]})]})},W=t(53),M=Object(W.a)({palette:{background:{default:"#282c34"},text:{primary:"#fff"}},typography:{h1:{fontSize:"35px",marginBottom:"30px",fontWeight:400},h2:{marginBottom:"20px",fontSize:"25px",fontWeight:400},h3:{fontSize:"20px",marginBottom:"15px"}}});Object(a.render)(Object(m.jsx)(r.a,{theme:M,children:Object(m.jsx)(D,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.76c2e6a7.chunk.js.map