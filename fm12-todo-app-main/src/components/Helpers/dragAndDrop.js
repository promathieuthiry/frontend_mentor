export function spliceArray(array, source, destination, element) {
  array.splice(source, 1);
  array.splice(destination, 0, element);
  return array;
}

export function filterElement(arr, source, destination, id, param, newData) {
  const el = arr[source];

  const det = arr[destination];
  const indexDestination = id.indexOf(det.key);

  const indexSource = id.indexOf(param.draggableId);

  return spliceArray(newData, indexSource, indexDestination, el);
}

export function reorder(param, data, setData, caseFilter) {
  const source = param.source.index;
  const destination = param.destination?.index;
  const element = data[source];
  const newData = data.slice();
  const id = newData.map((item) => item.key);

  switch (caseFilter) {
    case 0:
      setData(spliceArray(newData, source, destination, element));
      break;
    case 1:
      const notDoneArray = newData.filter((el) => !el.isDone);
      setData(
        filterElement(notDoneArray, source, destination, id, param, newData)
      );
      break;
    case 2:
      const doneArray = newData.filter((el) => el.isDone);
      setData(
        filterElement(doneArray, source, destination, id, param, newData)
      );

      break;

    default:
      setData(spliceArray(newData, source, destination, element));
      break;
  }
}
