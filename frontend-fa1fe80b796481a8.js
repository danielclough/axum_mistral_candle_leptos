let aa=4,_=0,a0=`undefined`,ag=1248,ah=1446,a9=16,af=293,a3=`function`,Y=null,a5=`string`,a4=`number`,a7=`Object`,a1=`utf-8`,Z=1,W=Array,a6=Array.isArray,ad=Date,a2=Error,a8=FinalizationRegistry,ac=Object,ae=Promise,ab=Reflect,$=Uint8Array,X=undefined;var J=((b,c,d,e)=>{a.wasm_bindgen__convert__closures__invoke2_mut__h9c92d179e7b38de1(b,c,g(d),g(e))});var u=(a=>{const b=typeof a;if(b==a4||b==`boolean`||a==Y){return `${a}`};if(b==a5){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==Y){return `Symbol`}else{return `Symbol(${b})`}};if(b==a3){const b=a.name;if(typeof b==a5&&b.length>_){return `Function(${b})`}else{return `Function`}};if(a6(a)){const b=a.length;let c=`[`;if(b>_){c+=u(a[_])};for(let d=Z;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>Z){d=c[Z]}else{return toString.call(a)};if(d==a7){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return a7}};if(a instanceof a2){return `${a.name}: ${a.message}\n${a.stack}`};return d});var G=((b,c,d)=>{a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h8629dd93fe4bf8c7(b,c,g(d))});var S=((a,b)=>{});var F=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__hfdea0683e1d9877c(b,c,g(d))});var D=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h0cdccb70c7e36dc2(b,c,g(d))});var E=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__h90df197296bb45b1(b,c)});var A=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__hb32547cdcb6f9bc1(b,c)});function I(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var n=(a=>a===X||a===Y);var c=(a=>b[a]);var r=(()=>{if(q===Y||q.byteLength===_){q=new Float64Array(a.memory.buffer)};return q});var R=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==Z){b.a=_;return !0};const c=!1;return c});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===a5?e:X;var g=n(f)?_:m(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=h;p()[b/aa+ Z]=i;p()[b/aa+ _]=g});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===a4?d:X;r()[a/8+ Z]=n(e)?_:e;p()[a/aa+ _]=!n(e)});b.wbg.__wbindgen_string_new=((a,b)=>{const c=t(a,b);return g(c)});b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===X;return b});b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new a2();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{var d=H(b,c);if(b!==_){a.__wbindgen_free(b,c,Z)};console.error(d)});b.wbg.__wbindgen_in=((a,b)=>{const d=c(a) in c(b);return d});b.wbg.__wbindgen_is_null=(a=>{const b=c(a)===Y;return b});b.wbg.__wbindgen_is_array=(a=>{const b=a6(c(a));return b});b.wbg.__wbindgen_number_new=(a=>{const b=a;return g(b)});b.wbg.__wbg_crypto_d05b68a3572bb8ca=(a=>{const b=c(a).crypto;return g(b)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==Y;return d});b.wbg.__wbg_process_b02b3570280d0366=(a=>{const b=c(a).process;return g(b)});b.wbg.__wbg_versions_c1cb42213cedf0f5=(a=>{const b=c(a).versions;return g(b)});b.wbg.__wbg_node_43b1089f407e4ec2=(a=>{const b=c(a).node;return g(b)});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===a5;return b});b.wbg.__wbg_msCrypto_10fc94afee92bd76=(a=>{const b=c(a).msCrypto;return g(b)});b.wbg.__wbg_require_9a7e0f667ead4995=function(){return I((()=>{const a=module.require;return g(a)}),arguments)};b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===a3;return b});b.wbg.__wbg_randomFillSync_b70ccbdf4926a99d=function(){return I(((a,b)=>{c(a).randomFillSync(f(b))}),arguments)};b.wbg.__wbg_getRandomValues_7e42b4fb8779dc6d=function(){return I(((a,b)=>{c(a).getRandomValues(c(b))}),arguments)};b.wbg.__wbg_blocksize_10e4aa18bf0db870=(a=>{const b=c(a).blockSize;return b});b.wbg.__wbg_inlinesize_0f433a1039e232a9=(a=>{const b=c(a).inlineSize;return b});b.wbg.__wbindgen_is_falsy=(a=>{const b=!c(a);return b});b.wbg.__wbg_instanceof_Window_cee7a886d55e7df5=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_eb7fd66bde3ee213=(a=>{const b=c(a).document;return n(b)?_:g(b)});b.wbg.__wbg_location_b17760ac7977a47a=(a=>{const b=c(a).location;return g(b)});b.wbg.__wbg_navigator_b1003b77e05fcee9=(a=>{const b=c(a).navigator;return g(b)});b.wbg.__wbg_innerHeight_a9719febb72ddaf3=function(){return I((a=>{const b=c(a).innerHeight;return g(b)}),arguments)};b.wbg.__wbg_setonresize_ba14f2677739ddd4=((a,b)=>{c(a).onresize=c(b)});b.wbg.__wbg_localStorage_3d538af21ea07fcc=function(){return I((a=>{const b=c(a).localStorage;return n(b)?_:g(b)}),arguments)};b.wbg.__wbg_sessionStorage_32de79fb90d1534a=function(){return I((a=>{const b=c(a).sessionStorage;return n(b)?_:g(b)}),arguments)};b.wbg.__wbg_getComputedStyle_ff4aaf4f2159de11=function(){return I(((a,b)=>{const d=c(a).getComputedStyle(c(b));return n(d)?_:g(d)}),arguments)};b.wbg.__wbg_clearTimeout_e2fcff33f6984fdc=((a,b)=>{c(a).clearTimeout(b)});b.wbg.__wbg_fetch_33c84c2bf739f490=((a,b)=>{const d=c(a).fetch(c(b));return g(d)});b.wbg.__wbg_setTimeout_6ed7182ebad5d297=function(){return I(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbg_documentElement_588fe6eaff2c52f0=(a=>{const b=c(a).documentElement;return n(b)?_:g(b)});b.wbg.__wbg_body_874ccb42daaab363=(a=>{const b=c(a).body;return n(b)?_:g(b)});b.wbg.__wbg_activeElement_c6442f3a73251da6=(a=>{const b=c(a).activeElement;return n(b)?_:g(b)});b.wbg.__wbg_setonclick_4bcbb5dfab76230b=((a,b)=>{c(a).onclick=c(b)});b.wbg.__wbg_setonkeydown_84239331d8484581=((a,b)=>{c(a).onkeydown=c(b)});b.wbg.__wbg_setonmouseup_895a4de76405ba3c=((a,b)=>{c(a).onmouseup=c(b)});b.wbg.__wbg_setonscroll_2af8cdec97c5b3b1=((a,b)=>{c(a).onscroll=c(b)});b.wbg.__wbg_createComment_5c92617cda72a113=((a,b,d)=>{var e=H(b,d);const f=c(a).createComment(e);return g(f)});b.wbg.__wbg_createDocumentFragment_ba4b959e9d93916b=(a=>{const b=c(a).createDocumentFragment();return g(b)});b.wbg.__wbg_createElement_03cf347ddad1c8c0=function(){return I(((a,b,d)=>{var e=H(b,d);const f=c(a).createElement(e);return g(f)}),arguments)};b.wbg.__wbg_createElementNS_93f8de4acdef6da8=function(){return I(((a,b,d,e,f)=>{var h=H(b,d);var i=H(e,f);const j=c(a).createElementNS(h,i);return g(j)}),arguments)};b.wbg.__wbg_createTextNode_ea32ad2506f7ae78=((a,b,d)=>{var e=H(b,d);const f=c(a).createTextNode(e);return g(f)});b.wbg.__wbg_getElementById_77f2dfdddee12e05=((a,b,d)=>{var e=H(b,d);const f=c(a).getElementById(e);return n(f)?_:g(f)});b.wbg.__wbg_namespaceURI_230708ae7f4baac5=((b,d)=>{const e=c(d).namespaceURI;var f=n(e)?_:m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f});b.wbg.__wbg_tagName_0bb46a7a3de28076=((b,d)=>{const e=c(d).tagName;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f});b.wbg.__wbg_classList_e98b57addeeb384e=(a=>{const b=c(a).classList;return g(b)});b.wbg.__wbg_setinnerHTML_95222f1a2e797983=((a,b,d)=>{var e=H(b,d);c(a).innerHTML=e});b.wbg.__wbg_children_ed606b49af931792=(a=>{const b=c(a).children;return g(b)});b.wbg.__wbg_lastElementChild_3af517e190a89e51=(a=>{const b=c(a).lastElementChild;return n(b)?_:g(b)});b.wbg.__wbg_attachShadow_d4833af56beaa395=function(){return I(((a,b)=>{const d=c(a).attachShadow(c(b));return g(d)}),arguments)};b.wbg.__wbg_closest_7376231b429d7017=function(){return I(((a,b,d)=>{var e=H(b,d);const f=c(a).closest(e);return n(f)?_:g(f)}),arguments)};b.wbg.__wbg_removeAttribute_0c021c98a4dc7402=function(){return I(((a,b,d)=>{var e=H(b,d);c(a).removeAttribute(e)}),arguments)};b.wbg.__wbg_scrollIntoView_68275288fdd93eff=(a=>{c(a).scrollIntoView()});b.wbg.__wbg_setAttribute_f7ffa687ef977957=function(){return I(((a,b,d,e,f)=>{var g=H(b,d);var h=H(e,f);c(a).setAttribute(g,h)}),arguments)};b.wbg.__wbg_before_6ea6598a4cb72792=function(){return I(((a,b)=>{c(a).before(c(b))}),arguments)};b.wbg.__wbg_remove_f7de42c5f9035d0e=(a=>{c(a).remove()});b.wbg.__wbg_append_fd99b0b80132b946=function(){return I(((a,b)=>{c(a).append(c(b))}),arguments)};b.wbg.__wbg_addEventListener_f984e99465a6a7f4=function(){return I(((a,b,d,e)=>{var f=H(b,d);c(a).addEventListener(f,c(e))}),arguments)};b.wbg.__wbg_addEventListener_bc4a7ad4cc72c6bf=function(){return I(((a,b,d,e,f)=>{var g=H(b,d);c(a).addEventListener(g,c(e),c(f))}),arguments)};b.wbg.__wbg_dispatchEvent_1dc222127c2ec453=function(){return I(((a,b)=>{const d=c(a).dispatchEvent(c(b));return d}),arguments)};b.wbg.__wbg_removeEventListener_452fdc59a51b90b7=function(){return I(((a,b,d,e,f)=>{var g=H(b,d);c(a).removeEventListener(g,c(e),c(f))}),arguments)};b.wbg.__wbg_contentRect_763996d7289caf93=(a=>{const b=c(a).contentRect;return g(b)});b.wbg.__wbg_borderBoxSize_7a66a1089c896dc0=(a=>{const b=c(a).borderBoxSize;return g(b)});b.wbg.__wbg_contentBoxSize_baabc481d884c767=(a=>{const b=c(a).contentBoxSize;return g(b)});b.wbg.__wbg_devicePixelContentBoxSize_eb0575736170dd35=(a=>{const b=c(a).devicePixelContentBoxSize;return g(b)});b.wbg.__wbg_add_73b81757e03ad37a=function(){return I(((a,b,d)=>{var e=H(b,d);c(a).add(e)}),arguments)};b.wbg.__wbg_remove_dea714b8c5f17b97=function(){return I(((a,b,d)=>{var e=H(b,d);c(a).remove(e)}),arguments)};b.wbg.__wbg_target_6795373f170fd786=(a=>{const b=c(a).target;return n(b)?_:g(b)});b.wbg.__wbg_cancelBubble_ae95595adf5ae83d=(a=>{const b=c(a).cancelBubble;return b});b.wbg.__wbg_composedPath_bd8a0336a042e053=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_preventDefault_657cbf753df1396c=(a=>{c(a).preventDefault()});b.wbg.__wbg_stopPropagation_806520d93e80bcf7=(a=>{c(a).stopPropagation()});b.wbg.__wbg_length_8a9352f7b7360c37=(a=>{const b=c(a).length;return b});b.wbg.__wbg_shiftKey_a84ea8856781bd54=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_key_0527970a852413ca=((b,d)=>{const e=c(d).key;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f});b.wbg.__wbg_code_1213e4ccb9c7e5dc=((b,d)=>{const e=c(d).code;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f});b.wbg.__wbg_new_2b3744f6bd384bcf=function(){return I((()=>{const a=new Range();return g(a)}),arguments)};b.wbg.__wbg_deleteContents_2568bbe46ed98ae7=function(){return I((a=>{c(a).deleteContents()}),arguments)};b.wbg.__wbg_setEndBefore_cca4b1d4f0751d73=function(){return I(((a,b)=>{c(a).setEndBefore(c(b))}),arguments)};b.wbg.__wbg_setStartBefore_30168c9b319d25ea=function(){return I(((a,b)=>{c(a).setStartBefore(c(b))}),arguments)};b.wbg.__wbg_debug_7d82cf3cd21e00b0=(a=>{console.debug(c(a))});b.wbg.__wbg_error_b834525fe62708f5=(a=>{console.error(c(a))});b.wbg.__wbg_info_12174227444ccc71=(a=>{console.info(c(a))});b.wbg.__wbg_log_79d3c56888567995=(a=>{console.log(c(a))});b.wbg.__wbg_warn_2a68e3ab54e55f28=(a=>{console.warn(c(a))});b.wbg.__wbg_value_99f5294791d62576=((b,d)=>{const e=c(d).value;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f});b.wbg.__wbg_setvalue_bba31de32cdbb32c=((a,b,d)=>{var e=H(b,d);c(a).value=e});b.wbg.__wbg_getItem_5c179cd36e9529e8=function(){return I(((b,d,e,f)=>{var g=H(e,f);const i=c(d).getItem(g);var j=n(i)?_:m(i,a.__wbindgen_malloc,a.__wbindgen_realloc);var k=h;p()[b/aa+ Z]=k;p()[b/aa+ _]=j}),arguments)};b.wbg.__wbg_setItem_7b55989efb4d45f7=function(){return I(((a,b,d,e,f)=>{var g=H(b,d);var h=H(e,f);c(a).setItem(g,h)}),arguments)};b.wbg.__wbg_get_3882616463857b7f=function(){return I(((b,d,e,f)=>{var g=H(e,f);const i=c(d)[g];var j=n(i)?_:m(i,a.__wbindgen_malloc,a.__wbindgen_realloc);var k=h;p()[b/aa+ Z]=k;p()[b/aa+ _]=j}),arguments)};b.wbg.__wbg_set_3cc50a75382b2797=function(){return I(((a,b,d,e,f)=>{var g=H(b,d);var h=H(e,f);c(a)[g]=h}),arguments)};b.wbg.__wbg_instanceof_HtmlElement_99861aeb7af981c2=(a=>{let b;try{b=c(a) instanceof HTMLElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_style_ca229e3326b3c3fb=(a=>{const b=c(a).style;return g(b)});b.wbg.__wbg_blur_3bef2a6e3b1f9734=function(){return I((a=>{c(a).blur()}),arguments)};b.wbg.__wbg_focus_d1373017540aae66=function(){return I((a=>{c(a).focus()}),arguments)};b.wbg.__wbg_setdata_3f18cd2879ddb8d5=((a,b,d)=>{var e=H(b,d);c(a).data=e});b.wbg.__wbg_instanceof_ShadowRoot_ef56f954a86c7472=(a=>{let b;try{b=c(a) instanceof ShadowRoot}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_host_dfffc3b2ba786fb8=(a=>{const b=c(a).host;return g(b)});b.wbg.__wbg_detail_4c23b0a6d16ca345=(a=>{const b=c(a).detail;return g(b)});b.wbg.__wbg_newwitheventinitdict_6848353843f1f6ea=function(){return I(((a,b,d)=>{var e=H(a,b);const f=new CustomEvent(e,c(d));return g(f)}),arguments)};b.wbg.__wbg_new_4db22fd5d40c5665=function(){return I((()=>{const a=new Headers();return g(a)}),arguments)};b.wbg.__wbg_set_4ad92a627c50c8ef=function(){return I(((a,b,d,e,f)=>{var g=H(b,d);var h=H(e,f);c(a).set(g,h)}),arguments)};b.wbg.__wbg_length_1fe197dd87ce234e=(a=>{const b=c(a).length;return b});b.wbg.__wbg_getwithindex_00c92619105cb1ba=((a,b)=>{const d=c(a)[b>>>_];return n(d)?_:g(d)});b.wbg.__wbg_parentNode_e3a5ee563364a613=(a=>{const b=c(a).parentNode;return n(b)?_:g(b)});b.wbg.__wbg_childNodes_535387effca84f4e=(a=>{const b=c(a).childNodes;return g(b)});b.wbg.__wbg_previousSibling_28df8137ae6104f8=(a=>{const b=c(a).previousSibling;return n(b)?_:g(b)});b.wbg.__wbg_nextSibling_87d2b32dfbf09fe3=(a=>{const b=c(a).nextSibling;return n(b)?_:g(b)});b.wbg.__wbg_settextContent_1493ae8928df81aa=((a,b,d)=>{var e=H(b,d);c(a).textContent=e});b.wbg.__wbg_appendChild_4153ba1b5d54d73b=function(){return I(((a,b)=>{const d=c(a).appendChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_cloneNode_ea49a704f0699b2e=function(){return I((a=>{const b=c(a).cloneNode();return g(b)}),arguments)};b.wbg.__wbg_contains_15577865ddfe265c=((a,b)=>{const d=c(a).contains(c(b));return d});b.wbg.__wbg_removeChild_660924798c7e128c=function(){return I(((a,b)=>{const d=c(a).removeChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_detail_6227fe5037bd11cc=(a=>{const b=c(a).detail;return b});b.wbg.__wbg_userAgent_6dbd12d01f988f5f=function(){return I(((b,d)=>{const e=c(d).userAgent;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f}),arguments)};b.wbg.__wbg_key_87617584a71e289f=((b,d)=>{const e=c(d).key;var f=n(e)?_:m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f});b.wbg.__wbg_new_a72fe5a17d68e2f8=function(){return I((()=>{const a=new URLSearchParams();return g(a)}),arguments)};b.wbg.__wbg_getPropertyValue_87881b3f2b0cb7b8=function(){return I(((b,d,e,f)=>{var g=H(e,f);const i=c(d).getPropertyValue(g);const j=m(i,a.__wbindgen_malloc,a.__wbindgen_realloc);const k=h;p()[b/aa+ Z]=k;p()[b/aa+ _]=j}),arguments)};b.wbg.__wbg_removeProperty_66ccbcc9593ec10d=function(){return I(((b,d,e,f)=>{var g=H(e,f);const i=c(d).removeProperty(g);const j=m(i,a.__wbindgen_malloc,a.__wbindgen_realloc);const k=h;p()[b/aa+ Z]=k;p()[b/aa+ _]=j}),arguments)};b.wbg.__wbg_setProperty_5144ddce66bbde41=function(){return I(((a,b,d,e,f)=>{var g=H(b,d);var h=H(e,f);c(a).setProperty(g,h)}),arguments)};b.wbg.__wbg_value_ffef403d62e3df58=((b,d)=>{const e=c(d).value;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f});b.wbg.__wbg_setvalue_cbab536654d8dd52=((a,b,d)=>{var e=H(b,d);c(a).value=e});b.wbg.__wbg_close_23aa806471e38253=function(){return I((a=>{c(a).close()}),arguments)};b.wbg.__wbg_enqueue_fe9e340e2bc8714b=function(){return I(((a,b)=>{c(a).enqueue(c(b))}),arguments)};b.wbg.__wbg_width_2bb65dd73f439455=(a=>{const b=c(a).width;return b});b.wbg.__wbg_height_56ceb75b30779835=(a=>{const b=c(a).height;return b});b.wbg.__wbg_protocol_85fb404fceb30ff2=function(){return I(((b,d)=>{const e=c(d).protocol;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f}),arguments)};b.wbg.__wbg_host_3f37d9558f3919b9=function(){return I(((b,d)=>{const e=c(d).host;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f}),arguments)};b.wbg.__wbg_pathname_d98d0a003b664ef0=function(){return I(((b,d)=>{const e=c(d).pathname;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f}),arguments)};b.wbg.__wbg_url_abf923e9619bea18=((b,d)=>{const e=c(d).url;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f});b.wbg.__wbg_newwithstr_7a7cde4cfdb27ce4=function(){return I(((a,b)=>{var c=H(a,b);const d=new Request(c);return g(d)}),arguments)};b.wbg.__wbg_newwithstrandinit_11fbc38beb4c26b0=function(){return I(((a,b,d)=>{var e=H(a,b);const f=new Request(e,c(d));return g(f)}),arguments)};b.wbg.__wbg_instanceof_Response_b5451a06784a2404=(a=>{let b;try{b=c(a) instanceof Response}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_text_24a1c9b21feed3de=function(){return I((a=>{const b=c(a).text();return g(b)}),arguments)};b.wbg.__wbg_search_6b70a3bf2ceb3f63=((b,d)=>{const e=c(d).search;const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f});b.wbg.__wbg_setsearch_e3e6802fd5fe58c4=((a,b,d)=>{var e=H(b,d);c(a).search=e});b.wbg.__wbg_new_79acf9a4da56c772=function(){return I(((a,b)=>{var c=H(a,b);const d=new URL(c);return g(d)}),arguments)};b.wbg.__wbg_byobRequest_643426f0037311f0=(a=>{const b=c(a).byobRequest;return n(b)?_:g(b)});b.wbg.__wbg_close_0b618a762cdb578b=function(){return I((a=>{c(a).close()}),arguments)};b.wbg.__wbg_new_b52426cdceebe6ff=function(){return I((a=>{const b=new ResizeObserver(c(a));return g(b)}),arguments)};b.wbg.__wbg_disconnect_a4636fa8f012adde=(a=>{c(a).disconnect()});b.wbg.__wbg_observe_d1abe10834c02536=((a,b,d)=>{c(a).observe(c(b),c(d))});b.wbg.__wbg_readyState_2599ffe07703eeea=(a=>{const b=c(a).readyState;return b});b.wbg.__wbg_setonopen_701fb056991a7b21=((a,b)=>{c(a).onopen=c(b)});b.wbg.__wbg_setonerror_7d239f63e6273fd7=((a,b)=>{c(a).onerror=c(b)});b.wbg.__wbg_setonclose_4ad41bb378f1fd66=((a,b)=>{c(a).onclose=c(b)});b.wbg.__wbg_setonmessage_3df13fd356f531d6=((a,b)=>{c(a).onmessage=c(b)});b.wbg.__wbg_setbinaryType_bfaa2b91f5e49737=((a,b)=>{c(a).binaryType=f(b)});b.wbg.__wbg_new_d3ba66fcfe3ebcc6=function(){return I(((a,b)=>{var c=H(a,b);const d=new WebSocket(c);return g(d)}),arguments)};b.wbg.__wbg_newwithstrsequence_f2aa08621ea403e2=function(){return I(((a,b,d)=>{var e=H(a,b);const f=new WebSocket(e,c(d));return g(f)}),arguments)};b.wbg.__wbg_close_85838c8d50b026da=function(){return I((a=>{c(a).close()}),arguments)};b.wbg.__wbg_send_115b7e92eb793bd9=function(){return I(((a,b,d)=>{var e=H(b,d);c(a).send(e)}),arguments)};b.wbg.__wbg_instanceof_WorkerGlobalScope_42acbb685bed964e=(a=>{let b;try{b=c(a) instanceof WorkerGlobalScope}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_fetch_10edd7d7da150227=((a,b)=>{const d=c(a).fetch(c(b));return g(d)});b.wbg.__wbg_append_125fff38dadbc15f=function(){return I(((a,b)=>{c(a).append(c(b))}),arguments)};b.wbg.__wbg_data_bbdd2d77ab2f7e78=(a=>{const b=c(a).data;return g(b)});b.wbg.__wbg_view_38a0bacb59ad00ee=(a=>{const b=c(a).view;return n(b)?_:g(b)});b.wbg.__wbg_respond_fee44bba73c2fc8a=function(){return I(((a,b)=>{c(a).respond(b>>>_)}),arguments)};b.wbg.__wbg_queueMicrotask_f61ee94ee663068b=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_f82fc5d1e8f816ae=(a=>{const b=c(a).queueMicrotask;return g(b)});b.wbg.__wbg_get_0ee8ea3c7c984c45=((a,b)=>{const d=c(a)[b>>>_];return g(d)});b.wbg.__wbg_length_161c0d89c6535c1d=(a=>{const b=c(a).length;return b});b.wbg.__wbg_new_75208e29bddfd88c=(()=>{const a=new W();return g(a)});b.wbg.__wbg_newnoargs_cfecb3965268594c=((a,b)=>{var c=H(a,b);const d=new Function(c);return g(d)});b.wbg.__wbg_get_3fddfed2c83f434c=function(){return I(((a,b)=>{const d=ab.get(c(a),c(b));return g(d)}),arguments)};b.wbg.__wbg_call_3f093dd26d5569f8=function(){return I(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_new_632630b5cec17f21=(()=>{const a=new ac();return g(a)});b.wbg.__wbg_self_05040bd9523805b9=function(){return I((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_adc720039f2cb14f=function(){return I((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_622105db80c1457d=function(){return I((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_f56b013ed9bcf359=function(){return I((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbg_includes_a22cdfddb915d243=((a,b,d)=>{const e=c(a).includes(c(b),d);return e});b.wbg.__wbg_push_0239ee92f127e807=((a,b)=>{const d=c(a).push(c(b));return d});b.wbg.__wbg_instanceof_ArrayBuffer_9221fa854ffb71b5=(a=>{let b;try{b=c(a) instanceof ArrayBuffer}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_instanceof_Error_5869c4f17aac9eb2=(a=>{let b;try{b=c(a) instanceof a2}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_new_73a5987615ec8862=((a,b)=>{var c=H(a,b);const d=new a2(c);return g(d)});b.wbg.__wbg_message_2a19bb5b62cf8e22=(a=>{const b=c(a).message;return g(b)});b.wbg.__wbg_name_405bb0aa047a1bf5=(a=>{const b=c(a).name;return g(b)});b.wbg.__wbg_toString_07f01913ec9af122=(a=>{const b=c(a).toString();return g(b)});b.wbg.__wbg_call_67f2111acd2dfdb6=function(){return I(((a,b,d)=>{const e=c(a).call(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_getTime_0e03c3f524be31ef=(a=>{const b=c(a).getTime();return b});b.wbg.__wbg_new0_7a6141101f2206da=(()=>{const a=new ad();return g(a)});b.wbg.__wbg_now_ba25f0a487340763=(()=>{const a=ad.now();return a});b.wbg.__wbg_is_bd5dc4ae269cba1c=((a,b)=>{const d=ac.is(c(a),c(b));return d});b.wbg.__wbg_toString_6eb7c1f755c00453=(a=>{const b=c(a).toString();return g(b)});b.wbg.__wbg_new_70828a4353259d4b=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=_;try{return J(d,c.b,a,b)}finally{c.a=d}};const e=new ae(d);return g(e)}finally{c.a=c.b=_}});b.wbg.__wbg_resolve_5da6faf2c96fd1d5=(a=>{const b=ae.resolve(c(a));return g(b)});b.wbg.__wbg_then_f9e58f5a50f43eae=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_then_20a5920e447d1cb1=((a,b,d)=>{const e=c(a).then(c(b),c(d));return g(e)});b.wbg.__wbg_buffer_b914fb8b50ebbc3e=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e=((a,b,d)=>{const e=new $(c(a),b>>>_,d>>>_);return g(e)});b.wbg.__wbg_new_b1f2d6842d615181=(a=>{const b=new $(c(a));return g(b)});b.wbg.__wbg_set_7d988c98e6ced92d=((a,b,d)=>{c(a).set(c(b),d>>>_)});b.wbg.__wbg_length_21c4b0ae73cba59d=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newwithlength_0d03cef43b68a530=(a=>{const b=new $(a>>>_);return g(b)});b.wbg.__wbg_buffer_67e624f5a0ab2319=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_subarray_adc418253d76e2f1=((a,b,d)=>{const e=c(a).subarray(b>>>_,d>>>_);return g(e)});b.wbg.__wbg_byteLength_4f4b58172d990c0a=(a=>{const b=c(a).byteLength;return b});b.wbg.__wbg_byteOffset_adbd2a554609eb4e=(a=>{const b=c(a).byteOffset;return b});b.wbg.__wbg_set_961700853a212a39=function(){return I(((a,b,d)=>{const e=ab.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=m(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=h;p()[b/aa+ Z]=g;p()[b/aa+ _]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new a2(t(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return g(b)});b.wbg.__wbindgen_closure_wrapper1222=((a,b,c)=>{const d=w(a,b,af,x);return g(d)});b.wbg.__wbindgen_closure_wrapper1223=((a,b,c)=>{const d=w(a,b,af,y);return g(d)});b.wbg.__wbindgen_closure_wrapper1225=((a,b,c)=>{const d=w(a,b,af,y);return g(d)});b.wbg.__wbindgen_closure_wrapper1227=((a,b,c)=>{const d=w(a,b,af,y);return g(d)});b.wbg.__wbindgen_closure_wrapper1229=((a,b,c)=>{const d=w(a,b,af,y);return g(d)});b.wbg.__wbindgen_closure_wrapper1231=((a,b,c)=>{const d=w(a,b,af,y);return g(d)});b.wbg.__wbindgen_closure_wrapper1233=((a,b,c)=>{const d=w(a,b,af,y);return g(d)});b.wbg.__wbindgen_closure_wrapper1235=((a,b,c)=>{const d=w(a,b,af,y);return g(d)});b.wbg.__wbindgen_closure_wrapper1237=((a,b,c)=>{const d=w(a,b,af,y);return g(d)});b.wbg.__wbindgen_closure_wrapper2803=((a,b,c)=>{const d=w(a,b,ag,z);return g(d)});b.wbg.__wbindgen_closure_wrapper2805=((a,b,c)=>{const d=w(a,b,ag,z);return g(d)});b.wbg.__wbindgen_closure_wrapper2807=((a,b,c)=>{const d=w(a,b,ag,z);return g(d)});b.wbg.__wbindgen_closure_wrapper2809=((a,b,c)=>{const d=w(a,b,ag,z);return g(d)});b.wbg.__wbindgen_closure_wrapper2816=((a,b,c)=>{const d=w(a,b,ag,A);return g(d)});b.wbg.__wbindgen_closure_wrapper2817=((a,b,c)=>{const d=w(a,b,ag,B);return g(d)});b.wbg.__wbindgen_closure_wrapper2821=((a,b,c)=>{const d=w(a,b,ag,z);return g(d)});b.wbg.__wbindgen_closure_wrapper3131=((a,b,c)=>{const d=w(a,b,ah,C);return g(d)});b.wbg.__wbindgen_closure_wrapper3132=((a,b,c)=>{const d=w(a,b,ah,D);return g(d)});b.wbg.__wbindgen_closure_wrapper3134=((a,b,c)=>{const d=w(a,b,ah,D);return g(d)});b.wbg.__wbindgen_closure_wrapper3137=((a,b,c)=>{const d=w(a,b,ah,D);return g(d)});b.wbg.__wbindgen_closure_wrapper3259=((a,b,c)=>{const d=w(a,b,1501,E);return g(d)});b.wbg.__wbindgen_closure_wrapper3434=((a,b,c)=>{const d=w(a,b,1588,F);return g(d)});b.wbg.__wbindgen_closure_wrapper5334=((a,b,c)=>{const d=w(a,b,1656,G);return g(d)});return b});var m=((a,b,c)=>{if(c===X){const c=k.encode(a);const d=b(c.length,Z)>>>_;j().subarray(d,d+ c.length).set(c);h=c.length;return d};let d=a.length;let e=b(d,Z)>>>_;const f=j();let g=_;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==_){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,Z)>>>_;const b=j().subarray(e+ g,e+ d);const f=l(a,b);g+=f.written;e=c(e,d,g,Z)>>>_};h=g;return e});var j=(()=>{if(i===Y||i.byteLength===_){i=new $(a.memory.buffer)};return i});var Q=(async(a,b)=>{if(typeof Response===a3&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===a3){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var g=(a=>{if(d===b.length)b.push(b.length+ Z);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});var C=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__h2f0e5234068e89f7(b,c)});var x=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__hb33d2d72d43bd724(b,c)});var H=((a,b)=>{if(a===_){return c(b)}else{return t(a,b)}});var B=((b,c,d,e)=>{a.wasm_bindgen__convert__closures__invoke2_mut__hb4413a3fd1b235fa(b,c,g(d),g(e))});var p=(()=>{if(o===Y||o.byteLength===_){o=new Int32Array(a.memory.buffer)};return o});var z=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h297e52e5eb866d88(b,c,g(d))});var y=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h3e7ea43ac0b326dc(b,c,g(d))});var V=(async(b)=>{if(a!==X)return a;if(typeof b===a0){b=new URL(`frontend-fa1fe80b796481a8_bg.wasm`,import.meta.url)};const c=R();if(typeof b===a5||typeof Request===a3&&b instanceof Request||typeof URL===a3&&b instanceof URL){b=fetch(b)};S(c);const {instance:d,module:e}=await Q(await b,c);return T(d,e)});var e=(a=>{if(a<132)return;b[a]=d;d=a});var U=(b=>{if(a!==X)return a;const c=R();S(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return T(d,b)});var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:Z,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=_;try{return e(c,f.b,...b)}finally{if(--f.cnt===_){a.__wbindgen_export_2.get(f.dtor)(c,f.b);v.unregister(f)}else{f.a=c}}};g.original=f;v.register(g,f,f);return g});var t=((a,b)=>{a=a>>>_;return s.decode(j().subarray(a,a+ b))});var T=((b,c)=>{a=b.exports;V.__wbindgen_wasm_module=c;q=Y;o=Y;i=Y;a.__wbindgen_start();return a});let a;const b=new W(128).fill(X);b.push(X,Y,!0,!1);let d=b.length;let h=_;let i=Y;const k=typeof TextEncoder!==a0?new TextEncoder(a1):{encode:()=>{throw a2(`TextEncoder not available`)}};const l=typeof k.encodeInto===a3?((a,b)=>k.encodeInto(a,b)):((a,b)=>{const c=k.encode(a);b.set(c);return {read:a.length,written:c.length}});let o=Y;let q=Y;const s=typeof TextDecoder!==a0?new TextDecoder(a1,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw a2(`TextDecoder not available`)}};if(typeof TextDecoder!==a0){s.decode()};const v=typeof a8===a0?{register:()=>{},unregister:()=>{}}:new a8(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});const K=typeof a8===a0?{register:()=>{},unregister:()=>{}}:new a8(b=>a.__wbg_intounderlyingbytesource_free(b>>>_));class L{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=_;K.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingbytesource_free(b)}type(){try{const e=a.__wbindgen_add_to_stack_pointer(-a9);a.intounderlyingbytesource_type(e,this.__wbg_ptr);var b=p()[e/aa+ _];var c=p()[e/aa+ Z];var d=H(b,c);if(b!==_){a.__wbindgen_free(b,c,Z)};return d}finally{a.__wbindgen_add_to_stack_pointer(a9)}}autoAllocateChunkSize(){const b=a.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return b>>>_}start(b){a.intounderlyingbytesource_start(this.__wbg_ptr,g(b))}pull(b){const c=a.intounderlyingbytesource_pull(this.__wbg_ptr,g(b));return f(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingbytesource_cancel(b)}}const M=typeof a8===a0?{register:()=>{},unregister:()=>{}}:new a8(b=>a.__wbg_intounderlyingsink_free(b>>>_));class N{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=_;M.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsink_free(b)}write(b){const c=a.intounderlyingsink_write(this.__wbg_ptr,g(b));return f(c)}close(){const b=this.__destroy_into_raw();const c=a.intounderlyingsink_close(b);return f(c)}abort(b){const c=this.__destroy_into_raw();const d=a.intounderlyingsink_abort(c,g(b));return f(d)}}const O=typeof a8===a0?{register:()=>{},unregister:()=>{}}:new a8(b=>a.__wbg_intounderlyingsource_free(b>>>_));class P{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=_;O.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsource_free(b)}pull(b){const c=a.intounderlyingsource_pull(this.__wbg_ptr,g(b));return f(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingsource_cancel(b)}}export default V;export{L as IntoUnderlyingByteSource,N as IntoUnderlyingSink,P as IntoUnderlyingSource,U as initSync}