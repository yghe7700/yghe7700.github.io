//---- #/_docs



/*******************************************************************************



********************************************************************************

<:>
{
  "%": "",
  ".": "index.js!jj.js",
  "#": "#"
}
//
</:>

*******************************************************************************/



//---- index



////////////////////////////////////////////////////////////////////////////////

__$ = function({ ...vars }={}) {
  //__$['#routes']({ ...vars }); // ..
  //__$['#menu']({ ...vars });
  __$['#pres']({ ...vars });
};

__$['#pres'] = function() {
  // ..
  //$('iframe[data-pres]').attr('hidden', true)

  const iframes = document.querySelectorAll('iframe[data-pres]');

  if (iframes) {

    [...iframes].map(el => {
      //$(el).hide();

      const pres = $(el).attr('data-pres');
      const text = $(`script[data-pres="${pres}"]`).html();
      
      //$(`span[data-pres]`).css('display', 'none');
      
      const iframe  = document.querySelector(`iframe[data-pres="${pres}"]`);
      const _iframe = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;

      _iframe.document.open();
      _iframe.document.write(__$['#pres:html'](text));
      _iframe.document.close();

      //setTimeout(() => $(el).css('display', 'block'), 1000);
      //setTimeout(() => $(`span[data-pres]`).css('display', 'block'), 1000);
    });
  }
  
  setTimeout(() => {
    //$('iframe[data-pres]').attr('hidden', false)
  }, 500);
  // ..
};

__$['#pres:html'] = function(content) {
  return `
<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
    <meta charset="utf-8">
    <style>
    @import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz);
    @import url(https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic);
    @import url(https://fonts.googleapis.com/css?family=Ubuntu+Mono:400,700,400italic);
    /*
      @import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz);
      */

      body { font-family: 'Droid Serif'; }
      h1, h2, h3 {
        font-family: 'Yanone Kaffeesatz';
        font-weight: normal;
      }
      .remark-code, .remark-inline-code { font-family: 'Ubuntu Mono'; }
    </style>
  </head>
  <body>
    <textarea id="source" hidden>
${content}
    </textarea>
    <script src="/more/index/tmp/_/more/_book/remark-latest.min.js">
    </script>
    <script>
    // https://remarkjs.com/downloads/remark-latest.min.js
    // https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
      var slideshow = remark.create();
    </script>
  </body>
</html>
  `;
};

__$['#menu'] = function() {
  // ..
  $('[href*="home/"]').parent().addClass('x-hide');
  $('[href*="travel/"]').parent().addClass('x-hide');
  $('[href*="debt/"]').parent().addClass('x-hide');
  $('[href*="tent/"]').parent().addClass('x-hide');
  $('[href*="tent/index.html"]').parent().removeClass('x-hide');
  $('#sidebar').show();
  // ..
};

__$['#routes'] = function() {
  window.addEventListener('hashchange', function() {
    try {
      const route = location.hash.substring(2);
      const paths = route.split('/');

      if (__$[`?routes:${paths[0]}`]) return __$[`?routes:${paths[0]}`]({ route, paths });
      
    } catch(e) {
      location.hash = '#/';
    }
  });
};

__$['#routes:xpa'] = function({ route, paths }) {
  const href = paths.slice(1).join('/');

  Array.from(document.querySelectorAll(`[href*="${href}"]`)).map($ => $.style.display = 'none');
};

__$['#routes:xmenu'] = function({ route, paths }) {
  $('[href*="home/"]').parent().removeClass('x-hide');
  $('[href*="travel/"]').parent().removeClass('x-hide');
  $('[href*="debt/"]').parent().removeClass('x-hide');
};

////////////////////////////////////////////////////////////////////////////////

__style = async function(href) {
  return await new Promise((resolve, reject) => {
    const style = document.createElement('link');

    style.href    = href;
    style.rel     = 'stylesheet';
    style.onload  = resolve;
    style.onerror = reject;
    
    document.getElementsByTagName('head')[0].appendChild(style);
  });
};

__script = async function(src) {
  return await new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.src     = src;
    script.onload  = resolve;
    script.onerror = reject;
    
    document.getElementsByTagName('body')[0].appendChild(script);
  });
};

window.addEventListener('DOMContentLoaded', async () => {
  //if (typeof __bundle !== 'undefined') await __bundle();
  //else await __$();
  await __script('/more/index/tmp/_/more/_book/jquery.min.js');
  __$();
});

////////////////////////////////////////////////////////////////////////////////



/*******************************************************************************

<:y000>
{
  "%": "",
  ".": [],
  ":": [],
  "!": [],
  "~": [],
  "?": [],
  "#": "#"
}
</:y000>

*******************************************************************************/




//---- _tmpl:index
/*!!



////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////



/%******************************************************************************

<:_tmpl>
{
  "%": "",
  ".": [],
  ":": [],
  "!": [],
  "~": [],
  "?": [],
  "#": "#"
}
</:_tmpl>

******************************************************************************%/




!!*/
//---- y000:index
/*!!

!!*/
