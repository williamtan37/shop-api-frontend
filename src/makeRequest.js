export default async function makeRequest(path) {
  const response = await fetch(path);
  const myJson = await response.json();

  return myJson;
}
