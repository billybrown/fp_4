Free Press Actionkit Repo
===

This is the repo of all the front end files for the fp_4 actionkit template.</p>

###Workflow
Whenever it is time to make a change to any of these files, these are the steps you should take. This all assumes you've already cloned this repo to your local computer, and git and everything is working correctly.
- do a 'git pull' and bring down any changes someone else has made to the repo
- Make you changes and do all your testing locally (via browserstack, etc.)
- add, commit and push your changes back up to this repo
- deploy the site via dandelion with: 'dandelion deploy'
- if the styles aren't live, it's most likely a permissions thing. I've been having to FTP into the files and manually change the permissions after every deployment. This is SUPER anoying. This stack overflow question seems to have the answer, but I'm not sure how to implement what they suggest: http://stackoverflow.com/questions/7420209/amazon-s3-permission-problem-how-to-set-permissions-for-all-files-at-once

Read more about dandelion here: http://awpny.com/git-deployment-with-dandelion/

Check out the pattern library here: http://s3.amazonaws.com/s3.freepress.net/template-set-assets/fp_4/styleguide.html