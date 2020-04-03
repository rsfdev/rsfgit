async function myDate() {
  try {

    let dateDetails = await date;
    let message     = await orderUber(dateDetails);
    console.log(message);

  } catch(error) {
    console.log(error.message);
  }
}

(async () => { 
  await myDate();
})();