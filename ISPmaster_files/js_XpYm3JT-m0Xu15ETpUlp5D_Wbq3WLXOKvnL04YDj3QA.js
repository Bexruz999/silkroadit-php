var billChat = {
  api: {
    open: function () { carrotquest.open(); }
  }
};

!function(){
  function t(t,e){return function(){window.carrotquestasync.push(t,arguments)}}if("undefined"==typeof carrotquest){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="//cdn.carrotquest.app/api.min.js",document.getElementsByTagName("head")[0].appendChild(e),window.carrotquest={},window.carrotquestasync=[],carrotquest.settings={};for(var n=["connect","track","identify","auth","oth","onReady","addCallback","removeCallback","trackMessageInteraction"],a=0;a<n.length;a++)carrotquest[n[a]]=t(n[a])}
}();
var config = {
  settings: {
    'messenger_collapsed_color': '25ACC7',
    'messenger_name':  "ISPserver",
    'status_operators': "online"
  }
};
carrotquest.connect("47817-db6531fdebfd073bae84a25eda", config);;
