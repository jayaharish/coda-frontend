function getAllProducts() {
  console.log("sending request");
  return new Promise((resolve, reject) => {
    fetch("http://ec2-54-209-57-169.compute-1.amazonaws.com/products", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "get",
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        resolve(result);
      })
      .catch((err) => reject(err));
  });
}
export default getAllProducts;
