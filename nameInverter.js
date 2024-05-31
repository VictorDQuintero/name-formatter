const nameInverter = function (name) {
  if (name === "") {
    return "";
  }

  const regex = /\s/;
  if (regex.test(name)) {
    const nameArr = name.split(regex);
    let newNameArr = [];
    for (const element of nameArr) {
      if (element !== "") {
        newNameArr.push(element);
      }
    }

    if (newNameArr.length === 1) {
      name = newNameArr.join("");
      return name;
    }
    if (newNameArr.length === 2) {
      const firstName = newNameArr[0];
      const lastName = newNameArr[1];
      name = lastName + ", " + firstName;

      return name;
    }
  }

  return name;
};

module.exports = nameInverter;
