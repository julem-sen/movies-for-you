import{o as a,c as i,a as o,b as r,F as v,r as p,d as n,t as d,w as h,e as _,u,R as g}from"./index-7b6a6eee.js";import{P as c}from"./Preloader-fa3767e0.js";const f="/movies-for-you/assets/No-Image-Placeholder-5d575749.png",y={key:0},k={class:"preloader"},L={key:1},M=o("div",{class:"home-header"},[o("h1",null,"Trending Movies")],-1),w={class:"video-gallery"},P={class:"movie-card-body"},x=["src","alt"],D={key:1,src:f,alt:"Default Photo"},b={class:"movie-card-footer"},F={class:"movie-card-information"},T={key:0,class:"movie-card-title"},N={class:"movie-card-subtitle"},C={key:0,class:"movie-year"},U={class:"year"},V=o("div",{class:"movie-type"}," Movie ",-1),$={class:"load-more-container"},B={key:0},I={key:1},R={key:2},S={components:{Preloader:c},data(){return{items:[],loading:!0,error:null,portrait:!0,page:1,totalPages:null,pageUrl:null,nextLoading:!0,imgSrc:null,slug:null,title:null}},mounted(){this.nextLoading=!1,this.fetchMovies()},computed:{hasMorePages(){return this.totalPages===null||this.page<this.totalPages},releaseDateFormat(){return this.$formats.getFormatDate(this.items.release_date,!1)}},methods:{fetchMovies(){this.$request.GetRequest(`/discover/movie?page=${this.page}`).then(e=>{if(e.data.results==="null")this.error="No movies found";else{const t=e.data;this.items=[...this.items,...t.results],this.loading=!1,this.totalPages=t.total_pages}}).catch(e=>{this.error=e,this.loading=!1})},async loadMore(){this.page++,await this.fetchMovies()},sanitizeTitle:function(e){var t=e.toLowerCase();return this.slug=t.replace(/%/g,"-"),this.slug=this.slug.replace(/\s+/g,"-"),this.slug},truncatedText(e){return this.items[e].titleText.text.length<=25?this.items[e].titleText.text:this.items[e].titleText.text.substring(0,25)+"..."},concatImgUrl(e){if(e)return"https://image.tmdb.org/t/p/original/"+e},getFormatDate(e){const t=new Date(Date.parse(e));return t.toLocaleString("default",{month:"long"})+" "+t.getDay()+", "+t.getFullYear()}}},q=Object.assign(S,{__name:"MovieList",setup(e){return(t,l)=>t.loading?(a(),i("div",y,[o("div",k,[r(c)])])):(a(),i("div",L,[M,o("div",w,[(a(!0),i(v,null,p(t.items,(s,m)=>(a(),i("div",{class:"movie-card-container",key:m},[o("div",P,[r(u(g),{to:{name:"movies",params:{id:s.id,title:s.original_title}},class:"movie-card-overlay text-white text-decoration-none",title:s.original_title},{default:h(()=>[_(" Click for more information ")]),_:2},1032,["to","title"]),s.poster_path?(a(),i("img",{key:0,src:t.concatImgUrl(s.poster_path),alt:s.original_title},null,8,x)):(a(),i("img",D))]),o("div",b,[o("div",F,[s.original_title?(a(),i("div",T,[r(u(g),{to:{name:"movies",params:{id:s.id,title:s.original_title}}},{default:h(()=>[_(d(s.original_title),1)]),_:2},1032,["to"])])):n("",!0),o("div",N,[s.release_date?(a(),i("div",C,[o("div",U,d(t.releaseDateFormat),1)])):n("",!0),V])])])]))),128))]),o("div",$,[t.nextLoading?(a(),i("div",B,[r(c)])):(a(),i("div",I)),t.hasMorePages?(a(),i("div",R,[o("button",{onClick:l[0]||(l[0]=(...s)=>t.loadMore&&t.loadMore(...s)),class:"load-more"},"Load More")])):n("",!0)]),o("div",null,d(t.error),1)]))}}),j={class:"container"},G={__name:"HomeView",setup(e){return(t,l)=>(a(),i("div",j,[r(q)]))}};export{G as default};
