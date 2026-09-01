function checkEndpoint(name, shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) resolve(name + " is up");
      else reject(name + " is down");
    }, 100);
  });
}

async function runChecks() {
  try {
    const allResult = await Promise.all([
      checkEndpoint("A", true),
      checkEndpoint("B", false),
      checkEndpoint("C", true),
    ]);
    console.log("ALL:", allResult);
  } catch (err) {
    console.log("ALL failed:", err);
  }

  const settledResult = await Promise.allSettled([
    checkEndpoint("A", true),
    checkEndpoint("B", false),
    checkEndpoint("C", true),
  ]);
  console.log("SETTLED:", settledResult);

  try {
    const anyResult = await Promise.any([
      checkEndpoint("A", true),
      checkEndpoint("B", false),
      checkEndpoint("C", true),
    ]);
    console.log("ANY:", anyResult);
  } catch (err) {
    console.log("ANY failed:", err);
  }
}

runChecks();

console.log("Independent excercise");

/*Write a function pingRegion(regionName, isHealthy) 
that returns a Promise — resolves with regionName + " reachable" if healthy, 
rejects with regionName + " unreachable" if not.*/

function pingRegion(regionName, isHealthy) {
  return new Promise((resolve, reject) => {
    if (isHealthy) return resolve(regionName + " reachable");
    else return reject(regionName + " unreachable");
  });
}

async function checkAllRegions() {
  try {
    const pingAnyResult = await Promise.any([
      pingRegion("South Asia - Mumbai", false),
      pingRegion("USA-North America", false),
      pingRegion("Europe-Ireland", true),
    ]);
    console.log("Promise.Any result: ", pingAnyResult);
  } catch (err) {
    console.log("Ping failed : " + err);
  }

  try {
    const pingAllResult = await Promise.all([
      pingRegion("South Asia - Mumbai", false),
      pingRegion("USA-North America", false),
      pingRegion("Europe-Ireland", true),
    ]);
    console.log("Promise.All result: ", pingAllResult);
  } catch (err) {
    console.log("Ping failed : " + err);
  }

  const pingAllSettledResult = await Promise.allSettled([
    pingRegion("South Asia - Mumbai", false),
    pingRegion("USA-North America", false),
    pingRegion("Europe-Ireland", true),
  ]);
  console.log("Promise.AllSettled result: ", pingAllSettledResult);
}

checkAllRegions();
