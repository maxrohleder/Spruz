# CI pipeline

- Commit to main branch triggers CI
- Github Actions builds and publishes new image to dockerhub with tag latest
- Github sends webhook notification to specified endpoint
- Update Service listenes on that port for POST request and triggers routine
- routine stops, removes and restarts docker image
