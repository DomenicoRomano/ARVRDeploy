function url_parse(url) {
    var parser = document.createElement('a')
    parser.href = url
    // sample usage
    //parser.protocol // => "http:"
    //parser.hostname // => "example.com"
    //parser.port     // => "3000"
    //parser.pathname // => "/pathname/"
    //parser.search   // => "?search=test"
    //parser.hash     // => "#hash"
    //parser.host     // => "example.com:3000"
    return parser
} 
function url_decode(s) {
    try {
        return decodeURIComponent(s).replace(/\r\n|\r|\n/g, "\r\n")
    } catch (e) {
        return ""
    }
}
function url_encode(s) {
    return encodeURIComponent(s)
}
function url_query_decode(qs) {
    var multimap = {}
    if (! qs) return multimap
    if (qs.length > 1) {
        qs.replace(/([^=&]+)=([^&]*)/g, function(match, hfname, hfvalue) {
            multimap[url_decode(hfname)] = url_decode(hfvalue)
        })
    }
    return multimap
}
function url_query_encode(array) {
    var s = ""
    for (var key in array) {
        s += url_encode(key) + "=" + url_encode(array[key]) + "&"
    }
    return s.substring(0, s.length - 1)
}