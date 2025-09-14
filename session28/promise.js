function getDataFromAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("thanh cong 1");
      resolve();
    }, 1000);
  });
}
function getDataFromAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("thanh cong 2");
      resolve();
    }, 1000);
  });
}
function getDataFromAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("thanh cong 3");
      resolve();
    }, 1000);
  });
}
function runAll() {
  getDataFromAPI1()
    .then(() => {
      getDataFromAPI2();
    })
    .then(() => {
      getDataFromAPI3();
    })
    .catch((error) => {
      console.log("loi:", error);
    });
}
runAll();
