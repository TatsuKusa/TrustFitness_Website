// JavaScript Document

$(function() {
        var map = $('iframe');
        map.css('pointer-events', 'none');
        $('#map').click(function() {
            map.css('pointer-events', 'auto');
        });
        map.mouseout(function() {
            map.css('pointer-events', 'none');
        })
    })