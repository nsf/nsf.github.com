var gowtfData = {"html":"<p>\u000aPackage proc provides a platform-independent interface for\u000atracing and controlling running processes.  It supports\u000amulti-threaded processes and provides typical low-level debugging\u000acontrols such as breakpoints, single stepping, and manipulating\u000amemory and registers.\u000a</p>\u000a","name":"proc","filenames":["/home/nsf/go/src/pkg/debug/proc/proc_linux.go","/home/nsf/go/src/pkg/debug/proc/regs_linux_386.go","/home/nsf/go/src/pkg/debug/proc/proc.go"],"types":[{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Breakpoint!\">Breakpoint</a></h2>\u000a<pre>type Breakpoint Word</pre>\u000a<p>\u000aBreakpoint is a stop cause resulting from a thread reaching a set\u000abreakpoint.\u000a</p>\u000a\u000a","name":"Breakpoint","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Breakpoint\">func (Breakpoint)</a> <a href=\"?m:Breakpoint.PC!\">PC</a></h2>\u000a<code>func (c Breakpoint) PC() Word</code>\u000a<p>\u000aPC returns the program counter that the program is stopped at.\u000a</p>\u000a\u000a","name":"PC"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Breakpoint\">func (Breakpoint)</a> <a href=\"?m:Breakpoint.String!\">String</a></h2>\u000a<code>func (c Breakpoint) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Cause!\">Cause</a></h2>\u000a<pre>type Cause interface {\u000a\u0009String() string\u000a}</pre>\u000a<p>\u000aA Cause explains why a thread is stopped.\u000a</p>\u000a\u000a","name":"Cause","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Process!\">Process</a></h2>\u000a<pre>type Process interface {\u000a\u0009// Threads returns an array of all threads in this process.\u000a\u0009Threads() []Thread\u000a\u000a\u0009// AddBreakpoint creates a new breakpoint at program counter\u000a\u0009// pc.  Breakpoints can only be created when the process is\u000a\u0009// stopped.  It is an error if a breakpoint already exists at\u000a\u0009// pc.\u000a\u0009AddBreakpoint(pc Word) os.Error\u000a\u000a\u0009// RemoveBreakpoint removes the breakpoint at the program\u000a\u0009// counter pc.  It is an error if no breakpoint exists at pc.\u000a\u0009RemoveBreakpoint(pc Word) os.Error\u000a\u000a\u0009// Stop stops all running threads in this process before\u000a\u0009// returning.\u000a\u0009Stop() os.Error\u000a\u000a\u0009// Continue resumes execution of all threads in this process.\u000a\u0009// Any thread that is stopped on a breakpoint will be stepped\u000a\u0009// over that breakpoint.  Any thread that is stopped because\u000a\u0009// of a signal (other than SIGSTOP or SIGTRAP) will receive\u000a\u0009// the pending signal.\u000a\u0009Continue() os.Error\u000a\u000a\u0009// WaitStop waits until all threads in process p are stopped\u000a\u0009// as a result of some thread hitting a breakpoint, receiving\u000a\u0009// a signal, creating a new thread, or exiting.\u000a\u0009WaitStop() os.Error\u000a\u000a\u0009// Detach detaches from this process.  All stopped threads\u000a\u0009// will be resumed.\u000a\u0009Detach() os.Error\u000a}</pre>\u000a<p>\u000aProcess is a process being traced.  It consists of a set of\u000athreads.  A process can be running, stopped, or terminated.  The\u000aprocess&#39;s state extends to all of its threads.\u000a</p>\u000a\u000a","name":"Process","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ProcessExited!\">ProcessExited</a></h2>\u000a<pre>type ProcessExited struct{}</pre>\u000a\u000a","name":"ProcessExited","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:ProcessExited\">func (ProcessExited)</a> <a href=\"?m:ProcessExited.String!\">String</a></h2>\u000a<code>func (p ProcessExited) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Regs!\">Regs</a></h2>\u000a<pre>type Regs interface {\u000a\u0009// PC returns the value of the program counter.\u000a\u0009PC() Word\u000a\u000a\u0009// SetPC sets the program counter to val.\u000a\u0009SetPC(val Word) os.Error\u000a\u000a\u0009// Link returns the link register, if any.\u000a\u0009Link() Word\u000a\u000a\u0009// SetLink sets the link register to val.\u000a\u0009SetLink(val Word) os.Error\u000a\u000a\u0009// SP returns the value of the stack pointer.\u000a\u0009SP() Word\u000a\u000a\u0009// SetSP sets the stack pointer register to val.\u000a\u0009SetSP(val Word) os.Error\u000a\u000a\u0009// Names returns the names of all of the registers.\u000a\u0009Names() []string\u000a\u000a\u0009// Get returns the value of a register, where i corresponds to\u000a\u0009// the index of the register&#39;s name in the array returned by\u000a\u0009// Names.\u000a\u0009Get(i int) Word\u000a\u000a\u0009// Set sets the value of a register.\u000a\u0009Set(i int, val Word) os.Error\u000a}</pre>\u000a<p>\u000aRegs is a set of named machine registers, including a program\u000acounter, link register, and stack pointer.\u000a</p>\u000a<p>\u000aTODO(austin) There&#39;s quite a proliferation of methods here.  We\u000acould make a Reg interface with Get and Set and make this just PC,\u000aLink, SP, Names, and Reg.  We could also put Index in Reg and that\u000amakes it easy to get the index of things like the PC (currently\u000athere&#39;s just no way to know that).  This would also let us include\u000aother per-register information like how to print it.\u000a</p>\u000a\u000a","name":"Regs","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Signal!\">Signal</a></h2>\u000a<pre>type Signal string</pre>\u000a<p>\u000aSignal is a stop cause resulting from a thread receiving a signal.\u000aWhen the process is continued, the signal will be delivered.\u000a</p>\u000a\u000a","name":"Signal","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Signal\">func (Signal)</a> <a href=\"?m:Signal.Name!\">Name</a></h2>\u000a<code>func (c Signal) Name() string</code>\u000a<p>\u000aSignal returns the signal being delivered to the thread.\u000a</p>\u000a\u000a","name":"Name"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:Signal\">func (Signal)</a> <a href=\"?m:Signal.String!\">String</a></h2>\u000a<code>func (c Signal) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Stopped!\">Stopped</a></h2>\u000a<pre>type Stopped struct{}</pre>\u000a<p>\u000aStopped is a stop cause used for threads that are stopped either by\u000auser request (e.g., from the Stop method or after single stepping),\u000aor that are stopped because some other thread caused the program to\u000astop.\u000a</p>\u000a\u000a","name":"Stopped","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:Stopped\">func (Stopped)</a> <a href=\"?m:Stopped.String!\">String</a></h2>\u000a<code>func (c Stopped) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Thread!\">Thread</a></h2>\u000a<pre>type Thread interface {\u000a\u0009// Step steps this thread by a single instruction.  The thread\u000a\u0009// must be stopped.  If the thread is currently stopped on a\u000a\u0009// breakpoint, this will step over the breakpoint.\u000a\u0009//\u000a\u0009// XXX What if it&#39;s stopped because of a signal?\u000a\u0009Step() os.Error\u000a\u000a\u0009// Stopped returns the reason that this thread is stopped.  It\u000a\u0009// is an error is the thread not stopped.\u000a\u0009Stopped() (Cause, os.Error)\u000a\u000a\u0009// Regs retrieves the current register values from this\u000a\u0009// thread.  The thread must be stopped.\u000a\u0009Regs() (Regs, os.Error)\u000a\u000a\u0009// Peek reads len(out) bytes from the address addr in this\u000a\u0009// thread into out.  The thread must be stopped.  It returns\u000a\u0009// the number of bytes successfully read.  If an error occurs,\u000a\u0009// such as attempting to read unmapped memory, this count\u000a\u0009// could be short and an error will be returned.  If this does\u000a\u0009// encounter unmapped memory, it will read up to the byte\u000a\u0009// preceding the unmapped area.\u000a\u0009Peek(addr Word, out []byte) (int, os.Error)\u000a\u000a\u0009// Poke writes b to the address addr in this thread.  The\u000a\u0009// thread must be stopped.  It returns the number of bytes\u000a\u0009// successfully written.  If an error occurs, such as\u000a\u0009// attempting to write to unmapped memory, this count could be\u000a\u0009// short and an error will be returned.  If this does\u000a\u0009// encounter unmapped memory, it will write up to the byte\u000a\u0009// preceding the unmapped area.\u000a\u0009Poke(addr Word, b []byte) (int, os.Error)\u000a}</pre>\u000a<p>\u000aThread is a thread in the process being traced.\u000a</p>\u000a\u000a","name":"Thread","methods":[]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ThreadCreate!\">ThreadCreate</a></h2>\u000a<pre>type ThreadCreate struct {\u000a\u0009thread Thread\u000a}</pre>\u000a<p>\u000aThreadCreate is a stop cause returned from an existing thread when\u000ait creates a new thread.  The new thread exists in a primordial\u000aform at this point and will begin executing in earnest when the\u000aprocess is continued.\u000a</p>\u000a\u000a","name":"ThreadCreate","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:ThreadCreate\">func (*ThreadCreate)</a> <a href=\"?m:ThreadCreate.NewThread!\">NewThread</a></h2>\u000a<code>func (c *ThreadCreate) NewThread() Thread</code>\u000a\u000a","name":"NewThread"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:ThreadCreate\">func (*ThreadCreate)</a> <a href=\"?m:ThreadCreate.String!\">String</a></h2>\u000a<code>func (c *ThreadCreate) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ThreadExit!\">ThreadExit</a></h2>\u000a<pre>type ThreadExit struct {\u000a\u0009exitStatus int\u000a\u0009signal     string\u000a}</pre>\u000a<p>\u000aThreadExit is a stop cause resulting from a thread exiting.  When\u000athis cause first arises, the thread will still be in the list of\u000aprocess threads and its registers and memory will still be\u000aaccessible.\u000a</p>\u000a\u000a","name":"ThreadExit","methods":[{"html":"\u000a<h2><a class=\"black\" href=\"?m:ThreadExit\">func (*ThreadExit)</a> <a href=\"?m:ThreadExit.ExitStatus!\">ExitStatus</a></h2>\u000a<code>func (c *ThreadExit) ExitStatus() int</code>\u000a<p>\u000aExitStatus returns the exit status of the thread if it exited\u000anormally or -1 otherwise.\u000a</p>\u000a\u000a","name":"ExitStatus"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:ThreadExit\">func (*ThreadExit)</a> <a href=\"?m:ThreadExit.Exited!\">Exited</a></h2>\u000a<code>func (c *ThreadExit) Exited() bool</code>\u000a<p>\u000aExited returns true if the thread exited normally.\u000a</p>\u000a\u000a","name":"Exited"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:ThreadExit\">func (*ThreadExit)</a> <a href=\"?m:ThreadExit.Signaled!\">Signaled</a></h2>\u000a<code>func (c *ThreadExit) Signaled() bool</code>\u000a<p>\u000aSignaled returns true if the thread was terminated by a signal.\u000a</p>\u000a\u000a","name":"Signaled"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:ThreadExit\">func (*ThreadExit)</a> <a href=\"?m:ThreadExit.StopSignal!\">StopSignal</a></h2>\u000a<code>func (c *ThreadExit) StopSignal() string</code>\u000a<p>\u000aStopSignal returns the signal that terminated the thread, or &#34;&#34; if\u000ait was not terminated by a signal.\u000a</p>\u000a\u000a","name":"StopSignal"},{"html":"\u000a<h2><a class=\"black\" href=\"?m:ThreadExit\">func (*ThreadExit)</a> <a href=\"?m:ThreadExit.String!\">String</a></h2>\u000a<code>func (c *ThreadExit) String() string</code>\u000a\u000a","name":"String"}]},{"html":"\u000a<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Word!\">Word</a></h2>\u000a<pre>type Word uint64</pre>\u000a\u000a","name":"Word","methods":[]}],"funcs":[{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Attach!\">Attach</a></h2>\u000a<code>func Attach(pid int) (Process, os.Error)</code>\u000a<p>\u000aAttach attaches to process pid and stops all of its threads.\u000a</p>\u000a\u000a","name":"Attach"},{"html":"\u000a<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ForkExec!\">ForkExec</a></h2>\u000a<code>func ForkExec(argv0 string, argv []string, envv []string, dir string, fd []*os.File) (Process, os.Error)</code>\u000a<p>\u000aForkExec forks the current process and execs argv0, stopping the\u000anew process after the exec syscall.  See os.ForkExec for additional\u000adetails.\u000a</p>\u000a\u000a","name":"ForkExec"}],"consts":[],"vars":[]}