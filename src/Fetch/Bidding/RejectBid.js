function rejectBid(id, buyer) {
  return new Promise((resolve, reject) => {
    fetch("http://ec2-54-209-57-169.compute-1.amazonaws.com/bidding/reject", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      method: "post",
      body: JSON.stringify({
        id,
        buyer,
      }),
    })
      .then((result) => {
        console.log("Rejecting bid");
      })
      .catch((err) => reject(err));
  });
}
export default rejectBid;
