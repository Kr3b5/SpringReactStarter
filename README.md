# Spring Boot and React starter app

> Starter webapp using Spring Boot on the backend and React on the frontend, with
Maven and Webpack as build tools, hot reloading on both sides and without xml configuration.

## Quickstart
To run the app you just need to:

    mvn spring-boot:run

To check everything is running you can:

    # Visit the homepage
    http://localhost:8080

## Start developing
The Java code is available at `src/main/java` as usual, and the frontend files are in
`src/main/frontend`.

### Running the backend
Run `StarterMain` class from your IDE.

### Running the frontend
Go to `src/main/frontend` and run `npm start`. (Run `npm install` before that if it's the first time)

Now we should work with `localhost:9090` (this is where we'll see our live changes reflected)
 instead of `localhost:8080`.

### Hot reloading
In the **backend** we make use of Spring DevTools to enable hot reloading,
so every time we make a change in our files an application restart will
be triggered automatically.

Keep in mind that Spring DevTools automatic restart only works if we run the
application by running the main method in our app, and not if for example we run
the app with maven with `mvn spring-boot:run`.

In the **frontend** we use Webpack Dev Server hot module replacement
through the npm script `start`. Once the script is running the Dev Server will be
watching for any changes on our frontend files.

This way we can be really productive since we don't have to worry about recompiling and deploying
our server or client side code every time we make changes.

## Tech stack and libraries
### Backend
- [Spring Boot](http://projects.spring.io/spring-boot/)
- [Spring MVC](http://docs.spring.io/autorepo/docs/spring/3.2.x/spring-framework-reference/html/mvc.html)
- [Spring Data](http://projects.spring.io/spring-data/)
- [Spring Security](http://projects.spring.io/spring-security/)
- [Spring Test](http://docs.spring.io/autorepo/docs/spring-framework/3.2.x/spring-framework-reference/html/testing.html)
- [JUnit](http://junit.org/)
- [Mockito](http://mockito.org/)
- [AssertJ](http://joel-costigliola.github.io/assertj/)
- [Lombok](https://projectlombok.org/)
- [Orika](http://orika-mapper.github.io/orika-docs/)
- [Maven](https://maven.apache.org/)

### Frontend
- [Node](https://nodejs.org/en/)
- [React](https://facebook.github.io/react/)
- [Redux](http://redux.js.org/)
- [Webpack](https://webpack.github.io/)
- [Axios](https://github.com/mzabriskie/axios)
- [Babel](https://babeljs.io/)
- [ES6](http://www.ecma-international.org/ecma-262/6.0/)
- [ESLint](http://eslint.org/)

---
