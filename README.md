Description: Project Flightz is a web application designed for travel planners.

## Key Features:
* Blogging
* Product pages for selling iteneraries and other platforms
* Gallery for posting pictures
* Review Section
* User Trip Management

## Git Instructions

### To clone the repo (you should only need to do once)

```
git clone https://github.com/jmonger/flightz.git
```

### To create a new branch 

```
git checkout -b branch-name
```
### To commit your branch changes

```
git add .
git commit
...Enter a brief commit description of your change
git push branch-name
```

### To put your changes into master branch

```
git checkout your-branch
git rebase master
... resolve any conflicts
git checkout master
git rebase your-branch
git push origin master
```


