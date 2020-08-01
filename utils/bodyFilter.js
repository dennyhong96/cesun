module.exports = (reqBody, ...fieldsToInclude) => {
  const filteredBody = {};
  console.log(reqBody);
  fieldsToInclude.forEach((field) => {
    if (reqBody[field]) filteredBody[field] = reqBody[field];
  });
  console.log(filteredBody);
  return filteredBody;
};
