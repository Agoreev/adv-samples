(this["webpackJsonpadv-examples"]=this["webpackJsonpadv-examples"]||[]).push([[0],{21:function(e,t,a){e.exports={Button:"button_Button__1pKq0",Normal:"button_Normal__3qaHR",Back:"button_Back__1fxxN",Disabled:"button_Disabled__3WvcC"}},22:function(e,t,a){e.exports={Company:"company_Company__3bw3E",Image:"company_Image__3brmL",Title:"company_Title__3oUO3"}},23:function(e,t,a){e.exports={Track:"track_Track__1Wml_",Vizualizer:"track_Vizualizer__13uqL"}},24:function(e,t,a){e.exports={Header:"header_Header__UKnqG",BackLink:"header_BackLink__3qlmw",LogoWrapper:"header_LogoWrapper__Ursxm"}},29:function(e,t,a){e.exports={CompaniesList:"companiesList_CompaniesList__1CH7p",Header:"companiesList_Header__1Zyrx"}},31:function(e,t,a){e.exports={AnswersList:"answers-list_AnswersList__3Nwai",AnswersListTitle:"answers-list_AnswersListTitle__3BA6F"}},32:function(e,t,a){e.exports={Question:"question_Question__9j6yb",TrackTitle:"question_TrackTitle__O82jv"}},49:function(e,t,a){e.exports={Loader:"spinner_Loader__3Lfuh",load2:"spinner_load2__1K_Uo"}},50:function(e,t,a){e.exports={Container:"app_Container__34XC_"}},55:function(e,t,a){e.exports=a(70)},67:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(18),o=a.n(r),c=a(14),i=a(15),l=a(17),u=a(16),m=a(22),p=a.n(m),d=a(13),h=function(e){var t=e.company;return s.a.createElement(d.b,{className:p.a.Company,to:"?sampleId=".concat(t.id)},s.a.createElement("img",{className:p.a.Image,src:t.image,alt:t.title}),s.a.createElement("span",{className:p.a.Title},t.title))},_=a(29),f=a.n(_),k=function(e){var t=e.companies,a=Object.keys(t).map((function(e){var a=t[e];return s.a.createElement(h,{key:a.id,company:a})}));return s.a.createElement("div",null,s.a.createElement("p",{className:f.a.Header},"Choose a Brand Category"),s.a.createElement("div",{className:f.a.CompaniesList},a))},y=a(19),v=a(52),w=(a(65),a(23)),E=a.n(w),x=a(48),b=a.n(x),C=a(30),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={audioCanPlay:!1,autoPlay:!1},e.player=Object(n.createRef)(),e.onAudioCanPlay=function(){e.setState({audioCanPlay:!0})},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.track!==e.track&&this.player.current.audio.current.play()}},{key:"render",value:function(){var e=this.props,t=e.track,a=e.onTrackEnded,n=s.a.createElement("div",{className:E.a.Vizualizer});return!this.state.audioCanPlay||C.isSafari&&!C.isMobile||(n=s.a.createElement("div",{className:E.a.Vizualizer},s.a.createElement(b.a,{id:"audio-canvas",height:100,width:300,audioEle:this.player.current.audio.current,capColor:"#FF2A73",capHeight:2,meterWidth:10,meterCount:512,meterColor:[{stop:0,color:"#3D58F4"},{stop:.5,color:"#883CD0"},{stop:1,color:"#D924AC"}],gap:4}))),s.a.createElement("div",{className:E.a.Track},n,s.a.createElement(v.a,{customAdditionalControls:[],showJumpControls:!1,src:t,onEnded:a,ref:this.player,onCanPlay:this.onAudioCanPlay,crossOrigin:"anonymous"}))}}]),a}(n.Component),A=a(21),q=a.n(A),O=function(e){var t=e.text,a=e.clicked,n=null,r=!1;switch(e.type){case"back":n=q.a.Back;break;case"normal":n=q.a.Normal;break;case"disabled":n=q.a.Disabled,r=!0}return s.a.createElement("button",{onClick:a,className:"".concat(q.a.Button," ").concat(n),disabled:r},t)},j=a(31),N=a.n(j),L=function(e){var t=e.answers,a=e.onAnswerSelected,n=e.onBackClicked,r=e.selectedAnswer,o=null;t&&(o=Object.keys(t).map((function(e){return s.a.createElement(O,{key:e,clicked:function(){return a(e)},text:t[e].btnText,type:r===e?"disabled":"normal"})})));var c=t?s.a.createElement("h3",{className:N.a.AnswersListTitle},"Choose User\u2019s Intent"):null;return s.a.createElement("div",{className:N.a.AnswersList},c,s.a.createElement("div",null,o),s.a.createElement(O,{clicked:n,text:"Back",type:"back"}))},T=a(32),B=a.n(T),S=a(71),H=a(72),z=function(e){return Math.floor(Math.random()*Math.floor(e))},D=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={question:e.props.question,answers:e.props.question.answers,title:e.props.question.title,track:e.props.question.track,questionsHistory:[],texts:[{text:e.props.question.text,type:"question"}],selectedAnswer:null,showAnswers:!1},e.onAnswerSelected=function(t){var a=e.state.answers[t];if(a.questions){var n=z(a.questions.length),s=a.questions[n];e.setState((function(e){var n=e.texts,r=e.questionsHistory,o=e.question;return{texts:[].concat(Object(y.a)(n),[{text:a.text,type:"answer"}]),title:s.title,track:s.track,selectedAnswer:t,questionsHistory:[].concat(Object(y.a)(r),[o]),showAnswers:!1}})),setTimeout((function(){e.setState((function(e){var t=e.texts;return{question:s,answers:s.answers,selectedAnswer:null,title:s.title,texts:[].concat(Object(y.a)(t),[{text:s.text,type:"question"}])}}))}),800)}else{var r=z(a.finalAnswers.length),o=a.finalAnswers[r];e.setState((function(e){var n=e.texts;return{texts:[].concat(Object(y.a)(n),[{text:a.text,type:"answer"}]),title:o.title,track:o.track,selectedAnswer:t,showAnswers:!1}})),setTimeout((function(){e.setState((function(e){var t=e.texts;return{title:o.title,texts:[].concat(Object(y.a)(t),[{text:o.text,type:"question"}])}}))}),800)}},e.onTrackEnded=function(){e.setState({showAnswers:!0})},e.onBackClicked=function(){0!==e.state.questionsHistory.length?e.setState((function(e){var t=e.texts,a=e.questionsHistory;return{question:a[a.length-1],answers:a[a.length-1].answers,title:a[a.length-1].title,track:a[a.length-1].track,selectedAnswer:null,questionsHistory:a.slice(0,a.length-1),texts:t.slice(0,t.length-2)}})):e.props.onExitFromQuestion()},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.track,a=e.showAnswers,n=e.answers,r=e.title,o=e.selectedAnswer;return s.a.createElement("div",{className:B.a.Question},s.a.createElement(S.a,{mode:"out-in"},s.a.createElement(H.a,{classNames:"track-title",timeout:500,key:r},s.a.createElement("h3",{className:B.a.TrackTitle},r))),s.a.createElement(g,{track:t,onTrackEnded:this.onTrackEnded}),s.a.createElement(H.a,{classNames:"answers-list",timeout:800,mountOnEnter:!0,unmountOnExit:!0,in:a},s.a.createElement("div",null,s.a.createElement(L,{answers:n||null,onAnswerSelected:this.onAnswerSelected,onBackClicked:this.onBackClicked,selectedAnswer:o}))))}}]),a}(n.Component),F=a(24),P=a.n(F),Q=a(3),I=Object(Q.e)((function(e){var t=e.title,a=e.image,n=e.location;return s.a.createElement("div",{className:P.a.Header},s.a.createElement(d.b,{className:P.a.BackLink,to:n.pathname},"\u2190 Choose another category"),s.a.createElement("div",{className:P.a.LogoWrapper},s.a.createElement("img",{src:a,alt:t}),s.a.createElement("span",null,t)))})),M=a(49),U=a.n(M),W=function(){return s.a.createElement("div",{className:U.a.Loader})},J=(a(67),a(50)),V=a.n(J),K=a(51),R=a.n(K),G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={companies:[],loading:!0},e.onExitFromQuestion=function(){e.props.history.push(e.props.location.pathname)},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;return fetch("/wp-json/wp/v2/companies").then((function(e){return e.json()})).then((function(t){var a={};t.forEach((function(e){var t=JSON.parse(e.adv_json);a[t.id]=t})),e.setState({companies:a,loading:!1})})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this.state,t=e.companies,a=e.loading,n=R.a.parse(this.props.location.search,{ignoreQueryPrefix:!0}).sampleId,r="spinner",o=s.a.createElement(W,null);if(a||(o=s.a.createElement(k,{companies:t}),r="companies"),n&&!a){var c=z(t[n].questions.length);r="question",o=s.a.createElement("div",null,s.a.createElement(I,{image:t[n].image,title:t[n].title}),s.a.createElement(D,{question:t[n].questions[c],onExitFromQuestion:this.onExitFromQuestion}))}return s.a.createElement("div",{className:V.a.Container},s.a.createElement(S.a,{mode:"out-in"},s.a.createElement(H.a,{key:r,classNames:"layout",timeout:400},o)))}}]),a}(n.Component),X=Object(Q.e)(G),Z=document.getElementById("caseStudiesApp");Z&&o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(d.a,null,s.a.createElement(Q.a,{path:"/",component:X}))),Z)}},[[55,1,2]]]);
//# sourceMappingURL=main.a10f3f67.chunk.js.map