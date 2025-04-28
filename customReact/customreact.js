function creatReactDOM(Ele, cont)
{
    const e=document.createElement(Ele.type);
    e.innerHTML=Ele.children;;
    e.setAttribute("href", Ele.props.href);
    e.setAttribute("target", Ele.props.target);
    cont.appendChild(e);
}
const  reactElement={
    type:'a',
    props:{
        href:"http:\\google.com",
        target:"__blank"
    },
    children:"Click on me"
}
const mainCont=document.querySelector("#root");
creatReactDOM(reactElement, mainCont);
