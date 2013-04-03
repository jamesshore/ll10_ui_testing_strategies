Lessons Learned: DOM Events, GUI Test Strategies, and Mouse Testing
=============

This repository contains the sample code for the titular [Lessons Learned episode](http://www.letscodejavascript.com/v3/episodes/lessons_learned/10) of James Shore's [Let's Code: Test-Driven JavaScript](http://www.letscodejavascript.com) screencast. Let's Code: Test-Driven JavaScript is a screencast series focused on rigorous, professional JavaScript development.

The source code in this repository demonstrates three different strategies for testing UI code. The three strategies demonstrated are:

1. Use a robot to interact with the UI ([src/_robot_test.js])
2. Simulate the user's actions ([src/_simulate_test.js])
3. Create a presentation layer and test that instead ([src/_presentation_test.js] and [src/presentation.js])

The code under test ([src/validate.js]) validates whether a text field is empty.

For details about the different strategies, read the test files or watch [the screencast](http://www.letscodejavascript.com/v3/episodes/lessons_learned/10).

Building and Testing
--------------------

Before building for the first time:

1. Install [Node.js](http://nodejs.org/download/).
2. Download and unzip [the source code](https://github.com/jamesshore/ll10_gui_test_strategies/archive/master.zip) into a convenient directory.
3. All commands must run from the root of the source tree: `cd <directory>`.
4. To cause the build to fail unless certain browsers are tested, edit `REQUIRED_BROWSERS` at the top of `Jakefile.js`.

To build (and test):

1. Run `./jake.sh testacular` (Unix/Mac) or `jake testacular` (Windows) to start the Testacular server.
2. Start the browsers you want to test against and point each one at `http://localhost:8080`.
3. Run `./jake.sh` (Unix/Mac) or `jake` (Windows) every time you want to build and test.

Manual Testing
--------------

To see the code run, open [src/example.html] in a browser.