function addBalance(amount) {
  return new Promise((resolve, reject) => {
    fetch("http://ec2-54-209-57-169.compute-1.amazonaws.com/balance/add", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "post",
      body: JSON.stringify({ amount }),
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log("Adding balance");
        resolve(result);
      })
      .catch((err) => reject(err));
  });
}
export default addBalance;
