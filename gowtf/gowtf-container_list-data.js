var gowtfData = {"html":"<p>\u000aThe list package implements a doubly linked list.\u000a</p>\u000a<p>\u000aTo iterate over a list (where l is a *List):\u000a</p>\u000a<pre>for e := l.Front(); e != nil; e = e.Next() {\u000a\u0009// do something with e.Value\u000a}\u000a</pre>\u000a","name":"list","filenames":["/home/nsf/go/src/pkg/container/list/list.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Element!\">Element</a></h2>\u000a<pre>type Element struct {\u000a\u0009// Next and previous pointers in the doubly-linked list of elements.\u000a\u0009// The front of the list has prev = nil, and the back has next = nil.\u000a\u0009next, prev *Element\u000a\u000a\u0009// The list to which this element belongs.\u000a\u0009list *List\u000a\u000a\u0009// The contents of this list element.\u000a\u0009Value interface{}\u000a}</pre>\u000a<p>\u000aElement is an element in the linked list.\u000a</p>\u000a\u000a","name":"Element","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Element\">func (*Element)</a> <a href=\"?m:Element.Next!\">Next</a></h2>\u000a<code>func (e *Element) Next() *Element</code>\u000a<p>\u000aNext returns the next list element or nil.\u000a</p>\u000a\u000a","name":"Next"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Element\">func (*Element)</a> <a href=\"?m:Element.Prev!\">Prev</a></h2>\u000a<code>func (e *Element) Prev() *Element</code>\u000a<p>\u000aPrev returns the previous list element or nil.\u000a</p>\u000a\u000a","name":"Prev"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:List!\">List</a></h2>\u000a<pre>type List struct {\u000a\u0009front, back *Element\u000a\u0009len         int\u000a}</pre>\u000a<p>\u000aList represents a doubly linked list.\u000aThe zero value for List is an empty list ready to use.\u000a</p>\u000a\u000a","name":"List","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.Back!\">Back</a></h2>\u000a<code>func (l *List) Back() *Element</code>\u000a<p>\u000aBack returns the last element in the list.\u000a</p>\u000a\u000a","name":"Back"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.Front!\">Front</a></h2>\u000a<code>func (l *List) Front() *Element</code>\u000a<p>\u000aFront returns the first element in the list.\u000a</p>\u000a\u000a","name":"Front"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.Init!\">Init</a></h2>\u000a<code>func (l *List) Init() *List</code>\u000a<p>\u000aInit initializes or clears a List.\u000a</p>\u000a\u000a","name":"Init"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.InsertAfter!\">InsertAfter</a></h2>\u000a<code>func (l *List) InsertAfter(value interface{}, mark *Element) *Element</code>\u000a<p>\u000aInsertAfter inserts the value immediately after mark and returns a new Element containing the value.\u000a</p>\u000a\u000a","name":"InsertAfter"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.InsertBefore!\">InsertBefore</a></h2>\u000a<code>func (l *List) InsertBefore(value interface{}, mark *Element) *Element</code>\u000a<p>\u000aInsertBefore inserts the value immediately before mark and returns a new Element containing the value.\u000a</p>\u000a\u000a","name":"InsertBefore"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.Len!\">Len</a></h2>\u000a<code>func (l *List) Len() int</code>\u000a<p>\u000aLen returns the number of elements in the list.\u000a</p>\u000a\u000a","name":"Len"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.MoveToBack!\">MoveToBack</a></h2>\u000a<code>func (l *List) MoveToBack(e *Element)</code>\u000a<p>\u000aMoveToBack moves the element to the back of the list.\u000a</p>\u000a\u000a","name":"MoveToBack"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.MoveToFront!\">MoveToFront</a></h2>\u000a<code>func (l *List) MoveToFront(e *Element)</code>\u000a<p>\u000aMoveToFront moves the element to the front of the list.\u000a</p>\u000a\u000a","name":"MoveToFront"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.PushBack!\">PushBack</a></h2>\u000a<code>func (l *List) PushBack(value interface{}) *Element</code>\u000a<p>\u000aPushBack inserts the value at the back of the list and returns a new Element containing the value.\u000a</p>\u000a\u000a","name":"PushBack"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.PushBackList!\">PushBackList</a></h2>\u000a<code>func (l *List) PushBackList(ol *List)</code>\u000a<p>\u000aPushBackList inserts each element of ol at the back of the list.\u000a</p>\u000a\u000a","name":"PushBackList"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.PushFront!\">PushFront</a></h2>\u000a<code>func (l *List) PushFront(value interface{}) *Element</code>\u000a<p>\u000aPushFront inserts the value at the front of the list and returns a new Element containing the value.\u000a</p>\u000a\u000a","name":"PushFront"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.PushFrontList!\">PushFrontList</a></h2>\u000a<code>func (l *List) PushFrontList(ol *List)</code>\u000a<p>\u000aPushFrontList inserts each element of ol at the front of the list. The ordering of the passed list is preserved.\u000a</p>\u000a\u000a","name":"PushFrontList"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:List\">func (*List)</a> <a href=\"?m:List.Remove!\">Remove</a></h2>\u000a<code>func (l *List) Remove(e *Element)</code>\u000a<p>\u000aRemove removes the element from the list.\u000a</p>\u000a\u000a","name":"Remove"}]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:New!\">New</a></h2>\u000a<code>func New() *List</code>\u000a<p>\u000aNew returns an initialized list.\u000a</p>\u000a\u000a","name":"New"}],"consts":[],"vars":[]}