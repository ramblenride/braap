function t(t,e){var n=document.createElement("a");n.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(e)),n.setAttribute("download",t),n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n)}function e(t){var e={motorcycles:[t]};return JSON.stringify(e,(function(t,e){if(null!==e&&0!=String(e).length&&"NaN"!==String(e))return e}),2)}function n(t){return"".concat(t.name).replace(/\w+ /,"").trim().replace(/ /g,"_").toLowerCase()+".json"}export{t as d,n as g,e as m};
