const name = () => {
    let res = "";
    let vogals = "aeiou";
    let consoants = "bcdfghjklmnpqrstvwxyz";
    for (let i = 0; i < 6; i++) {
      if ((i == 1) | (i == 3) | (i == 5))
        res += vogals[Math.floor(Math.random() * 5)];
      else
        res += consoants[Math.floor(Math.random() * 21)];
    }
    return res;
  };