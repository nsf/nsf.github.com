var gortfmData = {index:"index.html",html:"<p>\nPackage rand implements a cryptographically secure\npseudorandom number generator.\n</p>\n",name:"rand",types:[],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Read!\">Read</a></h2>\n<code>func Read(b []byte) (n int, err os.Error)</code>\n<p>\nRead is a helper function that calls Reader.Read.\n</p>\n\n",name:"Read"}],consts:[],vars:[{html:"\n<h2><a class=\"black\" href=\"?v:\">var</a> <a href=\"?v:Reader!\">Reader</a></h2>\n<pre>var Reader io.Reader</pre>\n<p>\nReader is a global, shared instance of a cryptographically\nstrong pseudo-random generator.\nOn Unix-like systems, Reader reads from /dev/urandom.\nOn Windows systems, Reader uses the CryptGenRandom API.\n</p>\n\n",names:["Reader"],type:""}]}