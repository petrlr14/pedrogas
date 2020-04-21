const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/petrlr14/pedrogas.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
