(this["webpackJsonpreact-ip"]=this["webpackJsonpreact-ip"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(10),r=n.n(c),o=(n(16),n(7)),l=n(8),s=n(3),u=n(4),b=n(2),d=n(6),j=n(5),h=(n(17),n(0)),f=function(t){var e=t.liked,n=t.allPosts;return Object(h.jsxs)("div",{className:"app-header d-flex",children:[Object(h.jsx)("h1",{children:"Oleksandr Malishevskyi"}),Object(h.jsxs)("h2",{children:[n," posts, likes ",e]})]})},p=(n(19),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"onUpdateSearch",value:function(t){var e=t.target.value;this.setState({term:e}),this.props.onUpdateSearch(e)}},{key:"render",value:function(){return Object(h.jsx)("input",{className:"form-control search-input",type:"text",placeholder:"search by records",onChange:this.onUpdateSearch})}}]),n}(a.Component)),m=(n(20),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).buttons=[{name:"all",label:"\u0412\u0441\u0435"},{name:"like",label:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c"}],a}return Object(u.a)(n,[{key:"render",value:function(){var t=this,e=this.buttons.map((function(e){var n=e.name,a=e.label,i=t.props,c=i.filter,r=i.onFilterSelect,o=c===n?"btn-info":"btn-outline-secondary";return Object(h.jsx)("button",{type:"button",className:"btn ".concat(o),onClick:function(){return r(n)},children:a},n)}));return Object(h.jsx)("div",{className:"btn-group",children:e})}}]),n}(a.Component)),O=n(11),g=(n(21),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDelete,a=t.onToggleImportant,i=t.onToggleLiked,c="app-list-item d-flex justify-content-between";return t.important&&(c+=" important"),t.like&&(c+=" like"),Object(h.jsxs)("div",{className:c,children:[Object(h.jsx)("span",{className:"app-list-item-label",onClick:i,children:e}),Object(h.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(h.jsx)("button",{type:"button",className:"btn-star btn-sm",onClick:a,children:Object(h.jsx)("i",{className:"fa fa-star"})}),Object(h.jsx)("button",{type:"button",className:"btn-trash btn-sm",onClick:n,children:Object(h.jsx)("i",{className:"fa fa-trash-o"})}),Object(h.jsx)("i",{className:"fa fa-heart"})]})]})}}]),n}(a.Component)),v=(n(22),["id"]),k=function(t){var e=t.posts,n=t.onDelete,a=t.onToggleImportant,i=t.onToggleLiked,c=e.map((function(t){var e=t.id,c=Object(O.a)(t,v);return Object(h.jsx)("li",{className:"list-group-item",children:Object(h.jsx)(g,Object(o.a)(Object(o.a)({},c),{},{onDelete:function(){return n(e)},onToggleImportant:function(){return a(e)},onToggleLiked:function(){return i(e)}}))},e)}));return Object(h.jsx)("ul",{className:"app-list list-group",children:c})},x=(n(23),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={text:""},a.onValueChange=a.onValueChange.bind(Object(b.a)(a)),a.onSubmit=a.onSubmit.bind(Object(b.a)(a)),a}return Object(u.a)(n,[{key:"onValueChange",value:function(t){this.setState({text:t.target.value})}},{key:"onSubmit",value:function(t){t.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return Object(h.jsxs)("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit,children:[Object(h.jsx)("input",{type:"text",placeholder:"what are you thinking now",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),Object(h.jsx)("button",{type:"submit",className:"btn btn-outline-secondary",children:"Add"})]})}}]),n}(a.Component)),y=(n(24),function(t){Object(d.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={data:[{label:"Going to learn React",important:!0,like:!1,id:1},{label:"That is so good",important:!1,like:!1,id:2},{label:"I need a break...",important:!1,like:!1,id:3}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(b.a)(a)),a.addItem=a.addItem.bind(Object(b.a)(a)),a.onToggleImportant=a.onToggleImportant.bind(Object(b.a)(a)),a.onToggleLiked=a.onToggleLiked.bind(Object(b.a)(a)),a.onUpdateSearch=a.onUpdateSearch.bind(Object(b.a)(a)),a.onFilterSelect=a.onFilterSelect.bind(Object(b.a)(a)),a.maxId=4,a}return Object(u.a)(n,[{key:"deleteItem",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n.slice(0,a),c=n.slice(a+1);return{data:[].concat(Object(l.a)(i),Object(l.a)(c))}}))}},{key:"addItem",value:function(t){var e={label:t,important:!1,id:this.maxId++};this.setState((function(t){var n=t.data;return{data:[].concat(Object(l.a)(n),[e])}}))}},{key:"onToggleImportant",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(o.a)(Object(o.a)({},i),{},{important:!i.important});return{data:[].concat(Object(l.a)(n.slice(0,a)),[c],Object(l.a)(n.slice(a+1)))}}))}},{key:"onToggleLiked",value:function(t){this.setState((function(e){var n=e.data,a=n.findIndex((function(e){return e.id===t})),i=n[a],c=Object(o.a)(Object(o.a)({},i),{},{like:!i.like});return{data:[].concat(Object(l.a)(n.slice(0,a)),[c],Object(l.a)(n.slice(a+1)))}}))}},{key:"searchPost",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.indexOf(e)>-1}))}},{key:"filterPost",value:function(t,e){return"like"===e?t.filter((function(t){return t.like})):t}},{key:"onUpdateSearch",value:function(t){this.setState({term:t})}},{key:"onFilterSelect",value:function(t){this.setState({filter:t})}},{key:"render",value:function(){var t=this.state,e=t.data,n=t.term,a=t.filter,i=e.filter((function(t){return t.like})).length,c=e.length,r=this.filterPost(this.searchPost(e,n),a);return Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)(f,{liked:i,allPosts:c}),Object(h.jsxs)("div",{className:"search-panel d-flex",children:[Object(h.jsx)(p,{onUpdateSearch:this.onUpdateSearch}),Object(h.jsx)(m,{filter:a,onFilterSelect:this.onFilterSelect})]}),Object(h.jsx)(k,{posts:r,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),Object(h.jsx)(x,{onAdd:this.addItem})]})}}]),n}(a.Component));n(25);r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.3220d7a3.chunk.js.map