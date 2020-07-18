function checkuser(email, password) {
  console.log(email, password);
  return new Promise((resolve, reject) => {
    fetch("https://ec2-54-209-57-169.compute-1.amazonaws.com/signin", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
      method: "post",
    })
      .then((result) => {
        if (result.status === 200) resolve(true);
        else resolve(false);
      })
      .catch((err) => reject(err));
  });
}
export default checkuser;
