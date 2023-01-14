(()=>{"use strict";var e={1876:(e,o,t)=>{t.d(o,{Z:()=>c}),t(965),t(4914);var n=t(7363),a=t(9867),r=t(4829);const c=function(e){var o=e.nowCurrencyUnit,t=e.showTitle,c=e.currencyList,i=e.id,s=e.setUnit,l=o.currencyId,u=(0,n.useMemo)((function(){var e=[];return c.forEach((function(o){l===o.currencyId?e.unshift(o):e.push(o)})),e}),[l,c]);return 0===c.length?null:(0,r.jsxs)("div",{className:"ul-box",id:i,children:[t&&(0,r.jsx)("div",{className:"ul-title",children:(0,a.Iu)("home_footersetting_text2_local_currency")}),(0,r.jsx)("ul",{className:"list-ul",children:u.map((function(e,o){var t=e.isoCode,n=0===o;return(0,r.jsxs)("li",{className:"language ".concat(n?"now-select-item":""),onClick:function(){s({currencyId:e.currencyId,refresh:!0})},children:[t,n&&(0,r.jsx)("i",{className:"icon okx-header-footer-check select-icon"})]},"currency_id_".concat(e.currencyId))}))})]})}},8029:(e,o,t)=>{t.d(o,{Z:()=>l}),t(8924),t(5413),t(5836),t(472),t(965),t(4914);var n=t(7363),a=t(1232),r=t(2838),c=t.n(r),i=t(9867),s=t(4829);const l=function(e){var o=(a.Z||{}).locale,t=e.languageList,r=void 0===t?[]:t,l=e.showTitle,u=e.languageMap,m=e.id,d=e.setLanguage,h=e.route,_=(0,n.useMemo)((function(){var e=[];return r.forEach((function(t){o===t.language?e.unshift(t):e.push(t)})),e}),[r,o]);return 0===r.length?null:(0,s.jsxs)("div",{className:"ul-box",id:m,children:[l&&(0,s.jsx)("div",{className:"ul-title",children:(0,i.Iu)("home_header_language_dropdowntitle_language")}),(0,s.jsx)("div",{className:"list-ul",children:_.map((function(e){var t=e.language,n=e.text,r=o===t,i=function(e,o,t){var n=(a.Z||{}).langPath,r=e[o]||{},i=t||window.location,s=i.pathname,l=i.search,u=i.hash,m=void 0===u?"":u,d="".concat(s).concat(l).concat(m),h=r.langPath?"/".concat(r.langPath):"/";if(r.href)return c()(r.href);if("/"===s||s===n)return c()("".concat(h).concat(l).concat(m));var _="";return _=n.length?d.replace(n,h):"".concat(h).concat(d),c()(_.replace("//","/"))}(u,t,h);return(0,s.jsxs)("a",{className:"language ".concat(r?"now-select-item":""),rel:t,href:i,onClick:function(e){e.preventDefault(),d(t)},children:[n,r&&(0,s.jsx)("i",{className:"icon okx-header-footer-check select-icon"})]},"language_".concat(t))}))})]})}},2565:(e,o,t)=>{t.d(o,{Z:()=>n});const n={CHECK_COUNTRY_LIMIT:"/v3/users/support/common/check-country-limit",GET_AGREEMENT:"/v3/users/local-config/get-agreement",UPDATE_AGREEMENT:"/v3/users/local-config/update-agreement",SWITCH_ACCOUNT:"/v3/users/subaccount/switchAccount",GET_SWITCHING_ACCOUNT_LIST:"/v3/users/subaccount/accountListForSwitching",CAN_SWITCH_ACCOUNT:"/v3/users/subaccount/canSwitchAccount",REPORT_USER_LANGUAGE:"/v3/users/support/current/lang",POST_SIMULATED_BALANCE_RESET:"/priapi/v5/balance/reset",GET_ANNOUNCEMENT:"/v2/support/home/web",HEADER_NAV_TAG:"/v2/support/home/navigation/info",GET_PREFERENCE:"/v3/users/local-config/settings",GET_MARKET_STATUS:"/priapi/v5/ecotrade/user/copy-auth-status"}},1149:(e,o,t)=>{t.d(o,{Z:()=>i}),t(4886),t(2972),t(6953);var n=t(8361),a=((0,n.y)()?{}:window.utils).ont;function r(e){var o=(e||{}).data;return o&&0===Number(o.code)?Promise.resolve(o):Promise.reject(o||{})}var c=a&&a.create();(0,n.y)()||(c.get=function(e,o){return a.get(e,{params:o}).then(r)},c.getWithCache=function(e,o){return a.getWithCache(e,o).then(r)},c.post=function(e,o){return a.post(e,o).then(r)},c.delete=function(e,o){return a.delete(e,o).then(r)});const i=(0,n.y)()?{}:c},6110:(e,o,t)=>{t.d(o,{Z:()=>i});var n=t(885),a=t(7363),r=t(4627),c=t.n(r);const i=function(){var e=(0,a.useState)(""),o=(0,n.Z)(e,2),t=o[0],r=o[1];return(0,a.useEffect)((function(){c().getDownloadQrCode().then((function(e){r(e)})).catch((function(){}))}),[]),{url:t}}},1181:(e,o,t)=>{t.d(o,{A:()=>l});var n=t(885),a=(t(8437),t(2596),t(7363)),r=t(1232),c=t(2706),i=t(4627),s=t.n(i),l=function(){var e=s().getSeoLanguageList(window.location.pathname),o=Object.values(e),t=(0,a.useState)(e),i=(0,n.Z)(t,2),l=i[0],u=i[1],m=(0,a.useState)(o),d=(0,n.Z)(m,2),h=d[0],_=d[1],f=(0,a.useState)({}),p=(0,n.Z)(f,2),v=p[0],y=p[1],g=(0,a.useState)({}),A=(0,n.Z)(g,2),x=A[0],b=A[1],k=(0,a.useState)([]),w=(0,n.Z)(k,2),N=w[0],I=w[1],T=r.Z.locale;(0,a.useEffect)((function(){s().preference.getLanguageList().then((function(e){if(e&&Object.keys(e).length>0){u(e),y(e[T]);var o=Object.values(e);_(o)}})).catch((function(){})),s().preference.getUnit().then((function(e){var o=e.nowCurrencyUnit,t=e.allCurrencyUnit;b(o),I(t)})).catch((function(){})),c.Z.listen("global_updated_currency",(function(e){b(e)}))}),[]);var j=(0,a.useCallback)((function(e){var o={nowLocale:e};s().preference.setLanguage(o)}),[]),C=(0,a.useCallback)((function(e){s().preference.setUnit(e)}),[]);return{languageList:h,nowLanguage:v,languageMap:l,nowCurrencyUnit:x,setNowCurrencyUnit:b,currencyList:N,setUnit:C,setLanguage:j}}},6925:(e,o,t)=>{t.d(o,{g:()=>l});var n=t(1413),a=t(885),r=t(7363),c=t(8361),i=t(4627),s=t.n(i),l=function(){if((0,c.y)())return{};var e=(0,r.useState)({}),o=(0,a.Z)(e,2),t=o[0],i=o[1];return(0,r.useEffect)((function(){(0,c.y)()||s().allAssociation&&s().allAssociation.then((function(e){i(e)}))}),[]),(0,n.Z)({},t)}},5351:(e,o,t)=>{t.d(o,{ju:()=>r});var n=t(885),a=(t(5836),t(8924),t(5413),t(6863),t(7363)),r=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"from",t=(0,a.useState)(e),r=(0,n.Z)(t,2),c=r[0],i=r[1];return(0,a.useEffect)((function(){var t=window.location,n=void 0===t?{}:t,a=encodeURIComponent("".concat(n.pathname).concat(n.search)),r=e.indexOf("?")>0?"&":"?";i("".concat(e).concat(r).concat(o,"=").concat(a))}),[]),c}},8839:(e,o,t)=>{t.d(o,{OD:()=>l});var n={act:function(){}};if("undefined"!=typeof window){var a=window.utils.monitor,r=(window._okGlobal||window.okGlobal).site,c=(void 0===r?{}:r).sign,i=void 0===c?"okex":c;n=a.newInstance({site:i.toLocaleLowerCase(),product:"app_web_homepage",commonParams:{}})}var s=n,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.button_name;s.act({action:"HomePage_Footer_Button_Click",anchor:"HomePage_Footer_Button_Click",params:{button_name:o},actionType:"",elementType:""})}},9867:(e,o,t)=>{t.d(o,{Iu:()=>i,bg:()=>s}),t(6921),t(5836),t(8924),t(5413),t(6603),t(965),t(3727),t(7120),t(6863),t(8218),t(4125),t(2972),t(4329),t(4557),t(4438),t(6190),t(79),t(472),t(4886),t(2324);var n=t(7e3),a=t(8361),r=t(8562),c=void 0!==r?r:{},i=function(e,o){var t=c.javaUse;return void 0!==t&&t?"##".concat(e,"##"):(0,n.O4)(e,o)},s=function(){return!(0,a.y)()&&!!window.utils.ont.isLogin()}},9609:(e,o,t)=>{var n=t(7363),a=t(566),r=t(1232),c=t(1413),i=t(885),s=t(8361),l=t(3504),u=(t(5836),t(4914),t(5351)),m=t(8839),d=t(7482),h=t(4829);const _=function(e){var o=e.ssr,t=e.javaUse,n=e.columnIndex,a=e.list,r=e.title,c=e.handleActivity,i=e.activitiesData,s=(0,d.Z)().isSm;return(0,h.jsxs)("div",{className:"list ".concat(i[n]||""),children:[s?(0,h.jsxs)("div",{className:"title-box",onClick:function(){o||t||c(n)},children:[(0,h.jsx)("div",{className:"title",children:r}),(0,h.jsx)("span",{className:"icon okx-header-footer-arrow-chevrons-down user-arrow"})]}):(0,h.jsx)("div",{className:"title footer-title",children:r}),(0,h.jsx)("div",{className:"item-box",children:a.map((function(e,n){var a=e.href,r=e.text,c=e.monitorName,i=e.needHide,s=void 0!==i&&i,l=e.blank,u=void 0===l?"":l;if(s||!r)return null;var m="footer_list_col".concat(n),d=function(){o||t||c&&c()};return a?(0,h.jsx)("a",{className:"link",href:a,target:u||"",onClick:d,children:r},m):(0,h.jsx)("button",{className:"link",type:"button",onClick:d,children:r},m)}))})]},r)};var f=t(9252),p=t(9867),v=(t(8924),t(5413),t(6863),function(){return"undefined"!=typeof window}),y=function(){},g=function(e){var o=e.langPath,t=e.locale,n=e.javaUse,a=e.ssr,c=e.enableOnetrustScripts,i="zh_CN"===t||"zh_HK"===t||"zh_TW"===t,s=i?"zh-cn":"en-us",l=(0,u.ju)("".concat(o,"/community"),"source"),d=function(){var e=r.Z.locale,o={en_US:"usd",zh_CN:"cny",zh_TW:"hkd",zh_HK:"hkd",fr_FR:"eur",de_DE:"eur",it_IT:"eur",pt_PT:"eur",es_ES:"eur",ru_RU:"rub",th_TH:"thb",vi_VN:"vnd",in_ID:"idr",tr_TR:"try",pl_PL:"pln",en_IN:"inr",pt_BR:"brl",es_419:"ars",cs_CZ:"czk",ro_RO:"ron",uk_UA:"uah"};return o[void 0===e?"en_US":e]||o.en_US}();return[{title:(0,p.Iu)("home_footer_colheader1_about"),columnIndex:0,list:[{href:"".concat(o,"/about.html"),text:(0,p.Iu)("home_footer_colbody1_about_us"),monitorName:f.w4I},{href:"https://go.okx.com/whatisokx",text:(0,p.Iu)("home_footer_colbody1_what_is_okx"),blank:"whatisokx"},{text:(0,p.Iu)("home_footer_colbody1_careers"),href:"".concat(o,"/join-us"),monitorName:f.UIn},{href:"".concat(o,"/contact-us.html"),text:(0,p.Iu)("home_footer_colbody1_contact_us"),monitorName:y},{href:"/academy/en/category/company-updates-en",text:(0,p.Iu)("home_footer_colbody1_press_room"),monitorName:function(){if(!n&&!a){var e={},o=(v()?sessionStorage:{}).channelId;o&&(e.channel_id=o),(0,f.DEd)(e)}},needHide:i},{href:"/support/hc/".concat(s,"/articles/360021813691"),text:(0,p.Iu)("home_footer_colbody2_terms_of_service"),monitorName:f.Irb,blank:"service"},{text:(0,p.Iu)("home_footer_colbody2_privacy_policy"),href:i?"/support/hc/zh-cn/articles/360021590732":"/support/hc/en-us/articles/360015928271",monitorName:f.AkX,blank:"policy"},{href:"/support/hc/".concat(s,"/articles/360021813591"),text:(0,p.Iu)("home_footer_colbody2_disclosures"),monitorName:f.pFB,blank:"disclosures"},{href:"/support/hc/".concat(s,"/articles/360044374692"),text:(0,p.Iu)("home_footer_colbody2_whistleblower_notice"),monitorName:f._Bq,blank:"notice"},{href:i?"/support/hc/zh-cn/articles/360021858931":"/support/hc/en-us/articles/360021858931-Law-Enforcement-Request-Guide",text:(0,p.Iu)("home_footer_colbody2_law_enforcement"),monitorName:f.xD$,blank:"enforcement"},{href:"".concat(o,"/download"),text:(0,p.Iu)("home_footer_colbody_okx_download_app"),monitorName:y},c?{text:(0,p.Iu)("home_footer_colbody1_cookie_preference"),monitorName:function(){var e,o;a||null===(e=window)||void 0===e||null===(o=e.OneTrust)||void 0===o||o.ToggleInfoDisplay()}}:{}]},{title:(0,p.Iu)("home_footer_colheader7_products"),columnIndex:1,list:[{text:(0,p.Iu)("home_footer_colbody7_buy_crypto"),href:"".concat(o,"/buy-crypto"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody7_p2p_trading"),href:"".concat(o,"/p2p-markets"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody7_convert"),href:"".concat(o,"/trade-convert"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody7_trading"),href:"".concat(o,"/trade-spot/btc-usdt"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody7_earn"),href:"".concat(o,"/earn"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody7_okc"),href:"".concat(o,"/okc"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody7_okx_wallet"),href:"".concat(o,"/web3"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody7_nft_marketplace"),href:"".concat(o,"/web3/nft/featured"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody_crypto_calculator"),href:"".concat(o,"/convert"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody_trading_bot"),href:"".concat(o,"/trading-bot"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody_browse_all_coins"),href:"".concat(o,"/markets/all-coins"),monitorName:y}]},{isTwoColumn:!0,columnsList:[{title:(0,p.Iu)("home_footer_colheader3_service"),columnIndex:2,list:[{href:"".concat(o,"/affiliates"),text:(0,p.Iu)("home_footer_colbody_affiliate"),monitorName:function(){(0,m.OD)({button_name:"affiliates"})}},{href:"".concat(o,"/okx-api"),text:(0,p.Iu)("home_footer_colbody3_apiv5"),monitorName:f.Ztm},{text:(0,p.Iu)("home_footer_colbody3_historical_market_data"),href:"".concat(o,"/historical-data"),monitorName:y},{href:"".concat(o,"/fees"),text:(0,p.Iu)("home_footer_colbody3_fee_schedule"),monitorName:f.$OY},{href:"".concat(o,"/token-listing-apply"),text:(0,p.Iu)("home_footer_colbody3_token_listing"),monitorName:f.a$2,isZh:!0}]},{title:(0,p.Iu)("home_footer_colheader4_support"),columnIndex:3,list:[{href:"".concat(o,"/support-center.html"),text:(0,p.Iu)("home_footer_colbody4_support_center"),monitorName:f.yAf},{text:(0,p.Iu)("home_footer_colbody4_channel_verification"),href:"".concat(o,"/support-center/channel-verification"),monitorName:""},{href:"/support/hc/".concat(s,"/categories/115000275131"),text:(0,p.Iu)("home_footer_colbody4_announcement"),monitorName:f.fGM,blank:"announcement"},{href:l,text:(0,p.Iu)("home_footer_colbody4_connect_with_okx"),monitorName:f.Lim,needAutoHref:!0}]}]},{isTwoColumn:!0,columnsList:[{title:(0,p.Iu)("home_footer_colheader6_buy_crypto"),columnIndex:4,list:[{text:(0,p.Iu)("home_footer_colbody5_buy_usdt"),href:"".concat(o,"/buy-usdt"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody5_buy_bitcoin"),href:"".concat(o,"/buy-btc"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody5_buy_eth"),href:"".concat(o,"/buy-eth"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody5_buy_doge"),href:"".concat(o,"/buy-doge"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody5_buy_shib"),href:"".concat(o,"/buy-shib"),monitorName:y}]},{title:(0,p.Iu)("home_footer_colbody_crypto_calculator_header"),columnIndex:5,list:[{text:(0,p.Iu)("home_footer_colbody_btc_to_fiat"),href:"".concat(o,"/convert/btc-to-").concat(d,"?amount=1"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody_eth_to_fiat"),href:"".concat(o,"/convert/eth-to-").concat(d,"?amount=1"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody_usdt_to_fiat"),href:"".concat(o,"/convert/usdt-to-").concat(d,"?amount=1"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody_shib_to_fiat"),href:"".concat(o,"/convert/shib-to-").concat(d,"?amount=1"),monitorName:y}]}]},{title:(0,p.Iu)("home_footer_colheader6_trade"),columnIndex:6,list:[{text:(0,p.Iu)("home_footer_colbody6_btc_usdt"),href:"".concat(o,"/trade-spot/btc-usdt"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody6_eth_usdt"),href:"".concat(o,"/trade-spot/eth-usdt"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody6_slp_usdt"),href:"".concat(o,"/trade-spot/slp-usdt"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody6_luna_usdt"),href:"".concat(o,"/trade-spot/luna-usdt"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody6_ant_usdt"),href:"".concat(o,"/trade-spot/ant-usdt"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody6_btc_price"),href:"".concat(o,"/markets/prices/bitcoin-btc"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody6_eth_price"),href:"".concat(o,"/markets/prices/ethereum-eth"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody6_shib_price"),href:"".concat(o,"/markets/prices/shiba-inu-shib"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody6_doge_price"),href:"".concat(o,"/markets/prices/dogecoin-doge"),monitorName:y},{text:(0,p.Iu)("home_footer_colbody6_luna_price"),href:"".concat(o,"/markets/prices/terra-luna"),monitorName:y}]}]};const A=function(e){var o=e.ssr,t=e.javaUse,a=g(e),r=(0,n.useState)({0:"",1:"",2:"",3:"",4:"",5:""}),s=(0,i.Z)(r,2),l=s[0],u=s[1],m=function(e){if(!o&&!t){var n=(0,c.Z)({},l);n[e]?n[e]="":n[e]="active",u(n)}};return(0,h.jsx)("div",{className:"footer-ul footer-main-box",children:a.map((function(e,n){var a=e.title,r=e.list,c=e.isTwoColumn,i=void 0!==c&&c,s=e.columnIndex,u=e.columnsList;return i?(0,h.jsx)("div",{className:"list list-container",children:u.map((function(e){return(0,h.jsx)(_,{title:e.title,list:e.list,columnIndex:e.columnIndex,ssr:o,javaUse:t,handleActivity:m,activitiesData:l},"twoCol".concat(e.columnIndex))}))},"two_list_".concat(n)):(0,h.jsx)(_,{title:a,list:r,columnIndex:s,ssr:o,javaUse:t,handleActivity:m,activitiesData:l},"col".concat(s))}))})};var x=t(1331),b=(t(2972),t(8466),t(2565)),k=t(1149),w=t(1181),N=t(8029),I=t(1876),T=function(e){var o=e.isSsr,t=e.locale,n=(0,w.A)(o),a=n.nowCurrencyUnit,r=n.languageMap,c=n.languageList,i=n.currencyList,s=n.setUnit,l=n.setLanguage;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(N.Z,{locale:t,showTitle:!0,languageMap:r,languageList:c,setLanguage:l}),(0,h.jsx)(I.Z,{showTitle:!0,nowCurrencyUnit:a,currencyList:i,setUnit:s,id:""})]})},j=function(e){var o=e.onActiveHandle,t=(0,n.useState)(""),a=(0,i.Z)(t,2),r=a[0],c=a[1],s=(0,w.A)(!1),l=s.nowLanguage,u=(s.nowCurrencyUnit||{}).isoCode,m=void 0===u?"":u;return(0,n.useEffect)((function(){var e=(l||{}).text,o=void 0===e?"":e,t=m?"".concat(o,"/").concat(m):o;c(t)}),[l,m]),(0,h.jsxs)("div",{id:"language",className:"now-language",onClick:o,children:[(0,h.jsx)("i",{className:"icon okx-header-footer-language lang-box-icon"}),(0,h.jsx)("span",{className:"text",children:r}),(0,h.jsx)("i",{className:"icon okx-header-footer-arrow-chevrons-down arrow-icon"})]})};const C=function(e){var o=e.ssr,t=(0,n.useState)(!1),a=(0,i.Z)(t,2),c=a[0],l=a[1],u=r.Z.locale,m=void 0===u?"zh_CN":u;(0,n.useEffect)((function(){var e=localStorage.getItem("token"),o=sessionStorage.getItem("reportedLanguage");e&&e.toString().length>10&&o&&k.Z.post(b.Z.REPORT_USER_LANGUAGE).then((function(){sessionStorage.removeItem("reportedLanguage")})).catch((function(){}))}),[]);var d=(0,n.useCallback)((function(){l(!c)}),[c]),_=(0,n.useMemo)((function(){var e="all-language-box ";return c&&(e+=" active"),e}),[c]);return(0,h.jsxs)("div",{className:_,children:[!o&&(0,h.jsx)(j,{onActiveHandle:d}),(0,h.jsx)("div",{className:"language-list ".concat(o?"":"drop-animation"),children:(0,s.y)()?"HEADER_LANGUAGE_CONTENT_PLACEHOLDER":(0,h.jsx)(T,{locale:m,isSsr:!1})})]})},S=function(e){var o=e.javaUse,t=e.copyRightText,n=void 0===t?"":t,a=e.ssr,r=e.locale,c=o?n:(0,p.Iu)("exp_footer_text_copyright",{0:(0,x.Z)((new Date).getFullYear())}),i={zh_CN:"data:image/png;base64,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",en_US:"images/eighred.png"},s=i[r]||i.en_US;return(0,h.jsxs)("div",{className:"footer-section footer-top-box",children:[(0,h.jsx)("div",{className:"footer-top-logo",children:(0,h.jsx)("img",{alt:"OKX",className:"img",src:s})}),(0,h.jsx)("div",{className:"footer-copyright",children:c}),!o&&(0,h.jsx)(C,{ssr:a})]})};var E=t(6110);const Z=function(){if((0,s.y)())return{loginStatus:!1};var e=(0,n.useState)(!1),o=(0,i.Z)(e,2),t=o[0],a=o[1];return(0,n.useEffect)((function(){var e=(0,p.bg)();a(e)}),[]),{loginStatus:t}},U=function(e){var o=e.langPath,t=e.locale,n=Z().loginStatus,a=(0,E.Z)().url;return(0,h.jsxs)("div",{className:"footer-download",children:[(0,h.jsx)("div",{className:"footer-download-title",children:(0,p.Iu)("home_footer_slogan_trade_with_okx")}),n&&(0,h.jsx)("a",{className:"footer-trade-link",href:"".concat(o,"/trade-spot"),children:(0,p.Iu)("home_footer_btn_trade")}),!n&&(0,h.jsx)("a",{className:"footer-register-link",href:"".concat(o,"/account/register"),children:(0,p.Iu)("home_footer_btn_register")}),"zh_CN"!==t&&(0,h.jsxs)("div",{className:"footer-scan-box",children:[(0,h.jsx)("img",{id:"footer-qrcode-img",src:a,alt:""}),(0,h.jsx)("div",{className:"footer-scan-desc",children:(0,p.Iu)("home_footer_qrcode_scan_to_download")})]})]})};t(3727),t(7120),t(472),t(8922);var O=t(6925),R={"icon-biyong11":"okx-header-footer-biyong","icon-biyong1":"okx-header-footer-biyong","icon-biyong2":"okx-header-footer-biyong","icon-discord":"okx-header-footer-discord","icon-Discord":"okx-header-footer-discord","icon-Instagram":"okx-header-footer-instagram","icon-weibo":"okx-header-footer-weibo","icon-weibo2":"okx-header-footer-weibo","icon-weibo1":"okx-header-footer-weibo","icon-facebook2":"okx-header-footer-facebook","icon-facebook3":"okx-header-footer-facebook","icon-line1":"okx-header-footer-line","icon-Linkedin":"okx-header-footer-linkedin","icon-PressRoom":"okx-header-footer-press-room","icon-reddit":"okx-header-footer-reddit","icon-reddit1":"okx-header-footer-reddit","icon-twitter":"okx-header-footer-twitter","icon-twitter1":"okx-header-footer-twitter","icon-twitter2":"okx-header-footer-twitter","icon-youtube":"okx-header-footer-youtube","icon-youtube1":"okx-header-footer-youtube","icon-telegram":"okx-header-footer-telegram","icon-telegram1":"okx-header-footer-telegram","icon-Telegram":"okx-header-footer-telegram","icon-VK21":"okx-header-footer-vk","icon-a-VK21":"okx-header-footer-vk"};const M=function(e){var o=e.ssr,t=e.locale,a=e.javaUse,c=(0,n.useState)([]),s=(0,i.Z)(c,2),l=s[0],m=s[1],d=(r.Z||{}).langPath,_=void 0===d?"":d,v=(0,O.g)().mediaInfo,y=void 0===v?[]:v;(0,n.useEffect)((function(){var e=Math.min(y.length,9),o=y.slice(0,e-1);m(o)}),[y.length]);var g="zh_CN"===t,A=(0,u.ju)("".concat(_,"/community"),"source");return o||a?null:(0,h.jsxs)("div",{className:"footer-media-area",children:[(0,h.jsx)("div",{className:"footer-media-title",children:(0,p.Iu)("home_footer_bottom_community")}),(0,h.jsxs)("div",{className:"icon-list",id:"footerMedia",children:[l.length>0&&l.map((function(e,o){var t=e.nameEn,n=e.isLink,a=e.linkUrl,r=e.iconName,c=t.replace(/\s/g,"").toLowerCase(),i=R[r]||r;if(n){var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e.includes("http")||e.includes("https")){var o=/^https?:\/\/(.*?)(:\d+)?\/.*$/;return"eighred.com"===e.replace(o,"$1")}return!0}(a);return(0,h.jsx)("a",{href:"telegram"===c&&g?A:a,className:"icon-some-chat",target:"_blank",rel:s||"telegram"===c&&g?"noreferrer":"nofollow noreferrer","aria-label":i,children:(0,h.jsx)("i",{className:"icon footer-icon ".concat(i),onClick:function(){(0,f.rQj)({footerCommunitychannels:t})}})},"media_".concat(o))}return(0,h.jsxs)("div",{className:"icon-some-chat",children:[(0,h.jsx)("i",{className:"icon footer-icon ".concat(i," icon-about-us"),"data-monitor-channel":t}),(0,h.jsx)("div",{className:"weichat-qrcode-box",children:(0,h.jsx)("img",{className:"qr-img",src:a,alt:""})})]},"media_".concat(o))})),(0,h.jsx)("a",{href:A,className:"icon-some-chat","aria-label":"footerMediaMore",children:(0,h.jsx)("i",{className:"icon footer-icon okx-header-footer-more",id:"footerMediaMore",onClick:f.ypl})})]})]})};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.i18nData;r.Z.isRenderByNode||(o=window.okx_web_seo_tdk),!(0,s.y)()&&r.Z.isRenderByNode&&(o=window.__INIT_STATE__.headerContext.i18nData);var t=r.Z.locale,a=r.Z.langPath,u=r.Z.enableOnetrustScripts,m=void 0!==u&&u,d=r.Z||{},_=d.envSign,f={locale:t,langPath:a,javaUse:!1,enableOnetrustScripts:m,ssr:!0},p=(0,n.useState)(f),v=(0,i.Z)(p,2),y=v[0],g=v[1];(0,n.useEffect)((function(){g((0,c.Z)((0,c.Z)({},y),{},{ssr:!1}))}),[]);var x={site:"okx",project:"okx_web_seo_tdk",locale:t||"zh_CN",isDev:!0,envType:"prod"===_?"publish":_,version:"0.0.232"};return(0,h.jsx)(l.Z,{isDev:!0,localeData:o,noRemoteData:!0,fetchConfig:x,children:(0,h.jsx)("div",{className:"footer-wrap",children:(0,h.jsxs)("div",{className:"footer-body",children:[(0,h.jsx)(S,(0,c.Z)({},y)),(0,h.jsxs)("div",{className:"footer-core",children:[(0,h.jsx)(A,(0,c.Z)({},y)),(0,h.jsx)(U,(0,c.Z)({},y))]}),(0,h.jsx)(M,(0,c.Z)({},y))]})})})};L.defaultProps={locale:"",langPath:"",i18nData:void 0};const G=L;!function(){var e=document.getElementById("footerContainer");if(r.Z.isRenderByNode)e&&(0,a.a)(e,(0,h.jsx)(G,{}),{onRecoverableError:function(e){var o;"prod"===r.Z.envSign&&e?null===(o=window.OkPerf)||void 0===o||o.customLog({type:"hydrate"}):console.error(e)}});else{var o=e&&(0,a.s)(e);e&&o.render((0,h.jsx)(G,{}))}}()},9252:(e,o,t)=>{t.d(o,{$OY:()=>f,AkX:()=>A,DEd:()=>l,Irb:()=>x,Lim:()=>h,UIn:()=>k,Ztm:()=>p,_Bq:()=>y,a$2:()=>_,fGM:()=>u,pFB:()=>g,rQj:()=>w,w4I:()=>b,xD$:()=>v,yAf:()=>m,ypl:()=>d});var n={act:function(){}};if("undefined"!=typeof window){var a=window.utils.monitor,r=(window._okGlobal||window.okGlobal).site,c=(void 0===r?{}:r).sign,i=void 0===c?"okex":c;n=a.newInstance({site:i.toLocaleLowerCase(),product:"seo",commonParams:{}})}var s=n,l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.channelId;s.act({action:"web_footer_company_update_click",anchor:"web_footer_company_update_click",params:{channelId:o},actionType:"Click",elementType:"Click"})},u=function(){s.act({action:"web_footer_navigation_support_annoucement_click",anchor:"web_footer_navigation_support_annoucement_click",params:{},actionType:"",elementType:""})},m=function(){s.act({action:"web_footer_navigation_support_helpcenter_click",anchor:"web_footer_navigation_support_helpcenter_click",params:{},actionType:"",elementType:""})},d=function(){s.act({action:"web_footer_navigation_support_community_more_click",anchor:"web_footer_navigation_support_community_more_click",params:{},actionType:"",elementType:""})},h=function(){s.act({action:"web_footer_navigation_support_community_click",anchor:"web_footer_navigation_support_community_click",params:{},actionType:"",elementType:""})},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.name,t=e.type;s.act({action:"go_companyToken_link",anchor:"go_companyToken_link",params:{name:o,type:t},actionType:"",elementType:""})},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.name,t=e.type;s.act({action:"go_fee_link",anchor:"go_fee_link",params:{name:o,type:t},actionType:"",elementType:""})},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.name,t=e.type;s.act({action:"go_apiv5_link",anchor:"go_apiv5_link",params:{name:o,type:t},actionType:"",elementType:""})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.name,t=e.type;s.act({action:"go_lawEnforcement_link",anchor:"go_lawEnforcement_link",params:{name:o,type:t},actionType:"",elementType:""})},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.name,t=e.type;s.act({action:"go_whistleblowerNotice_link",anchor:"go_whistleblowerNotice_link",params:{name:o,type:t},actionType:"",elementType:""})},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.name,t=e.type;s.act({action:"go_riskDisclosures_link",anchor:"go_riskDisclosures_link",params:{name:o,type:t},actionType:"",elementType:""})},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.name,t=e.type;s.act({action:"go_privacyStatement_link",anchor:"go_privacyStatement_link",params:{name:o,type:t},actionType:"",elementType:""})},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.name,t=e.type;s.act({action:"go_privacyTerms_link",anchor:"go_privacyTerms_link",params:{name:o,type:t},actionType:"",elementType:""})},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.name,t=e.type;s.act({action:"go_companyAbout_link",anchor:"go_companyAbout_link",params:{name:o,type:t},actionType:"",elementType:""})},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.name,t=e.type;s.act({action:"go_companyZhHr_link",anchor:"go_companyZhHr_link",params:{name:o,type:t},actionType:"",elementType:""})},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=e.footerCommunitychannels;s.act({action:"web_footer_navigation_support_community_channels_click",anchor:"web_footer_navigation_support_community_channels_click",params:{footerCommunitychannels:o},actionType:"",elementType:""})}},7363:e=>{e.exports=React},1533:e=>{e.exports=ReactDOM},4627:e=>{e.exports=okxGlobal}},o={};function t(n){var a=o[n];if(void 0!==a)return a.exports;var r=o[n]={exports:{}};return e[n](r,r.exports,t),r.exports}t.m=e,(()=>{var e=[];t.O=(o,n,a,r)=>{if(!n){var c=1/0;for(u=0;u<e.length;u++){for(var[n,a,r]=e[u],i=!0,s=0;s<n.length;s++)(!1&r||c>=r)&&Object.keys(t.O).every((e=>t.O[e](n[s])))?n.splice(s--,1):(i=!1,r<c&&(c=r));if(i){e.splice(u--,1);var l=a();void 0!==l&&(o=l)}}return o}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[n,a,r]}})(),t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.j=348,(()=>{var e={348:0,252:0};t.O.j=o=>0===e[o];var o=(o,n)=>{var a,r,[c,i,s]=n,l=0;if(c.some((o=>0!==e[o]))){for(a in i)t.o(i,a)&&(t.m[a]=i[a]);if(s)var u=s(t)}for(o&&o(n);l<c.length;l++)r=c[l],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},n=self.webpackChunkokx_nav=self.webpackChunkokx_nav||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))})();var n=t.O(void 0,[736],(()=>t(9609)));n=t.O(n)})();