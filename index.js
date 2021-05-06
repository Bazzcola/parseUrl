const parseUrl = (url) => {
    const m = url.match('^(https?:)//');
    const x = url.slice(m[0].length);
    const y = x.match('(([^:/?#]*)(?::([0-9]+))?)');
    const z = x.match('(/{0,1}[^?#]*)');
    const v = x.match('(#.*|)$');
    return {host:y[1], path:z[1].slice(y[1].length), hash:v[1]}
  }
  
  let obj = parseUrl('https://ffwagency.com/do/any.php?a=1#foo');
    
  console.log(obj.host)
  console.log(obj.path)
  console.log(obj.hash)