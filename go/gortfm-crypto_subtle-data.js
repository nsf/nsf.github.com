var gortfmData = {index:"index.html",html:"<p>\nThis package implements functions that are often useful in cryptographic\ncode but require careful thought to use correctly.\n</p>\n",name:"subtle",types:[],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ConstantTimeByteEq!\">ConstantTimeByteEq</a></h2>\n<code>func ConstantTimeByteEq(x, y uint8) int</code>\n<p>\nConstantTimeByteEq returns 1 if x == y and 0 otherwise.\n</p>\n\n",name:"ConstantTimeByteEq"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ConstantTimeCompare!\">ConstantTimeCompare</a></h2>\n<code>func ConstantTimeCompare(x, y []byte) int</code>\n<p>\nConstantTimeCompare returns 1 iff the two equal length slices, x\nand y, have equal contents. The time taken is a function of the length of\nthe slices and is independent of the contents.\n</p>\n\n",name:"ConstantTimeCompare"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ConstantTimeCopy!\">ConstantTimeCopy</a></h2>\n<code>func ConstantTimeCopy(v int, x, y []byte)</code>\n<p>\nConstantTimeCopy copies the contents of y into x iff v == 1. If v == 0, x is left unchanged.\nIts behavior is undefined if v takes any other value.\n</p>\n\n",name:"ConstantTimeCopy"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ConstantTimeEq!\">ConstantTimeEq</a></h2>\n<code>func ConstantTimeEq(x, y int32) int</code>\n<p>\nConstantTimeEq returns 1 if x == y and 0 otherwise.\n</p>\n\n",name:"ConstantTimeEq"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ConstantTimeSelect!\">ConstantTimeSelect</a></h2>\n<code>func ConstantTimeSelect(v, x, y int) int</code>\n<p>\nConstantTimeSelect returns x if v is 1 and y if v is 0.\nIts behavior is undefined if v takes any other value.\n</p>\n\n",name:"ConstantTimeSelect"}],consts:[],vars:[]}