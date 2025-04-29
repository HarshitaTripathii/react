function creatReactDOM(Ele, cont)
{
    const e=document.createElement(Ele.type);
    e.innerHTML=Ele.children;;

    // e.setAttribute("href", Ele.props.href);
    // e.setAttribute("target", Ele.props.target);
    // cont.appendChild(e);
    // //we are repeatedly setting attributes so we can use for loop (abopve 3 lines)
    for (const prop in Ele.props)
    {
        if(prop==="children") continue;

        e.setAttribute(prop,Ele.props[prop] );
        cont.appendChild(e);
    }
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
// createReactDOM can alo written as reactRender, as rendering is being done here