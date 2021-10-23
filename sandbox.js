

const arrayObjects = [
  { id: 1, count: 2 },
  { id: 12, count: 3 },
  { id: 1, count: 2 },
  { id: 12, count: 3 }
]

const result = { 1: 4, 12: 3 }

function setResult(...params) {
  const { id, count } = params;
  console.log(id);
  console.log(count);
}

console.log(setResult(object));