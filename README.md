[![Build Status](https://travis-ci.org/protacon/generator-kubernetes-ci.svg?branch=master)](https://travis-ci.org/protacon/generator-kubernetes-ci)

# generator-kubernetes-ci
1. Create repository to phabricator.
2. Clone repository.
3. Install yeoman `npm install -g yo`
3. Install this generator `npm install -g @protacon/generator-kubernetes-ci`
4. Run in new repository `yo @protacon/kubernetes-ci`
5. Commit and push changes, now CI pipeline builds project, publishes containers and deploy k8s files. After CI is complete you can navigate `https://project-name-branch.protacon.cloud`. Project name is asked after you run yo.
