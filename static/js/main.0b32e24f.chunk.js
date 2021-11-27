(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,s){},36:function(e,t,s){},51:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(9),n=s.n(a),i=(s(22),s.p,s(36),s(3)),r=s(15),l=s(16),j=s(18),o=s(17),h=s(53),d=s(54),b=s(55),u=s(56),p=(s(25),s(1)),O=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).displayData=function(e){c.setState({displayData:e})},c.state={displayData:!1,accessTokens:[]},c}return Object(l.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(h.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsxs)(d.a,{children:[Object(p.jsx)("h1",{className:"display-3",children:"What music do you like?"}),Object(p.jsx)("p",{className:"lead",children:"Actually, don't answer that. Based on your last 50 listens, I already know."}),Object(p.jsx)("hr",{className:"my-2"}),Object(p.jsx)(b.a,{onClick:function(e){return window.location.href="https://accounts.spotify.com/authorize?client_id=136c245c7f744cf1844b2bb64aadbcb1&response_type=code&redirect_uri=http://ec2-3-19-57-186.us-east-2.compute.amazonaws.com:5000/auth&scope=playlist-read-private%20playlist-modify-private%20playlist-modify-public%20user-read-recently-played%20user-top-read&show_dialog=true"},children:"Login with Spotify to begin"})]}),this.state.displayData&&this.displayResults()]})})})}},{key:"spotifyLogin",value:function(){fetch("https://accounts.spotify.com/authorize?\n      client_id=136c245c7f744cf1844b2bb64aadbcb1&\n      response_type=code&\n      redirect_uri=http://127.0.0.1:5000/&\n      scope=playlist-read-private%20playlist-modify-private%20playlist-modify-public\n      %20user-read-recently-played%20user-top-read&\n      show_dialog=true").then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"displayResults",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(h.a,{children:Object(p.jsxs)(u.a,{left:!0,children:[Object(p.jsx)("h2",{children:"You really like to listen to rock music."}),Object(p.jsx)("h4",{children:"Cool. I don't have anything else to say about that."})]})})})}}]),s}(c.Component),m=s(14),x=s(7),y=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(e){var c;return Object(r.a)(this,s),(c=t.call(this,e)).displayData=function(e){c.setState({displayData:e})},c.state={displayData:!1,accessTokens:[],playData:{}},c.fetchData=c.fetchData.bind(Object(m.a)(c)),c.setState=c.setState.bind(Object(m.a)(c)),c}return Object(l.a)(s,[{key:"componentDidMount",value:function(){window.addEventListener("load",this.fetchData)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.fetchData)}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(h.a,{children:Object(p.jsxs)("div",{children:[Object(p.jsxs)(d.a,{children:[Object(p.jsx)("h1",{className:"display-3",children:"Thanks for signing in."}),Object(p.jsx)("p",{className:"lead",children:"Time to see how you've been doing lately."}),Object(p.jsx)("hr",{className:"my-2"})]}),!this.state.displayData&&this.displayLoading(),this.state.displayData&&this.displayResults()]})})})}},{key:"fetchData",value:function(){var e=this;fetch("http://ec2-3-19-57-186.us-east-2.compute.amazonaws.com:5000/psy").then((function(e){return e.json()})).then((function(t){console.log("GET response:"),console.log(t),e.setState({playData:t}),e.displayData(!0)}))}},{key:"displayLoading",value:function(){return Object(p.jsx)("div",{className:"spinner-border",role:"status",children:Object(p.jsx)("span",{className:"sr-only"})})}},{key:"displayResults",value:function(){var e=this.state.playData;return Object(p.jsxs)("div",{children:[Object(p.jsxs)(u.a,{left:!0,children:[Object(p.jsx)("h2",{children:"Age"}),Object(p.jsxs)("h5",{children:["According to Spotify, your music taste is ",e.age.ymd[0]," years, ",e.age.ymd[1]," months, and ",e.age.ymd[2]," days old!"]}),Object(p.jsx)("p",{children:e.age.blurb})]}),Object(p.jsx)("hr",{className:"my-2"}),Object(p.jsxs)(u.a,{left:!0,children:[Object(p.jsx)("h2",{children:"Location"}),Object(p.jsx)("h5",{children:"According to my calculations..."}),Object(p.jsx)("p",{children:e.location.blurb})]}),Object(p.jsx)("hr",{className:"my-2"}),Object(p.jsxs)(u.a,{left:!0,children:[Object(p.jsx)("h2",{children:"Listen Range"}),Object(p.jsx)("p",{children:e.range.blurb})]}),Object(p.jsx)("hr",{className:"my-2"}),Object(p.jsxs)(u.a,{left:!0,children:[Object(p.jsx)("h2",{children:"Recommended Artists"}),Object(p.jsxs)(x.a,{children:[" ",e.recommended.map((function(e){return Object(p.jsxs)(x.a.Item,{children:[Object(p.jsx)("a",{href:e.url,children:Object(p.jsx)("img",{src:e.images[1].url})}),Object(p.jsx)(x.a.Caption,{children:Object(p.jsx)("h4",{children:e.name})})]})}))]})]}),Object(p.jsx)("hr",{className:"my-2"}),Object(p.jsxs)(u.a,{left:!0,children:[Object(p.jsx)("h2",{children:"Your Top Songs"}),Object(p.jsx)("p",{children:e.top_songs.blurb}),Object(p.jsxs)(x.a,{children:[" ",e.top_songs.songs.map((function(e){return Object(p.jsxs)(x.a.Item,{children:[Object(p.jsx)("a",{href:e.url,children:Object(p.jsx)("img",{src:e.images[1].url})}),Object(p.jsxs)(x.a.Caption,{children:[Object(p.jsx)("h4",{children:e.name}),e.artists.map((function(e){return Object(p.jsxs)("h5",{children:["Artist: ",e.name]})})),Object(p.jsxs)("h5",{children:["Album: ",e.album]})]})]})}))]})]}),Object(p.jsx)("hr",{className:"my-2"}),Object(p.jsxs)(u.a,{left:!0,children:[Object(p.jsx)("h2",{children:"Your Top Artists"}),Object(p.jsx)("p",{children:e.top_artists.blurb}),Object(p.jsxs)(x.a,{children:[" ",e.top_artists.artists.map((function(e){return Object(p.jsxs)(x.a.Item,{children:[Object(p.jsx)("a",{href:e.url,children:Object(p.jsx)("img",{src:e.images[1].url})}),Object(p.jsx)(x.a.Caption,{children:Object(p.jsx)("h4",{children:e.name})})]})}))]})]}),Object(p.jsx)("hr",{className:"my-2"}),Object(p.jsxs)(u.a,{left:!0,children:[Object(p.jsx)("h2",{children:"Average Song Length"}),Object(p.jsxs)("h5",{children:[e.length[0],":",e.length[1]]})]}),Object(p.jsx)("hr",{className:"my-2"}),Object(p.jsxs)(u.a,{left:!0,children:[Object(p.jsx)("h2",{children:"Top Genres"})," ",e.top_genres.map((function(e){return Object(p.jsx)("h5",{children:e[0][0].toUpperCase()+e[0].substring(1)})}))]}),Object(p.jsx)("hr",{className:"my-2"}),Object(p.jsxs)(u.a,{left:!0,children:[Object(p.jsx)("h2",{children:"Average Popularity"}),Object(p.jsx)("h5",{children:e.popularity.score}),Object(p.jsx)("p",{children:e.popularity.blurb}),Object(p.jsxs)(x.a,{children:[Object(p.jsxs)(x.a.Item,{children:[Object(p.jsx)("a",{href:e.popularity.most.url,children:Object(p.jsx)("img",{src:e.popularity.most.images[1].url})}),Object(p.jsxs)(x.a.Caption,{children:[Object(p.jsxs)("h4",{children:["Most Popular: ",e.popularity.most.name]}),e.popularity.most.artists.map((function(e){return Object(p.jsxs)("h5",{children:["Artist: ",e.name]})})),Object(p.jsxs)("h5",{children:["Album: ",e.popularity.most.album]})]})]}),Object(p.jsxs)(x.a.Item,{children:[Object(p.jsx)("a",{href:e.popularity.least.url,children:Object(p.jsx)("img",{src:e.popularity.least.images[1].url})}),Object(p.jsxs)(x.a.Caption,{children:[Object(p.jsxs)("h4",{children:["Most Obscure: ",e.popularity.least.name]}),e.popularity.least.artists.map((function(e){return Object(p.jsxs)("h5",{children:["Artist: ",e.name]})})),Object(p.jsxs)("h5",{children:["Album: ",e.popularity.least.album]})]})]})]})]}),Object(p.jsx)("hr",{className:"my-2"})]})}}]),s}(c.Component),f=function(){return Object(p.jsxs)(i.c,{children:[Object(p.jsx)(i.a,{path:"/",element:Object(p.jsx)(O,{})}),Object(p.jsx)(i.a,{path:"/signedin",element:Object(p.jsx)(y,{})})]})};var g=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(f,{})})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,57)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))},D=s(24);n.a.render(Object(p.jsx)(D.a,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),v()}},[[51,1,2]]]);
//# sourceMappingURL=main.0b32e24f.chunk.js.map