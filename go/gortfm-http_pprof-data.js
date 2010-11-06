var gortfmData = {index:"index.html",html:"<p>\nPackage pprof serves via its HTTP server runtime profiling data\nin the format expected by the pprof visualization tool.\nFor more information about pprof, see\n<a href=\"http://code.google.com/p/google-perftools/\">http://code.google.com/p/google-perftools/</a>.\n</p>\n<p>\nThe package is typically only imported for the side effect of\nregistering its HTTP handlers.\nThe handled paths all begin with /debug/pprof/.\n</p>\n<p>\nTo use pprof, link this package into your program:\n</p>\n<pre>import _ &#34;http/pprof&#34;\n</pre>\n<p>\nThen use the pprof tool to look at the heap profile:\n</p>\n<pre>pprof <a href=\"http://localhost:6060/debug/pprof/heap\">http://localhost:6060/debug/pprof/heap</a>\n</pre>\n",name:"pprof",types:[],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Cmdline!\">Cmdline</a></h2>\n<code>func Cmdline(w http.ResponseWriter, r *http.Request)</code>\n<p>\nCmdline responds with the running program&#39;s\ncommand line, with arguments separated by NUL bytes.\nThe package initialization registers it as /debug/pprof/cmdline.\n</p>\n\n",name:"Cmdline"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Heap!\">Heap</a></h2>\n<code>func Heap(w http.ResponseWriter, r *http.Request)</code>\n<p>\nHeap responds with the pprof-formatted heap profile.\nThe package initialization registers it as /debug/pprof/heap.\n</p>\n\n",name:"Heap"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Symbol!\">Symbol</a></h2>\n<code>func Symbol(w http.ResponseWriter, r *http.Request)</code>\n<p>\nSymbol looks up the program counters listed in the request,\nresponding with a table mapping program counters to function names.\nThe package initialization registers it as /debug/pprof/symbol.\n</p>\n\n",name:"Symbol"}],consts:[],vars:[]}