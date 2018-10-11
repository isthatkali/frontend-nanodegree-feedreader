/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has url', function() {
            for (feed of allFeeds) {
                expect(feed.url.lenth).not.toBe(0);
            }
        });

        it('has name', function() {
            for (feed of allFeeds) {
                expect(feed.name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {
        /* TODO: Write a test that ensures the menu element is
        * hidden by default. You'll have to analyze the HTML and
        * the CSS to determine how we're performing the
        * hiding/showing of the menu element.
        */
       it('is hidden by default', function() {
           expect(($('body')).hasClass('menu-hidden')).toBe(true);
       });
       
       /* TODO: Write a test that ensures the menu changes
       * visibility when the menu icon is clicked. This test
       * should have two expectations: does the menu display when
       * clicked and does it hide when clicked again.
       */
      it('changes visibility when menu icon clicked', function() {
            $('.menu-icon-link').click();
            expect(($('body')).hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect(($('body')).hasClass('menu-hidden')).toBe(true);
      });
    });
      
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {        
        /* TODO: Write a test that ensures when the loadFeed
        * function is called and completes its work, there is at least
        * a single .entry element within the .feed container.
        * Remember, loadFeed() is asynchronous so this test will require
        * the use of Jasmine's beforeEach and asynchronous done() function.
        */
       beforeEach(function(done) {
            loadFeed(0, done); // Got stuck here and referenced https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/ for 'loadFeed(0, done)'
       });

       it('has at least one entry after feed is loaded', function() {
            expect(($('.feed').length)).toBeGreaterThan(0);
       });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */

        // Got stuck here and referenced Lloan Alas Feed Reader Testing Webinar 
        let feed0, feed1; // Variables to store content so we can compare feeds later

        beforeEach(function(done) {
            // load the first feed --> feed0
            loadFeed(0, function() {
                feed0 = $('.feed').html(); // get content w/ .html and store into feed0
                done();
            });

            // load the second feed --> feed1
            loadFeed(1, function() {
                feed1 = $('.feed').html();
                done();
            });
        });
       
        it('ensures that content changes after new feed is loaded', function() {
            expect(feed0 === feed1).toBe(false);
       });
    });
}());
