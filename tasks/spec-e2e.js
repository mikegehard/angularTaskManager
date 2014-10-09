/*
 Task: spec-e2e
 Description: run protractor (in a ci-like mode)
 Dependencies: grunt
 Contributor: @searls
 */
module.exports = function(grunt) {
    var path, spawn;
    path = require("path");
    spawn = require("child_process").spawn;
    return grunt.registerTask("spec-e2e", "run specs in ci mode", function(target) {
        var done;
        require('coffee-script');
        process.argv = ["doesnt", "matter", "" + (process.cwd()) + "/config/spec-e2e.js"];
        done = this.async();
        return require("" + (process.cwd()) + "/node_modules/protractor/lib/cli");
    });
};