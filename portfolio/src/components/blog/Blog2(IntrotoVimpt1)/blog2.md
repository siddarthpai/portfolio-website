# Blog 02: Introduction To VIM

#### By: Siddarth.D.Pai

#History of VIM:

Vi is text editor that was originally composed for the UNIX operating system

VIM basically stands for Vi+IMproved. It is a free and open-source, screen-based text editor program. It is an improved clone of Bill Joy's vi.

It is a powerful text editor and VIM comes standard with most Linux distributions

# Why VIM?

<li> VIM is installed practically everywhere. It can be installed everywhere and is practically preinstalled on every Linux machine out there</li>

<li> VIM is amazingly Powerful like macros, registers, command repetition and autocomplete</li>

<li> VIM is available in both TUI(Textual User Interface) and GUI(Graphical User Interface) modes. The GUI Mode of VIM has all the features of VIM along with the features expected in a GUI
  application like a scroll bar, menus, list of recently opened files and integration with the system’s clipboard
</li>
<li> VIM has syntax highlighting: Syntax Highlighting not only makes our files look more appealing but also makes spotting mistakes easier i.e. if the syntax highlighting for a line disappears then
  we can say that there is probably an issue with that line. It doesn’t only provide syntax highlighting for programming languages but also with other files such as patchy configuration files,
  deny host files, get config files, grub files and many more files If there is no support for Syntax Highlighting by default then there are multiple plugins that can be added on to support that file for Syntax Highlighting
</li>
<li> Compared to multiple editors out there, VIM commands are very easy to remember thanks to the mnemonics provided like
  i → insert
  d → delete
  :q → quit
</li>
<li> VIM is like a language, once you get the hang of it and learn to converse in that language, it becomes much easier to get tasks done</li>
<li> A very hand built-in help system which is thoroughly documented along with a vast online community</li>

# Why use VIM instead of popular editors like VS Code?

Having used VSC for over a year now, I understand your question as to why switch to VIM? Let us look at some aspects as to why we should consider switching over to using VIM as our primary Text editor:

1.VIM has a huge list of plugins which are contributed by the community which many of us find useful and love to use on a daily basis. <br/> 2.VIM has a very unique approach to text editing. It does things no other editor can(demonstrated below). The presence of a ‘VIM mode’ within modern-day IDEs indicates how it is.
However, ‘vim-mode’ only offers a subset of vim's functionality, and it never quite covers the functionality you use in vim.<br/> 3.Light on compute / memory resources. VIM is much lighter on your system than other modern text editors.<br/> 4.While vim can facilitate a lot of ide-like features that you may need, they are not required for vim to add value to you as a programmer and
very importantly these are not shipped with vim. However, that is not the case with IDEs. Basically, lesser bloatware.<br/> 5.Easy access on remote servers over ssh.

# How do you install VIM?

On Windows:

1.You can visit the official website [here](https://www.vim.org/download.php#pc) or just click on this [link](https://ftp.nluug.nl/pub/vim/pc/gvim90.exe) to ge the latest vim exe file for Windows<br/> 2.After the file downloads , install it and run it <br/>3.You should get an interface that looks like this:<br/> 4.If you want to make vim accessible on your terminal , we will have to add it onto our environment variables as follows:

<li>Go to the directory where VIM is installed should look something like this (C:\Program Files (x86)\Vim\vim90)</li>
<li>Go to your system environmental variables (click on win+r and type in sysdm.cpl)</li>
<li>Now you should see a box appear, click on environmental variables and in the section of User variables for 'your_user_name' click on PATH and click on edit</li>
<li>Paste the path and save</li>
<li>Now go to terminal and type in vim to access it.</li>
