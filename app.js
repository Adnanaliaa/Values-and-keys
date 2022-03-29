  let a = [
      {
        id: 1810,
        name: "Adnan Ali",
        category: 'a',
      },
      {
        id: 1811,
        name: "Muhammad Ali",
        category: 'a',
      },
      {
        id: 1812,
        name: "Shariq Ahmed",
        category: 'b',
      },
      {
        id: 1813,
        name: "Arsalan Ahmed",
        category: 'a',
      },
      {
        id: 1814,
        name: "Sheeraz Khan",
        category: 'a',
      },
      {
        id: 1815,
        name: "Usama Khan",
        category: 'b',
      }
  ]

  let keys = [];
  let values = [];

  a.forEach(function(element,nd){
    keys = [...keys,...Object.keys(element)]
    values = [...values,...Object.values(element)]
    }
  );
  console.log(keys,values,)