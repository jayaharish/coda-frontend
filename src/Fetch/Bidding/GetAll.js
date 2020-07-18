function getAll() {
  return new Promise((resolve, reject) => {
    fetch("http://ec2-54-209-57-169.compute-1.amazonaws.com/bidding/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "get",
    })
      .then((result) => {
        console.log("Retrieved", result);
        return result.json();
      })
      .then((result) => resolve(result))
      .catch((err) => reject(err));
  });
}
export default getAll;
