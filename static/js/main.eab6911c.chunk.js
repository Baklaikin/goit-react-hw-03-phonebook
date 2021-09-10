(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={form:"PhoneForm_form__3W7TC",formInput:"PhoneForm_formInput__32Goc",formLabel:"PhoneForm_formLabel__2s0v2",addToContacts:"PhoneForm_addToContacts__1uuag"}},,,,,,function(t,e,n){t.exports={list:"ContactList_list__3QhMP",item:"ContactList_item__2zYLX",deleteBtn:"ContactList_deleteBtn__1eBHP"}},,function(t,e,n){t.exports={findForm:"FilterContacts_findForm__13uJw",findFormLabel:"FilterContacts_findFormLabel__wUXR0"}},,function(t,e,n){t.exports={container:"MainContainer_container__1ayEv"}},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),o=n(11),c=n.n(o),i=(n(18),n(7)),s=n(13),l=n(3),u=n(4),m=n(6),d=n(5),b=n(2),h=n.n(b),f=n(0),j=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.currentTarget.value;t.setState(Object(i.a)({},e.currentTarget.name,n))},t.addToContacts=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.addToContacts,className:h.a.form,children:[Object(f.jsxs)("label",{className:h.a.formLabel,children:["Name",Object(f.jsx)("input",{className:h.a.formInput,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleInputChange})]}),Object(f.jsxs)("label",{className:h.a.formLabel,children:["Number",Object(f.jsx)("input",{className:h.a.formInput,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleInputChange})]}),Object(f.jsx)("button",{className:h.a.addToContacts,type:"submit",children:"Add to contacts"})]})}}]),n}(a.Component),p=n(10),O=n.n(p),C=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("form",{className:O.a.findForm,children:Object(f.jsxs)("label",{className:O.a.findFormLabel,children:["Find contacts by name",Object(f.jsx)("input",{type:"text",name:"filter",value:this.props.value,onChange:this.props.onSubmit})]})})}}]),n}(a.Component),v=n(8),_=n.n(v),x=function(t){var e=t.data,n=t.onDeleteItem,a=e.contacts.filter((function(t){return t.name.toLowerCase().trim().includes(e.filter.toLowerCase().trim())}));return Object(f.jsx)("ul",{className:_.a.list,children:a.map((function(t){var e=t.id,a=t.name,r=t.number;return Object(f.jsxs)("li",{className:_.a.item,children:[a,": ",r,Object(f.jsx)("button",{className:_.a.deleteBtn,type:"button",name:"delete",onClick:function(){return n(e)},children:"Delete"})]},e)}))})},g=n(12),F=n.n(g);var S=function(t){var e=t.children;return Object(f.jsx)("div",{className:F.a.container,children:e})},y=n(23),N=(n(20),function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;return Object(l.a)(this,n),(t=e.call(this)).formSubmitHandler=function(e){t.state.contacts.find((function(t){return t.name.toLowerCase().trim()===e.name.toLowerCase().trim()}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){var n={id:Object(y.a)(),name:e.name,number:e.number};return{contacts:[].concat(Object(s.a)(t.contacts),[n])}}))},t.handleFilterField=function(e){return t.setState({filter:e.target.value})},t.handleInputChange=function(e){return t.setState(Object(i.a)({},e.currentTarget.name,e.currentTarget.value))},t.deleteButtonHandler=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));null!==t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts.length!==e.contacts.length&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(S,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(j,{onSubmit:this.formSubmitHandler}),Object(f.jsx)("h2",{children:"Contacts:"}),Object(f.jsx)(C,{value:this.state.filter,onSubmit:this.handleFilterField}),Object(f.jsx)(x,{data:this.state,onDeleteItem:this.deleteButtonHandler})]})})}}]),n}(r.a.Component));c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(N,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.eab6911c.chunk.js.map