(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{82:function(n,e,t){"use strict";t.r(e);var a,o,r,i,c,s,l=t(0),p=t.n(l),d=t(11),h=t.n(d),m=t(6),u=t(7),g=t(9),b=t(8),x=t(10),f=(t(14),t(4)),j=t(5),v=Object(j.a)(a||(a=Object(f.a)(["\nhtml {\n  box-sizing: border-box;\n  width: 100vw;\n  /* overflow-x: hidden; */\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen - Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans - serif;\n  color: #212121;\n  background-color: #fff;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1,\nh2,\nh3,\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n\n}\n\n.list {\n  list-style: none;\n}\n\n\n.App {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n}\n\n"]))),O=t(17),y=t.n(O),S=t(18),w=t(32),k=j.b.li(o||(o=Object(f.a)(["\n\n   border-radius: 2px;\n   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n\n.ImageGalleryItem-image {\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.ImageGalleryItem-image:hover {\n  transform: scale(1.03);\n  cursor: zoom-in;\n}\n\n\n"]))),I=t(1),L=function(n){var e=n.webformatURL,t=n.largeImageURL,a=n.tag,o=n.openModalWithImage;return Object(I.jsx)(k,{children:Object(I.jsx)("img",{src:e,alt:a,className:"ImageGalleryItem-image",onClick:function(){return o(t)}})})},M=t(33),N=t.n(M),F="https://pixabay.com/api/",C="22753244-01291854404e32317fab358dd",z=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return N.a.get("".concat(F,"?q=").concat(n,"&page=").concat(e,"&key=").concat(C,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(n){return n.data.hits})).catch((function(n){return alert(n)}))},U=j.b.div(r||(r=Object(f.a)(["\n  margin: 15px auto;\n  text-align: center;\n\n\n.Button {\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.Button:hover,\n.Button:focus {\n  background-color: #303f9f;\n}\n"]))),D=function(n){var e=n.onHandleLoadMore;return Object(I.jsx)(U,{children:Object(I.jsx)("button",{type:"button",onClick:function(){return e()},className:"Button",children:"Load more"})})},E=t(12),R=j.b.div(i||(i=Object(f.a)(["\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n  \n\n\n.modal {\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n}\n"]))),B=t(34),H=t.n(B),P=(t(81),function(){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(H.a,{type:"Puff",color:"#51ff00",height:300,width:300,timeout:5e3})})}),A=function(n){Object(g.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={onLoadImage:!1},n.showLoaderForSrc=function(){var e=document.querySelector(".imageInModal");n.setState({onLoadImage:!0});var t=Object(E.a)(n);e.onload=function(){t.setState({onLoadImage:!1})}},n.handleEscape=function(e){return"Escape"===e.code&&n.props.closeModal()},n.onOverlayClick=function(e){e.target===e.currentTarget&&n.props.closeModal()},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscape),document.querySelector("body").style.overflow="hidden",this.showLoaderForSrc()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscape),document.querySelector("body").style.overflow="auto"}},{key:"render",value:function(){var n=this.props.children,e=this.state.onLoadImage;return Object(I.jsx)(R,{onClick:this.onOverlayClick,children:Object(I.jsx)("div",{className:"modal",children:e?Object(I.jsx)(P,{}):n})})}}]),t}(l.Component),W=j.b.ul(c||(c=Object(f.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),q=function(n){Object(g.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={imageNameSearch:"",page:1,imageData:null,isModalOpen:!1,setImagePath:"",onLoadImage:!1},n.closeModal=function(){return n.setState({isModalOpen:!1,setImagePath:""})},n.openModalWithImage=function(e){n.setState({isModalOpen:!0,setImagePath:e})},n.onHandleLoadMore=function(){n.setState((function(n){return{page:n.page+1}}))},n}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(){var n=Object(w.a)(y.a.mark((function n(e,t){var a,o,r,i,c,s,l,p;return y.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=e.imageNameSearch,o=this.props.imageNameSearch,r=t.page,i=this.state.page,c=function(){return x.b.success("\u041f\u043e\u0438\u0441\u043a \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d!!!")},s=function(){return x.b.error("\u041f\u043e \u0432\u0430\u0448\u0435\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e")},a===o){n.next=26;break}return this.setState({page:1,isModalOpen:!0,onLoadImage:!0}),n.prev=8,n.next=11,z(o,i);case 11:if(!(l=n.sent).length){n.next=17;break}this.setState({imageData:l}),c(),n.next=18;break;case 17:return n.abrupt("return",s());case 18:n.next=23;break;case 20:n.prev=20,n.t0=n.catch(8),alert(n.t0);case 23:return n.prev=23,this.setState({isModalOpen:!1,onLoadImage:!1}),n.finish(23);case 26:if(r===i){n.next=46;break}return this.setState({isModalOpen:!0,onLoadImage:!0}),n.prev=28,n.next=31,z(o,i);case 31:if(!(p=n.sent).length){n.next=36;break}this.setState((function(n){return{imageData:[].concat(Object(S.a)(n.imageData),Object(S.a)(p))}})),n.next=37;break;case 36:return n.abrupt("return",s());case 37:n.next=42;break;case 39:n.prev=39,n.t1=n.catch(28),alert(n.t1);case 42:return n.prev=42,window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),this.setState({isModalOpen:!1,onLoadImage:!1}),n.finish(42);case 46:case"end":return n.stop()}}),n,this,[[8,20,23,26],[28,39,42,46]])})));return function(e,t){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this,e=this.state,t=e.imageData,a=e.isModalOpen,o=e.setImagePath,r=e.onLoadImage;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(W,{children:t&&t.map((function(e){var t=e.id,a=e.webformatURL,o=e.largeImageURL,r=e.tag;return Object(I.jsx)(L,{id:t,tag:r,webformatURL:a,largeImageURL:o,openModalWithImage:n.openModalWithImage},t)}))}),(null===t||void 0===t?void 0:t.length)&&Object(I.jsx)(D,{onHandleLoadMore:this.onHandleLoadMore}),a&&Object(I.jsx)(A,{closeModal:this.closeModal,children:r?Object(I.jsx)(P,{}):Object(I.jsx)("img",{src:o,width:"1000",height:"800",alt:"ItisPhoto",className:"imageInModal"})})]})}}]),t}(l.Component),G=j.b.header(s||(s=Object(f.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n    .SearchForm {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.SearchForm-button {\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n}\n\n.SearchForm-button:hover {\n  opacity: 1;\n}\n\n.SearchForm-button-label {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n}\n\n.SearchForm-input {\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.SearchForm-input::placeholder {\n  font: inherit;\n  font-size: 18px;\n}\n\n\n"]))),T=function(n){Object(g.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={imageNameSearch:""},n.handleImageNameChange=function(e){n.setState({imageNameSearch:e.currentTarget.value.toLowerCase()})},n.handleSubmit=function(e){e.preventDefault();""===n.state.imageNameSearch.trim()&n.state.imageNameSearch.length?x.b.warn("\u0414\u043b\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0438\u0441\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0441\u043b\u043e\u0432\u043e!"):(n.props.onSubmit(n.state.imageNameSearch),n.setState({imageNameSearch:""}))},n}return Object(u.a)(t,[{key:"render",value:function(){return Object(I.jsx)(G,{children:Object(I.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(I.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(I.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(I.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"imageNameSearch",onChange:this.handleImageNameChange})]})})}}]),t}(l.Component),J=function(n){Object(g.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(m.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={imageNameSearch:""},n.handleFormSubmit=function(e){n.setState({imageNameSearch:e})},n}return Object(u.a)(t,[{key:"render",value:function(){return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(v,{}),Object(I.jsx)(T,{onSubmit:this.handleFormSubmit}),Object(I.jsx)(q,{imageNameSearch:this.state.imageNameSearch}),Object(I.jsx)(x.a,{})]})}}]),t}(l.Component);h.a.render(Object(I.jsx)(p.a.StrictMode,{children:Object(I.jsx)(J,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.d802b713.chunk.js.map