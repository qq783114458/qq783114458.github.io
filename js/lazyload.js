var LazyLoad=function(){"use strict";function t(){return(t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var n="undefined"!=typeof window,e=n&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=n&&"IntersectionObserver"in window,r=n&&"classList"in document.createElement("p"),a=n&&window.devicePixelRatio>1,o={elements_selector:".lazy",container:e||n?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1},c=function(n){return t({},o,n)},s=function(t,n){var e,i="LazyLoad::Initialized",r=new t(n);try{e=new CustomEvent(i,{detail:{instance:r}})}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:r})}window.dispatchEvent(e)},l="loading",u="loaded",d="applied",f="error",_="native",g="data-",v="ll-status",b=function(t,n){return t.getAttribute(g+n)},p=function(t){return b(t,v)},h=function(t,n){return function(t,n,e){var i="data-ll-status";null!==e?t.setAttribute(i,e):t.removeAttribute(i)}(t,0,n)},m=function(t){return h(t,null)},E=function(t){return null===p(t)},A=function(t){return p(t)===_},I=[l,u,d,f],L=function(t,n,e,i){t&&(void 0===i?void 0===e?t(n):t(n,e):t(n,e,i))},w=function(t,n){r?t.classList.add(n):t.className+=(t.className?" ":"")+n},y=function(t,n){r?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\s+)"+n+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},k=function(t){return t.llTempImage},O=function(t,n){if(n){var e=n._observer;e&&e.unobserve(t)}},z=function(t,n){t&&(t.loadingCount+=n)},x=function(t,n){t&&(t.toLoadCount=n)},C=function(t){for(var n,e=[],i=0;n=t.children[i];i+=1)"SOURCE"===n.tagName&&e.push(n);return e},N=function(t,n,e){e&&t.setAttribute(n,e)},M=function(t,n){t.removeAttribute(n)},R=function(t){return!!t.llOriginalAttrs},G=function(t){if(!R(t)){var n={};n.src=t.getAttribute("src"),n.srcset=t.getAttribute("srcset"),n.sizes=t.getAttribute("sizes"),t.llOriginalAttrs=n}},T=function(t){if(R(t)){var n=t.llOriginalAttrs;N(t,"src",n.src),N(t,"srcset",n.srcset),N(t,"sizes",n.sizes)}},D=function(t,n){N(t,"sizes",b(t,n.data_sizes)),N(t,"srcset",b(t,n.data_srcset)),N(t,"src",b(t,n.data_src))},F=function(t){M(t,"src"),M(t,"srcset"),M(t,"sizes")},P=function(t,n){var e=t.parentNode;e&&"PICTURE"===e.tagName&&C(e).forEach(n)},S={IMG:function(t,n){P(t,(function(t){G(t),D(t,n)})),G(t),D(t,n)},IFRAME:function(t,n){N(t,"src",b(t,n.data_src))},VIDEO:function(t,n){!function(t,e){C(t).forEach((function(t){N(t,"src",b(t,n.data_src))}))}(t),N(t,"poster",b(t,n.data_poster)),N(t,"src",b(t,n.data_src)),t.load()}},V=function(t,n){var e=S[t.tagName];e&&e(t,n)},j=function(t,n,e){z(e,1),w(t,n.class_loading),h(t,l),L(n.callback_loading,t,e)},U=["IMG","IFRAME","VIDEO"],$=function(t,n){!n||function(t){return t.loadingCount>0}(n)||function(t){return t.toLoadCount>0}(n)||L(t.callback_finish,n)},q=function(t,n,e){t.addEventListener(n,e),t.llEvLisnrs[n]=e},H=function(t,n,e){t.removeEventListener(n,e)},B=function(t){return!!t.llEvLisnrs},J=function(t){if(B(t)){var n=t.llEvLisnrs;for(var e in n){var i=n[e];H(t,e,i)}delete t.llEvLisnrs}},K=function(t,n,e){!function(t){delete t.llTempImage}(t),z(e,-1),function(t){t&&(t.toLoadCount-=1)}(e),y(t,n.class_loading),n.unobserve_completed&&O(t,e)},Q=function(t,n,e){var i=k(t)||t;B(i)||function(t,n,e){B(t)||(t.llEvLisnrs={});var i="VIDEO"===t.tagName?"loadeddata":"load";q(t,i,n),q(t,"error",e)}(i,(function(r){!function(t,n,e,i){var r=A(n);K(n,e,i),w(n,e.class_loaded),h(n,u),L(e.callback_loaded,n,i),r||$(e,i)}(0,t,n,e),J(i)}),(function(r){!function(t,n,e,i){var r=A(n);K(n,e,i),w(n,e.class_error),h(n,f),L(e.callback_error,n,i),r||$(e,i)}(0,t,n,e),J(i)}))},W=function(t,n,e){!function(t){t.llTempImage=document.createElement("IMG")}(t),Q(t,n,e),function(t,n,e){var i=b(t,n.data_bg),r=b(t,n.data_bg_hidpi),o=a&&r?r:i;o&&(t.style.backgroundImage='url("'.concat(o,'")'),k(t).setAttribute("src",o),j(t,n,e))}(t,n,e),function(t,n,e){var i=b(t,n.data_bg_multi),r=b(t,n.data_bg_multi_hidpi),o=a&&r?r:i;o&&(t.style.backgroundImage=o,function(t,n,e){w(t,n.class_applied),h(t,d),n.unobserve_completed&&O(t,n),L(n.callback_applied,t,e)}(t,n,e))}(t,n,e)},X=function(t,n,e){!function(t){return U.indexOf(t.tagName)>-1}(t)?W(t,n,e):function(t,n,e){Q(t,n,e),V(t,n),j(t,n,e)}(t,n,e)},Y=["IMG","IFRAME"],Z=function(t){return t.use_native&&"loading"in HTMLImageElement.prototype},tt=function(t,n,e){t.forEach((function(t){return function(t){return t.isIntersecting||t.intersectionRatio>0}(t)?function(t,n,e,i){h(t,"entered"),w(t,e.class_entered),y(t,e.class_exited),function(t,n,e){n.unobserve_entered&&O(t,e)}(t,e,i),L(e.callback_enter,t,n,i),function(t){return I.indexOf(p(t))>=0}(t)||X(t,e,i)}(t.target,t,n,e):function(t,n,e,i){E(t)||(w(t,e.class_exited),function(t,n,e,i){e.cancel_on_exit&&function(t){return p(t)===l}(t)&&"IMG"===t.tagName&&(J(t),function(t){P(t,(function(t){F(t)})),F(t)}(t),function(t){P(t,(function(t){T(t)})),T(t)}(t),y(t,e.class_loading),z(i,-1),m(t),L(e.callback_cancel,t,n,i))}(t,n,e,i),L(e.callback_exit,t,n,i))}(t.target,t,n,e)}))},nt=function(t){return Array.prototype.slice.call(t)},et=function(t){return t.container.querySelectorAll(t.elements_selector)},it=function(t){return function(t){return p(t)===f}(t)},rt=function(t,n){return function(t){return nt(t).filter(E)}(t||et(n))},at=function(t,e){var r=c(t);this._settings=r,this.loadingCount=0,function(t,n){i&&!Z(t)&&(n._observer=new IntersectionObserver((function(e){tt(e,t,n)}),function(t){return{root:t.container===document?null:t.container,rootMargin:t.thresholds||t.threshold+"px"}}(t)))}(r,this),function(t,e){n&&window.addEventListener("online",(function(){!function(t,n){var e;(e=et(t),nt(e).filter(it)).forEach((function(n){y(n,t.class_error),m(n)})),n.update()}(t,e)}))}(r,this),this.update(e)};return at.prototype={update:function(t){var n,r,a=this._settings,o=rt(t,a);x(this,o.length),!e&&i?Z(a)?function(t,n,e){t.forEach((function(t){-1!==Y.indexOf(t.tagName)&&(t.setAttribute("loading","lazy"),function(t,n,e){Q(t,n,e),V(t,n),h(t,_)}(t,n,e))})),x(e,0)}(o,a,this):(r=o,function(t){t.disconnect()}(n=this._observer),function(t,n){n.forEach((function(n){t.observe(n)}))}(n,r)):this.loadAll(o)},destroy:function(){this._observer&&this._observer.disconnect(),et(this._settings).forEach((function(t){delete t.llOriginalAttrs})),delete this._observer,delete this._settings,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){var n=this,e=this._settings;rt(t,e).forEach((function(t){O(t,n),X(t,e,n)}))}},at.load=function(t,n){var e=c(n);X(t,e)},at.resetStatus=function(t){m(t)},n&&function(t,n){if(n)if(n.length)for(var e,i=0;e=n[i];i+=1)s(t,e);else s(t,n)}(at,window.lazyLoadOptions),at}();