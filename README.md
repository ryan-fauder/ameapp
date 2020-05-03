# Ameapp

Please, use the command `yarn commit` to create a git commit! It'll create a formatted commit, so, you do need only push the commit!+

## Git

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

## Example CRUD

```js
const ProjectModel = require('../models/project');
const TaskModel = require('../models/task');

const Project = ProjectModel.model('Project');
const Task = TaskModel.model('Task');
module.exports = {
  async create(req, res){
    try {
      const {tasks, ...projectInfo} = req.body;
      const user = req.userId;
      const project_table = new Project({...projectInfo, user});
      await Promise.all(tasks.map(async task =>{
        const project = project_table._id;  
        const task_table = await Task.create({...task, project});
        project_table.tasks.push(task_table);
      }));
      await project_table.save();
      return res.send(project_table);
    } catch(err) {
      console.log(err);
      res.status(400).send({error:"Error on creating a project"});
    }
  },
  async tasks(req, res){
    try {
      const project = await Project.findById(req.params.projectId).populate('tasks');
      return res.send(project.tasks);
    } catch (err) {
      console.log(err);
      res.status(400).send({error:"Error on indexing tasks of the  project"});
    }
  },
  async update(req, res){
    try {
      const {tasks, ...projectInfo} = req.body;
      const user = req.userId;
      const project_table = await Project.findByIdAndUpdate(req.params.projectId, projectInfo, {new: true, useFindAndModify: false} );
      project_table.tasks = [];
      await Task.remove({project:project_table._id});
      await Promise.all(tasks.map(async task =>{
        const project = project_table._id;  
        const task_table = await Task.create({...task, project});
        project_table.tasks.push(task_table);
      }));
      await project_table.save();
      return res.send(project_table);
    } catch(err) {
      console.log(err);
      res.status(400).send({error:"Error on updating a project"});
    }
  },
  async delete(req, res){
    try {
      await Project.findOneAndRemove({id:req.params.projectId, user: req.userId});
      res.status(200).send();
    } catch {
      res.status(400).send({error:"Error on deleting a project"});
    }
  },
  async show(req, res){
    try {
      const project = await Project.findById(req.params.projectId);
      res.send(project);
    } catch {
      res.status(400).send({error:"Error on showing a project"});
    }
  },
  async index(req, res){
    try {
      const projects = await Project.find({user:req.userId});
      res.send(projects);
    } catch {
      res.status(400).send({error:"Error on indexing projects"});
    }
  },
}
```

## Route Project Controller

```js
const express = require('express');
const router = express.Router();
const controller = require('../app/controllers/projectController');
 // const authMiddleware = require('../app/middleware/auth');
 // router.use(authMiddleware);
router.put('/:projectId', controller.update);
router.get('/:projectId', controller.show);
router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:projectId', controller.delete);
router.get('/:projectId/tasks', controller.tasks);
module.exports = app => app.use('/project', router);
```

<https://thoughtbot.com/blog/structure-for-styling-in-react-native>
