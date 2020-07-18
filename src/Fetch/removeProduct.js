function removeProduct(id) {
  return new Promise((resolve, reject) => {
    fetch("http://ec2-54-209-57-169.compute-1.amazonaws.com/removeproduct", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "post",
      body: JSON.stringify({
        id,
      }),
    })
      .then((result) => {
        console.log("removed product");
        resolve(result);
      })
      .catch((err) => reject(err));
  });
}
export default removeProduct;
