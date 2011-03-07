var gortfmData = {index:"index.html",html:"<p>\nPackage atomic provides low-level atomic memory primitives\nuseful for implementing synchronization algorithms.\n</p>\n<p>\nThese functions require great care to be used correctly.\nExcept for special, low-level applications, synchronization is better\ndone with channels or the facilities of the sync package.\nShare memory by communicating;\ndon&#39;t communicate by sharing memory.\n</p>\n<p>\nThe compare-and-swap operation, implemented by the CompareAndSwapT\nfunctions, is the atomic equivalent of:\n</p>\n<pre>if *val == old {\n\t*val = new\n\treturn true\n}\nreturn false\n</pre>\n",name:"atomic",types:[],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:AddInt32!\">AddInt32</a></h2>\n<code>func AddInt32(val *int32, delta int32) (new int32)</code>\n<p>\nAddInt32 atomically adds delta to *val and returns the new value.\n</p>\n\n",name:"AddInt32"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:AddInt64!\">AddInt64</a></h2>\n<code>func AddInt64(val *int64, delta int64) (new int64)</code>\n<p>\nAddInt64 atomically adds delta to *val and returns the new value.\n</p>\n\n",name:"AddInt64"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:AddUint32!\">AddUint32</a></h2>\n<code>func AddUint32(val *uint32, delta uint32) (new uint32)</code>\n<p>\nAddUint32 atomically adds delta to *val and returns the new value.\n</p>\n\n",name:"AddUint32"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:AddUint64!\">AddUint64</a></h2>\n<code>func AddUint64(val *uint64, delta uint64) (new uint64)</code>\n<p>\nAddUint64 atomically adds delta to *val and returns the new value.\n</p>\n\n",name:"AddUint64"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:AddUintptr!\">AddUintptr</a></h2>\n<code>func AddUintptr(val *uintptr, delta uintptr) (new uintptr)</code>\n<p>\nAddUintptr atomically adds delta to *val and returns the new value.\n</p>\n\n",name:"AddUintptr"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:CompareAndSwapInt32!\">CompareAndSwapInt32</a></h2>\n<code>func CompareAndSwapInt32(val *int32, old, new int32) (swapped bool)</code>\n<p>\nCompareAndSwapInt32 executes the compare-and-swap operation for an int32 value.\n</p>\n\n",name:"CompareAndSwapInt32"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:CompareAndSwapInt64!\">CompareAndSwapInt64</a></h2>\n<code>func CompareAndSwapInt64(val *int64, old, new int64) (swapped bool)</code>\n<p>\nCompareAndSwapInt64 executes the compare-and-swap operation for an int64 value.\n</p>\n\n",name:"CompareAndSwapInt64"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:CompareAndSwapUint32!\">CompareAndSwapUint32</a></h2>\n<code>func CompareAndSwapUint32(val *uint32, old, new uint32) (swapped bool)</code>\n<p>\nCompareAndSwapUint32 executes the compare-and-swap operation for a uint32 value.\n</p>\n\n",name:"CompareAndSwapUint32"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:CompareAndSwapUint64!\">CompareAndSwapUint64</a></h2>\n<code>func CompareAndSwapUint64(val *uint64, old, new uint64) (swapped bool)</code>\n<p>\nCompareAndSwapUint64 executes the compare-and-swap operation for a uint64 value.\n</p>\n\n",name:"CompareAndSwapUint64"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:CompareAndSwapUintptr!\">CompareAndSwapUintptr</a></h2>\n<code>func CompareAndSwapUintptr(val *uintptr, old, new uintptr) (swapped bool)</code>\n<p>\nCompareAndSwapUintptr executes the compare-and-swap operation for a uintptr value.\n</p>\n\n",name:"CompareAndSwapUintptr"}],consts:[],vars:[]}