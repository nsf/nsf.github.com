var gortfmData = {index:"index.html",html:"<p>\nThe time package provides functionality for measuring and\ndisplaying time.\n</p>\n",name:"time",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ParseError!\">ParseError</a></h2>\n<pre>type ParseError struct {\n\tLayout     string\n\tValue      string\n\tLayoutElem string\n\tValueElem  string\n\tMessage    string\n}</pre>\n<p>\nParseError describes a problem parsing a time string.\n</p>\n\n",name:"ParseError","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ParseError\">func (*ParseError)</a> <a href=\"?m:ParseError.String!\">String</a></h2>\n<code>func (e *ParseError) String() string</code>\n<p>\nString is the string representation of a ParseError.\n</p>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Ticker!\">Ticker</a></h2>\n<pre>type Ticker struct {\n\tC &lt;-chan int64 // The channel on which the ticks are delivered.\n\t// contains unexported fields\n}</pre>\n<p>\nA Ticker holds a synchronous channel that delivers `ticks&#39; of a clock\nat intervals.\n</p>\n\n",name:"Ticker","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Ticker\">func (*Ticker)</a> <a href=\"?m:Ticker.Stop!\">Stop</a></h2>\n<code>func (t *Ticker) Stop()</code>\n<p>\nStop turns off a ticker.  After Stop, no more ticks will be sent.\n</p>\n\n",name:"Stop"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Time!\">Time</a></h2>\n<pre>type Time struct {\n\tYear                 int64  // 2006 is 2006\n\tMonth, Day           int    // Jan-2 is 1, 2\n\tHour, Minute, Second int    // 15:04:05 is 15, 4, 5.\n\tWeekday              int    // Sunday, Monday, ...\n\tZoneOffset           int    // seconds east of UTC, e.g. -7*60 for -0700\n\tZone                 string // e.g., &#34;MST&#34;\n}</pre>\n<p>\nTime is the struct representing a parsed time value.\n</p>\n\n",name:"Time","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Time\">func (*Time)</a> <a href=\"?m:Time.Format!\">Format</a></h2>\n<code>func (t *Time) Format(layout string) string</code>\n<p>\nFormat returns a textual representation of the time value formatted\naccording to layout.  The layout defines the format by showing the\nrepresentation of a standard time, which is then used to describe\nthe time to be formatted.  Predefined layouts ANSIC, UnixDate,\nRFC3339 and others describe standard representations.\n</p>\n\n",name:"Format"},{html:"\n<h2><a class=\"black\" href=\"?m:Time\">func (*Time)</a> <a href=\"?m:Time.Seconds!\">Seconds</a></h2>\n<code>func (t *Time) Seconds() int64</code>\n<p>\nSeconds returns the number of seconds since January 1, 1970 represented by the\nparsed Time value.\n</p>\n\n",name:"Seconds"},{html:"\n<h2><a class=\"black\" href=\"?m:Time\">func (*Time)</a> <a href=\"?m:Time.String!\">String</a></h2>\n<code>func (t *Time) String() string</code>\n<p>\nString returns a Unix-style representation of the time value.\n</p>\n\n",name:"String"}]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:After!\">After</a></h2>\n<code>func After(ns int64) &lt;-chan int64</code>\n<p>\nAfter waits at least ns nanoseconds before sending the current time\non the returned channel.\n</p>\n\n",name:"After"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:LocalTime!\">LocalTime</a></h2>\n<code>func LocalTime() *Time</code>\n<p>\nLocalTime returns the current time as a parsed Time value in the local time zone.\n</p>\n\n",name:"LocalTime"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Nanoseconds!\">Nanoseconds</a></h2>\n<code>func Nanoseconds() int64</code>\n<p>\nNanoseconds reports the number of nanoseconds since the Unix epoch,\nJanuary 1, 1970 00:00:00 UTC.\n</p>\n\n",name:"Nanoseconds"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:NewTicker!\">NewTicker</a></h2>\n<code>func NewTicker(ns int64) *Ticker</code>\n<p>\nNewTicker returns a new Ticker containing a channel that will\nsend the time, in nanoseconds, every ns nanoseconds.  It adjusts the\nintervals to make up for pauses in delivery of the ticks.\n</p>\n\n",name:"NewTicker"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Parse!\">Parse</a></h2>\n<code>func Parse(alayout, avalue string) (*Time, os.Error)</code>\n<p>\nParse parses a formatted string and returns the time value it represents.\nThe layout defines the format by showing the representation of a standard\ntime, which is then used to describe the string to be parsed.  Predefined\nlayouts ANSIC, UnixDate, RFC3339 and others describe standard\nrepresentations.\n</p>\n<p>\nOnly those elements present in the value will be set in the returned time\nstructure.  Also, if the input string represents an inconsistent time\n(such as having the wrong day of the week), the returned value will also\nbe inconsistent.  In any case, the elements of the returned time will be\nsane: hours in 0..23, minutes in 0..59, day of month in 0..31, etc.\nYears must be in the range 0000..9999.\n</p>\n\n",name:"Parse"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Seconds!\">Seconds</a></h2>\n<code>func Seconds() int64</code>\n<p>\nSeconds reports the number of seconds since the Unix epoch,\nJanuary 1, 1970 00:00:00 UTC.\n</p>\n\n",name:"Seconds"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:SecondsToLocalTime!\">SecondsToLocalTime</a></h2>\n<code>func SecondsToLocalTime(sec int64) *Time</code>\n<p>\nSecondsToLocalTime converts sec, in number of seconds since the Unix epoch,\ninto a parsed Time value in the local time zone.\n</p>\n\n",name:"SecondsToLocalTime"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:SecondsToUTC!\">SecondsToUTC</a></h2>\n<code>func SecondsToUTC(sec int64) *Time</code>\n<p>\nSecondsToUTC converts sec, in number of seconds since the Unix epoch,\ninto a parsed Time value in the UTC time zone.\n</p>\n\n",name:"SecondsToUTC"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Sleep!\">Sleep</a></h2>\n<code>func Sleep(ns int64) os.Error</code>\n<p>\nSleep pauses the current goroutine for at least ns nanoseconds.\nHigher resolution sleeping may be provided by syscall.Nanosleep\non some operating systems.\n</p>\n\n",name:"Sleep"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Tick!\">Tick</a></h2>\n<code>func Tick(ns int64) &lt;-chan int64</code>\n<p>\nTick is a convenience wrapper for NewTicker providing access to the ticking\nchannel only.  Useful for clients that have no need to shut down the ticker.\n</p>\n\n",name:"Tick"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:UTC!\">UTC</a></h2>\n<code>func UTC() *Time</code>\n<p>\nUTC returns the current time as a parsed Time value in the UTC time zone.\n</p>\n\n",name:"UTC"}],consts:[{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:Sunday!\"><em>group</em></a></h2>\n<pre>const (\n\tSunday = iota\n\tMonday\n\tTuesday\n\tWednesday\n\tThursday\n\tFriday\n\tSaturday\n)</pre>\n<p>\nDays of the week.\n</p>\n\n",names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],type:""},{html:"\n<h2><a class=\"black\" href=\"?c:\">const</a> <a href=\"?c:ANSIC!\"><em>group</em></a></h2>\n<pre>const (\n\tANSIC    = &#34;Mon Jan _2 15:04:05 2006&#34;\n\tUnixDate = &#34;Mon Jan _2 15:04:05 MST 2006&#34;\n\tRubyDate = &#34;Mon Jan 02 15:04:05 -0700 2006&#34;\n\tRFC822   = &#34;02 Jan 06 1504 MST&#34;\n\t// RFC822 with Zulu time.\n\tRFC822Z = &#34;02 Jan 06 1504 -0700&#34;\n\tRFC850  = &#34;Monday, 02-Jan-06 15:04:05 MST&#34;\n\tRFC1123 = &#34;Mon, 02 Jan 2006 15:04:05 MST&#34;\n\tKitchen = &#34;3:04PM&#34;\n\tRFC3339 = &#34;2006-01-02T15:04:05Z07:00&#34;\n)</pre>\n<p>\nThese are predefined layouts for use in Time.Format.\nThe standard time used in the layouts is:\n</p>\n<pre>Mon Jan 2 15:04:05 MST 2006  (MST is GMT-0700)\n</pre>\n<p>\nwhich is Unix time 1136243045.\n(Think of it as 01/02 03:04:05PM &#39;06 -0700.)\nAn underscore _ represents a space that\nmay be replaced by a digit if the following number\n(a day) has two digits; for compatibility with\nfixed-width Unix time formats.\n</p>\n<p>\nNumeric time zone offsets format as follows:\n</p>\n<pre>-0700  \u  hhmm\n-07:00 \u  hh:mm\n</pre>\n<p>\nReplacing the sign in the format with a Z triggers\nthe ISO 8601 behavior of printing Z instead of an\noffset for the UTC zone.  Thus:\n</p>\n<pre>Z0700  Z or \u  hhmm\nZ07:00 Z or \u  hh:mm\n</pre>\n\n",names:["ANSIC","UnixDate","RubyDate","RFC822","RFC822Z","RFC850","RFC1123","Kitchen","RFC3339"],type:""}],vars:[]}