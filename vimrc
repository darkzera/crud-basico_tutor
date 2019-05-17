"========= ========= ========= ========= =========
call plug#begin()
"=========  Langs =========  
Plug 'leafgarland/typescript-vim'
Plug 'Quramy/vim-js-pretty-template'
Plug 'Quramy/tsuquyomi'
Plug 'Valloric/YouCompleteMe'
Plug 'vim-syntastic/syntastic'
Plug 'hail2u/vim-css3-syntax'

"========= Misc ========= "
Plug 'scrooloose/nerdtree'

Plug 'tpope/vim-surround'
Plug 'majutsushi/tagbar'
Plug 'ervandew/supertab'

"========= Interface ========= "
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'cocopon/iceberg.vim'
Plug 'lifepillar/vim-solarized8'
Plug 'sainnhe/vim-color-forest-night'
Plug 'victorze/foo'
Plug 'nightsense/rusticated'
Plug 'nightsense/cosmic_latte'
Plug 'ajmwagar/vim-deus'
Plug 'icymind/NeoSolarized'
"========= ========= ========= ========= =========

call plug#end()
let g:typescript_compiler_binary = 'tsc'
let g:typescript_compiler_options = ''
autocmd QuickFixCmdPost [^l]* nested cwindow
autocmd QuickFixCmdPost    l* nested lwindow

set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*
let g:syntastic_check_on_open = 0
let g:syntastic_check_on_wq = 0
let g:tsuquyomi_disable_quickfix = 1
let g:syntastic_typescript_checkers = ['tsuquyomi'] 

"""MEUS ATALe6eeffe6eeffe6eeffHOS
set bs=2
set number
set relativenumber
set mouse=a
set cursorline
nnoremap <F3> :NERDTreeToggle ~/projeto_estudoLEDS/<CR>
nnoremap <C-t> :tabnew <CR>
nnoremap <C-r> :tabnext<CR>
set autochdir
map <Tab> <C-W>W:cd %:p:h<CR>:<CR>
nmap qq :q<cr>

"
"hi CursorColumn cterm=NONE ctermbg=darkgray ctermfg=white guibg=darkred guifg=white
hi CursorLine   cterm=NONE ctermbg=darkgray ctermfg=white guibg=darkred guifg=white
""""""""""""""""""""""""""""""""""""""""""""""""""""""
" testing complete from #vim-scripts 
" autocompleting pairs characteres '([{'
set expandtab
set shiftwidth=3
set smarttab
set autoindent
set smartindent

inoremap ( ()<Esc>i
inoremap [ []<Esc>i
inoremap { {<CR>}<Esc>O
autocmd Syntax html,vim inoremap < <lt>><Esc>i| inoremap > <c-r>=ClosePair('>')<CR>
inoremap ) <c-r>=ClosePair(')')<CR>
inoremap ] <c-r>=ClosePair(']')<CR>
inoremap } <c-r>=CloseBracket()<CR>
inoremap " <c-r>=QuoteDelim('"')<CR>
inoremap ' <c-r>=QuoteDelim("'")<CR>

function ClosePair(char)
 if getline('.')[col('.') - 1] == a:char
 return "\<Right>"
 else
 return a:char
 endif
endf

function CloseBracket()
 if match(getline(line('.') + 1), '\s*}') < 0
 return "\<CR>}"
 else
 return "\<Esc>j0f}a"
 endif
endf

function QuoteDelim(char)
 let line = getline('.')
 let col = col('.')
 if line[col - 2] == "\\"
 "Inserting a quoted quotation mark into the string
 return a:char
 elseif line[col - 1] == a:char
 "Escaping out of the string
 return "\<Right>"
 else
 "Starting a string
 return a:char.a:char."\<Esc>i"
 endif
endf

"" end of
"last modif: 09/05/2019"
""""""""""""""""""""""""""""""""""""""""""""""""""""""
"color fix for solarized theme ----- tentativa"
set t_Co=256
set background=dark
let g:airline_theme='badcat'
if !has('gui_running')
  let g:solarized_termcolors=&t_Co
  let g:solarized_termtrans=1
endif
"colorscheme solarized8_high
colorscheme iceberg 
""""""""""""""""""""""""""""""""""""""""""""""""""""""
"fix for node not found <-  GVIM <>
!export PATH=~/.npm-global/bin:$PATH
set guioptions=Ace
set termguicolors

