/* DEVELOPED BY EDSON QUINTILHANO */var _pot = Math.pow;var _raiz = Math.sqrt;var _round = Math.round;var _sin = Math.sin;var _cos = Math.cos;var _tan = Math.tan;var _pi = Math.PI;var _log = console.log;var _id = makeAlias(document, "getElementById");function makeAlias(object, name) { var fn = object ? object[name] : null; if (typeof fn == "undefined") return function () {}; return function () { return fn.apply(object, arguments); };}var _style = { cor: function (a, b) { _id(a).style.color = b; }, bgCor: function (a, b) { _id(a).style.backgroundColor = b; }, src: function (a, b) { _id(a).style.src = b; }, padd: function (a, b) { _id(a).style.padding = b; }, marg: function (a, b) { _id(a).style.margin = b; }, larg: function (a, b) { _id(a).style.width = b; }, alt: function (a, b) { _id(a).style.height = b; }, fSize: function (a, b) { _id(a).style.fontSize = b; }, disp: function (a, b) { _id(a).style.display = b; }, borda: function (a, b) { _id(a).style.border = b; }, bRad: function (a, b) { _id(a).style.borderRadius = b; }};function _btn(a, b, c) { _id(a).addEventListener(b, c, false);}function _delta(a, b, c) { var r = _pot(b, 2) - (4 * a * c); return r;}function _getX(a,b,c){ var d = _delta(a, b, c); if (d < 0) { var r = "Valor de delta negativo."; return r; } else { var x01 = (-b + _raiz(d)) / (2 * a); var x02 = (-b - _raiz(d)) / (2 * a); return {x1:x01, x2:x02}; }}function _rand(a) { var r = _round(Math.random() * a); return r;}function _porcent(a, b, c) { if (c == 1) { var r = a * (b / 100); return r; } else { var s = (a / b) * 100; return s; }}function _janela(a,b,c,d,e,f,g,h){ if(a === "" || a === undefined) _log("Parâmetros:\n A = ID da tag\n B = Largura\n C = Altura\n D = Cor de fundo\n E = Borda (exemplo \"1px solid #f00\")\n F = Border radius\n G = Margem\n H = Padding"); else { _style.larg(a,b); _style.alt(a,c); _style.bgCor(a,d); if(e === "0") e = "2px solid #00f"; _style.borda(a,e); _style.bRad(a,f); _style.marg(a,g); _style.padd(a,h); }}function _relogio(a) { function attHora(){ var data = new Date(); return (data.getHours()+":"+data.getMinutes()+":"+data.getSeconds()); } return { value: setInterval(function () { _id(a).value = attHora(); }, 1000), innerHTML: setInterval(function () { _id(a).innerHTML = attHora(); }, 1000) };}