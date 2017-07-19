# grunt-front-end-template
grunt compiled bootstrap sass and js with hbs template.

<h2>About this template</h2>
<p>This proposed template is to help the FED's to implement the concepts of layouts, partials, pages and handlebars(hbs) templates.</p>

### Dependencies <br>
you can download or skip the following if you already have.
- [node.js](http://nodejs.org/) <br>
- [grunt.js](http://gruntjs.com/) <br>
- [bower](https://bower.io/) <br>
- [ruby](http://rubyinstaller.org/) <br>
- [compass](http://compass-style.org/install/) <br>

### How to use?<br>
go to the root directory where the template is cloned.
<ol>
<li>right click and 'git bash here'</li>
<li>type npm install (node_modules created)</li>
<li>type bower install</li>
</ol>

### Dependencies:<br>
check your gruntfile.js and bower.json

### Directory Structure:<br>
<pre><code>
└── src
    └── data
    └── public
         └── components
         └── favicons
         └── images
         └── scripts 
         └── styles 
         └── videos 
    └── views
         └── _layouts
         └── _partials
         └── _pages (create this folder for your additional scss file)
</code></pre>

<strong>basic usage:</strong><br>
<strong>----views</strong><br>
<strong>'layouts'</strong> folder you will find the default.hbs for header and footer and also the otherTemplate.hbs in case that if you need the different header and footer in the other pages.<br><br>

<strong>'partials'</strong> folder you will find the globalfooter and globalheader and again in case that if you need the different header and footer in the other pages you can create another header and footer in this folder.<br>
     <strong>how it works</strong><br>
     default.hbs:<br>
     -uses global_footer.hbs and global_header.hbs<br>
     {{> global_header }}<br>
     {{> global_footer}}<br>
     otherTemplate.hbs can use other global header and footer that you created.<br>
     {{> your_other_global_header }}<br>
     {{> your_other_global_footer}}<br><br>
     
<strong>'pages'</strong> folder consists all of the pages/body contents that you need in your project, you can add, edit and delete.<br>
{{>body}}<br><br>
<strong>----data</strong><br>
you can add data or array contents(optional).<br><br>

<strong>----public</strong><br>
all the components that you needed on this project. you can add additional scss inside folder 'pages' and add it on '_bootstrap.scss' below.<br><br>

### grunt tasks:<br>
cmd or right click in your directory and select 'git bash here' then type <strong>npm run dev</strong> to compile and run your project.
run <strong>npm run build</strong> to build your project, and the 'dist' will be your upload folder.

| tasks  | description |
| ------------- | ------------- |
| npm install  | this command installs a package, and any packages that it depends on. |
| bower install  | this command installs a package, and any packages that it depends on.  |
| npm run dev  | for compiling and running the project.  |
| npm run build  | (dist) this is your upload folder.  |
| bower install sampleFile(bootstrap) --save | to install the bootstrap into the dependencies using bower.  |
| npm install sampleFile(bootstrap) --save-dev | to install the bootstrap into the dependencies using npm.  |

