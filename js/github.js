const app = document.getElementById('repos');

var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/users/JKoenen2/repos', true);
request.onload = function(){
  var data = JSON.parse(this.response);
  getRepos(data);
};

function init() {
  request.send();
}

function getRepos(data) {
  // Begin accessing JSON data here
  if (request.status >= 200 && request.status < 400) {
    data.sort(function(a, b){return b.stargazers_count - a.stargazers_count}); 
    for (var i = 0; i < data.length && i < 6; i++) {
      fillRepo(data[i]);
    }
  } else {
    console.error("Error getting GitHub repositories");
    h2 = document.createElement('h2');
    h2.textContent = 'Error getting GitHub repositories';
    app.appendChild(h2);
  }
}

function fillRepo(repo) {
  const star = '<svg viewBox="0 0 16 16" version="1.1" width="16" height="16" class="gitsvg" uk-svg><path fill-rule="evenodd" d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"></path></svg>';
  const fork = '<svg class="gitsvg" viewBox="0 0 16 16" version="1.1" width="16" height="16" uk-svg><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg>';
  const lang_colors = {"1CEnterprise":"#814CCC","4D":null,"ABAP":"#E8274B","ActionScript":"#882B0F","Ada":"#02f88c","Agda":"#315665","AGSScript":"#B9D9FF","AL":"#3AA2B5","Alloy":"#64C800","AlpineAbuild":null,"AMPL":"#E6EFBB","AngelScript":"#C7D7DC","ANTLR":"#9DC3FF","Apex":"#1797c0","APIBlueprint":"#2ACCA8","APL":"#5A8164","ApolloGuidanceComputer":"#0B3D91","AppleScript":"#101F1F","Arc":"#aa2afe","ASL":null,"ASP.NET":"#9400ff","AspectJ":"#a957b0","Assembly":"#6E4C13","Asymptote":"#ff0000","ATS":"#1ac620","Augeas":null,"AutoHotkey":"#6594b9","AutoIt":"#1C3552","Awk":null,"Ballerina":"#FF5000","Batchfile":"#C1F12E","Befunge":null,"Bison":"#6A463F","BitBake":null,"Blade":"#f7523f","BlitzBasic":null,"BlitzMax":"#cd6400","Bluespec":null,"Boo":"#d4bec1","Brainfuck":"#2F2530","Brightscript":null,"C":"#555555","C#":"#178600","C++":"#f34b7d","C2hsHaskell":null,"Cap'nProto":null,"CartoCSS":null,"Ceylon":"#dfa535","Chapel":"#8dc63f","Charity":null,"ChucK":null,"Cirru":"#ccccff","Clarion":"#db901e","ClassicASP":"#6a40fd","Clean":"#3F85AF","Click":"#E4E6F3","CLIPS":null,"Clojure":"#db5855","CMake":null,"COBOL":null,"CodeQL":null,"CoffeeScript":"#244776","ColdFusion":"#ed2cd6","ColdFusionCFC":"#ed2cd6","CommonLisp":"#3fb68b","CommonWorkflowLanguage":"#B5314C","ComponentPascal":"#B0CE4E","Cool":null,"Coq":null,"Crystal":"#000100","CSON":"#244776","Csound":null,"CsoundDocument":null,"CsoundScore":null,"CSS":"#563d7c","Cuda":"#3A4E3A","CWeb":null,"Cycript":null,"Cython":null,"D":"#ba595e","Dafny":"#FFEC25","Dart":"#00B4AB","DataWeave":"#003a52","Dhall":"#dfafff","DIGITALCommandLanguage":null,"DM":"#447265","Dockerfile":"#384d54","Dogescript":"#cca760","DTrace":null,"Dylan":"#6c616e","E":"#ccce35","eC":"#913960","ECL":"#8a1267","ECLiPSe":null,"Eiffel":"#4d6977","EJS":"#a91e50","Elixir":"#6e4a7e","Elm":"#60B5CC","EmacsLisp":"#c065db","EmberScript":"#FFF4F3","EQ":"#a78649","Erlang":"#B83998","F#":"#b845fc","F*":"#572e30","Factor":"#636746","Fancy":"#7b9db4","Fantom":"#14253c","Faust":"#c37240","FilebenchWML":null,"Filterscript":null,"fish":null,"FLUX":"#88ccff","Forth":"#341708","Fortran":"#4d41b1","FortranFreeForm":null,"FreeMarker":"#0050b2","Frege":"#00cafe","Futhark":"#5f021f","G-code":"#D08CF2","GameMakerLanguage":"#71b417","GAML":"#FFC766","GAMS":null,"GAP":null,"GCCMachineDescription":null,"GDB":null,"GDScript":"#355570","Genie":"#fb855d","Genshi":null,"GentooEbuild":null,"GentooEclass":null,"Gherkin":"#5B2063","GLSL":null,"Glyph":"#c1ac7f","Gnuplot":"#f0a9f0","Go":"#00ADD8","Golo":"#88562A","Gosu":"#82937f","Grace":null,"GrammaticalFramework":"#ff0000","GraphQL":"#e10098","Groovy":"#e69f56","GroovyServerPages":null,"Hack":"#878787","Haml":"#ece2a9","Handlebars":"#f7931e","Harbour":"#0e60e3","Haskell":"#5e5086","Haxe":"#df7900","HCL":null,"HiveQL":"#dce200","HLSL":null,"HolyC":"#ffefaf","HTML":"#e34c26","Hy":"#7790B2","HyPhy":null,"IDL":"#a3522f","Idris":"#b30000","IGORPro":"#0000cc","Inform7":null,"InnoSetup":null,"Io":"#a9188d","Ioke":"#078193","Isabelle":"#FEFE00","IsabelleROOT":null,"J":"#9EEDFF","Jasmin":null,"Java":"#b07219","JavaServerPages":null,"JavaScript":"#f1e05a","JavaScript+ERB":null,"JFlex":"#DBCA00","Jison":null,"JisonLex":null,"Jolie":"#843179","JSONiq":"#40d47e","Jsonnet":"#0064bd","JSX":null,"Julia":"#a270ba","JupyterNotebook":"#DA5B0B","KaitaiStruct":"#773b37","Kotlin":"#F18E33","KRL":"#28430A","LabVIEW":null,"Lasso":"#999999","Latte":"#f2a542","Lean":null,"Less":"#1d365d","Lex":"#DBCA00","LFE":"#4C3023","LilyPond":null,"Limbo":null,"LiterateAgda":null,"LiterateCoffeeScript":null,"LiterateHaskell":null,"LiveScript":"#499886","LLVM":"#185619","Logos":null,"Logtalk":null,"LOLCODE":"#cc9900","LookML":"#652B81","LoomScript":null,"LSL":"#3d9970","Lua":"#000080","M":null,"M4":null,"M4Sugar":null,"Macaulay2":"#d8ffff","Makefile":"#427819","Mako":null,"Markdown":"#083fa1","Marko":"#42bff2","Mask":"#f97732","Mathematica":null,"MATLAB":"#e16737","Max":"#c4a79c","MAXScript":"#00a6a6","mcfunction":"#E22837","Mercury":"#ff2b2b","Meson":"#007800","Metal":"#8f14e9","MiniD":null,"Mirah":"#c7a938","mIRCScript":"#3d57c3","MLIR":"#5EC8DB","Modelica":null,"Modula-2":null,"Modula-3":"#223388","ModuleManagementSystem":null,"Monkey":null,"Moocode":null,"MoonScript":null,"Motorola68KAssembly":null,"MQL4":"#62A8D6","MQL5":"#4A76B8","MTML":"#b7e1f4","MUF":null,"mupad":null,"Myghty":null,"NASL":null,"NCL":"#28431f","Nearley":"#990000","Nemerle":"#3d3c6e","nesC":"#94B0C7","NetLinx":"#0aa0ff","NetLinx+ERB":"#747faa","NetLogo":"#ff6375","NewLisp":"#87AED7","Nextflow":"#3ac486","Nim":"#ffc200","Nit":"#009917","Nix":"#7e7eff","NSIS":null,"Nu":"#c9df40","NumPy":"#9C8AF9","Objective-C":"#438eff","Objective-C++":"#6866fb","Objective-J":"#ff0c5a","ObjectScript":"#424893","OCaml":"#3be133","Odin":"#60AFFE","Omgrofl":"#cabbff","ooc":"#b0b77e","Opa":null,"Opal":"#f7ede0","OpenPolicyAgent":null,"OpenCL":null,"OpenEdgeABL":null,"OpenQASM":"#AA70FF","OpenRCrunscript":null,"OpenSCAD":null,"Ox":null,"Oxygene":"#cdd0e3","Oz":"#fab738","P4":"#7055b5","Pan":"#cc0000","Papyrus":"#6600cc","Parrot":"#f3ca0a","ParrotAssembly":null,"ParrotInternalRepresentation":null,"Pascal":"#E3F171","Pawn":"#dbb284","Pep8":"#C76F5B","Perl":"#0298c3","PHP":"#4F5D95","PicoLisp":null,"PigLatin":"#fcd7de","Pike":"#005390","PLpgSQL":null,"PLSQL":"#dad8d8","PogoScript":"#d80074","Pony":null,"PostScript":"#da291c","POV-RaySDL":null,"PowerBuilder":"#8f0f8d","PowerShell":"#012456","Prisma":"#0c344b","Processing":"#0096D8","Prolog":"#74283c","PropellerSpin":"#7fa2a7","Pug":"#a86454","Puppet":"#302B6D","PureBasic":"#5a6986","PureScript":"#1D222D","Python":"#3572A5","Pythonconsole":null,"q":"#0040cd","Q#":"#fed659","QMake":null,"QML":"#44a51c","QtScript":"#00b841","Quake":"#882233","R":"#198CE7","Racket":"#3c5caa","Ragel":"#9d5200","Raku":"#0000fb","RAML":"#77d9fb","Rascal":"#fffaa0","REALbasic":null,"Reason":"#ff5847","Rebol":"#358a5b","Red":"#f50000","Redcode":null,"Ren'Py":"#ff7f7f","RenderScript":null,"REXX":null,"Ring":"#2D54CB","Riot":"#A71E49","RobotFramework":null,"Roff":"#ecdebe","Rouge":"#cc0088","RPC":null,"Ruby":"#701516","RUNOFF":"#665a4e","Rust":"#dea584","Sage":null,"SaltStack":"#646464","SAS":"#B34936","Sass":"#a53b70","Scala":"#c22d40","Scheme":"#1e4aec","Scilab":null,"SCSS":"#c6538c","sed":"#64b970","Self":"#0579aa","ShaderLab":null,"Shell":"#89e051","ShellSession":null,"Shen":"#120F14","Sieve":null,"Slash":"#007eff","Slice":"#003fa2","Slim":"#2b2b2b","Smali":null,"Smalltalk":"#596706","Smarty":null,"SmPL":"#c94949","SMT":null,"Solidity":"#AA6746","SourcePawn":"#f69e1d","SQF":"#3F3F3F","SQLPL":null,"Squirrel":"#800000","SRecodeTemplate":"#348a34","Stan":"#b2011d","StandardML":"#dc566d","Starlark":"#76d275","Stata":null,"Stylus":"#ff6347","SuperCollider":"#46390b","Svelte":"#ff3e00","SVG":"#ff9900","Swift":"#ffac45","SWIG":null,"SystemVerilog":"#DAE1C2","Tcl":"#e4cc98","Tcsh":null,"Terra":"#00004c","TeX":"#3D6117","Thrift":null,"TIProgram":"#A0AA87","TLA":null,"TSQL":null,"TSX":null,"Turing":"#cf142b","Twig":"#c1d026","TXL":null,"TypeScript":"#2b7489","UnifiedParallelC":"#4e3617","UnixAssembly":null,"Uno":"#9933cc","UnrealScript":"#a54c4d","UrWeb":null,"V":"#4f87c4","Vala":"#fbe5cd","VBA":"#867db1","VBScript":"#15dcdc","VCL":"#148AA8","Verilog":"#b2b7f8","VHDL":"#adb2cb","Vimscript":"#199f4b","VisualBasic.NET":"#945db7","Volt":"#1F1F1F","Vue":"#2c3e50","wdl":"#42f1f4","WebAssembly":"#04133b","WebIDL":null,"wisp":"#7582D1","Wollok":"#a23738","X10":"#4B6BEF","xBase":"#403a40","XC":"#99DA07","Xojo":null,"XProc":null,"XQuery":"#5232e7","XS":null,"XSLT":"#EB8CEB","Xtend":null,"Yacc":"#4B6C4B","YAML":"#cb171e","YARA":"#220000","YASnippet":"#32AB90","ZAP":"#0d665e","Zeek":null,"ZenScript":"#00BCD1","Zephir":"#118f9e","Zig":"#ec915c","ZIL":"#dc75e5","Zimpl":null};

  div = document.createElement('div');

  card = document.createElement('a');
  card.setAttribute('class', 'uk-link-toggle uk-card uk-card-default uk-card-hover uk-card-body animategroup4');
  card.setAttribute('href', repo.html_url);

  h3 = document.createElement('h3');
  h3.setAttribute('class', 'uk-card-title');
  h3.innerHTML = '<span class="uk-link-heading">' + repo.name + '</span>';

  p = document.createElement('p');
  p.setAttribute('class', 'gitbottom');
  p.textContent = repo.description;

  p2 = document.createElement('p');
  p2.setAttribute('class', 'gitbottom2');
  p2.innerHTML = '<span class="gitlan" style="background-color: ' + lang_colors[repo.language] + '"></span> ' + repo.language;
  if(repo.stargazers_count > 0) p2.innerHTML += '<span class="uk-margin-small-left">' + star + ' ' + repo.stargazers_count + '</span>';
  if(repo.forks > 0) p2.innerHTML += '<span class="uk-margin-small-left">' + fork + ' ' + repo.forks + '</span>';

  app.appendChild(div);
  div.appendChild(card);
  card.appendChild(h3);
  card.appendChild(p);
  card.appendChild(p2);
}



document.addEventListener("DOMContentLoaded", function(event) {
  init();
})
