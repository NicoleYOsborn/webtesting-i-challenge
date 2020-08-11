module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {

  return { ...item };
}

function fail(item) {

  const newItem = item;

  if (item.enhancement < 15){
    newItem.durability = item.durability - 5;
  } else if (item.enhancement >=15) {
    newItem.durability = item.durability - 10;
  }

  if (item.enhancement > 16){
    newItem.enhancement = item.enhancement - 1;
  }
  return newItem;
}

function repair(item) {
  const newItem = {...item, durability: 100};
  return  newItem ;
}

function get(item) {
  return { ...item };
}
