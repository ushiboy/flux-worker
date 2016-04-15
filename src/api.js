export function upVoteSync() {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/vote', false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}

export function downVoteSync() {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', '/api/vote', false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}

export function countSync() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/count', false);
  xhr.send();
  return JSON.parse(xhr.responseText);
}
