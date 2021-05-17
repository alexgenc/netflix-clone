# netflix-clone
This project is mimicking the famous [Netflix](https://www.netflix.com/) web application with no intent of realeasing or advertising the use of the content in this repo. It's simply a demo app!

## Introduction

This application was built with the purpose of using some technologies I have not used before, including fireabase/firestore and firebase/auth. It was also the first time I used compound components pattern on an app of this size!

Live Demo: https://condemned-experience.surge.sh/

![Browse Page](https://i.postimg.cc/j5mdj77F/Capture.jpg)

## Features
- Sign Up
- Sign In
- Default Netflix Home Page (for non-logged in users)
- Browse Page (for logged in users)
- Search

## Codebase

### Technologies

Here is a list of technologies used:

- React: Front-end framework
- Styled-Components: CSS framework
- Firebase: Cloud database/auth provider
- Fuse.js: Search Library

### Folder structure

```sh
netflix-clone/
├── components  
├── constants 
├── containers
├── context        
├── fixtures  
├── helpers
├── hooks        
├── lib               
├── pages   
├── utils
```

### Testing
All tests can be found in `__tests__` folder. 
- Testing Coverage: 92%
