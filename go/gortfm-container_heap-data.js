var gortfmData = {index:"index.html",html:"<p>\nThis package provides heap operations for any type that implements\nheap.Interface.\n</p>\n",name:"heap",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Interface!\">Interface</a></h2>\n<pre>type Interface interface {\n\tsort.Interface\n\tPush(x interface{})\n\tPop() interface{}\n}</pre>\n<p>\nAny type that implements heap.Interface may be used as a\nmin-heap with the following invariants (established after\nInit has been called):\n</p>\n<pre>!h.Less(j, i) for 0 &lt;= i &lt; h.Len() and j = 2*i+1 or 2*i+2 and j &lt; h.Len()\n</pre>\n\n",name:"Interface","methods":[]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Init!\">Init</a></h2>\n<code>func Init(h Interface)</code>\n<p>\nA heaper must be initialized before any of the heap operations\ncan be used. Init is idempotent with respect to the heap invariants\nand may be called whenever the heap invariants may have been invalidated.\nIts complexity is O(n) where n = h.Len().\n</p>\n\n",name:"Init"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Pop!\">Pop</a></h2>\n<code>func Pop(h Interface) interface{}</code>\n<p>\nPop removes the minimum element (according to Less) from the heap\nand returns it. The complexity is O(log(n)) where n = h.Len().\nSame as Remove(h, 0).\n</p>\n\n",name:"Pop"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Push!\">Push</a></h2>\n<code>func Push(h Interface, x interface{})</code>\n<p>\nPush pushes the element x onto the heap. The complexity is\nO(log(n)) where n = h.Len().\n</p>\n\n",name:"Push"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Remove!\">Remove</a></h2>\n<code>func Remove(h Interface, i int) interface{}</code>\n<p>\nRemove removes the element at index i from the heap.\nThe complexity is O(log(n)) where n = h.Len().\n</p>\n\n",name:"Remove"}],consts:[],vars:[]}