function play(userChoice) {
  const choices = ['taş', 'kağıt', 'makas'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('userChoice').textContent = `Senin seçimin: ${userChoice}`;
  document.getElementById('computerChoice').textContent = `Bilgisayarın seçimi: ${computerChoice}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = "Berabere!";
  } else if (
    (userChoice === 'taş' && computerChoice === 'makas') ||
    (userChoice === 'kağıt' && computerChoice === 'taş') ||
    (userChoice === 'makas' && computerChoice === 'kağıt')
  ) {
    result = "Kazandın! 🎉";
  } else {
    result = "Kaybettin! 😢";
  }

  document.getElementById('gameResult').textContent = result;
}
