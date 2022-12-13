"use strict";(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[507],{38285:(t,e,n)=>{n.d(e,{ro:()=>g,lb:()=>m})
var i=n(8651),s=n(88521),a=n(16140),r=n(30180),o=n(8142),c=n(48206)
function _(){const t=(0,c.x1)()
if(t){const e="internal_error";("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] Transaction: ${e} -> Global error occured`),t.setStatus(e)}}var d=n(27448),p=n(21535)
function l(){const t=this.getScope()
if(t){const e=t.getSpan()
if(e)return{"sentry-trace":e.toTraceparent()}}return{}}function u(t,e,n){if(!(0,c.zu)(e))return t.sampled=!1,t
if(void 0!==t.sampled)return t.setMetadata({sampleRate:Number(t.sampled)}),t
let i
return"function"==typeof e.tracesSampler?(i=e.tracesSampler(n),t.setMetadata({sampleRate:Number(i)})):void 0!==n.parentSampled?i=n.parentSampled:(i=e.tracesSampleRate,t.setMetadata({sampleRate:Number(i)})),r=i,((0,a.i2)(r)||"number"!=typeof r&&"boolean"!=typeof r?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(r)} of type ${JSON.stringify(typeof r)}.`),0):!(r<0||r>1)||(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.warn(`[Tracing] Given sample rate is invalid. Sample rate must be between 0 and 1. Got ${r}.`),0))?i?(t.sampled=Math.random()<i,t.sampled?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] starting ${t.op} transaction - ${t.name}`),t):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(i)})`),t)):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] Discarding transaction because "+("function"==typeof e.tracesSampler?"tracesSampler returned 0 or false":"a negative sampling decision was inherited or tracesSampleRate is set to 0")),t.sampled=!1,t):(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.warn("[Tracing] Discarding transaction because of invalid sample rate."),t.sampled=!1,t)
var r}function h(t,e){const n=this.getClient(),i=n&&n.getOptions()||{},a=i.instrumenter||"sentry",r=t.instrumenter||"sentry"
a!==r&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.error(`A transaction was started with instrumenter=\`${r}\`, but the SDK is configured with the \`${a}\` instrumenter.\nThe transaction will not be sampled. Please use the ${a} instrumentation to start transactions.`),t.sampled=!1)
let o=new p.Y(t,this)
return o=u(o,i,{parentSampled:t.parentSampled,transactionContext:t,...e}),o.sampled&&o.initSpanRecorder(i._experiments&&i._experiments.maxSpans),o}function m(t,e,n,i,s,a,r){const o=t.getClient(),c=o&&o.getOptions()||{}
let _=new d.io(e,t,n,i,r,s)
return _=u(_,c,{parentSampled:e.parentSampled,transactionContext:e,...a}),_.sampled&&_.initSpanRecorder(c._experiments&&c._experiments.maxSpans),_}function g(){!function(){const t=(0,i.cu)()
t.__SENTRY__&&(t.__SENTRY__.extensions=t.__SENTRY__.extensions||{},t.__SENTRY__.extensions.startTransaction||(t.__SENTRY__.extensions.startTransaction=h),t.__SENTRY__.extensions.traceHeaders||(t.__SENTRY__.extensions.traceHeaders=l))}(),(0,r.KV)()&&function(){const e=(0,i.cu)()
if(!e.__SENTRY__)return
const n={mongodb:()=>new((0,r.l$)(t,"./integrations/node/mongo").Mongo),mongoose:()=>new((0,r.l$)(t,"./integrations/node/mongo").Mongo)({mongoose:!0}),mysql:()=>new((0,r.l$)(t,"./integrations/node/mysql").Mysql),pg:()=>new((0,r.l$)(t,"./integrations/node/postgres").Postgres)},s=Object.keys(n).filter((t=>!!(0,r.$y)(t))).map((t=>{try{return n[t]()}catch(t){return}})).filter((t=>t))
s.length>0&&(e.__SENTRY__.integrations=[...e.__SENTRY__.integrations||[],...s])}(),(0,o.o)("error",_),(0,o.o)("unhandledrejection",_)}t=n.hmd(t)},27448:(t,e,n)=>{n.d(e,{hd:()=>_,io:()=>p,mg:()=>c,nT:()=>o})
var i=n(88468),s=n(88521),a=n(20484),r=n(21535)
const o=1e3,c=3e4,_=5e3
class d extends a.gB{constructor(t,e,n,i){super(i),this._pushActivity=t,this._popActivity=e,this.transactionSpanId=n}add(t){t.spanId!==this.transactionSpanId&&(t.finish=e=>{t.endTimestamp="number"==typeof e?e:(0,i._I)(),this._popActivity(t.spanId)},void 0===t.endTimestamp&&this._pushActivity(t.spanId)),super.add(t)}}class p extends r.Y{__init(){this.activities={}}__init2(){this._heartbeatCounter=0}__init3(){this._finished=!1}__init4(){this._beforeFinishCallbacks=[]}constructor(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:_,r=arguments.length>5&&void 0!==arguments[5]&&arguments[5]
super(t,e),this._idleHub=e,this._idleTimeout=n,this._finalTimeout=i,this._heartbeatInterval=a,this._onScope=r,p.prototype.__init.call(this),p.prototype.__init2.call(this),p.prototype.__init3.call(this),p.prototype.__init4.call(this),r&&(l(e),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`Setting idle transaction on scope. Span ID: ${this.spanId}`),e.configureScope((t=>t.setSpan(this)))),this._startIdleTimeout(),setTimeout((()=>{this._finished||(this.setStatus("deadline_exceeded"),this.finish())}),this._finalTimeout)}finish(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,i._I)()
if(this._finished=!0,this.activities={},this.spanRecorder){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] finishing IdleTransaction",new Date(1e3*t).toISOString(),this.op)
for(const e of this._beforeFinishCallbacks)e(this,t)
this.spanRecorder.spans=this.spanRecorder.spans.filter((e=>{if(e.spanId===this.spanId)return!0
e.endTimestamp||(e.endTimestamp=t,e.setStatus("cancelled"),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] cancelling span since transaction ended early",JSON.stringify(e,void 0,2)))
const n=e.startTimestamp<t
return n||("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] discarding Span since it happened after Transaction was finished",JSON.stringify(e,void 0,2)),n})),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] flushing IdleTransaction")}else("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] No active IdleTransaction")
return this._onScope&&l(this._idleHub),super.finish(t)}registerBeforeFinishCallback(t){this._beforeFinishCallbacks.push(t)}initSpanRecorder(t){if(!this.spanRecorder){const e=t=>{this._finished||this._pushActivity(t)},n=t=>{this._finished||this._popActivity(t)}
this.spanRecorder=new d(e,n,this.spanId,t),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("Starting heartbeat"),this._pingHeartbeat()}this.spanRecorder.add(this)}_cancelIdleTimeout(){this._idleTimeoutID&&(clearTimeout(this._idleTimeoutID),this._idleTimeoutID=void 0)}_startIdleTimeout(t){this._cancelIdleTimeout(),this._idleTimeoutID=setTimeout((()=>{this._finished||0!==Object.keys(this.activities).length||this.finish(t)}),this._idleTimeout)}_pushActivity(t){this._cancelIdleTimeout(),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] pushActivity: ${t}`),this.activities[t]=!0,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] new activities count",Object.keys(this.activities).length)}_popActivity(t){if(this.activities[t]&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`[Tracing] popActivity ${t}`),delete this.activities[t],("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] new activities count",Object.keys(this.activities).length)),0===Object.keys(this.activities).length){const t=(0,i._I)()+this._idleTimeout/1e3
this._startIdleTimeout(t)}}_beat(){if(this._finished)return
const t=Object.keys(this.activities).join("")
t===this._prevHeartbeatString?this._heartbeatCounter+=1:this._heartbeatCounter=1,this._prevHeartbeatString=t,this._heartbeatCounter>=3?(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log("[Tracing] Transaction finished because of no change for 3 heart beats"),this.setStatus("deadline_exceeded"),this.finish()):this._pingHeartbeat()}_pingHeartbeat(){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&s.kg.log(`pinging Heartbeat -> current counter: ${this._heartbeatCounter}`),setTimeout((()=>{this._beat()}),this._heartbeatInterval)}}function l(t){const e=t.getScope()
e&&e.getTransaction()&&e.setSpan(void 0)}},42507:(t,e,n)=>{n.r(e),n.d(e,{BROWSER_TRACING_INTEGRATION_ID:()=>rt,BrowserTracing:()=>ct,IdleTransaction:()=>G.io,Integrations:()=>i,Span:()=>pt.Dr,SpanStatus:()=>dt,TRACEPARENT_REGEXP:()=>x.K,Transaction:()=>lt.Y,addExtensionMethods:()=>s.ro,defaultRequestInstrumentationOptions:()=>st,extractTraceparentData:()=>x.q,getActiveTransaction:()=>U.x1,hasTracingEnabled:()=>U.zu,instrumentOutgoingRequests:()=>at,spanStatusfromHttpCode:()=>pt.Zd,startIdleTransaction:()=>s.lb,stripUrlQueryAndFragment:()=>o.rt})
var i={}
n.r(i),n.d(i,{Apollo:()=>N,BrowserTracing:()=>ct,Express:()=>p,GraphQL:()=>D,Mongo:()=>v,Mysql:()=>E,Postgres:()=>T,Prisma:()=>R})
var s=n(38285),a=n(2796),r=n(88521),o=n(72702),c=n(14205),_=n(16140)
function d(t){const e=(0,a.x)([t,"call",t=>t(),"access",t=>t.getClient,"call",t=>t(),"optionalAccess",t=>t.getOptions,"call",t=>t()])
return"sentry"!==((0,a.x)([e,"optionalAccess",t=>t.instrumenter])||"sentry")}class p{static __initStatic(){this.id="Express"}__init(){this.name=p.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
p.prototype.__init.call(this),this._router=t.router||t.app,this._methods=(Array.isArray(t.methods)?t.methods:[]).concat("use")}setupOnce(t,e){this._router?d(e)?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Express Integration is skipped because of instrumenter configuration."):(function(t){(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((e=>h(t,e)))}(this._router,this._methods),function(t){const e="settings"in t
e&&void 0===t._router&&t.lazyrouter&&t.lazyrouter()
const n=e?t._router:t
if(!n)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.debug("Cannot instrument router for URL Parameterization (did not find a valid router)."),void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.debug("Routing instrumentation is currently only supported in Express 4."))
const i=Object.getPrototypeOf(n),s=i.process_params
i.process_params=function(t,e,n,i,r){n._reconstructedRoute||(n._reconstructedRoute="")
const{layerRoutePath:d,isRegex:p,isArray:l,numExtraSegments:u}=function(t){const e=(0,a.x)([t,"access",t=>t.route,"optionalAccess",t=>t.path]),n=(0,_.Kj)(e),i=Array.isArray(e)
if(!e)return{isRegex:n,isArray:i,numExtraSegments:0}
const s=i?Math.max(e.reduce(((t,e)=>t+(0,o.$A)(e.toString())),0)-(0,o.$A)(t.path||""),0):0
return{layerRoutePath:m(i,e),isRegex:n,isArray:i,numExtraSegments:s}}(t);(d||p||l)&&(n._hasParameters=!0)
const h=(d||t.path||"").split("/").filter((t=>t.length>0&&(p||l||!t.includes("*")))).join("/")
if(h&&h.length>0&&(n._reconstructedRoute+=`/${h}${p?"/":""}`),(0,o.$A)(n.originalUrl||"")+u===(0,o.$A)(n._reconstructedRoute)){n._hasParameters||n._reconstructedRoute!==n.originalUrl&&(n._reconstructedRoute=n.originalUrl)
const t=i.__sentry_transaction
if(t&&"custom"!==t.metadata.source){const e=n._reconstructedRoute||"/"
t.setName(...(0,c.oA)(n,{path:!0,method:!0,customRoute:e}))}}return s.call(this,t,e,n,i,r)}}(this._router)):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("ExpressIntegration is missing an Express instance")}}function l(t,e){const n=t.length
switch(n){case 2:return function(n,i){const s=i.__sentry_transaction
if(s){const n=s.startChild({description:t.name,op:`middleware.express.${e}`})
i.once("finish",(()=>{n.finish()}))}return t.call(this,n,i)}
case 3:return function(n,i,s){const r=i.__sentry_transaction,o=(0,a.x)([r,"optionalAccess",t=>t.startChild,"call",n=>n({description:t.name,op:`middleware.express.${e}`})])
t.call(this,n,i,(function(){(0,a.x)([o,"optionalAccess",t=>t.finish,"call",t=>t()])
for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
s.call(this,...e)}))}
case 4:return function(n,i,s,r){const o=s.__sentry_transaction,c=(0,a.x)([o,"optionalAccess",t=>t.startChild,"call",n=>n({description:t.name,op:`middleware.express.${e}`})])
t.call(this,n,i,s,(function(){(0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()])
for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
r.call(this,...e)}))}
default:throw new Error(`Express middleware takes 2-4 arguments. Got: ${n}`)}}function u(t,e){return t.map((t=>"function"==typeof t?l(t,e):Array.isArray(t)?t.map((t=>"function"==typeof t?l(t,e):t)):t))}function h(t,e){const n=t[e]
return t[e]=function(){for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s]
return n.call(this,...u(i,e))},t}function m(t,e){return t?e.map((t=>t.toString())).join(","):e&&e.toString()}p.__initStatic()
var g=n(30180),f=n(15834)
class T{static __initStatic(){this.id="Postgres"}__init(){this.name=T.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
T.prototype.__init.call(this),this._usePgNative=!!t.usePgNative}setupOnce(t,e){const n=(0,g.$y)("pg")
if(!n)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Postgres Integration was unable to require `pg` package."))
if(d(e))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Postgres Integration is skipped because of instrumenter configuration."))
if(this._usePgNative&&!(0,a.x)([n,"access",t=>t.native,"optionalAccess",t=>t.Client]))return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Postgres Integration was unable to access 'pg-native' bindings."))
const{Client:i}=this._usePgNative?n.native:n;(0,f.hl)(i.prototype,"query",(function(t){return function(n,i,s){const r=e().getScope(),o=(0,a.x)([r,"optionalAccess",t=>t.getSpan,"call",t=>t()]),c=(0,a.x)([o,"optionalAccess",t=>t.startChild,"call",t=>t({description:"string"==typeof n?n:n.text,op:"db"})])
if("function"==typeof s)return t.call(this,n,i,(function(t,e){(0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),s(t,e)}))
if("function"==typeof i)return t.call(this,n,(function(t,e){(0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),i(t,e)}))
const d=void 0!==i?t.call(this,n,i):t.call(this,n)
return(0,_.J8)(d)?d.then((t=>((0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):((0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),d)}}))}}T.__initStatic()
class E{constructor(){E.prototype.__init.call(this)}static __initStatic(){this.id="Mysql"}__init(){this.name=E.id}setupOnce(t,e){const n=(0,g.$y)("mysql/lib/Connection.js")
n?d(e)?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Mysql Integration is skipped because of instrumenter configuration."):(0,f.hl)(n,"createQuery",(function(t){return function(n,i,s){const r=e().getScope(),o=(0,a.x)([r,"optionalAccess",t=>t.getSpan,"call",t=>t()]),c=(0,a.x)([o,"optionalAccess",t=>t.startChild,"call",t=>t({description:"string"==typeof n?n:n.sql,op:"db"})])
return"function"==typeof s?t.call(this,n,i,(function(t,e,n){(0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),s(t,e,n)})):"function"==typeof i?t.call(this,n,(function(t,e,n){(0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),i(t,e,n)})):t.call(this,n,i,s)}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Mysql Integration was unable to require `mysql` package.")}}E.__initStatic()
const y=["aggregate","bulkWrite","countDocuments","createIndex","createIndexes","deleteMany","deleteOne","distinct","drop","dropIndex","dropIndexes","estimatedDocumentCount","find","findOne","findOneAndDelete","findOneAndReplace","findOneAndUpdate","indexes","indexExists","indexInformation","initializeOrderedBulkOp","insertMany","insertOne","isCapped","mapReduce","options","parallelCollectionScan","rename","replaceOne","stats","updateMany","updateOne"],S={bulkWrite:["operations"],countDocuments:["query"],createIndex:["fieldOrSpec"],createIndexes:["indexSpecs"],deleteMany:["filter"],deleteOne:["filter"],distinct:["key","query"],dropIndex:["indexName"],find:["query"],findOne:["query"],findOneAndDelete:["filter"],findOneAndReplace:["filter","replacement"],findOneAndUpdate:["filter","update"],indexExists:["indexes"],insertMany:["docs"],insertOne:["doc"],mapReduce:["map","reduce"],rename:["newName"],replaceOne:["filter","doc"],updateMany:["filter","update"],updateOne:["filter","update"]}
class v{static __initStatic(){this.id="Mongo"}__init(){this.name=v.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
v.prototype.__init.call(this),this._operations=Array.isArray(t.operations)?t.operations:y,this._describeOperations=!("describeOperations"in t)||t.describeOperations,this._useMongoose=!!t.useMongoose}setupOnce(t,e){const n=this._useMongoose?"mongoose":"mongodb",i=(0,g.$y)(n)
i?d(e)?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Mongo Integration is skipped because of instrumenter configuration."):this._instrumentOperations(i.Collection,this._operations,e):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error(`Mongo Integration was unable to require \`${n}\` package.`)}_instrumentOperations(t,e,n){e.forEach((e=>this._patchOperation(t,e,n)))}_patchOperation(t,e,n){if(!(e in t.prototype))return
const i=this._getSpanContextFromOperationArguments.bind(this);(0,f.hl)(t.prototype,e,(function(t){return function(){for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o]
const c=r[r.length-1],d=n().getScope(),p=(0,a.x)([d,"optionalAccess",t=>t.getSpan,"call",t=>t()])
if("function"!=typeof c||"mapReduce"===e&&2===r.length){const n=(0,a.x)([p,"optionalAccess",t=>t.startChild,"call",t=>t(i(this,e,r))]),s=t.call(this,...r)
return(0,_.J8)(s)?s.then((t=>((0,a.x)([n,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):((0,a.x)([n,"optionalAccess",t=>t.finish,"call",t=>t()]),s)}const l=(0,a.x)([p,"optionalAccess",t=>t.startChild,"call",t=>t(i(this,e,r.slice(0,-1)))])
return t.call(this,...r.slice(0,-1),(function(t,e){(0,a.x)([l,"optionalAccess",t=>t.finish,"call",t=>t()]),c(t,e)}))}}))}_getSpanContextFromOperationArguments(t,e,n){const i={collectionName:t.collectionName,dbName:t.dbName,namespace:t.namespace},s={op:"db",description:e,data:i},a=S[e],r=Array.isArray(this._describeOperations)?this._describeOperations.includes(e):this._describeOperations
if(!a||!r)return s
try{if("mapReduce"===e){const[t,e]=n
i[a[0]]="string"==typeof t?t:t.name||"<anonymous>",i[a[1]]="string"==typeof e?e:e.name||"<anonymous>"}else for(let t=0;t<a.length;t++)i[a[t]]=JSON.stringify(n[t])}catch(t){}return s}}v.__initStatic()
class R{static __initStatic(){this.id="Prisma"}__init(){this.name=R.id}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
var e
R.prototype.__init.call(this),(e=t.client)&&e.$use?this._client=t.client:("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`Unsupported Prisma client provided to PrismaIntegration. Provided client: ${JSON.stringify(t.client)}`)}setupOnce(t,e){this._client?d(e)?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Prisma Integration is skipped because of instrumenter configuration."):this._client.$use(((t,n)=>{const i=e().getScope(),s=(0,a.x)([i,"optionalAccess",t=>t.getSpan,"call",t=>t()]),r=t.action,o=t.model,c=(0,a.x)([s,"optionalAccess",t=>t.startChild,"call",t=>t({description:o?`${o} ${r}`:r,op:"db.sql.prisma"})]),d=n(t)
return(0,_.J8)(d)?d.then((t=>((0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):((0,a.x)([c,"optionalAccess",t=>t.finish,"call",t=>t()]),d)})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("PrismaIntegration is missing a Prisma Client Instance")}}R.__initStatic()
class D{constructor(){D.prototype.__init.call(this)}static __initStatic(){this.id="GraphQL"}__init(){this.name=D.id}setupOnce(t,e){const n=(0,g.$y)("graphql/execution/execute.js")
n?d(e)?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("GraphQL Integration is skipped because of instrumenter configuration."):(0,f.hl)(n,"execute",(function(t){return function(){const n=e().getScope(),i=(0,a.x)([n,"optionalAccess",t=>t.getSpan,"call",t=>t()]),s=(0,a.x)([i,"optionalAccess",t=>t.startChild,"call",t=>t({description:"execute",op:"graphql.execute"})]);(0,a.x)([n,"optionalAccess",t=>t.setSpan,"call",t=>t(s)])
for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c]
const d=t.call(this,...o)
return(0,_.J8)(d)?d.then((t=>((0,a.x)([s,"optionalAccess",t=>t.finish,"call",t=>t()]),(0,a.x)([n,"optionalAccess",t=>t.setSpan,"call",t=>t(i)]),t))):((0,a.x)([s,"optionalAccess",t=>t.finish,"call",t=>t()]),(0,a.x)([n,"optionalAccess",t=>t.setSpan,"call",t=>t(i)]),d)}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("GraphQL Integration was unable to require graphql/execution package.")}}D.__initStatic()
var b=n(7209)
class N{constructor(){N.prototype.__init.call(this)}static __initStatic(){this.id="Apollo"}__init(){this.name=N.id}setupOnce(t,e){const n=(0,g.$y)("apollo-server-core")
n?d(e)?("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("Apollo Integration is skipped because of instrumenter configuration."):(0,f.hl)(n.ApolloServerBase.prototype,"constructSchema",(function(t){return function(){if(!this.config.resolvers)return("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&(this.config.schema?r.kg.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `schema` property."):this.config.modules&&r.kg.warn("Apollo integration is not able to trace `ApolloServer` instances constructed via `modules` property."),r.kg.error("Skipping tracing as no resolvers found on the `ApolloServer` instance.")),t.call(this)
const n=(0,b.lE)(this.config.resolvers)
return this.config.resolvers=n.map((t=>(Object.keys(t).forEach((n=>{Object.keys(t[n]).forEach((i=>{"function"==typeof t[n][i]&&function(t,e,n,i){(0,f.hl)(t[e],n,(function(t){return function(){const s=i().getScope(),r=(0,a.x)([s,"optionalAccess",t=>t.getSpan,"call",t=>t()]),o=(0,a.x)([r,"optionalAccess",t=>t.startChild,"call",t=>t({description:`${e}.${n}`,op:"graphql.resolve"})])
for(var c=arguments.length,d=new Array(c),p=0;p<c;p++)d[p]=arguments[p]
const l=t.call(this,...d)
return(0,_.J8)(l)?l.then((t=>((0,a.x)([o,"optionalAccess",t=>t.finish,"call",t=>t()]),t))):((0,a.x)([o,"optionalAccess",t=>t.finish,"call",t=>t()]),l)}}))}(t,n,i,e)}))})),t))),t.call(this)}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.error("Apollo Integration was unable to require apollo-server-core package.")}}N.__initStatic()
var x=n(75492),B=n(22850),k=n(68256),G=n(27448),U=n(48206)
const Y=n(27083).n2
var A=n(4549),I=n(88468)
const C=(t,e,n)=>{let i,s
return a=>{e.value>=0&&(a||n)&&(s=e.value-(i||0),(s||void 0===i)&&(i=e.value,e.delta=s,t(e)))}},O=()=>Y.__WEB_VITALS_POLYFILL__?Y.performance&&(performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]||(()=>{const t=Y.performance.timing,e=Y.performance.navigation.type,n={entryType:"navigation",startTime:0,type:2==e?"back_forward":1===e?"reload":"navigate"}
for(const i in t)"navigationStart"!==i&&"toJSON"!==i&&(n[i]=Math.max(t[i]-t.navigationStart,0))
return n})()):Y.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0],w=()=>{const t=O()
return t&&t.activationStart||0},$=(t,e)=>{const n=O()
let i="navigate"
return n&&(i=Y.document.prerendering||w()>0?"prerender":n.type.replace(/_/g,"-")),{name:t,value:void 0===e?-1:e,rating:"good",delta:0,entries:[],id:`v3-${Date.now()}-${Math.floor(8999999999999*Math.random())+1e12}`,navigationType:i}},M=(t,e,n)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(t)){const i=new PerformanceObserver((t=>{e(t.getEntries())}))
return i.observe(Object.assign({type:t,buffered:!0},n||{})),i}}catch(t){}},L=(t,e)=>{const n=i=>{"pagehide"!==i.type&&"hidden"!==Y.document.visibilityState||(t(i),e&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))}
addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)}
let P=-1
const q=()=>(P<0&&(P="hidden"!==Y.document.visibilityState||Y.document.prerendering?1/0:0,L((t=>{let{timeStamp:e}=t
P=e}),!0)),{get firstHiddenTime(){return P}}),H={}
function F(t){return"number"==typeof t&&isFinite(t)}function z(t,e){let{startTimestamp:n,...i}=e
return n&&t.startTimestamp>n&&(t.startTimestamp=n),t.startChild({startTimestamp:n,...i})}function j(){return Y&&Y.addEventListener&&Y.performance}let X,J,Q=0,W={}
function Z(){!function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=$("CLS",0)
let i,s=0,a=[]
const r=t=>{t.forEach((t=>{if(!t.hadRecentInput){const e=a[0],r=a[a.length-1]
s&&0!==a.length&&t.startTime-r.startTime<1e3&&t.startTime-e.startTime<5e3?(s+=t.value,a.push(t)):(s=t.value,a=[t]),s>n.value&&(n.value=s,n.entries=a,i&&i())}}))},o=M("layout-shift",r)
o&&(i=C(t,n,e.reportAllChanges),L((()=>{r(o.takeRecords()),i(!0)})))}((t=>{const e=t.entries.pop()
e&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding CLS"),W.cls={value:t.value,unit:""},J=e)}))}function K(t){!function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=q(),i=$("LCP")
let s
const a=t=>{const e=t[t.length-1]
if(e){const t=Math.max(e.startTime-w(),0)
t<n.firstHiddenTime&&(i.value=t,i.entries=[e],s())}},r=M("largest-contentful-paint",a)
if(r){s=C(t,i,e.reportAllChanges)
const n=()=>{H[i.id]||(a(r.takeRecords()),r.disconnect(),H[i.id]=!0,s(!0))};["keydown","click"].forEach((t=>{addEventListener(t,n,{once:!0,capture:!0})})),L(n,!0)}}((t=>{const e=t.entries.pop()
e&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding LCP"),W.lcp={value:t.value,unit:"millisecond"},X=e)}),{reportAllChanges:t})}function V(){!function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const n=q(),i=$("FID")
let s
const a=t=>{t.startTime<n.firstHiddenTime&&(i.value=t.processingStart-t.startTime,i.entries.push(t),s(!0))},r=t=>{t.forEach(a)},o=M("first-input",r)
s=C(t,i,e.reportAllChanges),o&&L((()=>{r(o.takeRecords()),o.disconnect()}),!0)}((t=>{const e=t.entries.pop()
if(!e)return
const n=(0,U.XL)(I.Z1),i=(0,U.XL)(e.startTime);("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding FID"),W.fid={value:t.value,unit:"millisecond"},W["mark.fid"]={value:n+i,unit:"second"}}))}function tt(t,e,n,i,s,a){const r=a?e[a]:e[`${n}End`],o=e[`${n}Start`]
o&&r&&z(t,{op:"browser",description:(0,A.h)(s,(()=>n)),startTimestamp:i+(0,U.XL)(o),endTimestamp:i+(0,U.XL)(r)})}var et=n(8142),nt=n(98902)
const it=["localhost",/^\//],st={traceFetch:!0,traceXHR:!0,tracingOrigins:it,tracePropagationTargets:it}
function at(t){const{traceFetch:e,traceXHR:n,tracePropagationTargets:i,tracingOrigins:s,shouldCreateSpanForRequest:a}={traceFetch:st.traceFetch,traceXHR:st.traceXHR,...t},r="function"==typeof a?a:t=>!0,o=t=>function(t,e){return(0,nt.U0)(t,e||it)}(t,i||s),c={}
e&&(0,et.o)("fetch",(t=>{!function(t,e,n,i){if(!(0,U.zu)()||!t.fetchData||!e(t.fetchData.url))return
if(t.endTimestamp){const e=t.fetchData.__span
if(!e)return
const n=i[e]
return void(n&&(t.response?n.setHttpStatus(t.response.status):t.error&&n.setStatus("internal_error"),n.finish(),delete i[e]))}const s=(0,U.x1)()
if(s){const e=s.startChild({data:{...t.fetchData,type:"fetch"},description:`${t.fetchData.method} ${t.fetchData.url}`,op:"http.client"})
t.fetchData.__span=e.spanId,i[e.spanId]=e
const a=t.args[0]
t.args[1]=t.args[1]||{}
const r=t.args[1]
n(t.fetchData.url)&&(r.headers=function(t,e,n,i){const s=(0,B.IQ)(e),a=n.toTraceparent(),r="undefined"!=typeof Request&&(0,_.V9)(t,Request)?t.headers:i.headers
if(r){if("undefined"!=typeof Headers&&(0,_.V9)(r,Headers)){const t=new Headers(r)
return t.append("sentry-trace",a),s&&t.append(B.bU,s),t}if(Array.isArray(r)){const t=[...r,["sentry-trace",a]]
return s&&t.push([B.bU,s]),t}{const t="baggage"in r?r.baggage:void 0,e=[]
return Array.isArray(t)?e.push(...t):t&&e.push(t),s&&e.push(s),{...r,"sentry-trace":a,baggage:e.length>0?e.join(","):void 0}}}return{"sentry-trace":a,baggage:s}}(a,s.getDynamicSamplingContext(),e,r),s.metadata.propagations+=1)}}(t,r,o,c)})),n&&(0,et.o)("xhr",(t=>{!function(t,e,n,i){if(!(0,U.zu)()||t.xhr&&t.xhr.__sentry_own_request__||!(t.xhr&&t.xhr.__sentry_xhr__&&e(t.xhr.__sentry_xhr__.url)))return
const s=t.xhr.__sentry_xhr__
if(t.endTimestamp){const e=t.xhr.__sentry_xhr_span_id__
if(!e)return
const n=i[e]
return void(n&&(n.setHttpStatus(s.status_code),n.finish(),delete i[e]))}const a=(0,U.x1)()
if(a){const e=a.startChild({data:{...s.data,type:"xhr",method:s.method,url:s.url},description:`${s.method} ${s.url}`,op:"http.client"})
if(t.xhr.__sentry_xhr_span_id__=e.spanId,i[t.xhr.__sentry_xhr_span_id__]=e,t.xhr.setRequestHeader&&n(t.xhr.__sentry_xhr__.url))try{t.xhr.setRequestHeader("sentry-trace",e.toTraceparent())
const n=a.getDynamicSamplingContext(),i=(0,B.IQ)(n)
i&&t.xhr.setRequestHeader(B.bU,i),a.metadata.propagations+=1}catch(t){}}}(t,r,o,c)}))}const rt="BrowserTracing",ot={idleTimeout:G.nT,finalTimeout:G.mg,heartbeatInterval:G.hd,markBackgroundTransactions:!0,routingInstrumentation:function(t){let e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
if(!Y||!Y.location)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("Could not initialize routing instrumentation due to invalid location"))
let i,s=Y.location.href
e&&(i=t({name:Y.location.pathname,op:"pageload",metadata:{source:"url"}})),n&&(0,et.o)("history",(e=>{let{to:n,from:a}=e
void 0===a&&s&&-1!==s.indexOf(n)?s=void 0:a!==n&&(s=void 0,i&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Finishing current transaction with op: ${i.op}`),i.finish()),i=t({name:Y.location.pathname,op:"navigation",metadata:{source:"url"}}))}))},startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0,_experiments:{enableLongTask:!0},...st}
class ct{__init(){this.name=rt}constructor(t){ct.prototype.__init.call(this),this.options={...ot,...t},t&&!t.tracePropagationTargets&&t.tracingOrigins&&(this.options.tracePropagationTargets=t.tracingOrigins)
const{_metricOptions:e}=this.options
!function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const e=j()
e&&I.Z1&&(e.mark&&Y.performance.mark("sentry-tracing-init"),Z(),K(t),V())}(e&&e._reportAllChanges),(0,a.x)([this,"access",t=>t.options,"access",t=>t._experiments,"optionalAccess",t=>t.enableLongTask])&&M("longtask",(t=>{for(const e of t){const t=(0,U.x1)()
if(!t)return
const n=(0,U.XL)(I.Z1+e.startTime),i=(0,U.XL)(e.duration)
t.startChild({description:"Main UI thread blocked",op:"ui.long-task",startTimestamp:n,endTimestamp:n+i})}}))}setupOnce(t,e){this._getCurrentHub=e
const{routingInstrumentation:n,startTransactionOnLocationChange:i,startTransactionOnPageLoad:s,markBackgroundTransactions:a,traceFetch:o,traceXHR:c,tracePropagationTargets:_,shouldCreateSpanForRequest:d}=this.options
n((t=>this._createRouteTransaction(t)),s,i),a&&(Y&&Y.document?Y.document.addEventListener("visibilitychange",(()=>{const t=(0,U.x1)()
if(Y.document.hidden&&t){const e="cancelled";("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Transaction: ${e} -> since tab moved to the background, op: ${t.op}`),t.status||t.setStatus(e),t.setTag("visibilitychange","document.hidden"),t.finish()}})):("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("[Tracing] Could not set up background tab detection due to lack of global document")),at({traceFetch:o,traceXHR:c,tracePropagationTargets:_,shouldCreateSpanForRequest:d})}_createRouteTransaction(t){if(!this._getCurrentHub)return void(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`))
const{beforeNavigate:e,idleTimeout:n,finalTimeout:i,heartbeatInterval:a}=this.options,o="pageload"===t.op,c=o?_t("sentry-trace"):null,_=o?_t("baggage"):null,d=c?(0,x.q)(c):void 0,p=_?(0,B.EN)(_):void 0,l={...t,...d,metadata:{...t.metadata,dynamicSamplingContext:d&&!p?{}:p},trimEnd:!0},u="function"==typeof e?e(l):l,h=void 0===u?{...l,sampled:!1}:u
h.metadata=h.name!==l.name?{...h.metadata,source:"custom"}:h.metadata,!1===h.sampled&&("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Will not send ${h.op} transaction because of beforeNavigate.`),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Starting ${h.op} transaction on scope`)
const m=this._getCurrentHub(),{location:g}=Y,f=(0,s.lb)(m,h,n,i,!0,{location:g},a)
return f.registerBeforeFinishCallback((t=>{(function(t){const e=j()
if(!e||!Y.performance.getEntries||!I.Z1)return;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Tracing] Adding & adjusting spans using Performance API")
const n=(0,U.XL)(I.Z1),i=e.getEntries()
let s,a
if(i.slice(Q).forEach((e=>{const i=(0,U.XL)(e.startTime),o=(0,U.XL)(e.duration)
if(!("navigation"===t.op&&n+i<t.startTimestamp))switch(e.entryType){case"navigation":!function(t,e,n){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach((i=>{tt(t,e,i,n)})),tt(t,e,"secureConnection",n,"TLS/SSL","connectEnd"),tt(t,e,"fetch",n,"cache","domainLookupStart"),tt(t,e,"domainLookup",n,"DNS"),function(t,e,n){z(t,{op:"browser",description:"request",startTimestamp:n+(0,U.XL)(e.requestStart),endTimestamp:n+(0,U.XL)(e.responseEnd)}),z(t,{op:"browser",description:"response",startTimestamp:n+(0,U.XL)(e.responseStart),endTimestamp:n+(0,U.XL)(e.responseEnd)})}(t,e,n)}(t,e,n),s=n+(0,U.XL)(e.responseStart),a=n+(0,U.XL)(e.requestStart)
break
case"mark":case"paint":case"measure":{!function(t,e,n,i,s){const a=s+n,r=a+i
z(t,{description:e.name,endTimestamp:r,op:e.entryType,startTimestamp:a})}(t,e,i,o,n)
const s=q(),a=e.startTime<s.firstHiddenTime
"first-paint"===e.name&&a&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding FP"),W.fp={value:e.startTime,unit:"millisecond"}),"first-contentful-paint"===e.name&&a&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding FCP"),W.fcp={value:e.startTime,unit:"millisecond"})
break}case"resource":{const s=e.name.replace(Y.location.origin,"")
!function(t,e,n,i,s,a){if("xmlhttprequest"===e.initiatorType||"fetch"===e.initiatorType)return
const r={}
"transferSize"in e&&(r["Transfer Size"]=e.transferSize),"encodedBodySize"in e&&(r["Encoded Body Size"]=e.encodedBodySize),"decodedBodySize"in e&&(r["Decoded Body Size"]=e.decodedBodySize)
const o=a+i
z(t,{description:n,endTimestamp:o+s,op:e.initiatorType?`resource.${e.initiatorType}`:"resource.other",startTimestamp:o,data:r})}(t,e,s,i,o,n)
break}}})),Q=Math.max(i.length-1,0),function(t){const e=Y.navigator
if(!e)return
const n=e.connection
n&&(n.effectiveType&&t.setTag("effectiveConnectionType",n.effectiveType),n.type&&t.setTag("connectionType",n.type),F(n.rtt)&&(W["connection.rtt"]={value:n.rtt,unit:"millisecond"})),F(e.deviceMemory)&&t.setTag("deviceMemory",`${e.deviceMemory} GB`),F(e.hardwareConcurrency)&&t.setTag("hardwareConcurrency",String(e.hardwareConcurrency))}(t),"pageload"===t.op){"number"==typeof s&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding TTFB"),W.ttfb={value:1e3*(s-t.startTimestamp),unit:"millisecond"},"number"==typeof a&&a<=s&&(W["ttfb.requestTime"]={value:1e3*(s-a),unit:"millisecond"})),["fcp","fp","lcp"].forEach((e=>{if(!W[e]||n>=t.startTimestamp)return
const i=W[e].value,s=n+(0,U.XL)(i),a=Math.abs(1e3*(s-t.startTimestamp)),o=a-i;("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Measurements] Normalized ${e} from ${i} to ${a} (${o})`),W[e].value=a}))
const e=W["mark.fid"]
e&&W.fid&&(z(t,{description:"first input delay",endTimestamp:e.value+(0,U.XL)(W.fid.value),op:"ui.action",startTimestamp:e.value}),delete W["mark.fid"]),"fcp"in W||delete W.cls,Object.keys(W).forEach((e=>{t.setMeasurement(e,W[e].value,W[e].unit)})),function(t){X&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding LCP Data"),X.element&&t.setTag("lcp.element",(0,k.Rt)(X.element)),X.id&&t.setTag("lcp.id",X.id),X.url&&t.setTag("lcp.url",X.url.trim().slice(0,200)),t.setTag("lcp.size",X.size)),J&&J.sources&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding CLS Data"),J.sources.forEach(((e,n)=>t.setTag(`cls.source.${n+1}`,(0,k.Rt)(e.node)))))}(t)}X=void 0,J=void 0,W={}})(t),t.setTag("sentry_reportAllChanges",Boolean(this.options._metricOptions&&this.options._metricOptions._reportAllChanges))})),f}}function _t(t){const e=(0,k.qT)(`meta[name=${t}]`)
return e?e.getAttribute("content"):null}var dt,pt=n(20484)
!function(t){t.Ok="ok",t.DeadlineExceeded="deadline_exceeded",t.Unauthenticated="unauthenticated",t.PermissionDenied="permission_denied",t.NotFound="not_found",t.ResourceExhausted="resource_exhausted",t.InvalidArgument="invalid_argument",t.Unimplemented="unimplemented",t.Unavailable="unavailable",t.InternalError="internal_error",t.UnknownError="unknown_error",t.Cancelled="cancelled",t.AlreadyExists="already_exists",t.FailedPrecondition="failed_precondition",t.Aborted="aborted",t.OutOfRange="out_of_range",t.DataLoss="data_loss"}(dt||(dt={}))
var lt=n(21535);("undefined"==typeof __SENTRY_TRACING__||__SENTRY_TRACING__)&&(0,s.ro)()},20484:(t,e,n)=>{n.d(e,{Dr:()=>_,Zd:()=>d,gB:()=>c})
var i=n(4549),s=n(7209),a=n(88468),r=n(88521),o=n(15834)
class c{__init(){this.spans=[]}constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3
c.prototype.__init.call(this),this._maxlen=t}add(t){this.spans.length>this._maxlen?t.spanRecorder=void 0:this.spans.push(t)}}class _{__init2(){this.traceId=(0,s.DM)()}__init3(){this.spanId=(0,s.DM)().substring(16)}__init4(){this.startTimestamp=(0,a._I)()}__init5(){this.tags={}}__init6(){this.data={}}__init7(){this.instrumenter="sentry"}constructor(t){if(_.prototype.__init2.call(this),_.prototype.__init3.call(this),_.prototype.__init4.call(this),_.prototype.__init5.call(this),_.prototype.__init6.call(this),_.prototype.__init7.call(this),!t)return this
t.traceId&&(this.traceId=t.traceId),t.spanId&&(this.spanId=t.spanId),t.parentSpanId&&(this.parentSpanId=t.parentSpanId),"sampled"in t&&(this.sampled=t.sampled),t.op&&(this.op=t.op),t.description&&(this.description=t.description),t.data&&(this.data=t.data),t.tags&&(this.tags=t.tags),t.status&&(this.status=t.status),t.startTimestamp&&(this.startTimestamp=t.startTimestamp),t.endTimestamp&&(this.endTimestamp=t.endTimestamp),t.instrumenter&&(this.instrumenter=t.instrumenter)}startChild(t){const e=new _({...t,parentSpanId:this.spanId,sampled:this.sampled,traceId:this.traceId})
if(e.spanRecorder=this.spanRecorder,e.spanRecorder&&e.spanRecorder.add(e),e.transaction=this.transaction,("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&e.transaction){const n=`[Tracing] Starting '${t&&t.op||"< unknown op >"}' span on transaction '${e.transaction.name||"< unknown name >"}' (${e.transaction.spanId}).`
e.transaction.metadata.spanMetadata[e.spanId]={logMessage:n},r.kg.log(n)}return e}setTag(t,e){return this.tags={...this.tags,[t]:e},this}setData(t,e){return this.data={...this.data,[t]:e},this}setStatus(t){return this.status=t,this}setHttpStatus(t){this.setTag("http.status_code",String(t))
const e=d(t)
return"unknown_error"!==e&&this.setStatus(e),this}isSuccess(){return"ok"===this.status}finish(t){if(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&this.transaction&&this.transaction.spanId!==this.spanId){const{logMessage:t}=this.transaction.metadata.spanMetadata[this.spanId]
t&&r.kg.log(t.replace("Starting","Finishing"))}this.endTimestamp="number"==typeof t?t:(0,a._I)()}toTraceparent(){let t=""
return void 0!==this.sampled&&(t=this.sampled?"-1":"-0"),`${this.traceId}-${this.spanId}${t}`}toContext(){return(0,o.Jr)({data:this.data,description:this.description,endTimestamp:this.endTimestamp,op:this.op,parentSpanId:this.parentSpanId,sampled:this.sampled,spanId:this.spanId,startTimestamp:this.startTimestamp,status:this.status,tags:this.tags,traceId:this.traceId})}updateWithContext(t){return this.data=(0,i.h)(t.data,(()=>({}))),this.description=t.description,this.endTimestamp=t.endTimestamp,this.op=t.op,this.parentSpanId=t.parentSpanId,this.sampled=t.sampled,this.spanId=(0,i.h)(t.spanId,(()=>this.spanId)),this.startTimestamp=(0,i.h)(t.startTimestamp,(()=>this.startTimestamp)),this.status=t.status,this.tags=(0,i.h)(t.tags,(()=>({}))),this.traceId=(0,i.h)(t.traceId,(()=>this.traceId)),this}getTraceContext(){return(0,o.Jr)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,trace_id:this.traceId})}toJSON(){return(0,o.Jr)({data:Object.keys(this.data).length>0?this.data:void 0,description:this.description,op:this.op,parent_span_id:this.parentSpanId,span_id:this.spanId,start_timestamp:this.startTimestamp,status:this.status,tags:Object.keys(this.tags).length>0?this.tags:void 0,timestamp:this.endTimestamp,trace_id:this.traceId})}}function d(t){if(t<400&&t>=100)return"ok"
if(t>=400&&t<500)switch(t){case 401:return"unauthenticated"
case 403:return"permission_denied"
case 404:return"not_found"
case 409:return"already_exists"
case 413:return"failed_precondition"
case 429:return"resource_exhausted"
default:return"invalid_argument"}if(t>=500&&t<600)switch(t){case 501:return"unimplemented"
case 503:return"unavailable"
case 504:return"deadline_exceeded"
default:return"internal_error"}return"unknown_error"}},21535:(t,e,n)=>{n.d(e,{Y:()=>_})
var i=n(4549),s=n(8651),a=n(88468),r=n(88521),o=n(15834),c=n(20484)
class _ extends c.Dr{__init(){this._measurements={}}__init2(){this._contexts={}}__init3(){this._frozenDynamicSamplingContext=void 0}constructor(t,e){super(t),_.prototype.__init.call(this),_.prototype.__init2.call(this),_.prototype.__init3.call(this),this._hub=e||(0,s.Gd)(),this._name=t.name||"",this.metadata={source:"custom",...t.metadata,spanMetadata:{},changes:[],propagations:0},this._trimEnd=t.trimEnd,this.transaction=this
const n=this.metadata.dynamicSamplingContext
n&&(this._frozenDynamicSamplingContext={...n})}get name(){return this._name}set name(t){this.setName(t)}setName(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"custom"
t===this.name&&e===this.metadata.source||this.metadata.changes.push({source:this.metadata.source,timestamp:(0,a.ph)(),propagations:this.metadata.propagations}),this._name=t,this.metadata.source=e}initSpanRecorder(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3
this.spanRecorder||(this.spanRecorder=new c.gB(t)),this.spanRecorder.add(this)}setContext(t,e){null===e?delete this._contexts[t]:this._contexts[t]=e}setMeasurement(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:""
this._measurements[t]={value:e,unit:n}}setMetadata(t){this.metadata={...this.metadata,...t}}finish(t){if(void 0!==this.endTimestamp)return
if(this.name||(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.warn("Transaction has no name, falling back to `<unlabeled transaction>`."),this.name="<unlabeled transaction>"),super.finish(t),!0!==this.sampled){("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Tracing] Discarding transaction because its trace was not chosen to be sampled.")
const t=this._hub.getClient()
return void(t&&t.recordDroppedEvent("sample_rate","transaction"))}const e=this.spanRecorder?this.spanRecorder.spans.filter((t=>t!==this&&t.endTimestamp)):[]
this._trimEnd&&e.length>0&&(this.endTimestamp=e.reduce(((t,e)=>t.endTimestamp&&e.endTimestamp?t.endTimestamp>e.endTimestamp?t:e:t)).endTimestamp)
const n=this.metadata,i={contexts:{...this._contexts,trace:this.getTraceContext()},spans:e,start_timestamp:this.startTimestamp,tags:this.tags,timestamp:this.endTimestamp,transaction:this.name,type:"transaction",sdkProcessingMetadata:{...n,dynamicSamplingContext:this.getDynamicSamplingContext()},...n.source&&{transaction_info:{source:n.source,changes:n.changes,propagations:n.propagations}}}
return Object.keys(this._measurements).length>0&&(("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log("[Measurements] Adding measurements to transaction",JSON.stringify(this._measurements,void 0,2)),i.measurements=this._measurements),("undefined"==typeof __SENTRY_DEBUG__||__SENTRY_DEBUG__)&&r.kg.log(`[Tracing] Finishing ${this.op} transaction: ${this.name}.`),this._hub.captureEvent(i)}toContext(){const t=super.toContext()
return(0,o.Jr)({...t,name:this.name,trimEnd:this._trimEnd})}updateWithContext(t){return super.updateWithContext(t),this.name=(0,i.h)(t.name,(()=>"")),this._trimEnd=t.trimEnd,this}getDynamicSamplingContext(){if(this._frozenDynamicSamplingContext)return this._frozenDynamicSamplingContext
const t=this._hub||(0,s.Gd)(),e=t&&t.getClient()
if(!e)return{}
const{environment:n,release:i}=e.getOptions()||{},{publicKey:a}=e.getDsn()||{},r=this.metadata.sampleRate,c=void 0!==r?r.toString():void 0,_=t.getScope(),{segment:d}=_&&_.getUser()||{},p=this.metadata.source,l=p&&"url"!==p?this.name:void 0
return(0,o.Jr)({environment:n,release:i,transaction:l,user_segment:d,public_key:a,trace_id:this.traceId,sample_rate:c})}}},48206:(t,e,n)=>{n.d(e,{XL:()=>r,x1:()=>a,zu:()=>s})
var i=n(8651)
function s(t){const e=(0,i.Gd)().getClient(),n=t||e&&e.getOptions()
return!!n&&("tracesSampleRate"in n||"tracesSampler"in n)}function a(t){const e=(t||(0,i.Gd)()).getScope()
return e&&e.getTransaction()}function r(t){return t/1e3}},4549:(t,e,n)=>{function i(t,e){return null!=t?t:e()}n.d(e,{h:()=>i})}}])

//# sourceMappingURL=chunk.507.71dd4bfc4ccb354cc629.map