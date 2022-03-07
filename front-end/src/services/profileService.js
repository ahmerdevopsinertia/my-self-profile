const webApiDomain = "http://localhost";
const webApiBaseUrl = "/api/v1";
const webApiPort = "5002";

export function getProfile() {
  return fetch(`${webApiDomain}:${webApiPort}${webApiBaseUrl}/profile`).then((data) =>
    data.json()
  );
}

export function getExperience() {
  return fetch(`${webApiDomain}:${webApiPort}${webApiBaseUrl}/experience`).then((data) =>
    data.json()
  );
}
