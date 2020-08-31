const BASE_DB_URL = "https://ramblenride.github.io/motorcycle-service-db";
export async function fetchMotorcycle(name, myFetch = fetch) {
  const res = await myFetch(`${BASE_DB_URL}/${name}`);
  if (res.status === 200) {
    const data = await res.json();
    const moto = Object.values(data.motorcycles)[0];
    moto.tasks.sort((a, b) => a.name.localeCompare(b.name));
    return moto;
  } else {
    throw new Error(`${res.status} - ${res.statusText}`);
  }
}

export async function fetchMotoList(myFetch = fetch) {
  const res = await myFetch(`${BASE_DB_URL}/motorcycle-service-index.json`);
  if (res.status === 200) {
    return res.json().then((data) => {
      const names = Array.from(Object.keys(data)).sort();
      return names.map((name) => {
        return {
          ...data[name],
          name: name,
        };
      });
    });
  } else {
    throw new Error(`${res.status} - ${res.statusText}`);
  }
}
