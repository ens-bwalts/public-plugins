if (! this.sh_languages) {
  this.sh_languages = {};
}
sh_languages['sh'] = [
  [
    [
      /\b(?:import)\b/g,
      'sh_preproc',
      -1
    ],
    [
      /\b[+-]?(?:(?:0x[A-Fa-f0-9]+)|(?:(?:[\d]*\.)?[\d]+(?:[eE][+-]?[\d]+)?))u?(?:(?:int(?:8|16|32|64))|L)?\b/g,
      'sh_number',
      -1
    ],
    [
      /\\"|\\'/g,
      'sh_normal',
      -1
    ],
    [
      /"/g,
      'sh_string',
      1
    ],
    [
      /'/g,
      'sh_string',
      2
    ],
    [
      /function[ \t]+(?:[A-Za-z]|_)[A-Za-z0-9_]*[ \t]*(?:\(\))?|(?:[A-Za-z]|_)[A-Za-z0-9_]*[ \t]*\(\)/g,
      'sh_function',
      -1
    ],
    [
      /[\-]+\b[A-Za-z0-9_]+\b/g,
      'sh_name',
      -1
    ],
    [
      /(?:[A-Za-z]*[-\/]+[A-Za-z]+)+/g,
      'sh_normal',
      -1
    ],
    [
      /\b(?:alias|bg|bind|break|builtin|caller|case|command|compgen|complete|continue|declare|dirs|disown|do|done|elif|else|enable|esac|eval|exec|exit|export|false|fc|fg|fi|for|getopts|hash|help|history|if|in|jobs|let|local|logout|popd|printf|pushd|read|readonly|return|select|set|shift|shopt|source|suspend|test|then|times|trap|true|type|typeset|umask|unalias|unset|until|wait|while)\b/g,
      'sh_keyword',
      -1
    ],
    [
       /\b(bgzip|brew|cat|cd|chmod|cp|cpan|cpanm|curl|docker|echo|git|grep|gunzip|gzip|head|install|ln|make|mkdir|mv|perl|rm|sh|sort|tabix|tar|unzip|vep|wget|zip)\b\s+/g,
      'sh_keyword',
      -1
    ],
    // VEP specific
    [
      /\.\/(vep|filter_vep)/g,
      'sh_keyword',
      -1
    ],
    [
      /\b[A-Z_]+\b:\s+/g,
      'sh_variable',
      -1
    ],
    [
      /(?:[A-Za-z]|_)[A-Za-z0-9_]*(?==)|\$\{(?:[^ \t']+)\}|\$\((?:[^ \t']+)\)|\$(?:[A-Za-z]|_)[A-Za-z0-9_]*|\$(?:[^ \t']{1})/g,
      'sh_variable',
      -1
    ],
    [
      /~|!|%|\^|\*|\(|\)|\+|=|\[|\]|\\|:|;|,|\.|\/|\?|&|<|>|\||%%|(?:##){2}(?!#)/g,
      'sh_symbol',
      -1
    ],
    [
      /#/g,
      'sh_comment',
      3
    ]
  ],
  [
    [
      /"/g,
      'sh_string',
      -2
    ],
    [
      /\\./g,
      'sh_specialchar',
      -1
    ]
  ],
  [
    [
      /'/g,
      'sh_string',
      -2
    ],
    [
      /\\./g,
      'sh_specialchar',
      -1
    ]
  ],
  [
    [
      /$/g,
      null,
      -2
    ]
  ]
];