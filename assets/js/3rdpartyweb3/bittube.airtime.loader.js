var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* eslint-disable no-undef */
(async () => {
  const addScript = (to, src, attrs = {}) => {
    const guard = `at_${src}_promise`;
    if (window[guard]) return window[guard];
    return window[guard] = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      Object.keys(attrs).forEach(key => script.setAttribute(key, attrs[key]));
      script.onload = resolve;
      script.onerror = reject;
      to.appendChild(script);
    });
  };
  try {
    const shared = ['runtime', 'vendor', 'common', 'protobuf'];
    const script = document.currentScript;
    const parent = document.documentElement; // script.parentNode;
    const attribs = {};
    for (let i = 0; i < script.attributes.length; ++i) {
      const attrib = script.attributes[i];
      if (attrib.specified && attrib.name !== 'src') attribs[attrib.name] = attrib.value;
    }
    Object.keys(attribs).forEach(attrib => script.removeAttribute(attrib));

    await Promise.all(shared.map(bundle => addScript(parent, `${'https://web.archive.org/web/20230118064252/https://cdn.jsdelivr.net/gh/ipbc-dev/airtime-module-dist@1.1.6-tube4/tubepay/'}${bundle}${'.bundle.js'}`)));
    await addScript(parent, `${'https://web.archive.org/web/20230118064252/https://cdn.jsdelivr.net/gh/ipbc-dev/airtime-module-dist@1.1.6-tube4/tubepay/'}${'airtime'}${'.bundle.js'}`, attribs);

    document.dispatchEvent(new CustomEvent(`${'airtime'}-loaded`));
  } catch (err) {
    document.dispatchEvent(new CustomEvent(`${'airtime'}-load-error`, {detail: err.message || err}));
  }
})();

}
/*
     FILE ARCHIVED ON 06:42:52 Jan 18, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 02:29:55 May 30, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 153.854
  exclusion.robots: 0.134
  exclusion.robots.policy: 0.119
  cdx.remote: 0.123
  esindex: 0.014
  LoadShardBlock: 109.942 (3)
  PetaboxLoader3.datanode: 121.694 (4)
  load_resource: 66.7
  PetaboxLoader3.resolve: 33.872
*/