console.log('Init');
// @ts-ignore
import jsgl from 'nextjsgl';

document.addEventListener("DOMContentLoaded", () => {
    console.log('jsgl',jsgl);
    /* Instantiate JSGL Panel. */
    const myPanel = new jsgl.Panel(document.getElementById("panel"));
});


/* Start drawing! */
console.log('jsgl2',jsgl);
