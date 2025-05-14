How to write the good unit test. Learning how to write a good unit test.

Every good automated test should have the following properties:

- It should be easy to understand the intent of the test author.
- It should be easy to read and write.
- It should be automated.
- It should be consistent in its results(it should always return the same result if you don't change anything between runs)
- It should be useful and provide actionable results
- Anyone should be able to run it with the push of a button
- When it fails, it should be easy to detect what was expected and determine how to pinpoint the problem.

we should past the same data to the test

To start off, ask yourself the following questions about the tests you've written and executed up to now:

- Can I run and get results from a test I wrote  two weeks or moths or years ago>
- Can any member of my team run and get results from tests I wrote two months ago?
- Can I run all the tests I've written in no more than a few minutes?
- Can I run all the tests I've written at the push of a button?
- Can I write a basic test in no more than a few minutes?
- Do my tests pass when there are bugs in another team's code?
- Do my tests show the same results when run on different machines or environments?
- Do my tests stop working if there's no database, network, or deployment?
- If I delete, move, or change one test, do other tests remain unaffected?

If one test uses the current `new Date()` in the test code, then every time the test executes, it's essentially a different test because it uses a different time.

​     Unit test should be *fast*, integration tests are usually much slower.

​    An orderly progression of testing in which software and/or hardware elements are combined and tested until the entire system has been integrated.

To summarize:

- An integration test uses real dependencies;
- Unit tests isolate the unit of work from its dependencies so that they're easily consitent in their results and can easily control and simulate any aspect of the unit's behavior.

​    If you counld not get the same results from a test you wrote some times ago, how could you know whether you broke a feature that you created earlier?

​    You need to know you do not break somone else's code when you change something, so you should need other's tests.

​    If you can not run your tests quickly, you will run them less often.

​    Good tests should run *quickly*

​    Your test should be automated. 

​    One of thhe strengths of unit tests is that they tend to test every little thing that might break, not only the big stuff. People are often surprised at how many bugs they can find in code they thought was simple and bug free.

​    When you concentrate only on the big tests, the overall confidence in your code is still very much lacking.Good tests against the system should be easy and quick to write, once you've figured out the patterns you want to use to test your specific set of objects, functions, and dependencies.

​    Do my tests run the same in different machines, which means that Is our test code is isolated from various dependencies. Shared state can create a dependency between tests.

   ` Even experienced unit testers can find that it may take 30 minutes or more to figure out how to write the very first unit test against a domain model they've never unit tested before.`The second and subsequent tests on that domain model should be very easy to accomplish once you have figured out the entry and exit points of the unit of work.

- **A unit test is an automated piece of code that invokes the unit of work through an entry point and then checks one of its exit points. A unit test is almost always written using a unit testing framework. It can be written easily and runs quickly. It's trustworthy, readable, and maintainable. It is consistent as long as the production code we control has not changed.**

Test-driven development: Is it good?

TDD:

- Think
- Write a new test to prove the next small piece of functionality is missing or wrong
- run all tests
- New test should compile and fail
- Simplest possible producition code fix
- run all tests
- all tests should be pasted
- refactoring

Add has its price (Time to learn, time to implement, and more)

​    Writing a good test is a separate skill from TDD

 TDD is the different way

​    Technically, one of the biggest benefits of TDD that nobody tells you about is that by seeing a test fail, and then seeing it pass without changing the test, you're basically testing the test itself. If you expect it to fail and it passes, you might have a bug in your test or you're testing the wrong thing. If they trust the tests, they don't feel a need to debug it "just in case"

​    To be successful in test-driven development, you need three different skill sets:

- Knowing how to write good tests
- writing them test-first
- designing the tests and the production code well

