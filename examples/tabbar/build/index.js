"use strict";
/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, S. Chris Colbert
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
var example;
(function (example) {
    var Tab = phosphor.widgets.Tab;
    var TabBar = phosphor.widgets.TabBar;
    function main() {
        var tb = new TabBar({ tabOverlap: 1 });
        tb.addTab(new Tab('One'));
        tb.addTab(new Tab('Two'));
        tb.addTab(new Tab('Three'));
        tb.addTab(new Tab('Four'));
        tb.addTab(new Tab('Five'));
        tb.addTab(new Tab('Six'));
        tb.addTab(new Tab('Seven'));
        tb.attach(document.getElementById('main'));
        tb.fit();
        window.onresize = function () { return tb.fit(); };
    }
    window.onload = main;
})(example || (example = {})); // module example
