const replaceMongoIdInArray = (array) => {
  const mappedArray = array.map((item) => {
    return {
      id: item._id.toString(),
      ...item
    }
  }).map(({ _id, ...rest }) => rest);
  return mappedArray
}

const replaceMongoIdInObject = (object) => {
  const { _id, ...updatedObject } = { ...object, id: object._id.toString() };
  return updatedObject;

}

export {replaceMongoIdInArray , replaceMongoIdInObject}