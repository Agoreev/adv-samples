(this["webpackJsonpadv-examples"]=this["webpackJsonpadv-examples"]||[]).push([[0],{12:function(e,t,n){e.exports={TrackText:"track-text_TrackText__2dIWK",TextsList:"track-text_TextsList__2pfnt",TextItem:"track-text_TextItem__2tBRI",TextBlock:"track-text_TextBlock__12JDr",Answer:"track-text_Answer__2SqgA",Question:"track-text_Question__2V6fv"}},18:function(e,t,n){e.exports={Company:"company_Company__3bw3E",Image:"company_Image__3brmL",Title:"company_Title__3oUO3"}},19:function(e,t,n){e.exports={Button:"button_Button__1pKq0",Normal:"button_Normal__3qaHR",Back:"button_Back__1fxxN"}},20:function(e,t,n){e.exports={CompaniesList:"companiesList_CompaniesList__1CH7p",Header:"companiesList_Header__1Zyrx"}},21:function(e,t,n){e.exports={Track:"track_Track__1Wml_",Vizualizer:"track_Vizualizer__13uqL"}},22:function(e,t,n){e.exports={AnswersList:"answers-list_AnswersList__3Nwai",AnswersListTitle:"answers-list_AnswersListTitle__3BA6F"}},23:function(e,t,n){e.exports={Question:"question_Question__9j6yb",TrackTitle:"question_TrackTitle__O82jv"}},38:function(e,t,n){e.exports={CompanyLogo:"company-logo_CompanyLogo__33HuQ"}},39:function(e,t,n){e.exports={Loader:"spinner_Loader__3Lfuh",load2:"spinner_load2__1K_Uo"}},40:function(e,t,n){e.exports={Container:"app_Container__34XC_"}},43:function(e,t,n){e.exports=n(52)},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(15),r=n.n(s),c=n(6),i=n(7),l=n(10),u=n(9),m=n(18),p=n.n(m),d=function(e){var t=e.company,n=e.onCompanySelected;return o.a.createElement("div",{className:p.a.Company,onClick:function(){return n(t.id)}},o.a.createElement("img",{className:p.a.Image,src:t.image,alt:t.title}),o.a.createElement("span",{className:p.a.Title},t.title))},_=n(20),y=n.n(_),k=function(e){var t=e.companies,n=e.onCompanySelected,a=Object.keys(t).map((function(e){var a=t[e];return o.a.createElement(d,{key:a.id,company:a,onCompanySelected:n})}));return o.a.createElement("div",null,o.a.createElement("p",{className:y.a.Header},"Select sample"),o.a.createElement("div",{className:y.a.CompaniesList},a))},f=n(13),x=n(12),h=n.n(x),v=n(54),E=n(55),w=(a.Component,n(41)),C=(n(50),n(21)),g=n.n(C),b=n(37),q=n.n(b),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var o=arguments.length,s=new Array(o),r=0;r<o;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={audioPlaying:!1},e.player=Object(a.createRef)(),e.onAudioPlaying=function(){e.setState({audioPlaying:!0})},e}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(e){this.props.track!==e.track&&this.player.current.audio.current.play()}},{key:"render",value:function(){var e=this.props,t=e.track,n=e.onTrackEnded,a=null;return this.state.audioPlaying&&(a=o.a.createElement("div",{className:g.a.Vizualizer},o.a.createElement(q.a,{id:"audio-canvas",height:100,width:300,audioEle:this.player.current.audio.current,capColor:"#FF2A73",capHeight:2,meterWidth:10,meterCount:512,meterColor:[{stop:0,color:"#3D58F4"},{stop:.5,color:"#883CD0"},{stop:1,color:"#D924AC"}],gap:4}))),o.a.createElement("div",{className:g.a.Track},a,o.a.createElement(w.a,{customAdditionalControls:[],showJumpControls:!1,src:t,autoPlay:!0,onEnded:n,ref:this.player,onCanPlay:this.onAudioPlaying,crossOrigin:"anonymous"}))}}]),n}(a.Component),A=n(19),O=n.n(A),j=function(e){var t=e.text,n=e.clicked,a=null;switch(e.type){case"back":a=O.a.Back;break;case"normal":a=O.a.Normal}return o.a.createElement("button",{onClick:n,className:"".concat(O.a.Button," ").concat(a)},t)},S=n(22),N=n.n(S),L=function(e){var t=e.answers,n=e.onAnswerSelected,a=e.onBackClicked,s=null;t&&(s=Object.keys(t).map((function(e){return o.a.createElement(j,{key:e,clicked:function(){return n(t[e])},text:t[e].btnText,type:"normal"})})));var r=t?o.a.createElement("h3",{className:N.a.AnswersListTitle},"Choose user\u2019s intent"):null;return o.a.createElement("div",{className:N.a.AnswersList},r,o.a.createElement("div",null,s),o.a.createElement(j,{clicked:a,text:"Back",type:"back"}))},B=n(23),H=n.n(B),I=n(53),Q=function(e){return Math.floor(Math.random()*Math.floor(e))},F=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={question:e.props.question,questionsHistory:[],texts:[{text:e.props.question.text,type:"question"}],track:e.props.question.track,showAnswers:!1},e.onAnswerSelected=function(t){if(t.questions){var n=Q(t.questions.length),a=t.questions[n];e.setState((function(e){var n=e.texts,o=e.questionsHistory,s=e.question;return{texts:[].concat(Object(f.a)(n),[{text:t.text,type:"answer"}]),track:a.track,questionsHistory:[].concat(Object(f.a)(o),[s]),showAnswers:!1}})),setTimeout((function(){e.setState((function(e){var t=e.texts;return{question:a,texts:[].concat(Object(f.a)(t),[{text:a.text,type:"question"}])}}))}),800)}else{var o=Q(t.finalAnswers.length),s=t.finalAnswers[o];e.setState((function(e){var n=e.texts,a=e.questionsHistory,o=e.question;return{texts:[].concat(Object(f.a)(n),[{text:t.text,type:"answer"}]),track:s.track,questionsHistory:[].concat(Object(f.a)(a),[o]),showAnswers:!1}})),setTimeout((function(){e.setState((function(e){var t=e.texts;return{question:s,texts:[].concat(Object(f.a)(t),[{text:s.text,type:"question"}])}}))}),800)}},e.onTrackEnded=function(){e.setState({showAnswers:!0})},e.onBackClicked=function(){0!==e.state.questionsHistory.length?e.setState((function(e){var t=e.texts,n=e.questionsHistory;return{question:n[n.length-1],track:n[n.length-1].track,questionsHistory:n.slice(0,n.length-1),answer:null,texts:t.slice(0,t.length-2)}})):e.props.onExitFromQuestion()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state,t=e.question,n=e.track,a=(e.texts,e.showAnswers);return o.a.createElement("div",{className:H.a.Question},o.a.createElement(I.a,{mode:"out-in"},o.a.createElement(v.a,{classNames:"track-title",timeout:500,key:t.title},o.a.createElement("h3",{className:H.a.TrackTitle},t.title))),o.a.createElement(T,{track:n,onTrackEnded:this.onTrackEnded}),o.a.createElement(v.a,{classNames:"answers-list",timeout:800,mountOnEnter:!0,unmountOnExit:!0,in:a},o.a.createElement("div",null,o.a.createElement(L,{answers:t?t.answers:null,onAnswerSelected:this.onAnswerSelected,onBackClicked:this.onBackClicked}))))}}]),n}(a.Component),P=n(38),z=n.n(P),D=function(e){var t=e.title,n=e.image;return o.a.createElement("div",{className:z.a.CompanyLogo},o.a.createElement("img",{src:n,alt:t}),o.a.createElement("span",null,t))},J=n(39),M=n.n(J),V=function(){return o.a.createElement("div",{className:M.a.Loader})},K=(n(51),n(40)),R=n.n(K),U=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),s=0;s<a;s++)o[s]=arguments[s];return(e=t.call.apply(t,[this].concat(o))).state={companies:[],companiesFromJson:{},selectedCompanyId:null,loading:!0},e.onCompanySelected=function(t){e.setState({selectedCompanyId:t})},e.onExitFromQuestion=function(){e.setState({selectedCompanyId:null})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;return fetch("http://instreamatic.lc/wp-json/wp/v2/companies").then((function(e){return e.json()})).then((function(t){var n={};t.map((function(e){var t=JSON.parse(e.adv_json);n[t.id]=t})),e.setState({companies:n,loading:!1})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this.state,t=e.companies,n=e.selectedCompanyId,a=e.loading,s=o.a.createElement(V,null);if(a||(s=o.a.createElement(k,{companies:t,onCompanySelected:this.onCompanySelected})),n){var r=Q(t[n].questions.length);s=o.a.createElement("div",null,o.a.createElement(D,{image:t[n].image,title:t[n].title}),o.a.createElement(F,{question:t[n].questions[r],onExitFromQuestion:this.onExitFromQuestion}))}return o.a.createElement("div",{className:R.a.Container},o.a.createElement(I.a,{mode:"out-in"},o.a.createElement(v.a,{key:n||a,classNames:"layout",timeout:400},s)))}}]),n}(a.Component),W=document.getElementById("caseStudiesApp");W&&r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(U,null)),W)}},[[43,1,2]]]);
//# sourceMappingURL=main.4e6564a5.chunk.js.map