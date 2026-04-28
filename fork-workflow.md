# Open Source Contribution Workflow (Fork & PR)

## Step-by-Step Process (against an upstream you don't own)
1. **Fork & clone**: `gh repo fork OWNER/REPO --clone`
2. **Add upstream remote**: `git remote add upstream https://github.com/OWNER/REPO.git`
3. **Branch**: `git checkout -b feature/my-change`
4. **Code**: Make your changes, write tests
5. **Commit**: `git commit -m "Descriptive message"`
6. **Push**: `git push -u origin feature/my-change`
7. **PR**: `gh pr create --repo OWNER/REPO`
8. **Review**: Address feedback from maintainers
9. **Merge**: Maintainer merges your PR
10. **Sync**: `git fetch upstream && git merge upstream/master`
11. **Clean up**: Delete the feature branch

## Key Commands
```bash
# Fork and clone, then add upstream remote manually
# (--remote is not accepted when you pass a repository argument)
gh repo fork OWNER/REPO --clone
git remote add upstream https://github.com/OWNER/REPO.git

# Sync fork with upstream
git fetch upstream
git merge upstream/master
git push origin master

# Or use gh CLI to sync the default branch of your fork
gh repo sync OWNER/FORK --source OWNER/REPO
```

## Key Exam Points
- Forking creates a personal copy of a repository under your account
- A single user account cannot own both a repository and a fork of it — fork repos owned by other accounts or organizations
- PRs from forks go to the upstream (original) repository
- Always create feature branches — never commit directly to master
- Keep your fork synced with upstream to avoid merge conflicts
- `gh repo fork --clone` sets up `origin` to point to your fork; you add `upstream` manually
