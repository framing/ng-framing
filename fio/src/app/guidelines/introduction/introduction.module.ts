import { NgModule } from '@angular/core';
import { Framing } from '@framing/ng-core';

import { DocsArticleFeature } from 'features/docs-article/docs-article.feature';

@NgModule(Framing((framing) => framing
  .frame(new DocsArticleFeature({
    article: {
      id: 'introduction',
      title: 'Introduction',
      subTitle: '',
      sections: [
        {
          id: 'whats-framing',
          title: 'What\'s Framing?',
          rows: [
            {
              cells: [
                {
                  content: '\
                    <p>Framing is a more efficient, easier, smarter way of developing applications using existing well-established patterns.\
                      It has helped teams on large applications cut down lines of code by 50%.\
                      It’s built on top of Angular with future plans to support other frameworks.\
                      It’s a framework on top of a framework, a super framework really.\
                      It’s a higher level of abstraction, a new evolution of development… welcome :) If Angular was the C language, Framing would be C++.\
                      Our team is excited about it and we hope we can convince you of the same\
                      (and if not [email Biznas CEO Ryan Campbell](mailto:ryan@biznas.io) and tell him why or [join the Framing slack team](http://framing.herokuapp.com/)).\
                    </p>\
                    <p>The easiest way to understand what Framing is,\
                       is to compare the “pre-framing” typical way applications are built using Angular with the “post-framing” new way of assembling applications.\
                    </p>\
                  ',
                },
              ],
            },
          ],
        },
        {
          id: 'pre-framing',
          title: 'Pre-Framing Development Scenario',
          rows: [
            {
              cells: [
                {
                  content: '\
                    <p>You’ll use the CLI or starter project to setup the initial boilerplate code and configuration.\
                      You’ll possible copy code from a previous similar project to get a head start.\
                      If you’ve developed many applications in the past you’ll probably copy a self made library of useful methods you’ve evolved over the years.</p>\
                    <p>Your team will next build the application out screen by screen.\
                      A screen is made up of components, business logic and API integrations.\
                      Ideally you’ll find open source components for the required screen elements.\
                      Generally you’ll use a component library/framework like Material, Ionic, or Bootstrap.\
                      You’ll search for one-off components for required elements outside of what the chosen component library offers.\
                      Many times you’ll even need to develop custom components if there is no open source or commercial solution available.</p>\
                    <p>Your team will continue to develop screens, made up of components, business logic and API integrations.\
                      If a screen is similar to an another screen that is already built you’ll most likely duplicate that code and make the necessary changes.\
                      One by one your team will build out all of the screens in the application.</p>\
                    <p>The majority of re-usable code in this scenario are components and directives, the elements that make up a screen.\
                      If the app was a cake, the components would be the icing on the cake,\
                      the business logic and API integrations would be the top layer of the cake and the Framework would be the bottom layer.\
                      So far that top layer of the cake hasn’t been re-usable, but next we’ll describe how Framing changes that.</p>\
                  ',
                },
              ],
            },
          ],
        },
        {
          id: 'post-framing',
          title: 'Post-Framing Development Scenario',
          rows: [
            {
              cells: [
                {
                  content: '\
                    <p>In the above scenario you developed an entire application, or should we say an entire cake.\
                       With Framing, you independently develop each feature, or should we say each piece of the cake.\
                       These features, which contain components, screens, business logic and API integrations, are re-usable.\
                       No longer is re-usability at the element level, Framing moves re-usability to the feature level!\
                    </p>\
                    <p>FYI: If you don’t like cake, this analogy works with pizza as well!\
                       Although I can’t decide whether the components are the toppings or the cheese.\
                    </p>\
                    <p>Lets repeat the above scenario using Framing.\
                       You’ll use the CLI or a starter project to setup the initial boiler plate code and config.\
                       You’ll pull in any open source, commercial or internal features this new application has in common with other applications.\
                       These features have evolved over years, are proven, and used daily in production. Think login, logout, responsive layout, CRUD data management, payment processing.\
                       If you’re lucky your application is 50% built before you write any custom code.\
                    </p>\
                    <p>Your team then continues to assemble the application feature by feature.\
                       Pulling in features that already exist.</p>\
                    <p>For new features, your team will follow Framing best practices so that the feature can be re-used in the future.\
                       You’ll also develop custom components if you can’t find an existing component that matches your requirements.\
                    </p>\
                    <p>Slice by slice, your application is completed.</p>\
                  ',
                },
              ],
            },
          ],
        },
        {
          id: 'why-framing',
          title: 'Why Framing',
          rows: [
            {
              cells: [
                {
                  content: '\
                    <p>If you compare the above scenarios and you add in a few not so obvious benefits, the list looks like this:</p>\
                    <ul>\
                      <li>Framing raises the level of abstraction from individual elements to full features</li>\
                      <li>Features can depend on other features, increasing the amount of re-use/abstraction even further</li>\
                      <li>The level of abstraction now matches the non-technical requirements.\
                          (ex. Your boss says the app needs chat, just go find a great open source or commercial chat feature)</li>\
                      <li>A clear set of standards on how to architect your application</li>\
                      <li>A clear set of roles for your team. Juniors assemble app screens out of features that the seniors developed</li>\
                      <li>Much less code. If a new screen is similar to another screen, move the similar code in to a feature so both screens share that functionality</li>\
                      <li>Much easier to maintain. New functionality added to a feature is instantly available to any screens that use it.</li>\
                      <li>Much less to test. Fully unit test a feature instead of duplicating unit tests for screens with similar functionality.</li>\
                      <li>Stop writing the same functionality over and over again. Write once and evolve over time. Focus your energy and new more innovation features.</li>\
                    </ul>\
                    <p>Lastly, if you choose Framing you are helping it become a standard.\
                       The more developers, the more open source and commercial features will be released and evolved.\
                       Your internal team over time will build up an internal company framework that new developers who join your team can quickly become familiar with.\
                       Who knows, in the future you might be able to hire developers who are already seasoned Framing developer.\
                    </p>\
                  ',
                },
              ],
            },
          ],
        },
        {
          id: 'what-next',
          title: 'What Next?',
          rows: [
            {
              cells: [
                {
                  content: '\
                    <p>If you still have questions, please [email Biznas CEO Ryan Campbell](mailto:ryan@biznas.io) or [join the Framing slack team](http://framing.herokuapp.com/).</p>\
                    <p>Try out the [Tasknas tutorial](http://framing.io/tasknas).</p>\
                    <p>Review the [@framing/ng-framing git repo](http://github.com/framing/ng-framing).</p>\
                  ',
                },
              ],
            },
          ],
        },
      ],
    },

  })),
))
export class IntroductionModule {}
