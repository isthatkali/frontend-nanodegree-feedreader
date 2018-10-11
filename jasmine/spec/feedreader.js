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

        // Corrected
        it('has url', function() {
            for (feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.lenth).not.toBe(0);
            }
        });

        // Corrected
        it('has name', function() {
            for (feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    describe('The Menu', function() {
        const body = $('body');
        const menuIcon = $('.menu-icon-link');
    
        it('is hidden by default', function() {
           expect(body.hasClass('menu-hidden')).toBe(true);
        });
       
        it('changes visibility when menu icon clicked', function() {
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(body.hasClass('menu-hidden')).toBe(true);
      });
    });
      
    describe('Initial Entries', function() { 
        const feedEntries = $('.feed .entry');    
    
        beforeEach(function(done) {
            loadFeed(0, done); // Got stuck here and referenced https://matthewcranford.com/feed-reader-walkthrough-part-4-async-tests/ for 'loadFeed(0, done)'
            
            // Corrected to specifically select entries in feed
            it('has at least one entry after feed is loaded', function() {
                expect(feedEntries.length).toBeGreaterThan(0);
            });
        });

    })

    describe('New Feed Selection', function() {
        // Got stuck here and referenced Lloan Alas Feed Reader Testing Webinar 
        let feed0, feed1; // Variables to store content so we can compare feeds later

        // Corrected to make sure both feeds load
        beforeEach(function(done) {
            // load the first feed --> feed0
            loadFeed(0, function() {
                feed0 = $('.feed').html(); // get content w/ .html and store into feed0

                // load the second feed --> feed1
                loadFeed(1, function() {
                    feed1 = $('.feed').html();
                    done();
                });
            });
        });
       
        it('ensures that content changes after new feed is loaded', function() {
            expect(feed0 === feed1).toBe(false);
       });
    });
}());
