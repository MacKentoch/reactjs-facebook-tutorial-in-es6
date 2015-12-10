React JS tutorial from Facebook written in ES6 
=========

Official ReactJS tutorial written in ES6

- [Original facebook tutorial](https://facebook.github.io/react/docs/tutorial.html)

**feature :** 

- ReactJS (> 0.14)
- ES6
- jspm (*more information on using jspm with react : [in this nice article](http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes)*) 
- babel (*< babel6*)


All dependencies (jquery, marked, babel...) are managed by jspm.


##Intallation :
```bash
npm install && jspm install
```

###Note

Trick (DEMO PURPOSE ONLY - NOT PRODUCTION FRIENDLY) to make system js working with an express js server which serve only public directory.

*In production, use jspm bundle sfx and don't server packages in public directory.*
 
*Trick :  in public directory  you should have :*  
- your **script sources** (here src/**/*) 
- **jspm_packages** directory
- **config.js**
- in `package.json` :  configure jspm to point to public rather than root : 
```json
  "jspm": {
    "directories": {
      "baseURL": "public"
    },
```

##Launch
```bash
node server
```


##Credits 

- Facebook : for this super nice ReactJS which triggered a lot of positive evolution in the javascript world
- Guy Bedford : who gave us system js and jspm [jspm.io](http://jspm.io/)


##License

The MIT License (MIT)

Copyright (c) 2015 Erwan DATIN

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.