(function(){"use strict";var A={6740:function(A,e,t){var r=t(9242),i=t(3396),s=t(7139),n="data:image/png;base64,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",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA5nAAAOZwGPiYJxAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAnlQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeMHZAwAAANJ0Uk5TAAECAwQFBgcICQoLDA4PEBESExQVFhcYGRobHB0eHyAhIiMkJSYnKCkqKywtLi8wMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OUFNVVlhZXF1eYGJjZGVoamtsbW5vcXN0dXd6e35/gYKDhIaLjo+RkpOUlZaYmZqcnZ+goqOkp6ipqqytrrGys7e4uru8vsDBwsPExcfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+75sqjgAACHtJREFUeNrt3fmXFXQdxvHvIJuUkCyyy76HlIiUC6JB0WalpWaWCYVZVkNYmppoGm0mQTtqCoMIiAjMwDDDIEMJKILo9y/qB9ROHYWpo+fofV6vP+HzvGfm3jv33FsKAAAAAAAAAAAAAAAAAAAAAAAAAAAAvPeNubF51SMtXd1b1j24Yuks94jSa/4PW+p/aP3J4r7uEqLPzR31LRxuHuQ2AZqu3VnfxqHlZ7tPo1uwoZ5G+/Uu1NiWnaynd5+HAg2s3/31jP46zJ0a1Yj1tQfa5rhUY5q4p/bI0SvdqiH331t76EUFRO+vgPT9FdB4JuypVQH2V4D9FWB/BWQZ/3/tr4CG2b+tVgXYXwH2V4D9FZBlXGutCrC/AuyvAPsrIMug7bUqINdZa2pVQLCVtSog2A21KiDYlONVAcl+WasCgl34WlVAsrW1KiDYVbUqINnDVQHJzn6pKiDZ52tVQLKfVQUk67W/KiDZzFoVkGxRVUC066oCot1aFRBtZVVAtIeqAqKtqgqI1lwVEO2WqoBoX6wKiHZZVUC0UVUB2TYpINsPqgKizasKiNbUqYBsd1cFRJv4igKy3VMVEG30MQVk+1FVQLShzysg2xWvKCDb16sCPBNQQLA+f1JAtoGPKUABClCAAoILeFwB2QYpIL2AvytAAQpQgAKCC3hCAdk+pID0Ap5UgAIUoAAFBBewQQHZzlWAAhSQXcBGBShAAckGKyC9gBYFKEAB0QVsUkC2IQpQgAKyC3hKAQpQgAIUkGvoZgUoQAEKUEBwAU8rINswBShAAdkFbFGAAhSQ7DwFpBewVQEKUIACFJBr+DYFKEABClBAcAHPKCDbCAUoQAHZBWxXQLaRClCAArILeFYBClBAslEKSC9ghwIUoAAFKCDX6OcUoAAFKEABucbsVIACFKAABShAAanG7lKAAhSgAAXkOn+3AhSgAAUoILiAVgVkG6cABShAAQoINr5NAQpQgAIUkGvCHgUoQAEKUIACFJBq4l4FKEABClBArkntClCAAhSggFyTFZBewD4FKEAByaYoIL2ADgUoQAHJpipAAQrILqBTAdmmKUABClCAAoJN368ABShAAQrINUMB6QV0KUABCkg2UwEKUEB2AQcUkG2WAhTwvimgd3/eeXO73/sFnPOlFT9fu/nga5VG8D8WMPYbvz/uaLEFXLTOvYILmPorxwou4Jx7TzpVcAGTt7pTcgGLD7lScgHL/PqPLuAWB4ouYJGf/+gCJvv7H13AwG1uE13AXS4TXcCkEw4TXcBqZ4kuYK5/+2YXsNZNogsY4RdAdgFfc5DsAn7nHtEFDDjmHIGOznkjgKsdI1LbsNcD+J5bZPpb31MB3OMUoVadCuBhl0j11VJKKU84RKqOAaWU0uEQsW4tpRRvBcp1aFApxRmCNQsg25H+Asi2RADZ7hJAtjYBhJstgGzfEkC2OwSQbbUAsv1ZANl2CCDbEQEIAH8C8CAQTwPJ44WgcF4KDuefQdn8OzicN4SE85awbEf6l/KyM+RqLqW0OkOs7oGllPXuEGt5KaX82h1StfcvpZQ7HSLVdaWUUr7jEKHufv2bAlwi0x/7nAqg72G3SLRryBsfE+arAhMdnvXmBwVe7xp5jlz6708KHfqqeyTvX8oaB4nev8xzkej9S/mtm0TvX2b7xoDo/Ut5yFmi9y9jDzpM8v6lLPJUMHr/Um5zm+j9S5MPDY/ev5SBPjU8ev9SPuDLo6L3L+UsXyEdvX8p5dteEIrev5T5jzpU8v6lNH253a2C9y+lDLi907mC9y+l9Lr8x/ucLHf/UkppumT5Hb95vNNjwtD933xi2J93wcjN75P9eVecu8H+yQZvtL/97R+7f4v9kw3ZZH/72z92/6fsn2yo/bP39/pPtGH2z97/aftH77/F/snOs3/2/lvtn2y4/bP332Z/+9s/1Yhn7G9/+6caud3+9rd/qlHP2t/+9o/df4f9k422f/b+z9k/2Rj7Z++/0/7Jxto/e/9d9k92vv2z999t/2Tj7J+9f6v9k423f/b+bfZPNsH+2fvvsX+yifbP3n+v/ZNNsn/2/u32TzbZ/va3f6wp++xvf/unmtphf/vbP9W0Tvvb3/6ppts/e//99k82w/7Z+3fZP9lM+0ebZf/s/Q/YP9mH7Z+9//P2Tzbb/va3f6wLDto/2Rz7Z+/fbf9kH7G//e0f66OH7J/sQvvb3/6x5v7D/va3f6qL7B9t3j/tb3/7p7rY/tHmv2B/+9s/1cfsn73/Yfsn+7j9o11i/+z9j9g/2aX2j3aZ/e1v/1iXH7V/sgX2t7/9Y13xov2TLbS//e0f60r7R7vqJfvb3/6pPmH/aIvsH23xMfvb3/6pPmn/aJ+yf/b+L9s/2RL7R/u0/aN9xv7Z+x+3f7LP2j/a5+zv59/+sS7w/s9ow9rsn6zvX+wf7T77R1ti/2i9Ntk/2lfsH61fq/2jLbV/tiftH22M/bPdbP9sa+0fbeAJ+0e72P7ZrrZ/tpvsn+12+2e71/7ZVts/2532z3ab/bPdYP9sS+yfbY79s/V5wf7ZfmH/bNfaP9ugE/bPts7+2b5g/3CP2T/bQvuHW2P/bHNetX+25fYP94D9s/V71P7ZhrfbP9usA/ZXgP2TzeyyvwLsn2xGl/3DC9hv/2zT99s/vIBO+2eb1mn/8AI67J9taof9s03psH94Afvsn23yPvuHF9Bu/2yT2u0fXsCenu1/2P4NasT6nuy/c6ZLNap+9595/z8MdqcGtuzkGfb/aW9HamgLNpxu/t3XuFCja7pmx9vN3/XNvu4ToPdNe99q/u7vftBtUn4LzPv+xv966L9yoT/+WUbf2LzqkZau7i3rHlyx1DM/AAAAAAAAAAAAAAAAAAAAAAAAAAAA3ln/AnsVeP5xoCQgAAAAAElFTkSuQmCC";const o={class:"container mx-auto flex flex-col items-center p-4"},c={class:"container"},a=(0,i._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),d={class:"flex-row"},g={class:"inline-block"},f=(0,i._)("label",{for:"filter",class:"block text-md font-medium text-gray-900"},"Filter: ",-1),u={class:"mt-1 rounded-md shadow-md"},w={class:"inline-block"},h=(0,i._)("img",{src:n,alt:"arrow to left",class:"w-3 h-3"},null,-1),m=[h],p=(0,i._)("img",{src:l,alt:"arrow to right",class:"w-3 h-3"},null,-1),k=[p],C=(0,i._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1),B={class:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3"},v=(0,i._)("hr",{class:"w-full border-t border-gray-600 my-4"},null,-1);function b(A,e,t,n,l,h){const p=(0,i.up)("app-loader"),b=(0,i.up)("add-ticker"),x=(0,i.up)("ticker-card"),y=(0,i.up)("graph-prices"),D=(0,i.up)("confirmation-modal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",o,[!0===l.loader?((0,i.wg)(),(0,i.j4)(p,{key:0})):(0,i.kq)("",!0),(0,i._)("div",c,[(0,i.Wm)(b,{onAddTicker:h.add,onFindSimilarTicker:h.findSimilarTicker,disabled:h.tooManyTickersAdded,isCurrentTicker:l.isCurrentTicker,listSimilarTickers:l.listSimilarTickers,isAddedTicker:l.isAddedTicker},null,8,["onAddTicker","onFindSimilarTicker","disabled","isCurrentTicker","listSimilarTickers","isAddedTicker"]),l.tickers.length?((0,i.wg)(),(0,i.iD)(i.HY,{key:0},[a,(0,i._)("div",d,[(0,i._)("div",g,[f,(0,i._)("div",u,[(0,i.wy)((0,i._)("input",{id:"filter","onUpdate:modelValue":e[0]||(e[0]=A=>l.filter=A),class:"block pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-green-800 focus:border-gray-500 sm:text-sm rounded-md"},null,512),[[r.nr,l.filter]])])]),(0,i._)("div",w,[l.page>1?((0,i.wg)(),(0,i.iD)("button",{key:0,onClick:e[1]||(e[1]=A=>l.page=l.page-1),class:"my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-green-800 hover:bg-green-900 transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-gray-500"},m)):(0,i.kq)("",!0),h.hasNextPage?((0,i.wg)(),(0,i.iD)("button",{key:1,onClick:e[2]||(e[2]=A=>l.page=l.page+1),class:"my-4 mx-2 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-green-800 hover:bg-green-900 transition-colors duration-300 focus:outline-none focus:ring-0 focus:ring-offset-2 focus:ring-gray-500"},k)):(0,i.kq)("",!0)])]),C,(0,i._)("dl",B,[(0,i.Wm)(x,{paginatedTickers:h.paginatedTickers,selectedTicker:l.selectedTicker,onSelectTicker:h.select,onOpenModal:h.handleConfirmModal},null,8,["paginatedTickers","selectedTicker","onSelectTicker","onOpenModal"])]),v],64)):(0,i.kq)("",!0),l.selectedTicker?((0,i.wg)(),(0,i.j4)(y,{key:1,selectedTicker:l.selectedTicker,graphData:l.graph,onCloseGraph:e[3]||(e[3]=A=>l.selectedTicker=null)},null,8,["selectedTicker","graphData"])):(0,i.kq)("",!0)])]),(0,i.Wm)(D,{tickerForDeleting:l.tickerForDeleting,ref:"confirmationModal"},{tickerName:(0,i.w5)((A=>[(0,i.Uk)((0,s.zw)(A.ticker),1)])),_:1},8,["tickerForDeleting"]),(0,i.Uk)("> ")],64)}t(560),t(8858),t(1318),t(3228);const x=new Map;let y="";const D=new SharedWorker("./sharedWorker.js");D.port.onmessage=function(A){let{ticker:e,price:t}=A.data;if(t===y.price&&e===y.ticker)return;y=A.data;const r=x.get(e)??[];r.forEach((A=>A(t)))};const E=(A,e)=>{const t=x.get(A)||[];x.set(A,[...t,e]),D.port.postMessage({ticker:A,action:"subscribe"})},P=A=>{x.delete(A),D.port.postMessage({ticker:A,action:"unsubscribe"})},I=async()=>{const A=await fetch("https://min-api.cryptocompare.com/data/all/coinlist?summary=true"),e=await A.json();return e.Data},Q={class:"flex"},M={class:"max-w-xs"},T={for:"wallet",class:"block text-md font-medium text-gray-900"},H={class:"mt-1 relative rounded-md shadow-md"},j={class:"flex p-1 rounded-mdflex-wrap"},Y=["onClick"],J={key:0,class:"text-sm text-red-600"},G={key:1,class:"text-sm text-red-600"};function z(A,e,t,n,l,o){const c=(0,i.up)("add-button");return(0,i.wg)(),(0,i.iD)("section",null,[(0,i._)("div",Q,[(0,i._)("div",M,[(0,i._)("label",T,"Ticker: "+(0,s.zw)(l.ticker),1),(0,i._)("div",H,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":e[0]||(e[0]=A=>l.ticker=A),onKeydown:e[1]||(e[1]=(0,r.D2)(((...A)=>o.add&&o.add(...A)),["enter"])),onInput:e[2]||(e[2]=A=>o.findSimilarTicker(l.ticker)),type:"text",name:"wallet",id:"wallet",class:"block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-green-800 focus:border-gray-500 sm:text-sm rounded-md",placeholder:"For example DOGE"},null,544),[[r.nr,l.ticker]])]),(0,i._)("div",j,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.listSimilarTickers,(A=>((0,i.wg)(),(0,i.iD)("span",{onClick:e=>o.findSimilarTicker(A),key:A,class:"inline-flex items-center px-2 py-0.5 m-1 rounded-md text-xs font-medium bg-green-800 text-white cursor-pointer"},(0,s.zw)(A),9,Y)))),128))]),t.isCurrentTicker?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",J," No ticker data ")),t.isAddedTicker?((0,i.wg)(),(0,i.iD)("div",G," This ticker has been added ")):(0,i.kq)("",!0)])]),(0,i.Wm)(c,{onClick:o.add,disabled:t.disabled||""===l.ticker},null,8,["onClick","disabled"])])}const L=["disabled"],F=(0,i._)("svg",{class:"-ml-0.5 mr-2 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"#ffffff"},[(0,i._)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})],-1);function N(A,e,t,r,n,l){return(0,i.wg)(),(0,i.iD)("button",{disabled:t.disabled,type:"button",class:(0,s.C_)(["my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-green-800 hover:bg-green-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",{"opacity-50":t.disabled}]),onClick:e[0]||(e[0]=(...A)=>l.onClick&&l.onClick(...A))},[F,(0,i.Uk)(" Add ")],10,L)}var O={props:{disabled:{type:Boolean,required:!1,default:!1}},emits:{click:A=>"undefined"===typeof A},methods:{onClick(){this.$emit("click")}}},V=t(89);const S=(0,V.Z)(O,[["render",N]]);var q=S,W={components:{AddButton:q},props:{disabled:{type:Boolean,required:!1,default:!0},isCurrentTicker:{type:Boolean,required:!1,default:!0},listSimilarTickers:{type:Array,required:!1},isAddedTicker:{type:Boolean,required:!1}},emits:{"add-ticker":A=>"string"===typeof A,"find-similar-ticker":A=>"string"===typeof A},data(){return{ticker:""}},methods:{async add(){await this.$emit("add-ticker",this.ticker),!0!==this.isAddedTicker&&!1!==this.isCurrentTicker&&(this.ticker="")},findSimilarTicker(A){this.ticker=A,this.$emit("find-similar-ticker",A)}}};const Z=(0,V.Z)(W,[["render",z]]);var X=Z;const K={class:"relative"},U={class:"text-lg leading-6 font-medium text-gray-900 my-8"},R={class:"flex items-end border-black border-b border-l h-64",ref:"graph"},_=(0,i._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",x:"0",y:"0",viewBox:"0 0 511.76 511.76","xml:space":"preserve"},[(0,i._)("g",null,[(0,i._)("path",{d:"M436.896,74.869c-99.84-99.819-262.208-99.819-362.048,0c-99.797,99.819-99.797,262.229,0,362.048    c49.92,49.899,115.477,74.837,181.035,74.837s131.093-24.939,181.013-74.837C536.715,337.099,536.715,174.688,436.896,74.869z     M361.461,331.317c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    l-75.413-75.435l-75.392,75.413c-4.181,4.16-9.643,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251    c-8.341-8.341-8.341-21.845,0-30.165l75.392-75.413l-75.413-75.413c-8.341-8.341-8.341-21.845,0-30.165    c8.32-8.341,21.824-8.341,30.165,0l75.413,75.413l75.413-75.413c8.341-8.341,21.824-8.341,30.165,0    c8.341,8.32,8.341,21.824,0,30.165l-75.413,75.413L361.461,331.317z",fill:"#006419","data-original":"#000000"})])],-1),$=[_];function AA(A,e,t,r,n,l){return(0,i.wg)(),(0,i.iD)("section",K,[(0,i._)("h3",U,(0,s.zw)(t.selectedTicker.name)+" - USD ",1),(0,i._)("div",R,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.normalizedGraph,((A,e)=>((0,i.wg)(),(0,i.iD)("div",{key:e,style:(0,s.j5)({height:`${A}%`}),class:"bg-green-800 border border-gray-900 mr-0.5 w-5",ref_for:!0,ref:"graphElement"},null,4)))),128))],512),(0,i._)("button",{onClick:e[0]||(e[0]=(...A)=>l.closeGraph&&l.closeGraph(...A)),type:"button",class:"absolute top-0 right-0"},$)])}var eA={props:{selectedTicker:{type:[Object,null],required:!0,default:()=>{}},graphData:{type:Array,required:!1,default:()=>[]}},data(){return{graph:[],maxGraphElements:1,widthGraphElement:1}},computed:{normalizedGraph(){const A=Math.max(...this.graph),e=Math.min(...this.graph);return A===e?this.graph.map((()=>50)):this.graph.map((t=>5+95*(t-e)/(A-e)))}},watch:{graphData:{handler(A){this.graph=[...A],1===this.graph.length&&this.$nextTick().then(this.calculateWidthGraphElement),this.calculateMaxGraphElements()},deep:!0}},methods:{closeGraph(){this.$emit("close-graph")},calculateWidthGraphElement(){this.widthGraphElement=this.$refs.graphElement[0].clientWidth},calculateMaxGraphElements(){if(!this.$refs.graph)return;const A=Math.max(0,this.graph.length-this.maxGraphElements);this.graph=this.graph.slice(A),this.maxGraphElements=this.$refs.graph.clientWidth/this.widthGraphElement},mounted(){window.addEventListener("resize",this.calculateMaxGraphElements)},beforeUnmount(){window.removeEventListener("resize",this.calculateMaxGraphElements)}}};const tA=(0,V.Z)(eA,[["render",AA]]);var rA=tA;const iA=["onClick"],sA={class:"px-4 py-5 sm:p-6 text-center"},nA={class:"mt-1 text-3xl font-semibold text-gray-900"},lA=(0,i._)("div",{class:"w-full border-t border-gray-200"},null,-1),oA=["onClick"],cA=(0,i._)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true"},[(0,i._)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})],-1);function aA(A,e,t,n,l,o){return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(t.paginatedTickers,(A=>((0,i.wg)(),(0,i.iD)("div",{key:A.name,onClick:e=>o.selectTicker(A),class:(0,s.C_)([{"border-2":t.selectedTicker===A},"bg-white overflow-hidden shadow rounded-lg border-green-800 border-solid cursor-pointer"])},[(0,i._)("div",sA,[(0,i._)("dt",{class:(0,s.C_)([{"text-red-300":"empty"===A.costStatus},"text-sm font-medium text-gray-500 truncate"])},(0,s.zw)(A.name)+" - USD ",3),(0,i._)("dd",nA,(0,s.zw)(o.formatPrice(A.price)),1)]),lA,(0,i._)("button",{onClick:(0,r.iM)((e=>o.openModal(A)),["stop"]),class:"flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none"},[cA,(0,i.Uk)(" Delete ")],8,oA)],10,iA)))),128)}var dA={data(){return{isOpen:!1}},props:{paginatedTickers:{type:Array,required:!1},selectedTicker:{type:[Object,null],required:!1}},emits:{"select-ticker":A=>"object"===typeof A,"open-modal":A=>"object"===typeof A},methods:{openModal(A){this.$emit("open-modal",A)},selectTicker(A){this.$emit("select-ticker",A)},formatPrice(A){return"-"===A?A:A>1?A.toFixed(2):A.toPrecision(2)}}};const gA=(0,V.Z)(dA,[["render",aA]]);var fA=gA;const uA={class:"fixed w-100 h-100 opacity-80 bg-green-800 inset-0 z-50 flex items-center justify-center"},wA=(0,i._)("svg",{class:"animate-spin -ml-1 mr-3 h-12 w-12 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[(0,i._)("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),(0,i._)("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),hA=[wA];function mA(A,e){return(0,i.wg)(),(0,i.iD)("div",uA,hA)}const pA={},kA=(0,V.Z)(pA,[["render",mA]]);var CA=kA;const BA=(0,i._)("strong",{class:"block"}," × ",-1),vA=[BA],bA=(0,i._)("span",null,"?",-1);function xA(A,e,t,s,n,l){return n.isOpen?((0,i.wg)(),(0,i.iD)("div",{key:0,class:"fixed z-10 top-0 left-0 w-full h-full bg-red-900 bg-opacity-70 flex items-center justify-center",onClick:e[3]||(e[3]=(...A)=>l.closeModal&&l.closeModal(...A))},[(0,i._)("div",{class:"bg-white z-20 p-4 border-4 border-green-800 rounded-md",onClick:e[2]||(e[2]=(0,r.iM)((()=>{}),["stop"]))},[(0,i._)("button",{class:"bg-green-500 rounded-md px-1.5 pt-0 pb-0.5 float-right text-lg font-bold cursor-pointer hover:bg-green-700",onClick:e[0]||(e[0]=(...A)=>l.closeModal&&l.closeModal(...A))},vA),(0,i._)("p",null,[(0,i.Uk)(" Are you sure you want to delete the ticker "),(0,i._)("strong",null,[(0,i.WI)(A.$slots,"tickerName",{ticker:t.tickerForDeleting.name})]),bA]),(0,i._)("button",{class:"bg-green-800 rounded-md text-white mt-4 px-4 py-2 cursor-pointer",onClick:e[1]||(e[1]=(...A)=>l.confirmDelete&&l.confirmDelete(...A))}," Confirm ")])])):(0,i.kq)("",!0)}var yA={data(){return{isOpen:!1}},currentModalController:null,props:{tickerForDeleting:{type:Object,require:!0}},methods:{open(){let A,e;const t=new Promise(((t,r)=>{A=t,e=r}));return this.$options.currentModalController={resolve:A,reject:e},this.isOpen=!0,t},closeModal(){this.$options.currentModalController.resolve(!1),this.isOpen=!1},confirmDelete(){this.$options.currentModalController.resolve(this.tickerForDeleting),this.isOpen=!1},handleKeyDown(A){"Escape"===A.key&&this.closeModal()}},mounted(){document.addEventListener("keydown",this.handleKeyDown)},beforeUnmount(){document.removeEventListener("keydown",this.handleKeyDown)}};const DA=(0,V.Z)(yA,[["render",xA]]);var EA=DA,PA={name:"App",components:{ConfirmationModal:EA,AppLoader:CA,TickerCard:fA,AddTicker:X,GraphPrices:rA},data(){return{ticker:"",filter:"",tickers:[],selectedTicker:null,graph:[],page:1,listCryptoCurrency:{},listSimilarTickers:[],isAddedTicker:!1,isCurrentTicker:!0,loader:!0,tickerForDeleting:null}},computed:{startIndex(){return 6*(this.page-1)},endIndex(){return 6*this.page},filteredTickers(){return this.tickers.filter((A=>A.name.includes(this.filter)))},paginatedTickers(){return this.filteredTickers.slice(this.startIndex,this.endIndex)},hasNextPage(){return this.filteredTickers.length>this.endIndex},tooManyTickersAdded(){return this.ticker.length>30},pageStateOptions(){return{filter:this.filter,page:this.page}}},methods:{async handleConfirmModal(A){this.tickerForDeleting=A;const e=await this.$refs.confirmationModal.open();e&&this.handleDelete(e)},updateTicker(A,e){this.tickers.filter((e=>e.name===A)).forEach((A=>{A===this.selectedTicker&&this.graph.push(e),null===e?(A.price="-",A.costStatus="empty"):(A.costStatus="full",A.price=e)})),localStorage.setItem("crypto-list",JSON.stringify(this.tickers))},add(A){const e={name:A,price:"-"};return this.tickers.find((A=>A.name===e.name))?this.isAddedTicker=!0:this.listSimilarTickers.includes(e.name)?(this.tickers=[...this.tickers,e],E(e.name,(A=>{this.updateTicker(e.name,A)})),this.filter="",this.listSimilarTickers=[],void(this.isAddedTicker=!1)):this.isCurrentTicker=!1},handleDelete(A){this.tickers=this.tickers.filter((e=>e!==A)),localStorage.setItem("crypto-list",JSON.stringify(this.tickers)),this.selectedTicker===A&&(this.selectedTicker=null),P(A.name),this.tickerForDeleting=null},select(A){this.selectedTicker=A},findSimilarTicker(A){this.isCurrentTicker=!0,this.isAddedTicker=!1;const e=Object.keys(this.listCryptoCurrency),t=e.filter((e=>e.includes(A)));this.listSimilarTickers=t.slice(0,4)}},watch:{selectedTicker(){this.graph=[]},filter(){this.page=1},pageStateOptions(A){window.history.pushState(null,document.title,`${window.location.pathname}?filter=${A.filter}&page=${A.page}`)},tickers(){localStorage.setItem("crypto-list",JSON.stringify(this.tickers))}},created:async function(){const A=Object.fromEntries(new URL(window.location).searchParams.entries());A.filter&&(this.filter=A.filter),A.page&&(this.page=Number(A.page));const e=localStorage.getItem("crypto-list");e&&(this.tickers=JSON.parse(e),this.tickers.forEach((A=>{E(A.name,(e=>{this.updateTicker(A.name,e)}))}))),this.listCryptoCurrency=await I(),this.loader=!1}};const IA=(0,V.Z)(PA,[["render",b]]);var QA=IA;(0,r.ri)(QA).mount("#app")}},e={};function t(r){var i=e[r];if(void 0!==i)return i.exports;var s=e[r]={exports:{}};return A[r].call(s.exports,s,s.exports,t),s.exports}t.m=A,function(){var A=[];t.O=function(e,r,i,s){if(!r){var n=1/0;for(a=0;a<A.length;a++){r=A[a][0],i=A[a][1],s=A[a][2];for(var l=!0,o=0;o<r.length;o++)(!1&s||n>=s)&&Object.keys(t.O).every((function(A){return t.O[A](r[o])}))?r.splice(o--,1):(l=!1,s<n&&(n=s));if(l){A.splice(a--,1);var c=i();void 0!==c&&(e=c)}}return e}s=s||0;for(var a=A.length;a>0&&A[a-1][2]>s;a--)A[a]=A[a-1];A[a]=[r,i,s]}}(),function(){t.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return t.d(e,{a:e}),e}}(),function(){t.d=function(A,e){for(var r in e)t.o(e,r)&&!t.o(A,r)&&Object.defineProperty(A,r,{enumerable:!0,get:e[r]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)}}(),function(){var A={143:0};t.O.j=function(e){return 0===A[e]};var e=function(e,r){var i,s,n=r[0],l=r[1],o=r[2],c=0;if(n.some((function(e){return 0!==A[e]}))){for(i in l)t.o(l,i)&&(t.m[i]=l[i]);if(o)var a=o(t)}for(e&&e(r);c<n.length;c++)s=n[c],t.o(A,s)&&A[s]&&A[s][0](),A[s]=0;return t.O(a)},r=self["webpackChunkapp_crypto"]=self["webpackChunkapp_crypto"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6740)}));r=t.O(r)})();
//# sourceMappingURL=app.1155d386.js.map