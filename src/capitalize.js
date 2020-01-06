const capitalize = str => {
  const reg = /^[a-z]+/i;
  if (reg.test(str)) return str.replace(str[0], str[0].toUpperCase());
  return 'not a valid word';
};

export default capitalize;
