function getUser(id, callback) {
  if (!id) {
    callback("no id provided", null);
    return;
  }
  callback(null, { id: id, name: "Renuka" });
}

getUser(null, function (err, user) {
  if (err) {
    console.log("failed:", err);
    return;
  }
  console.log(user);
});
