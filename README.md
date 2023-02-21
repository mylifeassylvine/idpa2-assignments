# DEV5 Assignments (IDPA2)

Repository for assignments made during DEV5.

## How to use this repo?

We'll be using pull requests to sync assignments with this repo. The workflow is as follows.

#### Fork this repo

![image](https://user-images.githubusercontent.com/87504322/220405663-10c9cab9-7452-4701-a0c2-7b5854b456aa.png)

You now have a 'copy' of this repo on your GitHub account.

#### Clone your fork

You can find your repo's URL by clicking on the green button named "Code".

```
git clone https://path/to/your/repo
```

#### Start working/editing

Always create a new branch for a new assignment.


```
git checkout -b newassignment
```

Commit early, commit often!

```
# Add untracked files
git add .

# Commit tracked changes
git commit -m "Commit message"
```

#### Push to remote

When satified with your work, push your (local) code to your repository.

```
git push
```

Git will probably throw an error, stating that your new branch doesn't exist yet remotely. The solution is offered by Git:

```
git push --set-upstream origin newassignment
```

#### Create pull request

Now that your repo (which is still a fork of this repo) is synced, it's time to create a pull request for me (this repo) to accept or deny.

![image](https://user-images.githubusercontent.com/87504322/220408938-e0dfbc8f-523b-47c0-839d-9b052bfaeffb.png)

Be descriptive, so it's clear to me what/which assignment I'm merging into the main branch.

## Extra references

DigitalOcean has a [good guide](https://www.digitalocean.com/community/tutorials/how-to-create-a-pull-request-on-github), which also digs a little deeper into keeping your fork up-to-date with this repo.
