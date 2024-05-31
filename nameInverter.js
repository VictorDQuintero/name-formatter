const nameInverter = function (name) {
  if (name === "") {
    return "";
  }

  if (name === undefined) {
    return "throw 'Error'";
  }

  const regex = /\s/;
  const honoRegex = /\./;

  if (regex.test(name)) {
    const nameArr = name.split(regex);
    let newNameArr = [];

    for (const element of nameArr) {
      if (element !== "") {
        newNameArr.push(element);
      }
    }

    if (newNameArr.length === 1) {
      if (honoRegex.test(newNameArr.join(""))) {
        return "";
      }

      name = newNameArr.join("");
      return name;
    }

    if (newNameArr.length === 2) {
      if (honoRegex.test(newNameArr.join(""))) {
        const honorific = newNameArr[0];
        const firstName = newNameArr[1];
        name = honorific + " " + firstName;
        return name;
      }

      const firstName = newNameArr[0];
      const lastName = newNameArr[1];
      name = lastName + ", " + firstName;

      return name;
    }

    if (newNameArr.length === 3 && honoRegex.test(newNameArr.join(""))) {
      const honorific = newNameArr[0];
      const firstName = newNameArr[1];
      const lastName = newNameArr[2];
      name = honorific + " " + lastName + ", " + firstName;
      return name;
    }
  }

  return name;
};

module.exports = nameInverter;
