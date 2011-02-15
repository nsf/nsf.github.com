var gortfmData = {index:"index.html",html:"<p>\nThis package implements a wrapper for the Linux inotify system.\n</p>\n<p>\nExample:\n</p>\n<pre>watcher, err := inotify.NewWatcher()\nif err != nil {\n    log.Fatal(err)\n}\nerr = watcher.Watch(&#34;/tmp&#34;)\nif err != nil {\n    log.Fatal(err)\n}\nfor {\n    select {\n    case ev := &lt;-watcher.Event:\n        log.Println(&#34;event:&#34;, ev)\n    case err := &lt;-watcher.Error:\n        log.Println(&#34;error:&#34;, err)\n    }\n}\n</pre>\n",name:"inotify",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Event!\">Event</a></h2>\n<pre>type Event struct {\n\tMask   uint32 // Mask of events\n\tCookie uint32 // Unique cookie associating related events (for rename(2))\n\tName   string // File name (optional)\n}</pre>\n\n",name:"Event","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Event\">func (*Event)</a> <a href=\"?m:Event.String!\">String</a></h2>\n<code>func (e *Event) String() string</code>\n<p>\nString formats the event e in the form\n&#34;filename: 0xEventMask = IN_ACCESS|IN_ATTRIB_|...&#34;\n</p>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Watcher!\">Watcher</a></h2>\n<pre>type Watcher struct {\n\tError chan os.Error // Errors are sent on this channel\n\tEvent chan *Event   // Events are returned on this channel\n\t// contains unexported fields\n}</pre>\n\n",name:"Watcher","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Watcher\">func (*Watcher)</a> <a href=\"?m:Watcher.AddWatch!\">AddWatch</a></h2>\n<code>func (w *Watcher) AddWatch(path string, flags uint32) os.Error</code>\n<p>\nAddWatch adds path to the watched file set.\nThe flags are interpreted as described in inotify_add_watch(2).\n</p>\n\n",name:"AddWatch"},{html:"\n<h2><a class=\"black\" href=\"?m:Watcher\">func (*Watcher)</a> <a href=\"?m:Watcher.Close!\">Close</a></h2>\n<code>func (w *Watcher) Close() os.Error</code>\n<p>\nClose closes an inotify watcher instance\nIt sends a message to the reader goroutine to quit and removes all watches\nassociated with the inotify instance\n</p>\n\n",name:"Close"},{html:"\n<h2><a class=\"black\" href=\"?m:Watcher\">func (*Watcher)</a> <a href=\"?m:Watcher.RemoveWatch!\">RemoveWatch</a></h2>\n<code>func (w *Watcher) RemoveWatch(path string) os.Error</code>\n<p>\nRemoveWatch removes path from the watched file set.\n</p>\n\n",name:"RemoveWatch"},{html:"\n<h2><a class=\"black\" href=\"?m:Watcher\">func (*Watcher)</a> <a href=\"?m:Watcher.Watch!\">Watch</a></h2>\n<code>func (w *Watcher) Watch(path string) os.Error</code>\n<p>\nWatch adds path to the watched file set, watching all events.\n</p>\n\n",name:"Watch"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewWatcher!\">NewWatcher</a></h2>\n<code>func NewWatcher() (*Watcher, os.Error)</code>\n<p>\nNewWatcher creates and returns a new inotify instance using inotify_init(2)\n</p>\n\n",name:"NewWatcher"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:IN_DONT_FOLLOW!\"><em>group</em></a></h2>\n<pre>const (\n\n\t// Options for AddWatch\n\tIN_DONT_FOLLOW uint32 = syscall.IN_DONT_FOLLOW\n\tIN_ONESHOT     uint32 = syscall.IN_ONESHOT\n\tIN_ONLYDIR     uint32 = syscall.IN_ONLYDIR\n\n\t// Events\n\tIN_ACCESS        uint32 = syscall.IN_ACCESS\n\tIN_ALL_EVENTS    uint32 = syscall.IN_ALL_EVENTS\n\tIN_ATTRIB        uint32 = syscall.IN_ATTRIB\n\tIN_CLOSE         uint32 = syscall.IN_CLOSE\n\tIN_CLOSE_NOWRITE uint32 = syscall.IN_CLOSE_NOWRITE\n\tIN_CLOSE_WRITE   uint32 = syscall.IN_CLOSE_WRITE\n\tIN_CREATE        uint32 = syscall.IN_CREATE\n\tIN_DELETE        uint32 = syscall.IN_DELETE\n\tIN_DELETE_SELF   uint32 = syscall.IN_DELETE_SELF\n\tIN_MODIFY        uint32 = syscall.IN_MODIFY\n\tIN_MOVE          uint32 = syscall.IN_MOVE\n\tIN_MOVED_FROM    uint32 = syscall.IN_MOVED_FROM\n\tIN_MOVED_TO      uint32 = syscall.IN_MOVED_TO\n\tIN_MOVE_SELF     uint32 = syscall.IN_MOVE_SELF\n\tIN_OPEN          uint32 = syscall.IN_OPEN\n\n\t// Special events\n\tIN_ISDIR      uint32 = syscall.IN_ISDIR\n\tIN_IGNORED    uint32 = syscall.IN_IGNORED\n\tIN_Q_OVERFLOW uint32 = syscall.IN_Q_OVERFLOW\n\tIN_UNMOUNT    uint32 = syscall.IN_UNMOUNT\n)</pre>\n\n",names:["IN_DONT_FOLLOW","IN_ONESHOT","IN_ONLYDIR","IN_ACCESS","IN_ALL_EVENTS","IN_ATTRIB","IN_CLOSE","IN_CLOSE_NOWRITE","IN_CLOSE_WRITE","IN_CREATE","IN_DELETE","IN_DELETE_SELF","IN_MODIFY","IN_MOVE","IN_MOVED_FROM","IN_MOVED_TO","IN_MOVE_SELF","IN_OPEN","IN_ISDIR","IN_IGNORED","IN_Q_OVERFLOW","IN_UNMOUNT"],type:""}],vars:[]}