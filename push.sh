#!/bin/bash

git add --all

# Check if there are changes to commit
if git diff --cached --quiet; then
  echo "No changes to commit. Exiting."
else
  # Commit changes
  git commit -m "Add all untracked files"
  
  # Push to the remote repository (assuming the remote is named 'origin' and the branch is 'main')
  git push origin master
fi
