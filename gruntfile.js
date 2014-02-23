module.exports= function(grunt) {
  grunt.initConfig({
    paths: {
      sass: 'sass',
      sassdist: 'www/css'
      css: 'www/css',
      cssdist: 'www/dist/css',
      haml: 'haml',
      hamldist: 'www'
    },

    cssmin: {
      compress: {
        files: {
          '<%= paths.cssdist %>style.min.css': ['<%= paths.cssdist%>pre/*.css']
        }
      }
    },
  
    haml: {
      dist: {
        files: {
          '<%= paths.hamldist %>*.html': ['<%= paths.haml %>*.haml']
          }
        },
  
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
        '<%= paths.hamldist %>*.html': ['<%= paths.haml %>*.haml']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.registerTask('default', ['cssmin', 'haml']);
};
