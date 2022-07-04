const db = require("../models");
const Tutorial = db.tutorials;
const Comment = db.comments;

exports.createTutorial = (tutorial) => {
    return Tutorial.create({
      title: tutorial.title,
      description: tutorial.description,
    })
    .then((tutorial) => {
        console.log(">> Created tutorial: " + JSON.stringify(tutorial, null, 4));
        return tutorial;
    })
    .catch((err) => {
        console.log(">> Error while creating tutorial: ", err);
    });
};

exports.createComment = (tutorialId, comment) => {
    return Comment.create({
      name: comment.name,
      text: comment.text,
      tutorialId: tutorialId,
    })
    .then((comment) => {
        console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
        return comment;
    })
    .catch((err) => {
        console.log(">> Error while creating comment: ", err);
    });
};