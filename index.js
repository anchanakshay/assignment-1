const message = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Good morning...");
      }, 1000);
    });
  };
  
  message()
    .then((message) => console.log(message))
    .catch((err) => console.log(err));
  