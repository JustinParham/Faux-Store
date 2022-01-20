export default async function getAPICall(url) {
  return fetch(url)
    .then(res => res.json())
    .then(json => json);
}
