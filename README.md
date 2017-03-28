Framing for Angular
===================

[framing.io](https://framing.io)

Framing is a new concept that increases the level of re-usability in Open Source for Enterprise Web Applications using Angular.

It allows you, as the developer, to create re-usable modules, or slices of modules.

Instead of the releasing individual reusable components, you can now develop and release entire screens or features that are re-usable.

For example, if you add @framing/ng-security to your application you'll have a secure application with login and logout. All you need to do is configure the SecurityFramer with what API call it should use to authenticate.

Framers are easy to implement. In fact, there is very little difference between a standard Angular NgModule and a Framer.

At Biznas we've made it best pratice to develop everything in Framers.

If done correctly, you'll never need to write the same code twice. Every Framer you create decreases the time needed to develop future applications that share similar functionality.

This concept was born out of the pain of dealing with large amounts of duplicate code when developing Enterprise Applications.

The less code you write, the less code you need to test.

Your Framers can continue to evolve and become more proven, stable, and secure as you utilize them for future development.

Instead of code being written and used only once, you can now re-use and continue to develop without restarting with each new project.
