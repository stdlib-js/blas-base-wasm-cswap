"use strict";var l=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var h=l(function(J,f){
var B=require("path").resolve,O=require('@stdlib/fs-read-wasm/dist').sync,L=O(B(__dirname,"..","src","main.wasm"));f.exports=L
});var q=l(function(K,M){
var P=require('@stdlib/assert-is-wasm-memory/dist'),m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=require('@stdlib/utils-inherit/dist'),E=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=h();function o(e){if(!(this instanceof o))return new o(e);if(!P(e))throw new TypeError(g('26TH0',e));return E.call(this,j,e,{env:{memory:e}}),this}V(o,E);m(o.prototype,"main",function(r,s,t,a,i){return this._instance.exports.c_cswap(r,s,t,a,i),a});m(o.prototype,"ndarray",function(r,s,t,a,i,p,v){return this._instance.exports.c_cswap_ndarray(r,s,t,a,i,p,v),i});M.exports=o
});var S=l(function(Q,T){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/strided-base-stride2offset/dist'),R=require('@stdlib/strided-base-read-dataview/dist').ndarray,D=require('@stdlib/wasm-memory/dist'),k=require('@stdlib/wasm-base-arrays2ptrs/dist'),b=require('@stdlib/wasm-base-strided2object/dist'),w=q();function c(){return this instanceof c?(w.call(this,new D({initial:0})),this):new c}z(c,w);x(c.prototype,"main",function(r,s,t,a,i){return this.ndarray(r,s,t,_(r,t),a,i,_(r,i))});x(c.prototype,"ndarray",function(r,s,t,a,i,p,v){var d,n,u;return d=k(this,[b(r,s,t,a),b(r,i,p,v)]),n=d[0],u=d[1],w.prototype.ndarray.call(this,r,n.ptr,n.stride,n.offset,u.ptr,u.stride,u.offset),n.copy&&R(r,this.view,n.stride*n.BYTES_PER_ELEMENT,n.ptr,s,t,a,!0),u.copy&&R(r,this.view,u.stride*u.BYTES_PER_ELEMENT,u.ptr,i,p,v,!0),i});T.exports=c
});var A=l(function(U,W){
var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=S(),G=q(),y=new F;y.initializeSync();C(y,"Module",G.bind(null));W.exports=y
});var H=A();module.exports=H;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
