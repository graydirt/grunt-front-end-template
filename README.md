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
         └── _pages
</code></pre>
<strong>basic usage:</strong><br>
<strong>----views</strong><br>
<strong>'layouts'</strong> folder you will find the default.hbs for header and footer and also the otherTemplate.hbs in the case that if you need the different header and footer in the other pages.<br><br>
<strong>'partials'</strong> folder you will find the globalfooter and globalheader and again in the case that if you need the different header and footer in the other pages you can create another header and footer in this folder.<br>
     <strong>how it works</strong><br>
     default.hbs:<br>
     -uses global_footer.hbs and global_header.hbs<br>
     {{> global_header }}<br>
     {{> global_footer}}<br>
     otherTemplate.hbs can use other global header and footer that you created.<br>
     {{> your_other_global_header }}<br>
     {{> your_other_global_footer}}<br><br>
<strong>'pages'</strong> folder consists all of the pages/body contents that you need in your project, you can add, edit and delete.<br>
{{>body}}







| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

to be continued...
