(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{58:function(e,t,a){e.exports=a(74)},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},71:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(26),o=a.n(s),l=(a(63),a(15)),r=a(16),c=a(18),d=a(17),u=a(47),m=a(5),h=(a(64),a(32)),f=a(22),b=a(27),v=a(80),p=a(81),w=a(31);function g(e){return fetch(e).then((function(e){if(200===e.status)return e.json().then((function(e){return e}));console.log("Looks like there was a problem. Status Code: "+e.status)})).catch((function(e){console.log("Fetch Error :-S",e)}))}w.a().domain([-.5,.8]).range(["#4393c3","#92c5de","#d1e5f0","#f7f7f7","#fddbc7","#f4a582","#d6604d"]);var E=w.a().domain([0,.8]).range(["#4393c3","#92c5de","#d1e5f0","#f7f7f7","#fddbc7","#f4a582","#d6604d"]),y=(a(65),a(4)),k=a(82),N=(a(66),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"closeButtonClick",value:function(){this.props.hideDetail()}},{key:"render",value:function(){var e=this,t=this.props.dataDetails.map((function(t,a){if("id"===t.feature)return i.a.createElement("div",{key:"hiddenrow"+a});var n=t.id+":"+t.feature;return i.a.createElement("div",{key:"explanation"+a,className:"flex detailrow",style:{backgroundColor:e.props.cellColors[n]}},i.a.createElement("div",{className:" flex8  p10"}," ",i.a.createElement("span",{className:"boldtext"},t.feature," "),": ",t.value),i.a.createElement("div",{className:"flex2 "}," "))}));return i.a.createElement("div",null,i.a.createElement("div",{className:"flex lightgreyhighlight "},i.a.createElement("div",{className:"flexfull m10 boldtext "}," ",this.props.targetFeature," : ",this.props.targetFeatureValue," "),i.a.createElement("div",{className:""},i.a.createElement(k.a,{onClick:this.closeButtonClick.bind(this),size:"field",renderIcon:y.f,iconDescription:"."},"Back"))),i.a.createElement("div",{className:"flex detailrow"},i.a.createElement("div",{className:" flex4  p10"}," Feature "),i.a.createElement("div",{className:"flex6 "}," ")),i.a.createElement("div",{className:"mt5"},t))}}]),a}(n.Component)),C=v.a.Table,D=v.a.TableHead,x=v.a.TableHeader,j=v.a.TableBody,R=v.a.TableCell,O=v.a.TableRow,T=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={visibleColumns:12,numDataRows:300,visibleRows:300,tableTitle:" ",tableIsSortable:!1,tableSize:"normal",dataRows:[],columnNames:["id"],columnDescription:{},targetFeature:"",datasetName:"KDD 99, Intrusion Detection",cellColors:{},selecetedRowid:0,predictionsLoaded:!1,dataLoaded:!1,showTableView:!0,maxNumericLength:7,tableHeight:"600px"},n.baseUrl=window.location.protocol+"//"+window.location.host,n.dataEndpoint="/data",n.predictEndpoint="/predict",n.colnameEndpoint="/colnames",n.hideDetailView=n.hideDetailView.bind(Object(b.a)(n)),n.predictionTitle="Model Prediction",n}return Object(r.a)(a,[{key:"hideDetailView",value:function(){this.setState({showTableView:!0,showDetailView:!1})}},{key:"documentHeight",value:function(){return Math.max(document.documentElement.clientHeight,document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight)}},{key:"componentDidMount",value:function(){var e=this;g(this.baseUrl+this.colnameEndpoint).then((function(t){if(t){var a=t.colnames,n=t.coldesc;a.includes("id")||(a.unshift("id"),n.unshift("id")),a.unshift(t.label),n.unshift(t.label),a.unshift(e.predictionTitle),n.unshift(e.predictionTitle),e.setState({columnNames:a,targetFeature:t.label,columnDescription:n}),e.loadData()}}));var t=this.documentHeight()-10-document.getElementsByClassName("tablecontent")[0].getBoundingClientRect().top;this.setState({tableHeight:t+"px"})}},{key:"loadData",value:function(){var e=this;this.setState({cellColors:{}}),g(this.baseUrl+this.dataEndpoint+"?n="+this.state.numDataRows).then((function(t){var a,n={},i=Object(f.a)(t.entries());try{for(i.s();!(a=i.n()).done;){var s=Object(h.a)(a.value,2),o=s[0],l=s[1];l.id?l.id=l.id+"":l.id=o+"",n[l.id+":"+e.state.targetFeature]=E(l[e.state.targetFeature])}}catch(r){i.e(r)}finally{i.f()}e.setState({dataRows:t,numDataRows:t.length,cellColors:n,dataLoaded:!0}),e.getPredictions(t)}))}},{key:"getPredictions",value:function(e){var t=this;e=e.slice(0,this.state.visibleRows);var a,n=this.baseUrl+this.predictEndpoint,i=(a={data:e},fetch(n,{method:"post",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){if(200===e.status)return e.json().then((function(e){return e}));console.log("Looks like there was a problem. Status Code: "+e.status)})).catch((function(e){console.log("Fetch Error :-S",e)}))),s=this.state.cellColors;i.then((function(e){var a,n=t.state.dataRows,i=Object(f.a)(e.predictions.entries());try{for(i.s();!(a=i.n()).done;){var o=Object(h.a)(a.value,2),l=o[0],r=o[1];n[l][t.predictionTitle]=r,s[e.ids[l]+":"+t.predictionTitle]=E(r)}}catch(c){i.e(c)}finally{i.f()}t.setState({dataRow:n,cellColors:s,predictionsLoaded:!0})}))}},{key:"clickRow",value:function(e){this.setState({selecetedRowid:e.target.getAttribute("rowindex"),showTableView:!1,showDetailView:!0})}},{key:"render",value:function(){var e=this,t=this.state.columnNames.slice(0,this.state.visibleColumns).map((function(t,a){return{key:t,header:e.state.columnDescription[a]||t}}));this.state.columnNames.length>=this.state.visibleColumns&&t.push({key:"...",header:"..."});var a=this.state.dataRows.slice(0,this.state.visibleRows).map((function(t,a){var n,i,s,o={},l=Object(f.a)(e.state.columnNames.slice(0,e.state.numShow));try{for(l.s();!(n=l.n()).done;){var r=n.value,c=void 0===t[r]?"_":t[r];o[r]=(i=c+"",s=e.state.maxNumericLength,i.length<=s?i:i.substring(0,s)+"..")}}catch(d){l.e(d)}finally{l.f()}return o})),n=[];if(this.state.dataLoaded){var s=this.state.dataRows[this.state.selecetedRowid];n=[];var o,l=Object(f.a)(this.state.columnNames.entries());try{for(l.s();!(o=l.n()).done;){var r=Object(h.a)(o.value,2),c=r[0],d=r[1];n.push({id:s.id,feature:this.state.columnDescription[c],value:s[d]})}}catch(u){l.e(u)}finally{l.f()}}return i.a.createElement("div",null,i.a.createElement("div",{className:"boldtext sectiontitle p10"},"Anomaly Detection on Network Intrusion Data"),i.a.createElement("div",{className:"mynotif mt10 h100 lh10  lightgreyhighlight p10 maxh16  mb10"},"The ",i.a.createElement("a",{href:"http://kdd.ics.uci.edu/databases/kddcup99/kddcup99.html",target:"black"},"KDD network intrusion"),"  dataset is a dataset of TCP connections that have been labeled as normal or representative of network attacks. Each TCP connection is represented as a set of attributes or features (derived based on domain knowledge) pertaining to each connection such as the number of failed logins, connection duration, data bytes from source to destination, etc. The table below is a random sample of  ",i.a.createElement("strong",null," ",this.state.visibleRows)," test data points which are being classified as normal or abnormal by a trained autoencoder model. The original ground truth label (label) as well as the prediction by the model is shown."),i.a.createElement("div",{className:"flex"},!this.state.predictionsLoaded&&i.a.createElement("div",{className:"smalldesc   iblock flex"},i.a.createElement("div",{className:"iblock   mr5"}," ",i.a.createElement(p.a,null),"  "),i.a.createElement("div",{className:"iblock   flex flexcolumn flexjustifycenter"}," loading anomaly predictions ... ")),this.state.predictionsLoaded&&i.a.createElement("div",{className:"smalldesc p10  flex flexcolumn flexjustifycenter"},"Showing  ",Math.min(this.state.visibleColumns,this.state.columnNames.length),"  of ",this.state.columnNames.length,"   columns  ",this.state.visibleRows,"  rows. ")),i.a.createElement("div",{className:"positionrelative  "},i.a.createElement("div",{className:"positionabsolute   w100"},this.state.dataLoaded&&i.a.createElement("div",{className:this.state.showDetailView?"":"displaynone"},i.a.createElement(N,{dataDetails:n,targetFeature:this.state.targetFeature,cellColors:this.state.cellColors,hideDetail:this.hideDetailView,targetFeatureValue:this.state.dataRows[this.state.selecetedRowid][this.state.targetFeature]}))),i.a.createElement("div",{className:this.state.showTableView?"mb10  datatable-body":"displaynone"},i.a.createElement(v.a,{isSortable:this.state.tableIsSortable,rows:a,headers:t,render:function(t){var a=t.rows,n=t.headers,s=t.getHeaderProps;return i.a.createElement(C,{style:{minHeight:e.state.tableHeight},className:" tablecontent ",stickyHeader:e.state.stickyHeader,size:e.state.tableSize},i.a.createElement(D,null,i.a.createElement(O,null,n.map((function(e){return i.a.createElement(x,s({header:e}),e.header)})))),i.a.createElement(j,null,a.map((function(t,a){return i.a.createElement(O,{style:{cursor:"pointer"},onClick:e.clickRow.bind(e),key:t.id,rowid:t.id},t.cells.map((function(n){return i.a.createElement(R,{style:{backgroundColor:e.state.cellColors[n.id]},key:n.id,rowid:t.id,rowindex:a},n.value)})))}))))}}))),i.a.createElement("div",null))}}]),a}(n.Component);a(71);var S=function(){return i.a.createElement("div",{className:""},i.a.createElement("div",{className:"topbar"}," "),i.a.createElement("div",{className:"pl20  headertitle"}))},H=a(8),F=Object(H.a)({basename:"",forceRefresh:!1,keyLength:6,getUserConfirmation:function(e,t){return t(window.confirm(e))}});F.listen((function(e){}));var L={};function V(e){e.hash in L?L[e.hash]=L[e.hash]+1:L[e.hash]=0}F.listen((function(e){V(e)}));var B=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},V(window.location),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement(S,null),i.a.createElement("main",{className:"container-fluid p10"},i.a.createElement(m.a,{exact:!0,path:"/",component:T})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.4836c607.chunk.js.map