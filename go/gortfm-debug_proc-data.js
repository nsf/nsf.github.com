var gortfmData = {index:"index.html",html:"<p>\nPackage proc provides a platform-independent interface for\ntracing and controlling running processes.  It supports\nmulti-threaded processes and provides typical low-level debugging\ncontrols such as breakpoints, single stepping, and manipulating\nmemory and registers.\n</p>\n",name:"proc",types:[{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Breakpoint!\">Breakpoint</a></h2>\n<pre>type Breakpoint Word</pre>\n<p>\nBreakpoint is a stop cause resulting from a thread reaching a set\nbreakpoint.\n</p>\n\n",name:"Breakpoint","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Breakpoint\">func (Breakpoint)</a> <a href=\"?m:Breakpoint.PC!\">PC</a></h2>\n<code>func (c Breakpoint) PC() Word</code>\n<p>\nPC returns the program counter that the program is stopped at.\n</p>\n\n",name:"PC"},{html:"\n<h2><a class=\"black\" href=\"?m:Breakpoint\">func (Breakpoint)</a> <a href=\"?m:Breakpoint.String!\">String</a></h2>\n<code>func (c Breakpoint) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Cause!\">Cause</a></h2>\n<pre>type Cause interface {\n\tString() string\n}</pre>\n<p>\nA Cause explains why a thread is stopped.\n</p>\n\n",name:"Cause","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Process!\">Process</a></h2>\n<pre>type Process interface {\n\t// Threads returns an array of all threads in this process.\n\tThreads() []Thread\n\n\t// AddBreakpoint creates a new breakpoint at program counter\n\t// pc.  Breakpoints can only be created when the process is\n\t// stopped.  It is an error if a breakpoint already exists at\n\t// pc.\n\tAddBreakpoint(pc Word) os.Error\n\n\t// RemoveBreakpoint removes the breakpoint at the program\n\t// counter pc.  It is an error if no breakpoint exists at pc.\n\tRemoveBreakpoint(pc Word) os.Error\n\n\t// Stop stops all running threads in this process before\n\t// returning.\n\tStop() os.Error\n\n\t// Continue resumes execution of all threads in this process.\n\t// Any thread that is stopped on a breakpoint will be stepped\n\t// over that breakpoint.  Any thread that is stopped because\n\t// of a signal (other than SIGSTOP or SIGTRAP) will receive\n\t// the pending signal.\n\tContinue() os.Error\n\n\t// WaitStop waits until all threads in process p are stopped\n\t// as a result of some thread hitting a breakpoint, receiving\n\t// a signal, creating a new thread, or exiting.\n\tWaitStop() os.Error\n\n\t// Detach detaches from this process.  All stopped threads\n\t// will be resumed.\n\tDetach() os.Error\n}</pre>\n<p>\nProcess is a process being traced.  It consists of a set of\nthreads.  A process can be running, stopped, or terminated.  The\nprocess&#39;s state extends to all of its threads.\n</p>\n\n",name:"Process","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ProcessExited!\">ProcessExited</a></h2>\n<pre>type ProcessExited struct{}</pre>\n\n",name:"ProcessExited","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ProcessExited\">func (ProcessExited)</a> <a href=\"?m:ProcessExited.String!\">String</a></h2>\n<code>func (p ProcessExited) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Regs!\">Regs</a></h2>\n<pre>type Regs interface {\n\t// PC returns the value of the program counter.\n\tPC() Word\n\n\t// SetPC sets the program counter to val.\n\tSetPC(val Word) os.Error\n\n\t// Link returns the link register, if any.\n\tLink() Word\n\n\t// SetLink sets the link register to val.\n\tSetLink(val Word) os.Error\n\n\t// SP returns the value of the stack pointer.\n\tSP() Word\n\n\t// SetSP sets the stack pointer register to val.\n\tSetSP(val Word) os.Error\n\n\t// Names returns the names of all of the registers.\n\tNames() []string\n\n\t// Get returns the value of a register, where i corresponds to\n\t// the index of the register&#39;s name in the array returned by\n\t// Names.\n\tGet(i int) Word\n\n\t// Set sets the value of a register.\n\tSet(i int, val Word) os.Error\n}</pre>\n<p>\nRegs is a set of named machine registers, including a program\ncounter, link register, and stack pointer.\n</p>\n<p>\nTODO(austin) There&#39;s quite a proliferation of methods here.  We\ncould make a Reg interface with Get and Set and make this just PC,\nLink, SP, Names, and Reg.  We could also put Index in Reg and that\nmakes it easy to get the index of things like the PC (currently\nthere&#39;s just no way to know that).  This would also let us include\nother per-register information like how to print it.\n</p>\n\n",name:"Regs","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Signal!\">Signal</a></h2>\n<pre>type Signal string</pre>\n<p>\nSignal is a stop cause resulting from a thread receiving a signal.\nWhen the process is continued, the signal will be delivered.\n</p>\n\n",name:"Signal","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Signal\">func (Signal)</a> <a href=\"?m:Signal.Name!\">Name</a></h2>\n<code>func (c Signal) Name() string</code>\n<p>\nSignal returns the signal being delivered to the thread.\n</p>\n\n",name:"Name"},{html:"\n<h2><a class=\"black\" href=\"?m:Signal\">func (Signal)</a> <a href=\"?m:Signal.String!\">String</a></h2>\n<code>func (c Signal) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Stopped!\">Stopped</a></h2>\n<pre>type Stopped struct{}</pre>\n<p>\nStopped is a stop cause used for threads that are stopped either by\nuser request (e.g., from the Stop method or after single stepping),\nor that are stopped because some other thread caused the program to\nstop.\n</p>\n\n",name:"Stopped","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:Stopped\">func (Stopped)</a> <a href=\"?m:Stopped.String!\">String</a></h2>\n<code>func (c Stopped) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Thread!\">Thread</a></h2>\n<pre>type Thread interface {\n\t// Step steps this thread by a single instruction.  The thread\n\t// must be stopped.  If the thread is currently stopped on a\n\t// breakpoint, this will step over the breakpoint.\n\t//\n\t// XXX What if it&#39;s stopped because of a signal?\n\tStep() os.Error\n\n\t// Stopped returns the reason that this thread is stopped.  It\n\t// is an error is the thread not stopped.\n\tStopped() (Cause, os.Error)\n\n\t// Regs retrieves the current register values from this\n\t// thread.  The thread must be stopped.\n\tRegs() (Regs, os.Error)\n\n\t// Peek reads len(out) bytes from the address addr in this\n\t// thread into out.  The thread must be stopped.  It returns\n\t// the number of bytes successfully read.  If an error occurs,\n\t// such as attempting to read unmapped memory, this count\n\t// could be short and an error will be returned.  If this does\n\t// encounter unmapped memory, it will read up to the byte\n\t// preceding the unmapped area.\n\tPeek(addr Word, out []byte) (int, os.Error)\n\n\t// Poke writes b to the address addr in this thread.  The\n\t// thread must be stopped.  It returns the number of bytes\n\t// successfully written.  If an error occurs, such as\n\t// attempting to write to unmapped memory, this count could be\n\t// short and an error will be returned.  If this does\n\t// encounter unmapped memory, it will write up to the byte\n\t// preceding the unmapped area.\n\tPoke(addr Word, b []byte) (int, os.Error)\n}</pre>\n<p>\nThread is a thread in the process being traced.\n</p>\n\n",name:"Thread","methods":[]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ThreadCreate!\">ThreadCreate</a></h2>\n<pre>type ThreadCreate struct {\n\t// contains unexported fields\n}</pre>\n<p>\nThreadCreate is a stop cause returned from an existing thread when\nit creates a new thread.  The new thread exists in a primordial\nform at this point and will begin executing in earnest when the\nprocess is continued.\n</p>\n\n",name:"ThreadCreate","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ThreadCreate\">func (*ThreadCreate)</a> <a href=\"?m:ThreadCreate.NewThread!\">NewThread</a></h2>\n<code>func (c *ThreadCreate) NewThread() Thread</code>\n\n",name:"NewThread"},{html:"\n<h2><a class=\"black\" href=\"?m:ThreadCreate\">func (*ThreadCreate)</a> <a href=\"?m:ThreadCreate.String!\">String</a></h2>\n<code>func (c *ThreadCreate) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:ThreadExit!\">ThreadExit</a></h2>\n<pre>type ThreadExit struct {\n\t// contains unexported fields\n}</pre>\n<p>\nThreadExit is a stop cause resulting from a thread exiting.  When\nthis cause first arises, the thread will still be in the list of\nprocess threads and its registers and memory will still be\naccessible.\n</p>\n\n",name:"ThreadExit","methods":[{html:"\n<h2><a class=\"black\" href=\"?m:ThreadExit\">func (*ThreadExit)</a> <a href=\"?m:ThreadExit.ExitStatus!\">ExitStatus</a></h2>\n<code>func (c *ThreadExit) ExitStatus() int</code>\n<p>\nExitStatus returns the exit status of the thread if it exited\nnormally or -1 otherwise.\n</p>\n\n",name:"ExitStatus"},{html:"\n<h2><a class=\"black\" href=\"?m:ThreadExit\">func (*ThreadExit)</a> <a href=\"?m:ThreadExit.Exited!\">Exited</a></h2>\n<code>func (c *ThreadExit) Exited() bool</code>\n<p>\nExited returns true if the thread exited normally.\n</p>\n\n",name:"Exited"},{html:"\n<h2><a class=\"black\" href=\"?m:ThreadExit\">func (*ThreadExit)</a> <a href=\"?m:ThreadExit.Signaled!\">Signaled</a></h2>\n<code>func (c *ThreadExit) Signaled() bool</code>\n<p>\nSignaled returns true if the thread was terminated by a signal.\n</p>\n\n",name:"Signaled"},{html:"\n<h2><a class=\"black\" href=\"?m:ThreadExit\">func (*ThreadExit)</a> <a href=\"?m:ThreadExit.StopSignal!\">StopSignal</a></h2>\n<code>func (c *ThreadExit) StopSignal() string</code>\n<p>\nStopSignal returns the signal that terminated the thread, or &#34;&#34; if\nit was not terminated by a signal.\n</p>\n\n",name:"StopSignal"},{html:"\n<h2><a class=\"black\" href=\"?m:ThreadExit\">func (*ThreadExit)</a> <a href=\"?m:ThreadExit.String!\">String</a></h2>\n<code>func (c *ThreadExit) String() string</code>\n\n",name:"String"}]},{html:"\n<h2><a class=\"black\" href=\"?t:\">type</a> <a href=\"?t:Word!\">Word</a></h2>\n<pre>type Word uint64</pre>\n\n",name:"Word","methods":[]}],funcs:[{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:Attach!\">Attach</a></h2>\n<code>func Attach(pid int) (Process, os.Error)</code>\n<p>\nAttach attaches to process pid and stops all of its threads.\n</p>\n\n",name:"Attach"},{html:"\n<h2><a class=\"black\" href=\"?f:\">func</a> <a href=\"?f:ForkExec!\">ForkExec</a></h2>\n<code>func ForkExec(argv0 string, argv []string, envv []string, dir string, fd []*os.File) (Process, os.Error)</code>\n<p>\nForkExec forks the current process and execs argv0, stopping the\nnew process after the exec syscall.  See os.ForkExec for additional\ndetails.\n</p>\n\n",name:"ForkExec"}],consts:[],vars:[]}