function addBid(amount, id, seller) {
  return new Promise((resolve, reject) => {
    fetch("http://ec2-54-209-57-169.compute-1.amazonaws.com/bidding/add", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "post",
      body: JSON.stringify({
        amount,
        id,
        seller,
      }),
    })
      .then((result) => {
        console.log("Added");
        resolve(result);
      })
      .catch((err) => reject(err));
  });
}
export default addBid;
