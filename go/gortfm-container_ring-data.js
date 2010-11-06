var gortfmData = {index:"index.html",html:"<p>\nThe ring package implements operations on circular lists.\n</p>\n",name:"ring",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Ring!\">Ring</a></h2>\n<pre>type Ring struct {\n\tValue interface{} // for use by client; untouched by this library\n\t// contains unexported fields\n}</pre>\n<p>\nA Ring is an element of a circular list, or ring.\nRings do not have a beginning or end; a pointer to any ring element\nserves as reference to the entire ring. Empty rings are represented\nas nil Ring pointers. The zero value for a Ring is a one-element\nring with a nil Value.\n</p>\n\n",name:"Ring","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Ring\">func (*Ring)</a> <a href=\"?m:Ring.Iter!\">Iter</a></h2>\n<code>func (r *Ring) Iter() &lt;-chan interface{}</code>\n\n",name:"Iter"},{html:"\n<h2><a class=\"black\" href=\"?m:Ring\">func (*Ring)</a> <a href=\"?m:Ring.Len!\">Len</a></h2>\n<code>func (r *Ring) Len() int</code>\n<p>\nLen computes the number of elements in ring r.\nIt executes in time proportional to the number of elements.\n</p>\n\n",name:"Len"},{html:"\n<h2><a class=\"black\" href=\"?m:Ring\">func (*Ring)</a> <a href=\"?m:Ring.Link!\">Link</a></h2>\n<code>func (r *Ring) Link(s *Ring) *Ring</code>\n<p>\nLink connects ring r with with ring s such that r.Next()\nbecomes s and returns the original value for r.Next().\nr must not be empty.\n</p>\n<p>\nIf r and s point to the same ring, linking\nthem removes the elements between r and s from the ring.\nThe removed elements form a subring and the result is a\nreference to that subring (if no elements were removed,\nthe result is still the original value for r.Next(),\nand not nil).\n</p>\n<p>\nIf r and s point to different rings, linking\nthem creates a single ring with the elements of s inserted\nafter r. The result points to the element following the\nlast element of s after insertion.\n</p>\n\n",name:"Link"},{html:"\n<h2><a class=\"black\" href=\"?m:Ring\">func (*Ring)</a> <a href=\"?m:Ring.Move!\">Move</a></h2>\n<code>func (r *Ring) Move(n int) *Ring</code>\n<p>\nMove moves n % r.Len() elements backward (n &lt; 0) or forward (n &gt;= 0)\nin the ring and returns that ring element. r must not be empty.\n</p>\n\n",name:"Move"},{html:"\n<h2><a class=\"black\" href=\"?m:Ring\">func (*Ring)</a> <a href=\"?m:Ring.Next!\">Next</a></h2>\n<code>func (r *Ring) Next() *Ring</code>\n<p>\nNext returns the next ring element. r must not be empty.\n</p>\n\n",name:"Next"},{html:"\n<h2><a class=\"black\" href=\"?m:Ring\">func (*Ring)</a> <a href=\"?m:Ring.Prev!\">Prev</a></h2>\n<code>func (r *Ring) Prev() *Ring</code>\n<p>\nPrev returns the previous ring element. r must not be empty.\n</p>\n\n",name:"Prev"},{html:"\n<h2><a class=\"black\" href=\"?m:Ring\">func (*Ring)</a> <a href=\"?m:Ring.Unlink!\">Unlink</a></h2>\n<code>func (r *Ring) Unlink(n int) *Ring</code>\n<p>\nUnlink removes n % r.Len() elements from the ring r, starting\nat r.Next(). If n % r.Len() == 0, r remains unchanged.\nThe result is the removed subring. r must not be empty.\n</p>\n\n",name:"Unlink"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\n<code>func New(n int) *Ring</code>\n<p>\nNew creates a ring of n elements.\n</p>\n\n",name:"New"}],consts:[],vars:[]}