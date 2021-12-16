### Merge error

When **pushing** new edits to my personal website onto github, I encountered this error message:

```
To github.com:Felicious/felicious.github.io.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'git@github.com:Felicious/felicious.github.io.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

To resolve this, I realized it was bc I used `git init` instead of `git pull` when initializing my repo, and I already made changes to the file, so I have new changes to `index.html` in my local file that differed from the `index.html` from the github repo, so the normal `git pull` didn't work.

Thus, Derrick told me to use

```
git pull --allow-unrelated-histories <ssh to repo>
```

After of which, there are conflicts that github cannot automatically merge, so I have to accept the changes manually. To do this, I went to VSCode editor which asked me to accept the Current or New changes to the file, `index.html`.
After selecting which color-coded change I'd like to keep, I typed the following into git bash:

```
git add index.html
```

Which added the new accepted merge to index.html. Now, I could `commit` and `push` as normal.
