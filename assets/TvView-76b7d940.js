import{P as R}from"./Preloader-c4f106be.js";import{P as x,F as D,a as T,b as U,c as B,d as V,e as C}from"./FaSolidStar-e80c6893.js";import{_ as F,o as e,c as i,a as s,b as u,e as m,t as c,F as N,r as P,n as g,f as _,g as d}from"./index-5234520e.js";const O={components:{Preloader:R,PlayIcon:x,FaRegularBookmark:D,FaRegularHeart:T,FaRegularStar:U,FaSolidBookmark:B,FaSolidHeart:V,FaSolidStar:C},data(){return{shows:{},loading:!0,imgUrl:null,genres:[],rating:0,radius:30,progressColor:"rgb(63,0,156)",showModal:!1,youtubeUrl:null,youtubeId:null,videoData:[],videoNewData:{},tvId:null,noResultOrEmpty:!0,showHeartSolid:!0,showBookmarkSolid:!0,showStarSolid:!0}},mounted(){this.fetchInformation(),this.getVideoInfo()},watch:{"$route.params.id"(r){this.loading=!1,this.fetchInformation(),this.getVideoInfo()}},methods:{async fetchInformation(){const r=this.$route.params.id;await this.$request.GetRequest(`/tv/${r}`).then(o=>{const l=o.data;this.imgUrl=this.$formats.concatBGImgUrl(l.backdrop_path),this.rating=Math.round(l.vote_average/10*100),this.shows=l,this.genres=l.genres}).catch(o=>{o.response.status===404?this.shows=o.response.data:this.error=o}).finally(()=>{this.loading=!1})},async getVideoInfo(){this.tvId=this.$route.params.id,await this.$request.GetRequest(`/tv/${this.tvId}/videos`).then(r=>{const o=r.data;this.videoData=o.results;const p=this.videoData.filter(t=>t.type==="Trailer").reduce((t,a)=>{const h=new Date(a.published_at);return h>t?h:t});this.videoNewData=p,this.youtubeUrl=`https://www.youtube.com/embed/${this.videoNewData.key}`,this.youtubeId=this.videoNewData.key,this.showModal=!0,this.noResultOrEmpty=!1}).catch(r=>{this.noResultOrEmpty=!0}).finally(()=>{this.loading=!1})},emptyYoutubeUrl(){this.youtubeUrl="",this.showModal=!1},toggle(r){r===1?this.showHeartSolid=!this.showHeartSolid:r===2?this.showBookmarkSolid=!this.showBookmarkSolid:this.showStarSolid=!this.showStarSolid}},computed:{circumference(){return 2*Math.PI*this.radius},progressOffset(){return this.circumference*(1-this.rating/100)},progressColor(){return this.rating>70?"#4caf50":this.rating>50?"#ffc107":"#f44336"},formattedNames(){return this.genres.map((r,o)=>{const l=r.name.split(", ");return o===this.genres.length-1?`${l[0]} ${l.slice(1).join(" ")}`:`${l[0]}, ${l.slice(1).join(" ")}`})},PosterPath(){return this.$formats.concatImgUrl(this.shows.poster_path)},ReleasedYear(){return this.$formats.getYear(this.shows.first_air_date)},ReleaseDate(){return this.$formats.getDuration(this.shows.episode_run_time)},TVRuntime(){return this.$formats.getDuration(this.shows.last_episode_to_air.runtime)}}},H={key:0,class:"preloader"},Y=s("h1",null,"No Records Found",-1),M=[Y],E={key:1},j={key:0},q={class:"preloader"},G={key:1},L={class:"details-container custom_bg"},z={class:"single-column"},A={class:"inner"},J={class:"poster_wrapper"},K={class:"poster"},Q=["src","alt"],W={class:"movie_information_wrapper"},X={class:"title-header"},Z={class:"title"},$={class:"muted"},ss={class:"sub-title"},ts={key:0},es={key:1},os={class:"actions"},as={class:"action-item"},is={class:"progress-chart-container"},rs={class:"progress-chart-wrapper"},ls={class:"progress-chart-circle"},ns=["r"],cs=["r"],ds={class:"progress-chart-text"},_s=s("sup",null,"%",-1),hs=s("span",null,"User Score",-1),us={class:"action-item"},ms={class:"c-tooltip"},ps={key:0,class:"tooltiptext"},gs={key:1,class:"tooltiptext"},fs={class:"action-item"},vs={class:"c-tooltip"},ks={key:0,class:"tooltiptext"},ys={key:1,class:"tooltiptext"},ws={class:"action-item"},bs={class:"c-tooltip"},Ss=s("span",{class:"tooltiptext"},"Rate It!",-1),Is={class:"action-item"},Rs={key:0},xs=["href"],Ds={class:"play-icon"},Ts=s("span",null,"Play Trailer",-1),Us={class:"tagline"},Bs={class:"overview"},Vs=s("div",{class:"overview-title"}," Overview ",-1),Cs={class:"overview-info"},Fs={class:"modal fade",id:"TvShowTrailer","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"TvShowTrailerLabel","aria-hidden":"true"},Ns={class:"modal-dialog modal-dialog-centered border-none modal-xl"},Ps={class:"modal-content border-0 shadow-lg"},Os={class:"modal-body"},Hs={key:0},Ys={class:"preloader"},Ms={key:1},Es={class:"ratio ratio-16x9"},js=["src"],qs={class:"modal-footer bg-dark d-flex justify-content-center align-items-center"};function Gs(r,o,l,p,t,a){const h=d("preloader"),v=d("fa-regular-heart"),k=d("fa-solid-heart"),y=d("fa-regular-bookmark"),w=d("fa-solid-bookmark"),b=d("fa-regular-star"),S=d("fa-solid-star"),I=d("play-icon");return t.shows.success==!1?(e(),i("div",H,M)):(e(),i("div",E,[t.loading?(e(),i("div",j,[s("div",q,[u(h)])])):(e(),i("div",G,[s("div",{class:"head large first",style:g({"--image-url":"url("+t.imgUrl+")"})},[s("div",L,[s("div",z,[s("section",A,[s("div",J,[s("div",K,[s("img",{src:a.PosterPath,alt:t.shows.title,class:"image-content"},null,8,Q)])]),s("div",W,[s("div",X,[s("div",Z,[m(c(t.shows.original_name)+" ",1),s("span",$,"("+c(a.ReleasedYear)+")",1)]),s("div",ss,[(e(!0),i(N,null,P(a.formattedNames,n=>(e(),i("span",{key:n},c(n),1))),128)),m(" • "),t.shows.last_episode_to_air.runtime==null?(e(),i("span",ts,c(a.ReleaseDate),1)):(e(),i("span",es,c(a.TVRuntime),1))])]),s("ul",os,[s("li",as,[s("div",is,[s("div",rs,[(e(),i("svg",ls,[s("circle",{class:"progress-chart-progress",style:g({strokeDasharray:a.circumference,strokeDashoffset:a.progressOffset,stroke:a.progressColor}),cx:"50%",cy:"50%",r:t.radius,"stroke-width":"10",fill:"none"},null,12,ns),s("circle",{class:"progress-chart-background",cx:"50%",cy:"50%",r:t.radius,"stroke-width":"5",fill:"none"},null,8,cs)])),s("div",ds,[m(c(t.rating),1),_s])])]),hs]),s("li",us,[s("div",ms,[s("a",{href:"#",class:"c-btn c-btn-link",onClick:o[0]||(o[0]=n=>a.toggle(1))},[t.showHeartSolid?(e(),_(v,{key:0,class:"svg-link"})):(e(),_(k,{key:1,class:"svg-link"}))]),t.showHeartSolid?(e(),i("span",ps,"Mark as favorite")):(e(),i("span",gs,"Unmark as favorite"))])]),s("li",fs,[s("div",vs,[s("a",{href:"#",class:"c-btn c-btn-link",onClick:o[1]||(o[1]=n=>a.toggle(2))},[t.showBookmarkSolid?(e(),_(y,{key:0,class:"svg-link"})):(e(),_(w,{key:1,class:"svg-link"}))]),t.showBookmarkSolid?(e(),i("span",ks,"Add to your watchlist")):(e(),i("span",ys,"Remove to your watchlist"))])]),s("li",ws,[s("div",bs,[s("a",{href:"#",class:"c-btn c-btn-link",onClick:o[2]||(o[2]=n=>a.toggle(3))},[t.showStarSolid?(e(),_(b,{key:0,class:"svg-link"})):(e(),_(S,{key:1,class:"svg-link"}))]),Ss])]),s("li",Is,[t.noResultOrEmpty?(e(),i("span",Rs)):(e(),i("a",{key:1,href:`#${this.youtubeId}`,"data-bs-toggle":"modal","data-bs-target":"#TvShowTrailer",onClick:o[3]||(o[3]=(...n)=>a.getVideoInfo&&a.getVideoInfo(...n)),class:"play-trailer"},[s("span",Ds,[u(I)]),Ts],8,xs))])]),s("div",Us,[s("i",null,c(t.shows.tagline),1)]),s("div",Bs,[Vs,s("div",Cs,c(t.shows.overview),1)])])])])])],4),s("div",Fs,[s("div",Ns,[s("div",Ps,[s("div",Os,[t.loading?(e(),i("div",Hs,[s("div",Ys,[u(h)])])):(e(),i("div",Ms,[s("div",Es,[s("iframe",{src:t.youtubeUrl,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,js)])]))]),s("div",qs,[s("button",{type:"button",class:"btn btn-danger","data-bs-dismiss":"modal","aria-label":"Close",onClick:o[4]||(o[4]=(...n)=>a.emptyYoutubeUrl&&a.emptyYoutubeUrl(...n))},"Close")])])])])]))]))}const f=F(O,[["render",Gs]]);const Ls={components:{TvShowDetails:f}},Ks=Object.assign(Ls,{__name:"TvView",setup(r){return(o,l)=>(e(),_(f))}});export{Ks as default};
