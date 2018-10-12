const request = require("request");

// const bfields2 = "idBoards"
//NOTE: Used to access member information
// request(`https://api.trello.com/1/members/danieldeltalabs?fields=${bfields2}&key=${api}&token=${token}`, { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log("*****************This is the Boards Section*********************")
//   console.log(body);
// });

function runBoard() {
  const bfields = "name";
  //projects "5a09fb675e9f0abca157711f"
  const boardId = "5a09fb675e9f0abca157711f";
  request(
    `https://api.trello.com/1/boards/${boardId}/lists?fields=${bfields}&key=${api}&token=${token}`,
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      console.log(
        "*****************This is the Boards Section*********************"
      );
      console.log(body);
    }
  );
}

function runLabels() {
  const lfields = "name,due,labels";

  request(
    // `https://api.trello.com/1/lists/5a09fb675e9f0abca1577121/cards?fields=${lfields}&key=${api}&token=${token}`,
    `https://api.trello.com/1/lists/5a09fb675e9f0abca1577121?key=${api}&token=${token}`,
    { json: true },
    (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      console.log(
        "*****************This is the lists Section*********************"
      );
      console.log(body);
      // console.log(body[0].labels[0].name);
    }
  );
}

// const cfields = "name,idBoard"

// request(`https://api.trello.com/1/boards/5a09fb675e9f0abca157711f/cards?fields=${cfields}&key=${api}&token=${token}`, { json: true }, (err, res, body) => {
//   if (err) { return console.log(err); }
//   console.log("*****************This is the Card Section*********************")
//   console.log(body);
// });

function saveCard() {
  const options = {
    method: "POST",
    url: `https://api.trello.com/1/cards?key=${api}&token=${token}`,
    qs: {
      name: "Draft Change Control - Pharmix change QA scanning",
      pos: "top",
      due: "2018-10-31",
      idList: "5a09fb675e9f0abca1577121",
      idLabels: "5a09fb679ae3d60b0cbdf472",
      keepFromSource: "all"
    }
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

function deleteCard() {
  const id = "5bc018c1b4b32f54c6c40b59";
  const options = {
    method: "DELETE",
    url: `https://api.trello.com/1/cards/${id}?key=${api}&token=${token}`
  };

  request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
}

// saveCard();
// runLabels();
deleteCard();
