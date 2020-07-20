const description = {
  demand: true,
  alias: "d",
  desc: "Description of the task",
};

const completed = {
  alias: "c",
  default: true,
  desc: "Mark as completed or pending",
};

const argv = require("yargs")
  .command("create", "Create a todo task", description)
  .command("update", "Update a todo task", {
    description,
    completed,
  })
  .command("delete", "Delete a todo task", description)
  .help().argv;

module.exports = {
  argv,
};
