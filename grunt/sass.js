"use strict";

module.exports = {
    main: {
        options: {
            sourcemap: 'none'
        },
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['**/*.scss'],
            dest: 'dist/',
            ext: '.css'
        }]
    }
};
