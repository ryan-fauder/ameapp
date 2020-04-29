# Git

How to remote add a existing project in Github
First, add select the folder that you wanna add:
In this case, it's a; Thereafter, create a repository in Github site and get the link.

Hence, its need open terminal and:
git remote add origin < URL_GIT >
git push -u origin master

For to discover the linked repository, use:

- git remote -v
- git checkout -b < new_branch > : Create a branch
- git branch : See the existing branchs
- git branch : See the existing branchs
- git checkout/switch < name_branch > : Switch branch
- git log: See all commits, click q to exit;
- git push origin < branch > : Push a existing branch to remote
- git push -u origin < branch >: Sync the remote branch with local branch
- git add < local >: It'll add staged commit, so you'll can commit with only:
- git commit;
- git commit -a: Commit all changes
- git commit < local > : Commit the file or fold
- git merge < branch_name > : Merge a branch
- git pull origin < branch_name >: Sync the local branch with remote branch
- git fetch origin && git reset --hard origin/master && git clean -f -d: Sync only the local branch with remote branch
- git push -u origin :< branch > : Delete a remote branch;
- git branch -d < branch >: Delete a local branch

<https://gist.github.com/ajdruff/16427061a41ca8c08c05992a6c74f59e>
git config --global core.eol lf

## Set autocrlf to false to stop converting between windows style (CRLF) and Unix style (LF)

git config --global core.autocrlf false

## Save your current files in Git, so that none of your work is lost

git add . -u
git commit -m "Saving files before refreshing line endings"

## Rewrite the Git index to pick up all the new line endings

git reset
